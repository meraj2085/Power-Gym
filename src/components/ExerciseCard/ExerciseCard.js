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
               <button className='exercise-btn-container'>
                    <p className='exercise-btn'>Add to list</p>
               </button>
               </div>
          </div>
     );
};

export default ExerciseCard;