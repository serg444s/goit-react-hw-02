const Feedback = ({ data }) => {
  return (
    <div>
      <p>Good: {data.good}</p>
      <p>Neutral: {data.neutral}</p>
      <p>Bad: {data.bad}</p>
    </div>
  );
};

export default Feedback;
