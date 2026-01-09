"use client";
import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import CourseCard from "@/components/CourseCard";

const CourseListSection = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch courses", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Container className="text-center py-5">
        <Spinner animation="border" variant="warning" />
        <p className="mt-2 text-muted">Loading amazing courses...</p>
      </Container>
    );
  }

  return (
    <div className="lonyo-section-padding" style={{ backgroundColor: "#fff" }}>
      <Container>
        <div
          className="lonyo-section-title center max-width-750 pb-40"
          data-aos="fade-up"
        >
          <h2>Explore Our Course Catalog</h2>
          <p>
            Choose from our selection of premium courses and start learning
            today!
          </p>
        </div>
        <Row>
          {courses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CourseListSection;
