import { useState } from 'react'
import './App.css'
import {Header} from './components/Header'
import { useDarkMode } from './components/hooks/useDarkMode'
import Footer from './components/Footer'
import Hero from './components/Hero'

function App() {
  const {darkMode, toggleDarkMode} = useDarkMode()
  const [remainingShirts, setRemainingShirts] = useState(20)

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-white'} font-inter`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero darkMode={darkMode} />
      <Footer/>
    </div>
  )
}

export default App
