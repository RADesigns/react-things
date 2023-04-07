import { useState, useContext, useEffect } from 'react'
import './App.css'
import Nav from './components/Nav';


import { ThemeContext, type ThemeContextType } from './context/ThemeContext';

function App() {
  //const [count, setCount] = useState(0)
  //const {currentTheme} = useContext(ThemeContext);
  
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')
  console.log(theme)
  
  const changeCurrentTheme = (newTheme: 'light' | 'dark') => {
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  //This should be the only useEffect use case
  useEffect(() => {
    if(theme==="dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{currentTheme: theme, changeCurrentTheme}}>
      <main className='relative text-lg h-screen flex items-center justify-center overflow-x-hidden bg-white text-zinc-950 antialiased min-h-screen dark:text-white dark:bg-zinc-950'>
        <div className='container pt-32 max-w-7xl w-full mx-auto h-full'>
          <div className='h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start'>
            <Nav name="Ryan" />
            <h1>Hello World</h1>
          </div>
        </div>
      </main>
      
    </ThemeContext.Provider>
  )
}

export default App


