import React from "react";

const Rating = ({ value }) => {
  return (
    <div className="rating">
      {[...Array(5)].map((star, idx) => {
        const score = idx + 1;

        return <i style={{ backgroundColor: score <= value && "#ffc107" }} key={idx} />;
      })}
    </div>
  );
};

export default Rating;
