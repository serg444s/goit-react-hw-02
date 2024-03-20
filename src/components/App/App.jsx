import "./App.css";
import { useState } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";

function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setState({
      ...state,
      [feedbackType]: state[feedbackType] + 1,
    });
  };

  return (
    <div>
      <Description />
      <Options callback={updateFeedback} />
      <Feedback data={state} />
    </div>
  );
}

export default App;
