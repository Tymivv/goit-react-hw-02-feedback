import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    {Object.keys(options).map(option => (
      <button
        onClick={() => onLeaveFeedback(option)}
        key={option}
        type="button"
      >
        {option}
      </button>
    ))}
  </>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
