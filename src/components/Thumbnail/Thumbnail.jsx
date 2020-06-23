import React from "react";
import defaultImageUrl from "../../images/default-image.png";

const Thumbnail = ({ url, alt, className }) => {
  return (
    <a
      href="#"
      className={`thumbnail ${className}`}
      style={{ backgroundImage: `url(${url}), url(${defaultImageUrl})` }}
    >
      <span className="ir-pm">{alt}</span>
    </a>
  );
};

export default Thumbnail;
