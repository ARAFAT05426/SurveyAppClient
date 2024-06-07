import { useQuery } from '@tanstack/react-query';
import UserDataRow from './UserDataRow';
import { Helmet } from 'react-helmet-async';
import Loader from '../../../../COMPONENTS/LOADER/Loader';
import useAxiosSecure from '../../../../HOOKS/useAxiosSecure';

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], isLoading, refetch, error } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      try {
        const { data } = await axiosSecure.get('/user');
        return data;
      } catch (error) {
        throw new Error('Failed to fetch users');
      }
    },
  });
  if (isLoading) return <Loader />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className='container mx-auto px-4 sm:px-8'>
        <Helmet>
          <title>Manage Users</title>
        </Helmet>
        <div className='py-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='shadow rounded-lg overflow-x-auto'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th className='px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                      Email
                    </th>
                    <th className='px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                      Role
                    </th>
                    <th className='px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                      Joined
                    </th>
                    <th className='px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                      Status
                    </th>
                    <th className='px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <UserDataRow key={user?._id} user={user} refetch={refetch} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageUsers;
