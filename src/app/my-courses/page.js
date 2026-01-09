"use client";
import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Spinner,
  Alert,
  Badge,
} from "react-bootstrap";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Link from "next/link";

export default function MyCoursesPage() {
  const { user, loading: authLoading } = useAuth();
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/auth/login");
      return;
    }

    if (user) {
      fetch("/api/my-courses", {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setSubscriptions(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching my courses", err);
          setLoading(false);
        });
    }
  }, [user, authLoading, router]);

  if (authLoading || loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" variant="warning" />
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">My Enrolled Courses</h2>
        <Badge bg="dark" className="px-3 py-2">
          Total: {subscriptions.length}
        </Badge>
      </div>

      {subscriptions.length === 0 ? (
        <Alert
          variant="info"
          className="text-center p-5 rounded-4 shadow-sm border-0"
        >
          <h4 className="fw-bold">No courses yet!</h4>
          <p>
            You haven't subscribed to any courses yet. Go back to home to find
            something interesting!
          </p>
          <Link href="/">
            <Badge
              bg="warning"
              text="dark"
              className="p-2 cursor-pointer"
              style={{ cursor: "pointer" }}
            >
              Browse Courses
            </Badge>
          </Link>
        </Alert>
      ) : (
        <Row>
          {subscriptions.map((sub) => {
            const course = sub.courseId;
            if (!course) return null;
            return (
              <Col md={4} key={sub._id} className="mb-4">
                <Card className="h-100 shadow-sm border-0 border-top border-warning border-4">
                  <Card.Img
                    variant="top"
                    src={
                      course.image ||
                      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&h=250"
                    }
                    style={{ height: "180px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title className="fw-bold">{course.title}</Card.Title>
                    <hr />
                    <div className="d-flex justify-content-between small text-muted">
                      <span>Price Paid:</span>
                      <span className="fw-bold text-dark">
                        {sub.pricePaid === 0 ? "FREE" : `$${sub.pricePaid}`}
                      </span>
                    </div>
                    <div className="d-flex justify-content-between small text-muted mt-2">
                      <span>Subscribed on:</span>
                      <span>
                        {new Date(sub.subscribedAt).toLocaleDateString()}
                      </span>
                    </div>
                    <Link
                      href={`/courses/${course._id}`}
                      className="mt-3 d-block"
                    >
                      <Badge
                        bg="outline-dark"
                        className="w-100 text-dark border border-dark"
                      >
                        Refresh Content
                      </Badge>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      )}
    </Container>
  );
}
