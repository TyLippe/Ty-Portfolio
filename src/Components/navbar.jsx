import React from 'react'
import Resume from './resume';
import '../styles.scss';

const NavBar = () => {
    return(
        <div className='navBarDiv'>
            <p>Ty Lippe</p>
            <Resume />
        </div>
    )
}

export default NavBar;