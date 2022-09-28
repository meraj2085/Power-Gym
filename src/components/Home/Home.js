import React, { useEffect, useState } from 'react';
import Exercises from '../Exercises/Exercises';
import './Home.css'
import Activity from '../Activity/Activity';

const Home = () => {
     const [exercises, setExercises] = useState([]);
     const [activity, setActivity] = useState(0)

     useEffect(()=>{
          fetch('data.json')
          .then(res => res.json())
          .then(data => setExercises(data))
     },[])


     return (
          <div>
               <div className='home-container'>
                    <Exercises exercises={exercises} activity={activity} setActivity={setActivity}></Exercises>
                    <div className='activity-container-main'>
                         <Activity activity={activity}></Activity>
                    </div>
               </div>
          </div>
     );
};

export default Home;