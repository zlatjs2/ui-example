import React from "react";

const NoResult = ({ message }) => {
  return (
    <div className="no-result">
      <p className="text-secondary">{message}</p>
    </div>
  );
};

export default NoResult;
