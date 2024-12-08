import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { Link, Route, Routes } from "react-router-dom";

const SideBar = (props) => {
  const { isSidebarOpen1 } = props;

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setSidebarOpen(isSidebarOpen1);
  }, [isSidebarOpen1]);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className={`sideBar ${isSidebarOpen ? "sideBar-show" : ""}`}>
        <FaTimes className="times" onClick={toggleSidebar} />
        <div className="lists">
          <ul>
            <li>
              <Link to="/">
                <span className="link-dark">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <span className="link-dark">About</span>
              </Link>
            </li>
            <li>
              <Link to="/contact">
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
