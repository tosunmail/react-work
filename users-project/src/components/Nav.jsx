import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="">

      <h1>Information</h1>
      <NavLink className="ml-3" to="/">Home</NavLink>
      <NavLink to="/users">Users</NavLink>
    </div>
  );
};

export default Nav;
