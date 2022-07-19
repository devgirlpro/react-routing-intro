//this page is same as ProjectDetailsPage just use useEffect here
// to access URL Params

import React from "react";
import projectData from "./../project-data.json";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ProjectDetailsPage2(props) {
  const [foundProject, setFoundProject] = useState(null);

  const projectId = useParams();
  console.log("projectId ==>", projectId);

  // This effect depends on the `projectId` value.
  // It will run on initial render, and every time
  // the `projectId` value updates.
  //one way using useEffect
  useEffect(() => {
    const project = projectData.find((projectObj) => {
      return projectObj._id === projectId;
    });

    if (project) {
      setFoundProject(project);
    }
  }, [projectId]);

  //Get the project by id from server
  //second way using useEffect

  //   useEffect(() => {
  //     axios.get("http://example.com/api/project" + projectId).then((response) => {
  //       setFoundProject(response.data);
  //     });
  //   }, [projectId]);

  return (
    <>
      <h2>ProjectDetailsPage2</h2>

      {!foundProject && <h3>Project not found!</h3>}

      {foundProject && (
        <>
          <h2>{foundProject.name}</h2>
          <h3>Tech Stack: {foundProject.technologies}</h3>
          <p>{foundProject.description}</p>
          <Link to="/projects">Back</Link>
        </>
      )}
    </>
  );
}
