import { FaUser, FaUserShield, FaVoteYea } from 'react-icons/fa';
import { BiTimeFive } from 'react-icons/bi';
import { useQuery } from '@tanstack/react-query';
import { formatDistanceToNow } from 'date-fns';
import useAxiosSecure from '../../../HOOKS/useAxiosSecure';
import Loader from '../../../COMPONENTS/LOADER/Loader';
import useAuth from '../../../HOOKS/useAuth';

const UserStatistics = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  // Fetch user statistics from the backend
  const { data: statData = {}, isLoading } = useQuery({
    queryKey: ['userStatData', user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/userStat/${user?.email}`);
      return data;
    },
  });

  if (isLoading) return <Loader />;

  // Extracting user data
  const email = statData.accountDetails?.email || 'N/A';
  const name = statData.accountDetails?.name || 'N/A';
  const role = statData.accountDetails?.role || 'N/A';
  const accountAge = statData.accountDetails?.timestamp
    ? formatDistanceToNow(new Date(parseFloat(statData.accountDetails.timestamp)))
    : 'N/A';
  const votedCount = statData.voted || 0;

  return (
    <div className="container mx-auto p-6">
      {/* Cards */}
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* User Info Card */}
        <div className="relative flex flex-col rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 text-white shadow-lg">
          <div className="mx-4 rounded-xl bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-blue-600 to-blue-400">
            <FaUser className="w-6 h-6 text-white" />
          </div>
          <div className="p-4 text-right">
            <p className="block text-sm font-normal text-gray-200">
              Name
            </p>
            <h4 className="block text-2xl font-semibold">
              {name}
            </h4>
          </div>
        </div>

        {/* Email Info Card */}
        <div className="relative flex flex-col rounded-xl bg-gradient-to-br from-green-600 to-green-400 text-white shadow-lg">
          <div className="mx-4 rounded-xl bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-green-600 to-green-400">
            <FaUserShield className="w-6 h-6 text-white" />
          </div>
          <div className="p-4 text-right">
            <p className="block text-sm font-normal text-gray-200">
              Email
            </p>
            <h4 className="block text-2xl font-semibold">
              {email}
            </h4>
          </div>
        </div>

        {/* Role Info Card */}
        <div className="relative flex flex-col rounded-xl bg-gradient-to-br from-purple-600 to-purple-400 text-white shadow-lg">
          <div className="mx-4 rounded-xl bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-purple-600 to-purple-400">
            <FaUserShield className="w-6 h-6 text-white" />
          </div>
          <div className="p-4 text-right">
            <p className="block text-sm font-normal text-gray-200">
              Role
            </p>
            <h4 className="block text-2xl font-semibold">
              {role}
            </h4>
          </div>
        </div>

        {/* Account Age Card */}
        <div className="relative flex flex-col rounded-xl bg-gradient-to-br from-orange-600 to-orange-400 text-white shadow-lg">
          <div className="mx-4 rounded-xl bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-orange-600 to-orange-400">
            <BiTimeFive className="w-6 h-6 text-white" />
          </div>
          <div className="p-4 text-right">
            <p className="block text-sm font-normal text-gray-200">
              Account Age
            </p>
            <h4 className="block text-2xl font-semibold">
              {accountAge}
            </h4>
          </div>
        </div>

        {/* Votes Count Card */}
        <div className="relative flex flex-col rounded-xl bg-gradient-to-br from-red-600 to-red-400 text-white shadow-lg">
          <div className="mx-4 rounded-xl bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-red-600 to-red-400">
            <FaVoteYea className="w-6 h-6 text-white" />
          </div>
          <div className="p-4 text-right">
            <p className="block text-sm font-normal text-gray-200">
              Voted Surveys
            </p>
            <h4 className="block text-2xl font-semibold">
              {votedCount}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserStatistics;
