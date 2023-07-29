import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function addCount() {
    setCount(count+1);
  }
  function removeCount() {
    if (count>0) {
      setCount(count-1);
    }else{

    }
  }
  function resetCount() {
    setCount(0);
  }
  return (
    <div className='form '>
      <div className='App'>
      <button onClick={removeCount}>-</button>
      <h1>{count}</h1>
      <button onClick={addCount}>+</button>
      </div>
      <button className='reset-button'onClick={resetCount}>Reset</button>
    </div>
  )
}

export default App
