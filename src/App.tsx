import { useState } from 'react'
import './App.css'
import {Header} from './components/Header'
import { useDarkMode } from './components/hooks/useDarkMode'

function App() {
  const {darkMode, toggleDarkMode} = useDarkMode()
  const [remainingShirts, setRemainingShirts] = useState(20)

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-white'} font-inter`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <h1 className='bg-(--color-fox-red) text-(--color-fox-red)'>Hellow World</h1>
      <p className='bg-amber-300 text-black'>This is test</p>
      <div className="bg-fox-red">...</div>
      <div className="text-(--color-fox-orange)">...</div>
      <div className="border-(--color-fox-dark)">...</div>
    </div>
  )
}

export default App
