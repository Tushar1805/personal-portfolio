import React from "react";
import { NavLink } from "react-bootstrap";
import PropTypes from "prop-types";

import "./card.css";

export const ProjectCard = ({ title, description, imgUrl, view, source }) => {
  return (
    <div className="project-container">
      <div className="project-card">
        <img
          src={imgUrl}
          // className="itemImage"
          className="card-img-top"
          alt="image"></img>
        <h2 className="project-title"> {title}</h2>
        <div className="pro-details">
          <p> {description}</p>
          <div className="pro-btn">
            {/* <NavLink
              href={view}
              target="_blank"
              className="btn btn-outline-secondary border-0">
              <span>Details</span>
            </NavLink>
            <NavLink
              href={source}
              target="_blank"
              className="btn btn-outline-secondary border-0">
              <span>Source</span>
            </NavLink> */}
            <a
              href={view}
              target="_blank"
              className="btn btn-outline-secondary border-0"
              rel="noreferrer">
              Go to {title}
            </a>
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
    // <div className="project">
    //   <div className="card text-center bg-dark animate__animated animate__fadeInUp relative max-w-xs overflow-hidden rounded-2xl shadow-lg group">
    //     <div className="overflow">
    //       <img src={imgUrl} alt="a wallpaper" className="card-img-top" />
    //     </div>
    //     <div className="card-body text-light">
    //       <h4 className="card-title">{title}</h4>
    //       <p className="card-text text-secondary">{description}</p>
    //       <a
    //         href={view}
    //         target="_blank"
    //         className="btn btn-outline-secondary border-0"
    //         rel="noreferrer">
    //         Go to {title}
    //       </a>
    //     </div>
    //   </div>
    // </div>
  );
};
