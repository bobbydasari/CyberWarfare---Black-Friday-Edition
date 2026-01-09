"use client";
import React, { useState } from "react";

const FinancialUpdatesHomeTwo = () => {
  // Dummy FAQs data
  const faqs = [
    {
      id: 1,
      question: "What is the Black Friday course subscription?",
      answer:
        "Our Black Friday course subscription gives you exclusive access to premium courses at heavily discounted prices. This is a limited-time offer where you can enroll in multiple courses and learn new skills at a fraction of the regular cost.",
      delay: 600,
    },
    {
      id: 2,
      question: "How do I subscribe to a free course?",
      answer:
        "Simply browse our course catalog, find a course marked as 'FREE', click on 'View Details', and then click the 'Subscribe' button. You'll have instant access to all course materials once subscribed.",
      delay: 700,
    },
    {
      id: 3,
      question: "Can I use promo codes for paid courses?",
      answer:
        "Yes! During checkout for paid courses, you can enter promo codes like 'BFSALE25' to get additional discounts. Make sure to apply the code before completing your subscription.",
      delay: 800,
    },
    {
      id: 4,
      question: "Where can I find my enrolled courses?",
      answer:
        "After logging in, navigate to 'My Courses' from the top menu. This page will display all the courses you've subscribed to, along with your progress and access links to course materials.",
      delay: 900,
    },
    {
      id: 5,
      question: "What happens after the Black Friday sale ends?",
      answer:
        "Any courses you subscribe to during the Black Friday sale will remain accessible to you permanently. However, new subscriptions after the sale will be at regular prices.",
      delay: 1000,
    },
    {
      id: 6,
      question: "Do I need to create an account?",
      answer:
        "Yes, you'll need to create a free account to subscribe to courses. This helps us track your progress, save your courses, and provide you with a personalized learning experience.",
      delay: 1100,
    },
  ];

  const [open, setOpen] = useState(null);

  return (
    <div className="lonyo-section-padding3">
      <div className="container">
        <div className="row justify-content-center my-5">
          <div className="col-lg-9 d-flex align-items-center border-bottom">
            <div
              className="lonyo-default-content pr-100"
              data-aos="fade-up"
              data-aos-duration="700"
            >
              <h2>Frequently Asked Questions</h2>
              <div className="mt-50">
                <div className="lonyo-faq-wrap1 mt-5">
                  {faqs.map((item, i) => (
                    <div
                      key={item.id}
                      className={`lonyo-faq-item item2 ${
                        open === i ? "open" : ""
                      }`}
                      data-aos="fade-up"
                      data-aos-duration={item.delay}
                    >
                      <div className="lonyo-faq-header">
                        <h4
                          className="my-3"
                          onClick={() => setOpen(open === i ? null : i)}
                        >
                          {item.question}
                        </h4>
                        <div className="lonyo-active-icon">
                          <img
                            className="plasicon"
                            src="/assets/images/v1/mynus.svg"
                            alt="minus"
                            onError={(e) => {
                              e.target.style.display = "none";
                              e.target.parentElement.innerHTML = "−";
                            }}
                          />
                          <img
                            className="mynusicon"
                            src="/assets/images/v1/plas.svg"
                            alt="plus"
                            onError={(e) => {
                              e.target.style.display = "none";
                              e.target.parentElement.innerHTML = "+";
                            }}
                          />
                        </div>
                      </div>

                      <div className="lonyo-faq-body body2">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialUpdatesHomeTwo;
