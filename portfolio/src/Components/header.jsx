import React from 'react'
import ProfilePic from '../Images/Ty.png'

const Header = () => {
    return(
        <div className='headerDiv'>
            <img src={ProfilePic} alt="Ty Lippe's Avatar" />
            <div className='headerContainer'>
                <h1>Hey there!</h1>
                <p>I am Ty, welcome to my React Portfolio! As a Full Stack Developer I have studied both the Front-End and the Back-End of Software Development. I studied at Lambda School, a remote coding bootcamp that teaches students how to become a successful software engineer. I currently am located in Orlando, FL and am looking to move me and my family out to the beautiful city of Nashville, TN. Feel free to look around and check out some of the awesome projects I have worked on and feel free to contact me! </p>
            </div>
        </div>
    )
}

export default Header;