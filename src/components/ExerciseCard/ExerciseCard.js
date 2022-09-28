import React from 'react';
import './ExerciseCard.css'

const ExerciseCard = ({exercise, activity, setActivity}) => {
     const {id, image, name, timeRequired} = exercise;

     const handleExerciseTime = () =>{
          setActivity(activity + timeRequired)
     }
     return (
          <div>
               <div className='exercise-card'>
               <img src={image} alt="" />
               <div className='exercise-details'>
                    <h6>{name}</h6>
                    <p>Time required : {timeRequired}m</p>
               </div>
               <div onClick={handleExerciseTime} className='exercise-btn-container'>
                    <button className='exercise-btn'>Add to list</button>
               </div>
               </div>
          </div>
     );
};

export default ExerciseCard;