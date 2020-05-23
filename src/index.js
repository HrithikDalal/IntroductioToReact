//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import ReactDOM from "react-dom";

const fname = "Hrithik";
const lname = "Dalal";
const num = 7;
const currDate = new Date();
const currYear = currDate.getFullYear();
const img = "https://picsum.photos/200";

const customStyle = {
  color: "pink",
  fontSize: "25px",
  border: "1px dashed black"
};

ReactDOM.render(
  <div>
    {/* <h1 class="heading">Hello name</h1> */}
    <h1 className="heading">Hello {fname + " " + lname}</h1>
    <h1 contentEditable="true" spellCheck="false">
      Hello {fname} {lname}
    </h1>
    <h1 style={customStyle}>Hello {`${fname} ${lname}`}</h1>
    <h1 style={{ color: "yellow" }}>Hello {fname}</h1>
    <ul>
      <li>Item {num}</li>
      <li>Item {3 + 40}</li>
      <li>Item {Math.floor(Math.random() * 10)}</li>
    </ul>
    <div>
      <img
        className="plane-img"
        alt="random thongs"
        src="https://image.shutterstock.com/image-photo/turbines-aircraft-600w-637037008.jpg"
      />
      <img
        className="plane-img"
        alt="random thongs"
        src="https://image.shutterstock.com/image-photo/perspective-view-jet-airliner-flight-600w-186964970.jpg"
      />
      <img
        className="plane-img"
        alt="random thongs"
        src="https://image.shutterstock.com/image-photo/white-passenger-plane-climbs-through-600w-523950889.jpg"
      />
    </div>
    <div>
      <img alt="random thongs" src={img} />
      <img alt="random thongs" src={img} />
      <img alt="random thongs" src={img + "?grayscale"} />
    </div>

    <p>Created by {fname + " " + lname}</p>
    <p>Created by {currYear}</p>
    <p>Created by {currDate.getFullYear()}</p>
  </div>,
  document.getElementById("root")
);
