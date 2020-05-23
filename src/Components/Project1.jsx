import React from "react";

const date = new Date();
const currentTime = date.getHours();

let greeting;

const customStyle1 = {
  color: ""
};

if (currentTime < 12) {
  greeting = "Good Morning";
  customStyle1.color = "red";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  customStyle1.color = "green";
} else {
  greeting = "Good Night";
  customStyle1.color = "blue";
}

function Project1() {
  return (
    <h1 className="heading1" style={customStyle1}>
      {greeting} {date.getHours()}:{date.getMinutes()}
    </h1>
  );
}

export default Project1;
