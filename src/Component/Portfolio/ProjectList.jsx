import React from "react";
import Project from "./Project";
import { projects } from "./projects";




const ProjectList = ({ projects }) => {
    return (
      <div className="project-list">
        {projects.map((project, index) => (
          <Project key={index} name={project.name} category={project.category} describe={project.describe} link={project.link} tag={project.tag} />
        ))}
      </div>
    );
  };
  
  export default ProjectList;