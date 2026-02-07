// components/navbar.js


"use client";
import React from "react";
import { FaHeart, FaShoppingBag, FaUser, FaHome } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <header className="navbar">
 
        {/* Logo */}
       
<div>
        {/* Links */}
        <nav className="nav-links">
              <div className="logo">
          <img src="clothes.jpg" alt="Tingtales" />
        </div>
       <FaHome /><a href="#">Home</a>
          <FaHome /><a href="#">Our Category</a>
          <FaHome /><a href="#">About Us</a>
          <FaHome /><a href="#">Contact Us</a>
          <FaHome /><a href="#">FAQs</a>
        </nav>
</div>
        {/* Icons */}
        <div className="nav-icons">
          <FaHeart />
          <FaShoppingBag />
          <span className="lang">EN</span>
          <FaUser />
        </div>
      </header>

      <style jsx>{`
        * {
          box-sizing: border-box;
          font-family: Arial, Helvetica, sans-serif;
          color: #999;
        }

        .navbar {
          width: 100%;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 60px;
          border-bottom: 1px solid #e5e5e5;
          background-color: #fff;
          border-top-right-radius: 15px;
          border-top-left-radius: 15px;
        }

        /* Logo */
        .logo img {
          height: 35px;
          margin-right: 15px;
        }

        /* Links */
        .nav-links {
          display: flex;
          align-items: center;
          
        }

        .nav-links a {
          text-decoration: none;
          color: #555;
          font-size: 14px;
          transition: color 0.3s ease;
          margin-right: 15px;
          margin-left: 3px;
        }

        .nav-links a:hover {
          color: #000;
        }

        /* Icons */
        .nav-icons {
          display: flex;
          align-items: center;
          gap: 18px;
          font-size: 16px;
          color: #444;
          cursor: pointer;
        }

        .nav-icons :global(svg) {
          transition: color 0.3s ease;
        }

        .nav-icons :global(svg):hover,
        .lang:hover {
          color: #000;
        }

        .lang {
          font-size: 13px;
          font-weight: 500;
          color: #000;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .nav-links {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
