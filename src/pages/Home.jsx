import React from 'react';
import './Home.css';
import Looking from './looking';
import Reviews from '../components/review';
import Ribbon from '../components/MovingRibbon';

const Home = () => {
    return (
        <div className='main-content'>
            <h1>HOME PAGE</h1>
            <div className='lok-section'>
               <Looking/> 
            </div>
            <div className='ribbon'>
                <Ribbon/>
            </div>
            <div className='rewi'>
                <Reviews/>
            </div>
        </div>
    );
};

export default Home;