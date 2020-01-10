import React from 'react'
import '../styles.scss';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import shylaImg from '../Images/ShylaDance.PNG';

const Shyla = () => {
    const { width, height } = useWindowSize()

    return(
        <div className='shylaDiv'>
        <Confetti 
            width={width}
            height={height}
        />
            <h1>Shyla is SUPER COOL</h1>
            <h2>Daddy Loves YA!</h2>
            <img src={shylaImg} alt='shyla dance' /> 
        </div>
    )
}

export default Shyla;