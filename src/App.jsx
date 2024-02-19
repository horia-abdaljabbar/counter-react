
import './App.css'
import { useState } from 'react';
//import Navbar from './components/Navbar/Navbar.jsx'
//import Counter from './components/Counter/Counter.jsx'
function App() {

let [counter , setCounter]=useState(0);
  const changeCounter=()=>{
setCounter(counter+1);
console.log(counter);
  }
  return (
    <>
      <button onClick={changeCounter}> Horia Haji {counter}</button>
    </>
  )
}

export default App
