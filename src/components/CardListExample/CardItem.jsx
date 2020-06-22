import React from "react";
import Thumbnail from "../Thumbnail/Thumbnail.jsx";
import Rating from "../Rating/Rating.jsx";
import common from "../../helpers/common.js";

const CardItem = ({ title, label, hilight, price, comment, score, thumbnail, writer }) => {
  return (
    <li className="card-item">
      <Thumbnail url={thumbnail} className="card-item__thumbnail" alt="썸네일 이미지" />
      <div className="card-item__info">
        <span className="text-secondary">{label}</span>
        <em className="text-primary">{title}</em>
        <strong className="text-primary color-hilight">{common.comma(hilight)}</strong>
        {price && <del className="text-secondary">{common.comma(price)}</del>}
      </div>

      <div className="card-item__rating">
        {score >= 0 && <Rating value={score} />}
        <em className="text-secondary writer">{writer}</em>
        {comment && <span className="text-secondary">{comment}</span>}
      </div>
    </li>
  );
};

export default CardItem;
