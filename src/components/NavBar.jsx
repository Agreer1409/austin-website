import { NavLink } from "react-router-dom";
import React from "react";

const NavBar = () => {
  return (
    <div className="bg-[#595C70] text-white text-[30px] font-bold font-jet rounded-b-3xl rounded-bl-3xl flex justify-between pt-6 pb-5 px-20 mx-6">
      <h1>
        <NavLink to="/">Home</NavLink>
      </h1>
      <h1>
        <NavLink to="/projects">Projects</NavLink>
      </h1>
      <h1>
        <NavLink to="/experience">Experience</NavLink>
      </h1>
      <h1>
        <NavLink to="/contact">Contact</NavLink>
      </h1>
    </div>
  );
};

export default NavBar;
