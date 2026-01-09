"use client";
import React, { useState } from "react";

const ContactusArea = () => {
  const initialState = {
    name: "",
    subject: "",
    email: "",
    message: "",
  };

  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = (values) => {
    const errs = {};
    if (!values.name.trim()) errs.name = "Full name is required.";
    if (!values.subject.trim()) errs.subject = "Subject is required.";
    if (!values.email.trim()) errs.email = "Email is required.";
    else if (!emailRegex.test(values.email))
      errs.email = "Enter a valid email address.";
    if (!values.message.trim()) errs.message = "Message cannot be empty.";
    return errs;
  };

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (Object.keys(errors).length > 0) {
      setErrors(validate({ ...form, [field]: e.target.value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = validate(form);
    setErrors(validation);

    if (Object.keys(validation).length > 0) return;

    setSubmitting(true);
    setSuccess(null);

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      console.log("Form submitted:", form);
      setSuccess("Message sent successfully! We'll get back to you soon.");
      setForm(initialState);
      setErrors({});
      setSubmitting(false);
    }, 1000);
  };

  // Hardcoded contact details
  const contactDetails = {
    contact_email: "support@courseapp.com",
    contact_phone: "+1 (555) 123-4567",
    office_address: "123 Learning Street, Education City, EC 12345, USA",
  };

  return (
    <>
      <div className="lonyo-section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="lonyo-default-content">
                <h2>Just say hello. Here's how to reach us</h2>
                <p className="max-w616">
                  Have a question? We have the answer. Whether you need
                  technical support or want to know more about our courses,
                  we're here to help.
                </p>
                <div className="mt-50">
                  <div className="lonyo-contact-us-info-item">
                    <div className="lonyo-contact-us-icon">
                      <a href={`mailto:${contactDetails.contact_email}`}>
                        <svg
                          width="50"
                          height="50"
                          fill="#ffc107"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                        </svg>
                      </a>
                    </div>
                    <div className="lonyo-contact-us-content">
                      <a href={`mailto:${contactDetails.contact_email}`}>
                        <h4>Send Email:</h4>
                        <p>{contactDetails.contact_email}</p>
                      </a>
                    </div>
                  </div>
                  <div className="lonyo-contact-us-info-item">
                    <div className="lonyo-contact-us-icon">
                      <a href={`tel:${contactDetails.contact_phone}`}>
                        <svg
                          width="50"
                          height="50"
                          fill="#ffc107"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                        </svg>
                      </a>
                    </div>
                    <div className="lonyo-contact-us-content">
                      <a href={`tel:${contactDetails.contact_phone}`}>
                        <h4>Phone Call:</h4>
                        <p>{contactDetails.contact_phone}</p>
                      </a>
                    </div>
                  </div>
                  <div className="lonyo-contact-us-info-item pb-0">
                    <div className="lonyo-contact-us-icon">
                      <svg
                        width="50"
                        height="50"
                        fill="#ffc107"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </div>
                    <div className="lonyo-contact-us-content">
                      <h4>Location:</h4>
                      <p>{contactDetails.office_address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div
                className="lonyo-contact-box box2"
                data-aos="fade-up"
                data-aos-duration="700"
              >
                <h4>Get In Touch</h4>
                <form onSubmit={handleSubmit} noValidate>
                  <div className="lonyo-main-field">
                    <p>Full Name*</p>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={form.name}
                      onChange={handleChange("name")}
                    />
                    {errors.name && (
                      <small className="field-error">{errors.name}</small>
                    )}
                  </div>

                  <div className="lonyo-main-field">
                    <p>Your Subject*</p>
                    <input
                      type="text"
                      placeholder="Your Subject"
                      value={form.subject}
                      onChange={handleChange("subject")}
                    />
                    {errors.subject && (
                      <small className="field-error">{errors.subject}</small>
                    )}
                  </div>

                  <div className="lonyo-main-field">
                    <p>Email address*</p>
                    <input
                      type="email"
                      placeholder="Your email address"
                      value={form.email}
                      onChange={handleChange("email")}
                    />
                    {errors.email && (
                      <small className="field-error">{errors.email}</small>
                    )}
                  </div>

                  <p>Message</p>
                  <div className="lonyo-main-field-textarea">
                    <textarea
                      className="button-text"
                      placeholder="Write your message here..."
                      value={form.message}
                      onChange={handleChange("message")}
                      maxLength={500}
                    ></textarea>
                    <div className="d-flex justify-content-between">
                      {errors.message && (
                        <div className="field-error">{errors.message}</div>
                      )}
                      <small className="text-muted ms-auto">
                        {form.message.length}/500
                      </small>
                    </div>
                  </div>

                  <button
                    className="lonyo-default-btn extra-btn d-block"
                    type="submit"
                    disabled={submitting}
                  >
                    {submitting ? "Sending..." : "Send your message"}
                  </button>

                  {success && (
                    <div className="form-status mt-3 text-center text-success">
                      {success}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="responsive-map">
        <iframe
          className="lonyo-contact-us-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059352203!2d-74.25986613799372!3d40.69714941774136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1704828495011!5m2!1sen!2sin"
          width="600"
          height="300"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};

export default ContactusArea;
