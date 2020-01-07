import React from 'react'
import ProfilePic from '../Images/Ty.png'

const Header = () => {
    return(
        <div className='headerDiv'>
            <img src={ProfilePic} alt="Ty Lippe's Avatar" />
            <div className='headerContainer'>
                <h1>Hey, I'm Ty</h1>
                <h2>A Full Stack Developer</h2>
            </div>
        </div>
    )
}

export default Header;