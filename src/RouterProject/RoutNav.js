import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Home from "../RouterProject/Home";
import About from "../RouterProject/About";
import Contact from "../RouterProject/Contact";
import SideBar from "../RouterProject/SideBar";

const RoutNav = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
    console.log('bar');
    
  };

  return (
    <>

      <SideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />


      <div className="navbar">
        <h2 className="logo">Logo</h2>
        <div className="bar">
          <FaBars onClick={toggleSidebar} />
        </div>
        <ul className="list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="router">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
};

export default RoutNav;
