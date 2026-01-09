"use client";
import React from "react";

const AboutMission = () => {
  return (
    <div className="lonyo-section-padding1 py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div
              className="lonyo-about-us-thumb2 pr-51"
              data-aos="fade-up"
              data-aos-duration="700"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&h=800&q=80"
                alt="About Us"
              />
            </div>
          </div>
          <div className="col-lg-7 d-flex align-items-center">
            <div
              className="lonyo-default-content pl-32"
              data-aos="fade-up"
              data-aos-duration="900"
            >
              <h2>About Our Learning Platform</h2>
              <p>
                Welcome to our premium course subscription platform! We are
                dedicated to making quality education accessible to everyone,
                especially during our exclusive Black Friday sale.
              </p>
              <p>
                Our mission is to empower learners worldwide by providing access
                to top-tier courses across various disciplines. Whether you're
                looking to advance your career, learn a new skill, or pursue a
                passion, we have the perfect course for you.
              </p>
              <p>
                <strong>Why Choose Us?</strong>
              </p>
              <ul>
                <li>✓ High-quality courses curated by industry experts</li>
                <li>✓ Flexible learning at your own pace</li>
                <li>✓ Affordable pricing with exclusive discounts</li>
                <li>✓ Lifetime access to enrolled courses</li>
                <li>✓ Community support and networking opportunities</li>
              </ul>
              <p>
                Join thousands of learners who have transformed their careers
                and lives through our platform. Start your learning journey
                today!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMission;
