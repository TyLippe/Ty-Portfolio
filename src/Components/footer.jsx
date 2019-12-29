import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = () => {
    const TwitterLink = e => {
        window.open('https://twitter.com/TyLippe')
    }

    const LinkedInLink = e => {
        window.open('https://www.linkedin.com/in/ty-lippe-1432b3194/')
    }

    const GitHubLink = e => {
        window.open('https://github.com/TyLippe')
    }

    return(
        <div className='footerContainer'>
        <div className='footerInfo'>
            <p>Ty Lippe</p>
            <a href='mailto:tylippe94@gmail.com?Subject=Portfolio'>tylippe94@gmail.com</a>
        </div>
        <div className='footerDiv'>
            <button className='socialButton' onClick={TwitterLink}>
                <TwitterIcon /> 
            </button>
            <button className='socialButton' onClick={LinkedInLink}>
                <LinkedInIcon />
            </button>
            <button className='socialButton' onClick={GitHubLink}>
                <GitHubIcon />
            </button>
        </div>
        </div>
    )
}

export default Footer;