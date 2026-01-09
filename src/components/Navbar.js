"use client";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

export default function AppNavbar() {
  const { user, logout } = useAuth();

  return (
    <Navbar
      variant="dark"
      expand="lg"
      className="mb-4"
      style={{ backgroundColor: "#142d6f" }}
    >
      <Container className="my-2">
        <Navbar.Brand as={Link} href="/" className="fw-bold text-warning">
          {/* Black-Friday Course App */}
          <img
            src="/assets/images/logo.png"
            alt="Course App Logo"
            width={150}
            height={45}
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "block";
            }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/" style={{ color: "white" }}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} href="/about-us" style={{ color: "white" }}>
              About Us
            </Nav.Link>
            <Nav.Link as={Link} href="/contact-us" style={{ color: "white" }}>
              Contact Us
            </Nav.Link>
            {user && (
              <Nav.Link as={Link} href="/my-courses" style={{ color: "white" }}>
                My Courses
              </Nav.Link>
            )}
          </Nav>
          <Nav>
            {user ? (
              <>
                <Navbar.Text className="me-3">
                  Hello, {user.name || user.email}
                </Navbar.Text>
                <Button variant="outline-warning" size="sm" onClick={logout}>
                  Logout
                </Button>
              </>
            ) : (
              <Link href="/auth/login">
                <Button variant="warning" size="sm">
                  Login / Signup
                </Button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
