import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Link, Route, Routes } from "react-router-dom";

const SideBar = () => {
  
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen); 
  };

  return (
    <>
      <div className={`sideBar ${isSidebarOpen ? "sideBar-show" : " "}`}>
        <FaTimes className="times" onClick={toggleSidebar} />
        <div className="lists">
          <ul>
            <li>
              <Link to="/" onClick={toggleSidebar}>
                <span className="link-dark">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleSidebar}>
                <span className="link-dark">About</span>
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleSidebar}>
                <span className="link-dark">Contact</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<div></div>} />
            <Route path="/about" element={<div></div>} />
            <Route path="/contact" element={<div></div>} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default SideBar;
