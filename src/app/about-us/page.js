import React from "react";
import AboutMission from "@/components/about-us/AboutMission";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "About Us - CourseApp",
  description:
    "Learn more about our mission to provide quality education at affordable prices.",
};

const AboutUsPage = () => {
  return (
    <Wrapper>
      <div style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          <div className="py-5 text-center">
            <h1 className="display-4 fw-bold" data-aos="fade-up">
              About Us
            </h1>
            <p
              className="lead text-muted"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Empowering learners worldwide through quality education
            </p>
          </div>
        </div>
      </div>
      <AboutMission />
    </Wrapper>
  );
};

export default AboutUsPage;
