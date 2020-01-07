import React from 'react'
import Slider from 'infinite-react-carousel';
import WaterMyPlants from '../Images/WaterMyPlants.PNG';
import SplitTheBill from '../Images/SplitTheBill.PNG';
import WanderLust from '../Images/Wanderlust.PNG';
import Kansha from '../Images/Kansha.PNG';

const Projects = () => {
    const settings =  {
        dots: true,
        duration: 100,
        shift: 30,
        autoplay: true,
        autoplaySpeed: 4000,
      };

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

    return(
        <div className='projectDiv'>
            <h1>Portfolio</h1>
            <Slider {...settings}>
            <div className='projectContainer'>
                <h3>Water My Plants</h3>
                <div className='imageHolder'>
                    <img src={WaterMyPlants} alt='Water My Plants' className='projectImg'/>
                    <button className='projectButton' onClick={WMPLink}>
                            View the code for Water My Plants
                    </button>
                </div> 
            </div>
            <div className='projectContainer'>
                <h3>Split The Bill</h3>
                <div className='imageHolder'>
                    <img src={SplitTheBill} alt='Split The Bill' className='projectImg' />
                    <button className='projectButton' onClick={STBLink}>
                            View the code for Split The Bill
                    </button>
                </div>
            </div>
            <div className='projectContainer'>
                <h3>WanderLust</h3>
                <div className='imageHolder'>
                    <img src={WanderLust} alt='WanderLust' className='projectImg' />
                    <button className='projectButton' onClick={WLLink}>
                            View the code for WanderLust
                    </button>
                </div>
            </div>
            <div className='projectContainer'>
                <h3>Kansha</h3>
                <div className='imageHolder'>
                    <img src={Kansha} alt='Kansha' className='projectImg' />              
                    <button className='projectButton' onClick={KLink}>
                            View the code for Kansha
                    </button>
                </div>
            </div>
            </Slider>
        </div>
    )
}

export default Projects;