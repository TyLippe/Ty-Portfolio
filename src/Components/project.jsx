import React from 'react'
import WaterMyPlants from '../Images/WaterMyPlants.PNG';
import SplitTheBill from '../Images/SplitTheBill.PNG';
import WanderLust from '../Images/Wanderlust.PNG';
import Kansha from '../Images/Kansha.PNG';

const Projects = () => {

    const WMPLink = e => {
        window.open('https://github.com/bw-water-plants')
    }

    const STBLink = e => {
        window.open('https://github.com/lambda-split-the-bill')
    }

    const WLLink = e => {
        window.open('https://github.com/Wanderlust1021')
    }

    const KLink = e => {
        window.open('https://github.com/Lambda-School-Labs/kansha-fe')
    }

    const WMPDeploy = e => {
        window.open('https://watermyplants-tylippe.netlify.com')
    }

    const STBDeploy = e => {
        window.open('https://splitthebill-tylippe.netlify.com')
    }

    const WLDeploy = e => {
        window.open('https://wanderlust-tylippe.netlify.com')
    }

    const KDeploy = e => {
        window.open('https://kansharewards.com/')
    }

    return(
        <div className='projectDiv'>
            <h1>Portfolio</h1>
            <div className='projects'> 
            <div className='projectContainer'>
                <h3>Water My Plants</h3>
                    <img src={WaterMyPlants} alt='Water My Plants' className='projectImg'/>
                    <div className='linkButtons'>
                    <button className='projectButton' onClick={WMPLink}>
                            View the code for Water My Plants
                    </button>
                    <button className='projectButton' onClick={WMPDeploy}>
                            Visit Water My Plants
                    </button>
                </div> 
            </div>

            <div className='projectContainer'>
                <h3>Split The Bill</h3>
                    <img src={SplitTheBill} alt='Split The Bill' className='projectImg' />
                    <div className='linkButtons'>
                    <button className='projectButton' onClick={STBLink}>
                            View the code for Split The Bill
                    </button>
                    <button className='projectButton' onClick={STBDeploy}>
                            Visit Split The Bill
                    </button>
                </div>
            </div>

            <div className='projectContainer'>
                <h3>WanderLust</h3>
                    <img src={WanderLust} alt='WanderLust' className='projectImg' />
                    <div className='linkButtons'>
                    <button className='projectButton' onClick={WLLink}>
                            View the code for WanderLust
                    </button>
                    <button className='projectButton' onClick={WLDeploy}>
                            Visit Wanderlust
                    </button>
                </div>
            </div>

            <div className='projectContainer'>
                <h3>Kansha</h3>
                    <img src={Kansha} alt='Kansha' className='projectImg' /> 
                    <div className='linkButtons'>             
                    <button className='projectButton' onClick={KLink}>
                            View the code for Kansha
                    </button>
                    <button className='projectButton' onClick={KDeploy}>
                            Visit Kansha
                    </button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Projects;