import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../HOOKS/useAxiosSecure";

const Payments = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [], isLoading, } = useQuery({
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
    return (
        <section>
            
        </section>
    );
};

export default Payments;