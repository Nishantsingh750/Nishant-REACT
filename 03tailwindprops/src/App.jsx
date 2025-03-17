/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username:"Nishant",
    age:21,
    city:"Jammu"
  }
  let myArr =["Nishant",21,"jammu"]
    return (
    <>
      <h1 className='text-gray-500 mb-3 font-'>
        Nishant singh and tailwind css
      </h1>
    {/* <Card channel="chaiaurcode" someObj={myObj} />
      <Card channel="chaiaurcode" someObj={myArr}/> */}
      <Card username="Nishant aur react" data="every thing is good." image="https://images.pexels.com/photos/6209562/pexels-photo-6209562.jpeg?auto=compress&cs=tinysrgb&w=600"/>
      <Card username="React aur Nishant" data="Flying with react js" image="https://images.pexels.com/photos/731217/pexels-photo-731217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
      <Card />
    </>
  )
}

export default App

