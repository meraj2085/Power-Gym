import React from 'react';
import ExerciseCard from '../ExerciseCard/ExerciseCard';
import './Exercises.css'
const Exercises = ({exercises, activity, setActivity}) => {
     return (
          <div>
               <p className='exercise-title'><span>|</span> Select today's exercise</p>
               <div className='exercise-card-container'>
                    {exercises.map(exercise => <ExerciseCard key={exercise.id} exercise={exercise} activity={activity} setActivity={setActivity}></ExerciseCard>)}
               </div>
          </div>
     );
};

export default Exercises;