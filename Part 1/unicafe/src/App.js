import { useState } from "react";
import Statistics from "./Statistics";
import Button from "./Button";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <h1>Give Feedback</h1>
      <Button text="good" handleClick={() => setGood(good+1)}/>
      <Button text="neutral" handleClick={() => setNeutral(neutral+1)}/>
      <Button text="bad" handleClick={() => setBad(bad+1)}/>
      <h1>Stats</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  );
}

export default App;
