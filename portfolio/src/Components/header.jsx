import React from 'react'
import useDarkMode from '../Hooks/useDarkMode'
import ProfilePic from '../Images/Ty.png'

const Header = () => {
    const [darkMode, setDarkMode] = useDarkMode();

    const toggle = e => {
        e.preventDefault()
        setDarkMode(!darkMode)
    }

    return(
        <div className='headerDiv'>
            <img src={ProfilePic} alt="Ty Lippe's Avatar" />
            <div className='headerContainer'>
                <h1>Hey there!</h1>
                <p>I am Ty, welcome to my React Portfolio! As a Full Stack Developer I have studied both the Front-End and the Back-End of Software Development. I studied at Lambda School, a remote coding bootcamp that teaches students how to become a successful software engineer. I currently am located in Orlando, FL enjoying the Sunshine State and am ready to travel and see more of this beautiful Country. Feel free to look around and check out some of the awesome projects I have worked on and feel free to contact me! </p>
                <button onClick={toggle} className={darkMode ? 'lightButton' : 'darkButton'}>
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
            </div>
        </div>
    )
}

export default Header;