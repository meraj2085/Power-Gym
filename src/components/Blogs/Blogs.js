import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div>
      <h1 className="blogs-title">
        <span style={{ color: "blueviolet" }}>B</span>logs
      </h1>
      <hr style={{ width: "200px" }} />
      <div className="questions-container">
        <div>
          <p className="question">1: How does react works?</p>
          <p>
            Ans: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos expedita sapiente, culpa sint ullam pariatur inventore
            molestiae sed eligendi est.
          </p>
        </div>
        <div>
          <p className="question">2: Whats the difference between props & state?</p>
          <p>
            Ans: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos expedita sapiente, culpa sint ullam pariatur inventore
            molestiae sed eligendi est.
          </p>
        </div>
        <div>
          <p className="question">3: On which purposes useEffect() is used except Api data load?</p>
          <p>
            Ans: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos expedita sapiente, culpa sint ullam pariatur inventore
            molestiae sed eligendi est.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
