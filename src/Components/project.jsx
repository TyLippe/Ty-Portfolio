import React from 'react'
import WaterMyPlants from '../Images/WaterMyPlants.PNG';
import SplitTheBill from '../Images/SplitTheBill.PNG';
import WanderLust from '../Images/Wanderlust.PNG';
import Kansha from '../Images/Kansha.PNG';
import Thunderball from '../Images/Thunderball.png'
import Poke from '../Images/PokeTeam.png'
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';

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

    const TBLink = e => {
        window.open('https://github.com/awesome-mud')
    }

    const PokeLink = e => {
        window.open('https://github.com/TyLippe/Poke-Team')
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

    const TBDeploy = e => {
        window.open('https://thunderball-run.gettingonthe.net/')
    }

    return(
        <div className='projectDiv'>
            <h1>My Work</h1>
            <div className='projects'> 
            <div className='projectContainer'>
                <h3>KANSHA</h3>
                    <img src={Kansha} alt='Kansha' className='projectImg' /> 
                    <div className='linkButtons'>             
                    <button className='projectButton' onClick={KLink}>
                        <GitHubIcon />
                    </button>
                    <button className='projectButton' onClick={KDeploy}>
                            <LanguageIcon />
                    </button>
                </div>
            </div>

            <div className='projectContainer'>
                <h3>THUNDERBALL</h3>
                    <img src={Thunderball} alt='Thunderball' className='projectImg' /> 
                    <div className='linkButtons'>             
                    <button className='projectButton' onClick={TBLink}>
                        <GitHubIcon />
                    </button>
                    <button className='projectButton' onClick={TBDeploy}>
                            <LanguageIcon />
                    </button>
                </div>
            </div>

            <div className='projectContainer'>
                <h3>WANDERLUST</h3>
                    <img src={WanderLust} alt='WanderLust' className='projectImg' />
                    <div className='linkButtons'>
                    <button className='projectButton' onClick={WLLink}>
                    <GitHubIcon />
                    </button>
                    <button className='projectButton' onClick={WLDeploy}>
                    <LanguageIcon />
                    </button>
                </div>
            </div>

            <div className='projectContainer'>
                <h3>SPLIT THE BILL</h3>
                <img src={SplitTheBill} alt='Split The Bill' className='projectImg' />
                    <div className='linkButtons'>
                    <button className='projectButton' onClick={STBLink}>
                    <GitHubIcon />
                    </button>
                    <button className='projectButton' onClick={STBDeploy}>
                    <LanguageIcon />
                    </button>
                </div>
            </div>

            <div className='projectContainer'>
                <h3>POKE TEAM BUILDER</h3>
                <img src={Poke} alt='Poke Team Builder' className='projectImg' />
                    <div className='linkButtons'>
                    <button className='projectButton' onClick={PokeLink}>
                    <GitHubIcon />
                    </button>
                </div>
            </div>

            <div className='projectContainer'>
                <h3>WATER MY PLANTS</h3>
                    <img src={WaterMyPlants} alt='Water My Plants' className='projectImg'/>
                    <div className='linkButtons'>
                    <button className='projectButton' onClick={WMPLink}>
                    <GitHubIcon />
                    </button>
                    <button className='projectButton' onClick={WMPDeploy}>
                    <LanguageIcon />
                    </button>
                </div> 
            </div>
            </div>
        </div>
    )
}

export default Projects;