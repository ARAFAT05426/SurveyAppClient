import PropTypes from 'prop-types';
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { Fragment } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const SubscriptionModal = ({ closeModal, isOpen, role, price }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={() => closeModal(false)}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <DialogPanel className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="bg-white rounded-lg p-8 w-full max-w-md">
                <div className="flex justify-end">
                  <RiCloseCircleLine
                    className="p-[2px] cursor-pointer text-gray-600 hover:text-gray-800"
                    onClick={() => closeModal(false)}
                    size={35}
                  />
                </div>
                <DialogTitle className="text-lg font-medium text-center leading-6 text-gray-900">
                  Please Enter Valid Card Information To Become a {role}
                </DialogTitle>
                <div className="mt-4">
                  <p className="text-sm text-center text-gray-500">Choose the best plan that suits your needs.</p>
                </div>
                <div className="mt-6">
                  <Elements stripe={stripePromise}>
                    <CheckoutForm closeModal={closeModal} nrole={role} price={price} />
                  </Elements>
                </div>
              </div>
            </TransitionChild>
          </DialogPanel>
        </TransitionChild>
      </Dialog>
    </Transition>
  );
};

SubscriptionModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  role: PropTypes.any,
  price: PropTypes.any,
};

export default SubscriptionModal;
