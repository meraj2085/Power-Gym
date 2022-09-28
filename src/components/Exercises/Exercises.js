import React from 'react';
import ExerciseCard from '../ExerciseCard/ExerciseCard';
import './Exercises.css'
const Exercises = ({exercises}) => {
     console.log(exercises)
     return (
          <div>
               <p className='exercise-title'>Select today's exercise</p>
               <div className='exercise-card-container'>
                    {exercises.map(exercise => <ExerciseCard key={exercise.id} exercise={exercise}></ExerciseCard>)}
               </div>
          </div>
     );
};

export default Exercises;