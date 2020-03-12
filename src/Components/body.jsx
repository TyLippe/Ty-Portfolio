import React from 'react'
import Projects from './project';
import Skills from './skills';
import About from './about'

const Body = () => {
    return(
        <div className='bodyDiv'>
            <div className='topbodyContainer'>
            <About />
            <Skills />
            </div>
            <Projects />
        </div>
    )
}
export default Body;