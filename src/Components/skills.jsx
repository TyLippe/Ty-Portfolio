import React from 'react'
import skillData from '../skills';

const Skills = () => {
    console.log(skillData)

    return(
        <div className='skillDiv'>
            <h1>Skills</h1>
            <div className='filter'>
                <button>All</button>
                <button>Programming Languages</button>
                <button>Libraries and Frameworks</button>
                <button>Databases</button>
                <button>Version Control</button>
                <button>Software Development</button>
                <button>Communication Software</button>
            </div>
            <div className='skills'>
                {skillData.map(data => {
                    return(
                        <li>{data.name}</li>
                    )
                })}
            </div>        
        </div>
    )
}

export default Skills;