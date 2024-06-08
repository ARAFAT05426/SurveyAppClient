import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../HOOKS/useAxiosSecure";
import Loader from "../../../../COMPONENTS/LOADER/Loader";

const Payments = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      try {
        const { data } = await axiosSecure.get('/user');
        // Filter out users with non-empty payment objects
        return data.filter(user => user.payment && Object.keys(user.payment).length > 0);
      } catch (error) {
        throw new Error('Failed to fetch users');
      }
    },
  });
  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="space-y-5">
      <h1 className="text-3xl pl-5">Users with Payment Information</h1>
      {users.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-md p-1">
            <thead className="bg-slate-100">
              <tr>
                <th className="px-4 lg:px-6 py-3 text-left text-md font-bold uppercase tracking-wider">Email</th>
                <th className="px-4 lg:px-6 py-3 text-left text-md font-bold uppercase tracking-wider">Name</th>
                <th className="px-4 lg:px-6 py-3 text-left text-md font-bold uppercase tracking-wider">Paid For</th>
                <th className="px-4 lg:px-6 py-3 text-left text-md font-bold uppercase tracking-wider">Amount</th>
                <th className="px-4 lg:px-6 py-3 text-left text-md font-bold uppercase tracking-wider">Time</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user, index) => (
                <tr key={index}>
                  <td className="px-4 lg:px-6 py-3">{user.email}</td>
                  <td className="px-4 lg:px-6 py-3">{user.name}</td>
                  <td className="px-4 lg:px-6 py-3">{user.payment.role}</td>
                  <td className="px-4 lg:px-6 py-3">{user.payment.amount}</td>
                  <td className="px-4 lg:px-6 py-3">{new Date(parseFloat(user.payment.time)).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No users with payment information found.</p>
      )}
    </section>
  );
};

export default Payments;
