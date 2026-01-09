"use client";
import React, { useEffect, useRef, useState } from "react";

const ScrollToTop = () => {
  const progressPathRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const progressPath = progressPathRef.current;
    if (!progressPath) return;

    const pathLength = progressPath.getTotalLength();
    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = `${pathLength}`;

    const updateProgress = () => {
      const scroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = `${progress}`;
    };

    const handleScroll = () => {
      updateProgress();
      setIsActive(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    updateProgress();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="paginacontainer"
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        zIndex: 9999,
        width: "auto",
        height: "auto",
      }}
    >
      <div
        className={`progress-wrap ${isActive ? "active-progress" : ""}`}
        onClick={scrollToTop}
        style={{
          position: "relative",
          width: "50px",
          height: "50px",
          cursor: "pointer",
          display: isActive ? "flex" : "none",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          backgroundColor: "#fff",
          transition: "all 0.3s ease-out",
          overflow: "hidden",
        }}
      >
        <svg
          className="progress-circle svg-content"
          width="50"
          height="50"
          viewBox="-1 -1 102 102"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            transform: "rotate(-90deg)",
          }}
        >
          <path
            ref={progressPathRef}
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            fill="none"
            stroke="#ffc107"
            strokeWidth="3"
          />
        </svg>
        <div
          className="top-arrow"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            width="12"
            height="20"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.999999 1L8 8L1 15"
              stroke="#142D6F"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ScrollToTop;
