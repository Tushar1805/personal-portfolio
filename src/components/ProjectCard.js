import React from "react";
import { NavLink } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, view, source }) => {
  return (
    // <div className="item">
    //   <div className="proj-imgbx">
    //     <img src={imgUrl} className="itemImage" alt="" />
    //     <div className="proj-txtx">
    //       <h4>{title}</h4>
    //       <span>{description}</span>
    //     </div>
    //   </div>
    // </div>
    <div className="project-container">
      <div className="project-card">
        <img src={imgUrl} className="itemImage" alt="image"></img>
        <h2 className="project-title"> {title}</h2>
        <div className="pro-details">
          <p> {description}</p>
          <div className="pro-btn">
            <NavLink href={view} target="_blank" className="button">
              Details
            </NavLink>
            <NavLink href={source} target="_blank" className="button">
              Source
            </NavLink>
            {/* <button
              onClick={() => {
                <a href={view} target="_blank"></a>;
              }}>
              <span>Details</span>
            </button>
            <button
              onClick={() => {
                <a href={source} target="_blank"></a>;
              }}>
              <span>Source</span>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};
