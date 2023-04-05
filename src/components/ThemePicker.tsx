import { FC, useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

interface ThemePickerProps {
  
}

const ThemePicker: FC<ThemePickerProps> = ({}) => {
    const { currentTheme, changeCurrentTheme } = useContext(ThemeContext)
    
    return (
    <button
        data-testid='switch-theme-btn'
        className='px-5 rounded-3xl text-black dark:text-white'
        onClick={() => changeCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')}
    >
        Go {currentTheme === 'light' ? 'DARK MODE' : 'LIGHT MODE'}

        
    </button>
    )
}

export default ThemePicker