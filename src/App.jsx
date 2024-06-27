import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [counterIsVisible, setCounterIsVisible] = useState(false)

  const numeros = [1, 2, 3, 4, 5]


  return (
    <div>

      <button onClick={() => setCounterIsVisible(!counterIsVisible)} type='button'> toggle counter component </button>
      {counterIsVisible && (

        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
      )}

      <ul>
        {numeros.map(numero => <li>{numero}</li>)}
      </ul>
    </div>
  )
}

export default App
