import { FC, useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { BsSun } from 'react-icons/bs'
import { BiMoon } from 'react-icons/bi'

interface ThemePickerProps {
  
}

const ThemePicker: FC<ThemePickerProps> = ({}) => {
    const { currentTheme, changeCurrentTheme } = useContext(ThemeContext)
    
    return (
    <>
        {currentTheme === 'dark' ? 
            <BsSun className='dark:text-white' onClick={() => changeCurrentTheme(currentTheme === 'dark' ? 'light' : 'dark')} />
            :
            <BiMoon className='text-black' onClick={() => changeCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')} />
        }
    </>
    
    )
}

export default ThemePicker