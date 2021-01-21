import React from 'react';
import github from '../assets/icons/github.svg';

const ProjectCard = ({ project: { name, image, github_url } }) => {
  return (
    <div className="project_card col-md-6 col-lg-4 my-2">
      <figure className="project_card_wrapper">
        <div>
          {/* <a href='testing' target='_blank' rel="noreferrer"> */}
          <img src={image} alt={name} className="project_card_image" />
        </div>
        {/* </a> */}
        <div className="project_card_title">
          <a href={github_url} target="_blank" rel="noreferrer">
            <img
              src={github}
              alt="git hub link"
              className="project_card_icon"
            />
          </a>
          {name}
        </div>
      </figure>
    </div>
  );
};

export default ProjectCard;
