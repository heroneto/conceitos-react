import { useEffect, useState } from 'react'
import './App.css'


function App() {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log("Valor do counter ", counter)
  }, [])






  return (
    <div>
      App

      <button onClick={() => setCounter(counter + 1)}>
        count is {counter}
      </button>
    </div>
  )
}

export default App
