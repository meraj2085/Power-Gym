import React from "react";
import profile from "../../IMG_7151.jpg";
import "./Activity.css";
const Activity = () => {
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
               <p className="data">5.8</p>
               <p>Height</p>
          </div>
          <div>
               <p className="data">20<span><small>yrs</small></span></p>
               <p>Age</p>
          </div>
        </div>
      </div>
      {/* <p className='activity-header'>Exercise Details</p> */}
    </div>
  );
};

export default Activity;
