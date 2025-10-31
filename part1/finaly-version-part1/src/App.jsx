import { useState } from 'react'



const Button = ( {handleclick, text} ) => {
  return (
    <button onClick={handleclick}>
      {text}
    </button>
    
  )
}

const Buttonanecdotes = ({clickAnecdotes, text}) => {
  return (
    <button onClick={clickAnecdotes}>
      {text}
    </button>
    
  )
}

const Statistics = ({good, neutral, bad,}) => {
  const all = good + neutral + bad
  
  if (all === 0) {
    return <p>No feetback given</p>
  }
  const average = (good - bad)/(all)
  const positive = (good / all)*100
  return (
    <table>
      <tbody>
        <StatisticsLine text="good" value={good}/> 
        <StatisticsLine text="neutral" value={neutral}/> 
        <StatisticsLine text="bad" value={bad}/> 
        <StatisticsLine text="all" value={all}/> 
        <StatisticsLine text="average" value={average}/> 
        <StatisticsLine text="positive" value={positive}/> 
      </tbody>
    </table>
  )
}

const StatisticsLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}


const  Anecdote = (props) => {
  return (
    <div>
      <p>{props.anecdotes[props.randomNumber]}</p>
    </div>
  )
}

const Vewvotes = (props) => {
  return (
    <div>
      <p>has {props.newVotes} votes</p>
    </div>
  )
}

const Anecdotewithmaxvotes = ({votes, anecdotes}) => {
    const maxvotes = Math.max(...votes)
    const index = votes.indexOf(maxvotes)
    return (
      <div>
        {anecdotes[index]}
        <p>has {maxvotes} votes</p>
      </div>
    )

  }



const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]


  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0, 0])
  const [selected, setSelected] = useState(0)
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const newSelected = () => {
    const newdate = Math.floor(Math.random()*anecdotes.length)
    setSelected(newdate)
  }

  const clickAnecdotes = () => {
    const newVotes = [...votes]
    newVotes[selected] = votes[selected] + 1
    setVotes(newVotes)
  }



  
  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleclick={() => setGood(good + 1)} text="Good" />
      <Button handleclick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleclick={() => setBad(bad + 1)} text="Bad" />
      <h2>Statistics</h2>
      <Statistics good ={good} neutral={neutral} bad={bad} />
      <h2>Anecdote of de day</h2>
      <Buttonanecdotes clickAnecdotes={newSelected} text="Next anecdotes" />
      <Buttonanecdotes clickAnecdotes={clickAnecdotes} text="vote" />
      <Anecdote randomNumber={selected} anecdotes={anecdotes} />
      <Vewvotes newVotes={votes[selected]}/>
      <h2>Anecdote with most votes</h2>
      <Anecdotewithmaxvotes votes={votes} anecdotes={anecdotes} />



    </div>
  )
}

export default App