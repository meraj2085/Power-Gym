import React from "react";
import "./ExerciseCard.css";

const ExerciseCard = ({ exercise, activity, setActivity }) => {
  const { id, image, name, timeRequired } = exercise;

  const handleExerciseTime = () => {
    setActivity(activity + timeRequired);
  };
  return (
    <div>
      <div className="card" style={{ minWidth: "18rem" }}>
        <img src={image} className="card-img-top" alt="" />
        <div className="card-body">
          <div className="exercise-details">
            <h6>{name}</h6>
            <p>Time required : {timeRequired}m</p>
          </div>
          <div onClick={handleExerciseTime} className="exercise-btn-container">
            <button className="exercise-btn">Add to list</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;
