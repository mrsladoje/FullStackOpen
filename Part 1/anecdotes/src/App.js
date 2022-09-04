import { useState } from "react";

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(7).fill(0)); 

  const addVote = (num) => {
    const copy = [...votes];
    copy[num]++;
    setVotes(copy);
  }

  let maks = 0;
  for (let i = 1; i < 7; i++) {
    if (votes[i] > votes[maks]) maks = i;
  }

  return (
    <>
      <h1><strong>Anecdote of the day</strong></h1>
      <p>{anecdotes[selected]}</p>
      <button onClick={() => setSelected(Math.floor(Math.random()*6))}>
        next random anecdote
      </button>
      <button onClick={() => addVote(selected)}>
        vote
      </button>
      <p>This anecdote has {votes[selected]} votes.</p>
      <h1><strong>Most voted anecdote</strong></h1>
      <p>{anecdotes[maks]}</p>
      <p>This anecdote has {votes[maks]} votes.</p>
    </>
  );
}

export default App;
