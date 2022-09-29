import React, { useEffect, useState } from "react";
import profile from "../../IMG_7151.jpg";
import "./Activity.css";
import { ToastContainer, toast } from 'react-toastify';


const Activity = ({activity}) => {
  const notify = () => toast.success("Congratulations! You did it");
  const [breakTime, setBreakTime] = useState(0)

  const handleBreak = (time) =>{
    setBreakTime(time)
    localStorage.setItem('BreakTime', time)
  }


  useEffect(()=>{
    const storedCart = localStorage.getItem("BreakTime");
    if (storedCart) {
      setBreakTime(storedCart);
    }
  },[])

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
               <p onClick={()=>handleBreak(1)}>1m</p>
               <p onClick={()=>handleBreak(2)}>2m</p>
               <p onClick={()=>handleBreak(3)}>3m</p>
               <p onClick={()=>handleBreak(4)}>4m</p>
               <p onClick={()=>handleBreak(5)}>5m</p>
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
               <p>{breakTime} minutes</p>
          </div>
        </div>
        <div onClick={notify} className="completed-btn">
          <p>Activity Completed</p>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Activity;
