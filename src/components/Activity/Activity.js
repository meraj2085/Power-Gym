import React from "react";
import profile from "../../IMG_7151.jpg";
import "./Activity.css";
const Activity = ({activity}) => {

  return (
    <div className="activity-container">
      <div>
        <div className="profile-container">
          <img src={profile} alt="" />
          <div>
            <p className="name">Meraj Hossain</p>
            <p className="location">Laxmipur, Bangladesh</p>
          </div>
        </div>
        <div className="health-details">
          <div>
               <p className="data">55<span><small>kg</small></span></p>
               <p>Weight</p>
          </div>
          <div>
               <p className="data">5.9<span>ft</span></p>
               <p>Height</p>
          </div>
          <div>
               <p className="data">20<span><small>yrs</small></span></p>
               <p>Age</p>
          </div>
        </div>
        <div>
          <p className="break-header">Add a break</p>
          <div className="break-minutes">
               <p>1m</p>
               <p>2m</p>
               <p>3m</p>
               <p>4m</p>
               <p>5m</p>
          </div>
        </div>
        <div>
          <p className="exercise-header">Exercise Details</p>
          <div className="exercise-time">
               <p>Exercise time</p>
               <p>{activity} minutes</p>
          </div>
          <div className="break-time">
               <p>Break time</p>
               <p>5 minutes</p>
          </div>
        </div>
        <div className="completed-btn">
          <p>Activity Completed</p>
        </div>
      </div>
    </div>
  );
};

export default Activity;
