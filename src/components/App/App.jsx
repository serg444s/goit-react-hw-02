import "./App.css";
import { useState } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

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

  const totalFeedback = state.good + state.neutral + state.bad;

  return (
    <div>
      <Description />
      <Options callback={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? <Feedback data={state} /> : <Notification />}
    </div>
  );
}

export default App;
