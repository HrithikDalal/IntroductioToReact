import React from "react";

const img = "https://picsum.photos/200";

function Images() {
  return (
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
      <img alt="random thongs" src={img} />
      <img alt="random thongs" src={img} />
      <img alt="random thongs" src={img + "?grayscale"} />
    </div>
  );
}

export default Images;
