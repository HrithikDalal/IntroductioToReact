import React from "react";

const fname = "Hrithik";
const lname = "Dalal";
const date = new Date();
const currYear = date.getFullYear();

function Footer() {
  return (
    <div>
      <p>Created by {fname + " " + lname}</p>
      <p>
        Created In {date.getMonth()} {currYear}{" "}
      </p>
    </div>
  );
}

export default Footer;
