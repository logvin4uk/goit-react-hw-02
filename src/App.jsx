import { useState, useEffect } from "react";
import "./App.css";

import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/NotificationForStart/Notification";

function App() {
  const initCounts = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [count, setCount] = useState(() => {
    const savedCounts = window.localStorage.getItem("saved-counts");

    if (savedCounts !== null) {
      return JSON.parse(savedCounts);
    } else {
      return initCounts;
    }
  });

  useEffect(() => {
    window.localStorage.setItem("saved-counts", JSON.stringify(count));
  }, [count]);

  const updateFeedback = (feedbackType) => {
    setCount((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const totalFeedback = count.good + count.neutral + count.bad;
  const positiveFeedback = Math.round((count.good / totalFeedback) * 100);

  return (
    <>
      <Description />

      <Options
        onUpdate={updateFeedback}
        total={totalFeedback}
        toReset={setCount}
        initCounts={initCounts}
      />

      {totalFeedback > 0 ? (
        <Feedback
          value={count}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
