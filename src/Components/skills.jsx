import React, { useState } from 'react'
import skillData from '../skills';

const Skills = () => {
    const [ skills, setSkills ] = useState(skillData)

    const filtered = (type) => {
        let filterSkills = skillData.filter(function(data) {
            if(data.type === type) {
                return true;
            } else {
                return false;
            }
        })
        setSkills(filterSkills)
    } 

    return(
        <div className='skillDiv'>
            <h1>Skills</h1>
            <div className='filter'>
                <button onClick={() => setSkills(skillData)}>All</button>
                <button onClick={() => filtered('language')}>Programming Languages</button>
                <button onClick={() => filtered('library')}>Libraries and Frameworks</button>
                <button onClick={() => filtered('db')}>Databases</button>
                <button onClick={() => filtered('version')}>Version Control</button>
                <button onClick={() => filtered('software')}>Software Development</button>
                <button onClick={() => filtered('com')}>Communication Software</button>
            </div>
            <div className='skillListDiv'>
                {skills.map(skill => {
                    return(
                        <ul className='skillList'>{skill.name}</ul>
                    )
                })}
            </div>        
        </div>
    )
}

export default Skills;