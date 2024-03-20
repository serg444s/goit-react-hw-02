const Options = ({ callback }) => {
  return (
    <div>
      <button onClick={() => callback("good")}>Good</button>
      <button onClick={() => callback("neutral")}>Neutral</button>
      <button onClick={() => callback("bad")}>Bad</button>
    </div>
  );
};

export default Options;
