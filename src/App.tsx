import { useState } from 'react'
import './App.css'
import Nav from './components/Nav';


import { ThemeContext, type ThemeContextType } from './context/ThemeContext';

function App() {
  //const [count, setCount] = useState(0)
  const [theme, setTheme] = useState<ThemeContextType>("light");

  return (
    <ThemeContext.Provider value={theme}>
      <Nav name="Ryan" />
      <h1>Hello World</h1>
      
    </ThemeContext.Provider>
  )
}

export default App


