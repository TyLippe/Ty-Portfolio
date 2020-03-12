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
            <h1>My Skills</h1>
            <div className='skillContainer'>
            <div className='filter'>
                <button className='skillButton' onClick={() => setSkills(skillData)}>All</button>
                <button className='skillButton' onClick={() => filtered('language')}>Programming Languages</button>
                <button className='skillButton' onClick={() => filtered('library')}>Libraries and Frameworks</button>
                <button className='skillButton' onClick={() => filtered('db')}>Databases</button>
                <button className='skillButton' onClick={() => filtered('version')}>Version Control</button>
                <button className='skillButton' onClick={() => filtered('software')}>Software Development</button>
                <button className='skillButton'onClick={() => filtered('com')}>Communication Software</button>
            </div>
            <div className='skillListDiv'>
                {skills.map(skill => {
                    return(
                        <li className='skillList'>{skill.name}</li>
                    )
                })}
            </div>   
            </div>     
        </div>
    )
}

export default Skills;