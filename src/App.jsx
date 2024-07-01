import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Counter } from './components/Counter'
import { Header } from './components/Header'
import { NumberList } from './components/NumberList'

function App() {

  const numeros = [1, 2, 3, 4, 5]

  return (
    <div>
      <Header />
      <Counter />

      <NumberList numbers={numeros} />
    </div>
  )
}

export default App
