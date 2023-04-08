import { useState, useContext, useEffect } from 'react'
import './App.css'
import Nav from './components/Nav';

import { Routes, Route, Outlet, Link } from "react-router-dom";
import Blog from './features/blog'
import About from './features/about'


import { ThemeContext, type ThemeContextType } from './context/ThemeContext';

export default function App() {
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
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />} />
            <Route path="*" element={<NoMatch />} />
          </Route> 
          {/* <Route path="dashboard" element={<Dashboard />} /> */}
        </Routes>
    </ThemeContext.Provider>
  )
}

function Layout() {

  return(
    <main className='relative text-lg h-screen flex items-center justify-center overflow-x-hidden bg-white text-zinc-950 antialiased min-h-screen dark:text-white dark:bg-zinc-950'>
      <div className='container pt-32 max-w-7xl w-full mx-auto h-full'>
        <div className='h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start'>
          <Nav name="Ryan" />
          <h1>Hello World</h1>
          <Outlet />
        </div>
      </div>
    </main>
  )
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

//export default App


