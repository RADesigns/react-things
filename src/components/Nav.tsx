import React from 'react'

type NavPropsType = {
    name: string
  };

const Nav: React.FC<NavPropsType> = props => {
    const name = props.name
    return (
        <>
            <nav>
                <div className='container'>
                    Container {name}
                </div>
            </nav>
        </>
    )
}

export default Nav