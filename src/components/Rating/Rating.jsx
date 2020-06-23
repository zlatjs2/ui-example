import React from "react";

const Rating = ({ value }) => (
  <div className="rating">
    {[...Array(5)].map((star, idx) => {
      const score = idx + 1;

      return <i style={{ backgroundColor: score <= value && "#ffc107" }} key={idx} />;
    })}
    <span className="ir-pm">{`5점 만점에 ${value}점`}</span>
  </div>
);

export default Rating;
