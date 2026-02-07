// components/footer.jsx
"use client";
import React from "react";
import { FaHeart } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="overlay" />

      <div className="content">
        {/* Brand */}
        <div className="brand">
          <h3>Tinytoes</h3>
          <p>
            Ipsum in eos qui consequatur ab cum maxime.
            Soluta dolore ipsum in eos qui consequatur ab cum maxime.
            Soluta dolore
          </p>
        </div>

        {/* Help */}
        <div className="column">
          <h4>Let Us Help</h4>
          <ul>
            <li>My Account</li>
            <li>FAQs</li>
            <li>Categories</li>
            <li>All Products</li>
          </ul>
        </div>

        {/* Policies */}
        <div className="column">
          <h4>Policies</h4>
          <ul>
            <li>Refund Policy</li>
            <li>About Us</li>
            <li>Cancellation Policy</li>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Subscribe */}
        <div className="subscribe">
          <h4>Send Email</h4>

          <div className="input-group">
            <input type="email" placeholder="Email address" />
            <button>Send</button>
          </div>

          <p className="follow">Follow Us</p>
          <div className="social">
            <FaHeart />
            <FaHeart />
            <FaHeart />
            <FaHeart />
            <FaHeart />
            <FaHeart />
            
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          position: relative;
          border-radius: 14px;
          overflow: hidden;
          background-image: url("https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e");
          background-size: cover;
          background-position: center;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(63, 58, 53, 0.8);
        }

        .content {
          position: relative;
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
          gap: 40px;
          padding: 50px;
          color: #fff;
        }

        .brand h3 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .brand p {
          font-size: 14px;
          line-height: 1.6;
          color: #ddd;
          max-width: 260px;
        }

        .column h4,
        .subscribe h4 {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 14px;
        }

        .column ul {
          list-style: none;
        }

        .column ul li {
          font-size: 14px;
          color: #ddd;
          margin-bottom: 8px;
          cursor: pointer;
        }

        .input-group {
          display: flex;
          background: #fff;
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 16px;
        }

        .input-group input {
          flex: 1;
          border: none;
          padding: 10px 14px;
          font-size: 14px;
          outline: none;
        }

        .input-group button {
          background: #c49a8d;
          color: #fff;
          border: none;
          padding: 0 20px;
          cursor: pointer;
          margin: 7px;
          border-radius: 7px;
          width: 100px;
          height: 40px;
        }

        .follow {
          font-size: 14px;
          margin-bottom: 8px;
        }

        .social {
          display: flex;
          gap: 14px;
        }

        .social span {
          font-size: 14px;
          cursor: pointer;
        }

        @media (max-width: 900px) {
          .content {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {
          .content {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
