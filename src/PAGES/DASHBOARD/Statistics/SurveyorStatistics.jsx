import { FaUser, FaDollarSign, FaFileAlt } from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";
import { useQuery } from "@tanstack/react-query";
import { formatDistanceToNow } from "date-fns";
import useAxiosSecure from "../../../HOOKS/useAxiosSecure";
import Loader from "../../../COMPONENTS/LOADER/Loader";
import useAuth from "../../../HOOKS/useAuth";

const SurveyorStatistics = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const {
    data: statData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["surveyStat", user?.email],
    queryFn: async () => {
      const response = await axiosSecure.get(`/surveyStat/${user?.email}`);
      return response.data;
    },
    enabled: !!user?.email,
  });

  if (isLoading) return <Loader />;
  if (error) return <p className="text-red-500">Error fetching survey statistics</p>;
  if (!statData) return <p className="text-gray-500">No data available</p>;

  const { surveyAdded, accountDetails } = statData;

  // Extracting user data
  const name = accountDetails.name || "N/A";
  const email = accountDetails.email || "N/A";
  const role = accountDetails.role || "N/A";
  const accountAge = accountDetails.timestamp
    ? formatDistanceToNow(new Date(parseFloat(accountDetails.timestamp)))
    : "N/A";

  // Extracting payment details
  const paymentAmount = accountDetails.payment?.amount || "0";
  const paymentCurrency = accountDetails.payment?.currency || "usd";
  const paymentDate = accountDetails.payment?.time
    ? formatDistanceToNow(new Date(parseFloat(accountDetails.payment.time)))
    : "N/A";

  return (
    <div className="container mx-auto p-6">
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* Surveyor Name Card */}
        <div className="relative flex flex-col rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg p-6">
          <div className="absolute top-0 right-0 transform translate-x-6 -translate-y-6 bg-gradient-to-tr rounded-full w-12 h-12 flex items-center justify-center from-blue-500 to-blue-700 shadow-lg">
            <FaUser className="w-6 h-6" />
          </div>
          <p className="text-sm font-normal text-gray-200">Name</p>
          <h4 className="text-2xl font-semibold">{name}</h4>
        </div>

        {/* Surveyor Email Card */}
        <div className="relative flex flex-col rounded-xl bg-gradient-to-br from-green-500 to-green-700 text-white shadow-lg p-6">
          <div className="absolute top-0 right-0 transform translate-x-6 -translate-y-6 bg-gradient-to-tr rounded-full w-12 h-12 flex items-center justify-center from-green-500 to-green-700 shadow-lg">
            <FaUser className="w-6 h-6" />
          </div>
          <p className="text-sm font-normal text-gray-200">Email</p>
          <h4 className="text-2xl font-semibold">{email}</h4>
        </div>

        {/* Surveyor Role Card */}
        <div className="relative flex flex-col rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 text-white shadow-lg p-6">
          <div className="absolute top-0 right-0 transform translate-x-6 -translate-y-6 bg-gradient-to-tr rounded-full w-12 h-12 flex items-center justify-center from-purple-500 to-purple-700 shadow-lg">
            <FaUser className="w-6 h-6" />
          </div>
          <p className="text-sm font-normal text-gray-200">Role</p>
          <h4 className="text-2xl font-semibold">{role}</h4>
        </div>

        {/* Account Age Card */}
        <div className="relative flex flex-col rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-700 text-white shadow-lg p-6">
          <div className="absolute top-0 right-0 transform translate-x-6 -translate-y-6 bg-gradient-to-tr rounded-full w-12 h-12 flex items-center justify-center from-yellow-500 to-yellow-700 shadow-lg">
            <BsClockHistory className="w-6 h-6" />
          </div>
          <p className="text-sm font-normal text-gray-200">Account Age</p>
          <h4 className="text-2xl font-semibold">{accountAge}</h4>
        </div>

        {/* Last Payment Amount Card */}
        <div className="relative flex flex-col rounded-xl bg-gradient-to-br from-red-500 to-red-700 text-white shadow-lg p-6">
          <div className="absolute top-0 right-0 transform translate-x-6 -translate-y-6 bg-gradient-to-tr rounded-full w-12 h-12 flex items-center justify-center from-red-500 to-red-700 shadow-lg">
            <FaDollarSign className="w-6 h-6" />
          </div>
          <p className="text-sm font-normal text-gray-200">Last Payment</p>
          <h4 className="text-2xl font-semibold">
            {paymentCurrency.toUpperCase()} ${paymentAmount}
          </h4>
          <p className="text-sm font-normal text-gray-200 mt-2">
            Paid: {paymentDate}
          </p>
        </div>

        {/* Added Surveys Count Card */}
        <div className="relative flex flex-col rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 text-white shadow-lg p-6">
          <div className="absolute top-0 right-0 transform translate-x-6 -translate-y-6 bg-gradient-to-tr rounded-full w-12 h-12 flex items-center justify-center from-teal-500 to-teal-700 shadow-lg">
            <FaFileAlt className="w-6 h-6" />
          </div>
          <p className="text-sm font-normal text-gray-200">Surveys Added</p>
          <h4 className="text-2xl font-semibold">{surveyAdded}</h4>
        </div>
      </div>
    </div>
  );
};

export default SurveyorStatistics;
