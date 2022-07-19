import { useState, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
// import projectData from "./../project-data.json";

export default function ProjectsPage(props) {
  const [projects, setProject] = useState([]);

  //this effect will run only once on initial render.
  //to do it we set the dependency array empty
  //when the `props.projects` updates
  useEffect(() => {
    setProject(props.projects);
  }, [props.projects]);

  return (
    <div>
      <h2>Projects</h2>
      {projects.map((project) => {
        return (
          <div key={project._id} className="project">
            <h3>
              <Link to={`/projects/${project._id}`}>{project.name}</Link>
            </h3>
            <p>{project.technologies}</p>
          </div>
        );
      })}
    </div>
  );
}
