import { useState,  useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  const addVal = () => {
    // it still print the same value that one setcount gives
    setCount (count + 1)
    setCount (count + 1)
    setCount (count + 1)
    setCount (count + 1)
  }

  const removeVal = () => {
    setCount (count - 1)
  }

   // This will run every time `count` changes
   useEffect(() => {
    console.log("Updated count:", count);
  }, [count]);

  return (
    <>
    <h1>hii, this is Pradeep</h1>
    <h2>Count : {count} </h2>

    <button onClick={addVal}>addValue</button>

    <button onClick={removeVal}>removeValue</button>
    </>
  )
}

export default App
