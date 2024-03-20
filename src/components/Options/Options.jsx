const Options = ({ callback, totalFeedback }) => {
  return (
    <div>
      <button onClick={() => callback("good")}>Good</button>
      <button onClick={() => callback("neutral")}>Neutral</button>
      <button onClick={() => callback("bad")}>Bad</button>
      {totalFeedback > 0 ? <button>Reset</button> : ""}
    </div>
  );
};

export default Options;
