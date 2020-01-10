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
                <button className='allButton' onClick={() => setSkills(skillData)}>All</button>
                <button className='langButton' onClick={() => filtered('language')}>Programming Languages</button>
                <button className='libButton' onClick={() => filtered('library')}>Libraries and Frameworks</button>
                <button className='dbButton' onClick={() => filtered('db')}>Databases</button>
                <button className='verButton' onClick={() => filtered('version')}>Version Control</button>
                <button className='swButton' onClick={() => filtered('software')}>Software Development</button>
                <button className='comButton'onClick={() => filtered('com')}>Communication Software</button>
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