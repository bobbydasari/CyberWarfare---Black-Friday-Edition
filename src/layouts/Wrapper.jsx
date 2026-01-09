"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "@/components/common/ScrollToTop";

const Wrapper = ({ children }) => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <>
      {children}
      <ScrollToTop />
    </>
  );
};

export default Wrapper;
