import React from "react";

const fname = "Hrithik";
const lname = "Dalal";

const customStyle = {
  color: "pink",
  fontSize: "25px",
  border: "1px dashed black"
};

function Heading() {
  return (
    <div>
      <h1 className="heading">Hello {fname + " " + lname}</h1>
      <h1 contentEditable="true" spellCheck="false">
        Hello {fname} {lname}
      </h1>
      <h1 style={customStyle}>Hello {`${fname} ${lname}`}</h1>
      <h1 style={{ color: "yellow" }}>Hello {fname}</h1>
    </div>
  );
}

export default Heading;
