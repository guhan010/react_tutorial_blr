import React from "react";
import { NavLink } from "react-router-dom";
import "./About.css";

const Home = () => {
  return (
    <div>
      <ul style={{ textDecoration: "none" }}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/portfolio">Portfolio</NavLink>
        </li>
        <li>
          <NavLink to="/project">Project</NavLink>
        </li>
        <li>
          <NavLink to="/inbox">Inbox</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Home;
