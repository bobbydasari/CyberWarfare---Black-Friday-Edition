"use client";
import React from "react";
import { Card, Button, Badge, Col } from "react-bootstrap";
import Link from "next/link";

const CourseCard = ({ course }) => {
  return (
    <Col md={4} className="mb-4">
      <Card className="h-100 shadow-sm border-0 transition-transform hover-scale">
        <div style={{ height: "200px", overflow: "hidden" }}>
          <Card.Img
            variant="top"
            src={
              course.image ||
              "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&h=250"
            }
            style={{ objectFit: "cover", height: "100%" }}
          />
        </div>
        <Card.Body className="d-flex flex-column">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <Card.Title className="fw-bold mb-0">{course.title}</Card.Title>
            <Badge
              bg={course.price === 0 ? "success" : "danger"}
              className="ms-2"
            >
              {course.price === 0 ? "FREE" : `$${course.price}`}
            </Badge>
          </div>
          <Card.Text className="text-muted small">
            {course.description.substring(0, 100)}...
          </Card.Text>
          <Link href={`/courses/${course._id}`} className="mt-auto w-100">
            <Button variant="outline-dark" className="w-100 fw-bold border-2">
              View Details
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CourseCard;
