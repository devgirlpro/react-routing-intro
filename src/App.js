import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ErrorPage from "./pages/ErrorPage";
import HomePagewithNavigate from "./pages/HomePagewithNavigate";
import projectData from "./project-data.json";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import ProjectDetailsPage2 from "./pages/ProjectDetailsPage2";
import QueryStringExample from "./pages/QueryStringExample";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<HomePagewithNavigate />} />
        <Route path="/about" element={<AboutPage />} />
        {/* <Route path="/projects" element={<ProjectsPage />} /> */}
        <Route
          path="/projects"
          element={<ProjectsPage projects={projectData} />}
        />
        <Route path="/projects/:projectId" element={<ProjectDetailsPage2 />} />
        <Route path="/example" element={<QueryStringExample />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
