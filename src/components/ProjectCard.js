import React from "react";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <div className="item">
      <div className="proj-imgbx">
        <img src={imgUrl} className="itemImage" alt="" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </div>
  );
};
