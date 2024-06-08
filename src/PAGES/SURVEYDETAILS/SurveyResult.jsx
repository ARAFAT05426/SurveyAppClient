import PropTypes from 'prop-types';
import Heading from '../../COMPONENTS/SECTIONS/Heading';

const SurveyResult = ({ survey }) => {
    return (
        <section className="bg-white p-8 rounded-lg shadow-xl">
            <Heading title={`${survey?.title}`} subtitle={`${survey?.description}`} />
            <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-6 text-primary/80">Questions & Results</h3>
                {survey.questions.map((question, qIndex) => (
                    <div key={qIndex} className="mb-6 p-4 bg-gray-100 rounded-lg shadow-md">
                        <h4 className="text-xl font-medium text-gray-800 mb-3">{question.question}</h4>
                        <ul className="space-y-2">
                            {question.options.map((option, oIndex) => (
                                <li key={oIndex} className="flex justify-between items-center p-2 bg-white rounded-lg shadow-sm">
                                    <span className="text-gray-700">{option.option}</span>
                                    <span className="font-bold text-primary/80">{option.votecount} votes</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-6 text-primary/80">Surveyor Information</h3>
                <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-md">
                    <img src={survey.host.image} alt={survey.host.name} className="w-20 h-20 rounded-full mr-6 shadow-lg" />
                    <div>
                        <p className="text-xl font-medium text-gray-800">{survey.host.name}</p>
                        <p className="text-gray-500">{survey.host.email}</p>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="text-2xl font-semibold mb-6 text-primary/80">Comments</h3>
                {survey.comments.length > 0 ? (
                    survey.comments.map((comment, cIndex) => (
                        <div key={cIndex} className="mb-4 p-4 bg-gray-100 rounded-lg shadow-md">
                            <p className="text-gray-700 mb-2">{comment.text}</p>
                            <p className="text-sm text-gray-500">- {comment.user}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No comments yet.</p>
                )}
            </div>
        </section>
    );
};

SurveyResult.propTypes = {
    survey: PropTypes.object.isRequired,
};

export default SurveyResult;
