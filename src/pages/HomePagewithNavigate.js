import React, { useState } from "react";
import { Navigate } from "react-router-dom";
const imgURL =
  "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/react-routing/home.gif";

export default function HomePagewithNavigate() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  if (!isLoggedIn) return <Navigate to="/error" />;
  return (
    <>
      <h1>Home-with Navigate</h1>
      <img src={imgURL} alt="home" className="page-img" />
    </>
  );
}
