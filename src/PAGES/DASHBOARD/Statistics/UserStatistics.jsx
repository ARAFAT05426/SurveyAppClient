import { FaUser, FaDollarSign, FaUserShield } from 'react-icons/fa';
import { BiTimeFive } from 'react-icons/bi';
import { useQuery } from '@tanstack/react-query';
import { formatDistanceToNow } from 'date-fns';
import useAxiosSecure from '../../../HOOKS/useAxiosSecure';
import Loader from '../../../COMPONENTS/LOADER/Loader';
import useAuth from '../../../HOOKS/useAuth';

const UserStatistics = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: statData = {}, isLoading } = useQuery({
    queryKey: ['userStatData'],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/user/${user?.email}`);
      return data;
    },
  });

  if (isLoading) return <Loader />;
  console.log(statData);
  // Extracting user data
  const email = statData.email;
  const name = statData.name;
  const role = statData.role;
  const accountAge = statData.timestamp
    ? formatDistanceToNow(new Date(parseFloat(statData.timestamp)))
    : 'N/A';

  // Extracting payment details
  const paymentRole = statData.payment?.role || 'N/A';
  const paymentAmount = statData.payment?.amount?.$numberDouble || '0';
  const paymentCurrency = statData.payment?.currency || 'usd';

  return (
    <div className='container mx-auto p-6'>
      {/* Cards */}
      <div className='mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {/* User Info Card */}
        <div className='relative flex flex-col rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 text-white shadow-lg'>
          <div className='mx-4 rounded-xl bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-blue-600 to-blue-400'>
            <FaUser className='w-6 h-6 text-white' />
          </div>
          <div className='p-4 text-right'>
            <p className='block text-sm font-normal text-gray-200'>
              Name
            </p>
            <h4 className='block text-2xl font-semibold'>
              {name}
            </h4>
          </div>
        </div>

        {/* Email Info Card */}
        <div className='relative flex flex-col rounded-xl bg-gradient-to-br from-green-600 to-green-400 text-white shadow-lg'>
          <div className='mx-4 rounded-xl bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-green-600 to-green-400'>
            <FaUserShield className='w-6 h-6 text-white' />
          </div>
          <div className='p-4 text-right'>
            <p className='block text-sm font-normal text-gray-200'>
              Email
            </p>
            <h4 className='block text-2xl font-semibold'>
              {email}
            </h4>
          </div>
        </div>

        {/* Role Info Card */}
        <div className='relative flex flex-col rounded-xl bg-gradient-to-br from-purple-600 to-purple-400 text-white shadow-lg'>
          <div className='mx-4 rounded-xl bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-purple-600 to-purple-400'>
            <FaUserShield className='w-6 h-6 text-white' />
          </div>
          <div className='p-4 text-right'>
            <p className='block text-sm font-normal text-gray-200'>
              Role
            </p>
            <h4 className='block text-2xl font-semibold'>
              {role}
            </h4>
          </div>
        </div>

        {/* Account Age Card */}
        <div className='relative flex flex-col rounded-xl bg-gradient-to-br from-orange-600 to-orange-400 text-white shadow-lg'>
          <div className='mx-4 rounded-xl bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-orange-600 to-orange-400'>
            <BiTimeFive className='w-6 h-6 text-white' />
          </div>
          <div className='p-4 text-right'>
            <p className='block text-sm font-normal text-gray-200'>
              Account Age
            </p>
            <h4 className='block text-2xl font-semibold'>
              {accountAge}
            </h4>
          </div>
        </div>

        {/* Payment Details Card */}
        <div className='relative flex flex-col rounded-xl bg-gradient-to-br from-red-600 to-red-400 text-white shadow-lg'>
          <div className='mx-4 rounded-xl bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-red-600 to-red-400'>
            <FaDollarSign className='w-6 h-6 text-white' />
          </div>
          <div className='p-4 text-right'>
            <p className='block text-sm font-normal text-gray-200'>
              Payment
            </p>
            <h4 className='block text-2xl font-semibold'>
              {paymentCurrency.toUpperCase()} ${paymentAmount}
            </h4>
            <p className='block text-sm font-normal text-gray-200 mt-2'>
              Role: {paymentRole}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserStatistics;
