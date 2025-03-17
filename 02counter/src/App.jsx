import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
    const addValue = () =>{
      if(counter<20){
        setCounter(Prevcounter => Prevcounter+1)
      counter=counter+1;
      setCounter(counter);
      console.log("value added",counter);
      }
    }
    const removeValue = () => { 
      if(counter>0){
        counter=counter-1;
        setCounter(counter);
        console.log("value removed",counter)
      }
    }
  return (
    <>
     <h1>chai aur react </h1>
     <h2> Counter value:{counter}</h2>
     <button onClick={addValue}>Add value {counter}</button>
     <br />
     <button onClick={removeValue}>Remove value{counter}</button>
    </>
  )
}

export default App