const SurveyComments = () => {
  return (
    <div className="p-6 mt-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Comments</h2>
      <div className="space-y-4">
        {/* Sample comment */}
        <div className="flex items-start space-x-4">
          <img src="https://via.placeholder.com/40" alt="User Avatar" className="w-10 h-10 rounded-full" />
          <div className="flex-1">
            <div className="bg-gray-100 rounded-lg p-4">
              <p className="text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla dolor felis, vitae euismod magna tempor nec. Donec rutrum turpis eget.</p>
            </div>
          </div>
        </div>
        {/* Add more comments here */}
      </div>
      <div className="flex items-center mt-4">
        <textarea
          className="flex-1 resize-none border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-blue-200"
          rows="4"
          placeholder="Add your comment..."
        ></textarea>
        <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md ml-4 hover:bg-blue-600 transition-colors duration-300">Submit</button>
      </div>
    </div>
  );
};

export default SurveyComments;
