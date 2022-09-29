import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs-container">
      <h1 className="blogs-title">
        <span style={{ color: "blueviolet" }}>B</span>logs
      </h1>
      <div className="accordion container my-5" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              How does react works?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                React divides the UI into reusable pieces of code known as
                components. React components works similarly as JavaScript
                functions as they accept inputs called properties or props.
                React creates a virtual dom and uses diff algorithm to get the
                difference and only change the specific dom node. We can write
                like HTML, its called JSX. There is a compiler named babble, it
                can convert the latest version of JavaScript code into the one
                that the browser understands
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              What's the difference between props & state?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                Props are arguments you pass to React components. They are
                passed through HTML templates and are a method to pass data from
                one component to another. Props can be compared to functional
                arguments. They are passed to the component in the same manner
                arguments are passed in a function. Props are read only they can
                never be changed. A state is an updatable structure containing
                information or data about a dynamic component, where the
                information can change over time. Anytime the data inside these
                components are changed, State re-renders the app to reflect
                these changes. Generally, these changes in data happen due to
                user-triggered events on the front end. A state can be accessed
                or modified only on the inside or directly by a component
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              On which purposes useEffect() is used except Api data load?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                useEffect hook is used form many purposes. These are State
                management, Conditional rendering, add an event listener,
                directly update the DOM,Toggle flags and store it
                in state.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
