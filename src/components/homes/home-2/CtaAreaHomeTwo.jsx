import React from "react";

const CtaAreaHomeTwo = () => {
  return (
    <section className="lonyo-section-padding7 light-bg position-relative overflow-hidden">
      <div className="lonyo-cta-shape1">
        <img
          src="/assets/images/shape/shape7.svg"
          alt=""
          onError={(e) => (e.target.style.display = "none")}
        />
      </div>
      <div className="container">
        <div className="lonyo-section-title center max-width-750 pb-40">
          <h2 className="title">
            💎 Unlock More Courses, Achieve More Goals 💎
          </h2>
          <p style={{ fontSize: "24px", lineHeight: "35px" }}>
            Expand your knowledge by exploring our complete course catalog. The
            more you learn, the more you <span className="fw-bold">GROW</span>.
            Don't miss out on exclusive{" "}
            <span className="fw-bold">Black Friday Deals</span>!
          </p>
          <div className="mt-50" data-aos="fade-up" data-aos-duration="700">
            {/* CTA buttons can be added here if needed */}
          </div>
        </div>
      </div>
      <div className="lonyo-cta-shape2">
        <img
          src="/assets/images/shape/shape8.svg"
          alt=""
          onError={(e) => (e.target.style.display = "none")}
        />
      </div>
    </section>
  );
};

export default CtaAreaHomeTwo;
