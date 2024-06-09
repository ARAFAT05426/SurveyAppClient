import { useQuery } from '@tanstack/react-query';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { FaUsers, FaChartLine, FaDollarSign, FaClipboardList } from 'react-icons/fa';
import useAxiosSecure from '../../../HOOKS/useAxiosSecure';
import Loader from '../../../COMPONENTS/LOADER/Loader';

const AdminStatistics = () => {
    const axiosSecure = useAxiosSecure();

    const { data: statsData = {}, isLoading } = useQuery({
        queryKey: ['adminStats'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/adminStat');
            return data;
        },
    });

    if (isLoading) return <Loader />;
    const earningData = statsData.payments.map(payment => ({
        date: new Date(payment.timestamp).toDateString(),
        amount: parseFloat(payment.amount)
    }));

    const hasEarningData = earningData.length > 0;

    return (
        <div className='container mx-auto p-6'>
            <div className='mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {/* Total Users Card */}
                <div className='relative flex flex-col rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg'>
                    <div className='mx-4 rounded-xl bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-blue-500 to-blue-700'>
                        <FaUsers className='w-6 h-6 text-white' />
                    </div>
                    <div className='p-4 text-right'>
                        <p className='text-sm font-normal text-gray-200'>Total Users</p>
                        <h4 className='text-2xl font-semibold'>{statsData.totalUsers || 0}</h4>
                    </div>
                </div>

                {/* Published Surveys Card */}
                <div className='relative flex flex-col rounded-xl bg-gradient-to-br from-green-500 to-green-700 text-white shadow-lg'>
                    <div className='mx-4 rounded-xl bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-green-500 to-green-700'>
                        <FaClipboardList className='w-6 h-6 text-white' />
                    </div>
                    <div className='p-4 text-right'>
                        <p className='text-sm font-normal text-gray-200'>Published Surveys</p>
                        <h4 className='text-2xl font-semibold'>{statsData.publishedSurveys || 0}</h4>
                    </div>
                </div>

                {/* Unpublished Surveys Card */}
                <div className='relative flex flex-col rounded-xl bg-gradient-to-br from-red-500 to-red-700 text-white shadow-lg'>
                    <div className='mx-4 rounded-xl bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-red-500 to-red-700'>
                        <FaClipboardList className='w-6 h-6 text-white' />
                    </div>
                    <div className='p-4 text-right'>
                        <p className='text-sm font-normal text-gray-200'>Unpublished Surveys</p>
                        <h4 className='text-2xl font-semibold'>{statsData.unpublishedSurveys || 0}</h4>
                    </div>
                </div>

                {/* Total Revenue Card */}
                <div className='relative flex flex-col rounded-xl bg-gradient-to-br from-red-500 to-red-700 text-white shadow-lg'>
                    <div className='mx-4 rounded-xl bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-red-500 to-red-700'>
                        <FaDollarSign className='w-6 h-6 text-white' />
                    </div>
                    <div className='p-4 text-right'>
                        <p className='text-sm font-normal text-gray-200'>Total Revenue</p>
                        <h4 className='text-2xl font-semibold'>
                            ${statsData.totalEarnings ? statsData.totalEarnings.toFixed(2) : '0.00'}
                        </h4>
                    </div>
                </div>

                {/* Surveyors Card */}
                <div className='relative flex flex-col rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 text-white shadow-lg'>
                    <div className='mx-4 rounded-xl bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-purple-500 to-purple-700'>
                        <FaChartLine className='w-6 h-6 text-white' />
                    </div>
                    <div className='p-4 text-right'>
                        <p className='text-sm font-normal text-gray-200'>Surveyors</p>
                        <h4 className='text-2xl font-semibold'>
                            {statsData.surveyors || 0}
                        </h4>
                    </div>
                </div>

                {/* Pro Users Card */}
                <div className='relative flex flex-col rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-700 text-white shadow-lg'>
                    <div className='mx-4 rounded-xl bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-yellow-500 to-yellow-700'>
                        <FaChartLine className='w-6 h-6 text-white' />
                    </div>
                    <div className='p-4 text-right'>
                        <p className='text-sm font-normal text-gray-200'>Pro Users</p>
                        <h4 className='text-2xl font-semibold'>
                            {statsData.proUsers || 0}
                        </h4>
                    </div>
                </div>
            </div>

            {/* Bar Chart */}
            <div className='mt-12'>
                {hasEarningData ? (
                    <ResponsiveContainer width="100%" height={500}>
                        <BarChart data={earningData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="amount" fill="#82ca9d" barSize={50} />
                        </BarChart>
                    </ResponsiveContainer>
                ) : (
                    <div className="text-center text-gray-500">
                        <p>Not enough data to show earning details.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminStatistics;
