import PropTypes from 'prop-types';

const Heading = ({ title, subtitle }) => {
    const words = title.split(' ');
    const firstWord = <span className="text-primary">{words[0]}</span>;
    const remainingWords = words.slice(1).join(' ');

    return (
        <div className='flex flex-col items-center space-y-3'>
            <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold text-center text-wrap'>
                {firstWord} {remainingWords}
            </h1>
            <hr className='border-b-2 border-b-secondary w-2/5 rounded-full ' />
            <p className='font-thinHeading text-xl text-center text-wrap'>{subtitle}</p>
        </div>
    );
};

Heading.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
};

export default Heading;
