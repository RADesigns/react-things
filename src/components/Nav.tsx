import React from 'react'
import ThemePicker from './ThemePicker';

type NavPropsType = {
    name: string
  };

const Nav: React.FC<NavPropsType> = props => {
    const name = props.name
    return (
        <>
            <nav>
                <div className='fixed backdrop-blur-sm  dark:bg-zinc-950/75 z-50 top-0 left-0 right-0 h-20 border-b dark:border-zinc-800 shadow-sm flex items-center justify-between'>
                    <div className='container max-w-7xl mx-auto w-full flex justify-between items-center'>
                        <h4>Container {name}</h4>
                        <div>
                            <ThemePicker  />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav