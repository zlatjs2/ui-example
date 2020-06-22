import React from "react";
import defaultImageUrl from "../../images/default-image.png";

const Thumbnail = ({ url, alt, className }) => {
  return (
    <span
      className={`thumbnail ${className}`}
      style={{ backgroundImage: `url(${url}), url(${defaultImageUrl})` }}
      data-label={alt}
    ></span>
  );
};

export default Thumbnail;
