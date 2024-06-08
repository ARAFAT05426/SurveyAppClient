import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./CheckoutForm.css";
import { ImSpinner9 } from "react-icons/im";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import useAuth from "../../../HOOKS/useAuth";
import useAxiosSecure from "../../../HOOKS/useAxiosSecure";
import { useMutation, useQueryClient } from "@tanstack/react-query";
const CheckoutForm = ({ closeModal, price, nrole }) => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [clientSecret, setClientSecret] = useState("");
  const [cardError, setCardError] = useState("");
  const [processing, setProcessing] = useState(false);
  useEffect(() => {
    if (price && price > 1) {
      getClientSecret({ price: price });
    }
  }, [price]);
  const queryClient = useQueryClient();
  const getClientSecret = async (price) => {
    try {
      const { data } = await axiosSecure.post("/create-payment-intent", price);
      setClientSecret(data.clientSecret);
    } catch (error) {
      console.error("Error fetching client secret:", error);
    }
  };
  const { mutateAsync } = useMutation({
    mutationFn: async (role) => {
      const { data } = await axiosSecure.patch(`/users/update/${user?.email}`, role);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries("users")
      toast.success('User role updated successfully!');
      closeModal(false);
    },
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
      setProcessing(false);
      return;
    } else {
      setCardError("");
    }

    const { error: confirmError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName,
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError.message);
      setProcessing(false);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      const role = nrole.toLowerCase();
      const payment = {
        role: role,
        amount: paymentIntent.amount/100,
        currency: paymentIntent.currency,
        time: Date.now()
      }
      const newData = {
        role,
        payment,
      }
      await mutateAsync(newData)
    }

    setProcessing(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
          {cardError && <p className="text-red-600 text-xs text-center">{cardError}</p>}
        <div className="flex mt-2 justify-around">
          <button
            disabled={!stripe || !clientSecret || processing}
            type="submit"
            className="inline-flex justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium"
          >
            {processing ? (
              <ImSpinner9 className="animate-spin m-auto" size={24} />
            ) : (
              `Pay ${price}`
            )}
          </button>
        </div>
      </form>
    </>
  );
};

CheckoutForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
  price: PropTypes.any,
  nrole: PropTypes.any,
};

export default CheckoutForm;
