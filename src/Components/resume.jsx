import React from 'react'
import PDF from '../Resume.pdf'

const Resume = () => {
    const myPDF = e => {
        window.open(PDF, '_blank', 'fullscreen=yes')
    }

    return(
        <div className='resumeDiv'>
            <button onClick={myPDF}>
                Resume
            </button>
        </div>
    )
}

export default Resume;