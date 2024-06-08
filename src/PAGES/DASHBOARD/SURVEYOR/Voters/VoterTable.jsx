import PropTypes from 'prop-types';

const VoterTable = ({ voters }) => {
    return (
        <div className="overflow-x-auto py-10">
            <table className="min-w-full bg-white shadow-md rounded-md p-1">
                {/* Table header */}
                <thead className="bg-slate-100">
                    <tr>
                        <th className="px-4 lg:px-6 py-3 text-left text-md font-bold uppercase tracking-wider">#</th>
                        <th className="px-4 lg:px-6 py-3 text-left text-md font-bold uppercase tracking-wider">Name</th>
                        <th className="px-4 lg:px-6 py-3 text-left text-md font-bold uppercase tracking-wider">Email</th>
                        <th className="px-4 lg:px-6 py-3 text-left text-md font-bold uppercase tracking-wider">Date</th>
                        <th className="px-4 lg:px-6 py-3 text-left text-md font-bold uppercase tracking-wider">Vote</th>
                    </tr>
                </thead>
                {/* Table body */}
                <tbody className="bg-white divide-y divide-gray-200">
                    {voters?.voters && voters.voters.length > 0 ? (
                        voters.voters.map((voter, index) => (
                            <tr key={index}>
                                <td className="px-4 lg:px-6 py-3">{index + 1}</td>
                                <td className="px-4 lg:px-6 py-3">{voter?.email}</td>
                                <td className="px-4 lg:px-6 py-3">{voter?.email}</td>
                                <td className="px-4 lg:px-6 py-3">{new Date(voter?.timestamp).toLocaleDateString()}</td>
                                <td className="px-4 lg:px-6 py-3">1</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="px-4 lg:px-6 py-3 text-center">No voters found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

// Prop types validation
VoterTable.propTypes = {
    voters: PropTypes.shape({
        voters: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                email: PropTypes.string.isRequired,
                timestamp: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]).isRequired,
            })
        ),
    }),
};

export default VoterTable;
