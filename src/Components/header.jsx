import React, { useState } from 'react'
import ProfilePic from '../Images/Ty.png'

const Header = () => {
    const [count, setCount] = useState(0)

    const shylaHandle = e => {
        setCount(count + 1)
        if(count === 4) {
            window.open('/shyla')
            setCount(0)
        }
    }

    return(
        <div className='headerDiv'>
            <img src={ProfilePic} alt="Ty Lippe's Avatar" id='click' onClick={shylaHandle} />
            <div className='headerContainer'>
                <h1>Hey, I'm Ty</h1>
                <h2>A Full Stack Developer</h2>
            </div>
        </div>
    )
}

export default Header;