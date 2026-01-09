"use client";
import React, { useEffect, useState, use } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Alert,
  Spinner,
  Badge,
} from "react-bootstrap";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function CourseDetailPage({ params }) {
  const unwrappedParams = use(params);
  const { id } = unwrappedParams;
  const { user } = useAuth();
  const router = useRouter();

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [promoCode, setPromoCode] = useState("");
  const [promoError, setPromoError] = useState("");
  const [isPromoApplied, setIsPromoApplied] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  useEffect(() => {
    fetch(`/api/courses/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCourse(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching course", err);
        setLoading(false);
      });
  }, [id]);

  const handleApplyPromo = () => {
    if (promoCode === "BFSALE25") {
      setIsPromoApplied(true);
      setPromoError("");
    } else {
      setPromoError("Invalid promo code");
      setIsPromoApplied(false);
    }
  };

  const handleSubscribe = async () => {
    if (!user) {
      router.push("/auth/login");
      return;
    }

    setSubmitting(true);
    setMessage({ type: "", text: "" });

    try {
      const discountedPrice = isPromoApplied
        ? course.price * 0.5
        : course.price;

      // 1. If course is PAID, create a Razorpay order first
      let razorpayData = {};
      if (discountedPrice > 0) {
        const orderRes = await fetch("/api/create-order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
          body: JSON.stringify({ amount: discountedPrice }),
        });

        const order = await orderRes.json();
        if (!orderRes.ok)
          throw new Error(order.message || "Failed to create order");

        // 2. Open Razorpay Checkout
        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
          amount: order.amount,
          currency: order.currency,
          name: "Black-Friday Course App",
          description: `Subscription for ${course.title}`,
          order_id: order.id,
          handler: async function (response) {
            // 3. Complete subscription on backend
            await completeSubscription({
              courseId: id,
              promoCode: isPromoApplied ? promoCode : null,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
            });
          },
          prefill: {
            name: user.name,
            email: user.email,
          },
          theme: {
            color: "#ffc107",
          },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
        setSubmitting(false);
        return;
      } else {
        // Handle FREE course subscription
        await completeSubscription({
          courseId: id,
          promoCode: null,
        });
      }
    } catch (err) {
      setMessage({
        type: "danger",
        text: err.message || "Connection error. Please try again.",
      });
      setSubmitting(false);
    }
  };

  const completeSubscription = async (payload) => {
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage({
          type: "success",
          text: "Successfully subscribed! Redirecting...",
        });
        setTimeout(() => router.push("/my-courses"), 1500);
      } else {
        setMessage({
          type: "danger",
          text: data.message || "Failed to subscribe",
        });
      }
    } catch (err) {
      setMessage({
        type: "danger",
        text: "Connection error. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" variant="warning" />
      </Container>
    );
  }

  if (!course)
    return (
      <Container className="mt-5 text-center">
        <h3>Course Not Found</h3>
      </Container>
    );

  const discountedPrice = isPromoApplied ? course.price * 0.5 : course.price;

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={10}>
          <Card className="shadow-lg border-0">
            <Row className="g-0">
              <Col md={6}>
                <img
                  src={
                    course.image ||
                    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600"
                  }
                  className="img-fluid rounded-start h-100"
                  alt={course.title}
                  style={{ objectFit: "cover" }}
                />
              </Col>
              <Col md={6}>
                <Card.Body className="p-4 d-flex flex-column h-100">
                  <div className="mb-4">
                    <Badge
                      bg={course.price === 0 ? "success" : "danger"}
                      className="mb-2"
                    >
                      {course.price === 0 ? "FREE" : "PAID"}
                    </Badge>
                    <h1 className="fw-bold mb-3">{course.title}</h1>
                    <p className="text-muted lead">{course.description}</p>
                  </div>

                  <div className="mt-auto">
                    <div className="d-flex align-items-center mb-4">
                      {course.price > 0 ? (
                        <>
                          <h2
                            className={`fw-bold mb-0 ${
                              isPromoApplied
                                ? "text-muted text-decoration-line-through fs-4 me-3"
                                : "text-dark"
                            }`}
                          >
                            ${course.price}
                          </h2>
                          {isPromoApplied && (
                            <h2 className="fw-bold mb-0 text-success">
                              ${discountedPrice.toFixed(2)}{" "}
                              <small className="fs-6">(50% OFF)</small>
                            </h2>
                          )}
                        </>
                      ) : (
                        <h2 className="fw-bold mb-0 text-success">FREE</h2>
                      )}
                    </div>

                    {message.text && (
                      <Alert variant={message.type}>{message.text}</Alert>
                    )}

                    {course.price > 0 && (
                      <div className="promo-section mb-3 p-3 bg-light rounded border border-warning shadow-sm">
                        <Form.Label className="small fw-bold">
                          Enter Promo Code
                        </Form.Label>
                        <div className="d-flex gap-2">
                          <Form.Control
                            type="text"
                            placeholder="e.g. BFSALE25"
                            value={promoCode}
                            onChange={(e) => {
                              setPromoCode(e.target.value);
                              setIsPromoApplied(false);
                            }}
                            disabled={isPromoApplied}
                          />
                          <Button
                            variant="dark"
                            onClick={handleApplyPromo}
                            disabled={isPromoApplied || !promoCode}
                          >
                            Apply Promo Code
                          </Button>
                        </div>
                        {promoError && (
                          <p className="text-danger small mt-1">{promoError}</p>
                        )}
                        {isPromoApplied && (
                          <p className="text-success small mt-1">
                            ✓ Promo Code Validated!
                          </p>
                        )}
                      </div>
                    )}

                    <Button
                      variant="warning"
                      size="lg"
                      className="w-100 fw-bold py-3"
                      disabled={
                        submitting || (course.price > 0 && !isPromoApplied)
                      }
                      onClick={handleSubscribe}
                    >
                      {submitting ? "Processing..." : "Subscribe"}
                    </Button>
                    {course.price > 0 && !isPromoApplied && (
                      <p className="text-muted small text-center mt-2">
                        The "Subscribe" button is disabled until your promo code
                        is validated.
                      </p>
                    )}
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
