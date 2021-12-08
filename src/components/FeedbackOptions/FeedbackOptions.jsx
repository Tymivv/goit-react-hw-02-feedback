const FeedbackOptions = ({ countGood, countNeutral, countbBad }) => {
  return (
    <>
      <button className="btm" type="button" onClick={countGood}>
        Good
      </button>
      <button className="btm" type="button" onClick={countNeutral}>
        Neutral
      </button>
      <button className="btm" type="button" onClick={countbBad}>
        Bad
      </button>
    </>
  );
};
export default FeedbackOptions;
