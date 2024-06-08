import PropTypes from 'prop-types';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import useAuth from '../../../../HOOKS/useAuth';
import useAxiosSecure from '../../../../HOOKS/useAxiosSecure';
import UpdateUserModal from '../../../../COMPONENTS/MODAL/UpdateUserModal';

const UserDataRow = ({ user, refetch }) => {
  const { user: loggedInUser } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const axiosSecure = useAxiosSecure();
  const { mutateAsync } = useMutation({
    mutationFn: async (role) => {
      const { data } = await axiosSecure.patch(`/users/update/${user?.email}`, role);
      return data;
    },
    onSuccess: () => {
      refetch();
      toast.success('User role updated successfully!');
      setIsOpen(false);
    },
  });

  // Modal handler
  const modalHandler = async (selected) => {
    if (!user || loggedInUser.email === user.email) {
      toast.error('Action Not Allowed');
      return setIsOpen(false);
    }

    const userRole = {
      role: selected,
      status: 'Verified',
    };

    try {
      await mutateAsync(userRole);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{user?.email}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{user?.role}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{new Date(user.timestamp).toLocaleDateString()}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <button
          onClick={() => setIsOpen(true)}
          className='relative cursor-pointer inline-block px-4 py-2 font-semibold text-green-900 leading-tight'
        >
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
          ></span>
          <span className='relative'>Update Role</span>
        </button>
        <UpdateUserModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          modalHandler={modalHandler}
          user={user}
        />
      </td>
    </tr>
  );
};

UserDataRow.propTypes = {
  user: PropTypes.object,
  refetch: PropTypes.func,
};

export default UserDataRow;
