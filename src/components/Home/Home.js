import React, { useEffect, useState } from 'react';
import Exercises from '../Exercises/Exercises';
import './Home.css'
import Activity from '../Activity/Activity';

const Home = () => {
     const [exercises, setExercises] = useState([]);
     useEffect(()=>{
          fetch('data.json')
          .then(res => res.json())
          .then(data => setExercises(data))
     },[])
     return (
          <div>
               <div className='home-container'>
                    <Exercises exercises={exercises}></Exercises>
                    <div className='activity-container-main'>
                         <Activity></Activity>
                    </div>
               </div>
          </div>
     );
};

export default Home;