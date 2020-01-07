import React from 'react'
import Projects from './project';
import Skills from './skills';

const Body = () => {
    return(
        <div className='bodyDiv'>
            <Skills />
            <Projects />
        </div>
    )
}
export default Body;