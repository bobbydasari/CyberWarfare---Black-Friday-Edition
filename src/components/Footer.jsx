"use client";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
  FaSnapchatGhost,
  FaRedditAlien,
} from "react-icons/fa";
import { FaXTwitter, FaThreads } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      className="lonyo-footer-section"
      style={{
        backgroundColor: "#1a1a1a",
        color: "#ffffff",
        padding: "60px 0 30px",
      }}
    >
      <div className="container">
        <div className="lonyo-footer-one">
          <div className="row">
            <div className="col-xxl-4 col-xl-12 col-md-6">
              <div className="lonyo-footer-textarea">
                <Link href="/">
                  <img
                    src="/assets/images/logo.png"
                    alt="Course App Logo"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "block";
                    }}
                  />
                  <h3
                    style={{
                      display: "none",
                      color: "var(--primary-color)",
                      fontSize: "1.5rem",
                      fontWeight: "700",
                    }}
                  >
                    CourseApp
                  </h3>
                </Link>

                <div
                  className="lonyo-social-wrap"
                  style={{ marginTop: "20px" }}
                >
                  <ul
                    style={{
                      display: "flex",
                      gap: "15px",
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      flexWrap: "wrap",
                    }}
                  >
                    <li style={{ listStyle: "none" }}>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li style={{ listStyle: "none" }}>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaXTwitter />
                      </a>
                    </li>
                    <li style={{ listStyle: "none" }}>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                      </a>
                    </li>
                    <li style={{ listStyle: "none" }}>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li style={{ listStyle: "none" }}>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaTelegramPlane />
                      </a>
                    </li>
                    <li style={{ listStyle: "none" }}>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaThreads />
                      </a>
                    </li>
                    <li style={{ listStyle: "none" }}>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaSnapchatGhost />
                      </a>
                    </li>
                    <li style={{ listStyle: "none" }}>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaRedditAlien />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-md-6">
              <div className="lonyo-footer-menu">
                <h4>Quick Links</h4>
                <div className="lonyo-footer-menu-wrap">
                  <div className="lonyo-footer-menu1">
                    <ul>
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="/about-us">About Us</Link>
                      </li>
                      <li>
                        <Link href="/my-courses">My Courses</Link>
                      </li>
                      <li>
                        <Link href="/contact-us">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-md-6">
              <div className="lonyo-footer-menu pl-30">
                <h4>Privacy Links</h4>
                <ul>
                  <li>
                    <Link href="#">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="#">Terms &amp; Conditions</Link>
                  </li>
                  <li>
                    <Link href="#">Refund Policy</Link>
                  </li>
                  <li>
                    <Link href="#">Cookie Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="lonyo-footer-bottom-text">
          <p>
            <small>
              © Copyright{" "}
              <span id="current-year">{new Date().getFullYear()}</span>{" "}
              CourseApp, All Rights Reserved
            </small>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
