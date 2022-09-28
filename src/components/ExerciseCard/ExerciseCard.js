import React from 'react';
import './ExerciseCard.css'

const ExerciseCard = ({exercise}) => {
     const {id, image, name, timeRequired} = exercise;
     return (
          <div>
               <div className='exercise-card'>
               <img src={image} alt="" />
               <div className='exercise-details'>
                    <h6>{name}</h6>
                    <p>Time required : {timeRequired}m</p>
               </div>
               <div className='exercise-btn-container'>
                    <button className='exercise-btn'>Add to list</button>
               </div>
               </div>
          </div>
     );
};

export default ExerciseCard;