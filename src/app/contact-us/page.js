import React from "react";
import ContactusArea from "@/components/contact-us/ContactusArea";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Contact Us - CourseApp",
  description:
    "Get in touch with us for any questions or support regarding our courses.",
};

const ContactUsPage = () => {
  return (
    <Wrapper>
      <div style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          <div className="py-5 text-center">
            <h1 className="display-4 fw-bold" data-aos="fade-up">
              Contact Us
            </h1>
            <p
              className="lead text-muted"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              We'd love to hear from you!
            </p>
          </div>
        </div>
      </div>
      <ContactusArea />
    </Wrapper>
  );
};

export default ContactUsPage;
