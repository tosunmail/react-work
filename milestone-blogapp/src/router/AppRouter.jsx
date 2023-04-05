import React from "react";
import Header from "../components/Navbar";
import Dashboard from "../pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import NewBlog from "../pages/NewBlog";
import PrivateRouter from "./PrivateRouter";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "../pages/About";
const AppRouter = () => {
  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="new-blog" element={<NewBlog/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
      </Routes>
    </>
  );
};

export default AppRouter;
