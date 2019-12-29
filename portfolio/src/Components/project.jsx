import React from 'react'
import Slider from 'infinite-react-carousel';
import WaterMyPlants from '../Images/WaterMyPlants.PNG';
import SplitTheBill from '../Images/SplitTheBill.PNG';
import WanderLust from '../Images/Wanderlust.PNG';
import Kansha from '../Images/Kansha.PNG';

const Projects = () => {
    const settings =  {
        arrows: false,
        dots: true,
        duration: 100,
        shift: 30,
        autoplay: true,
        autoplaySpeed: 4000,
      };
    return(
        <div className='projectDiv'>
            <Slider {...settings}>
            <div className='projectContainer'>
                <h3>Water My Plants</h3>
                <img src={WaterMyPlants} alt='Water My Plants' className='projectImg'/>
                <button className='projectButton'>
                    <a href='https://github.com/bw-water-plants' target="_blank" rel="noopener noreferrer">
                        View the code for Water My Plants
                    </a>
                </button> 
            </div>
            <div className='projectContainer'>
                <h3>Split The Bill</h3>
                <img src={SplitTheBill} alt='Split The Bill' className='projectImg' />
                <button className='projectButton'>
                    <a href='https://github.com/lambda-split-the-bill' target="_blank" rel="noopener noreferrer">
                        View the code for Split The Bill
                    </a>
                </button>
                
            </div>
            <div className='projectContainer'>
                <h3>WanderLust</h3>
                <img src={WanderLust} alt='WanderLust' className='projectImg' />
                <button className='projectButton'>
                    <a href='https://github.com/Wanderlust1021' target="_blank" rel="noopener noreferrer">
                        View the code for WanderLust
                    </a>
                </button>
                
            </div>
            <div className='projectContainer'>
                <h3>Kansha</h3>
                <img src={Kansha} alt='Kansha' className='projectImg' />              
                <button className='projectButton'>
                    <a href='https://github.com/Lambda-School-Labs/kansha-fe' target="_blank" rel="noopener noreferrer">
                        View the code for Kansha
                    </a>
                </button>
            </div>
            </Slider>
        </div>
    )
}

export default Projects;