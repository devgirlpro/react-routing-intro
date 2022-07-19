import React from "react";
import projectData from "./../project-data.json";
import { useParams, Link } from "react-router-dom";

export default function ProjectDetailsPage(props) {
  const { projectId } = useParams();
  console.log("projectId -->", projectId);

  //method find() return the first found matching element,
  //or 'null' if no matching element is found.

  const foundProject = projectData.find((oneProject) => {
    return oneProject._id === projectId;
  });

  return (
    <>
      <h1>Project Details</h1>
      {!foundProject && <h3>Project not found!</h3>}

      {foundProject && (
        <>
          <h2>Project Name: {foundProject.name}</h2>
          <h3>Tech Stack: {foundProject.technologies}</h3>
          <p>{foundProject.description}</p>
          <Link to="/projects">Back</Link>
        </>
      )}
    </>
  );
}
