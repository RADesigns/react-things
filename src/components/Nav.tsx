import React from 'react'
import { Link } from 'react-router-dom';
import ThemePicker from './ThemePicker';

type NavPropsType = {
    name: string
  };

const Nav: React.FC<NavPropsType> = props => {
    const name = props.name
    return (
        <>
            <nav className='fixed backdrop-blur-sm  dark:bg-zinc-950/75 z-50 top-0 left-0 right-0 h-20 border-b dark:border-zinc-800 shadow-sm flex items-center justify-between'>
                <div className='container max-w-7xl mx-auto w-full flex justify-between items-center relative'>
                    <div className="w-1/3">
                        <h4>Container {name}</h4>
                    </div>                        
                    <div className="w-1/3">
                        <ul className="flex justify-between">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/blog">Blog</Link>
                            </li>
                            {/* <li>
                                <Link to="/nothing-here">Nothing Here</Link>
                            </li> */}
                        </ul>
                    </div>
                    <div id="nav-theme-toggle" className="w-1/3">
                        <ThemePicker  />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav