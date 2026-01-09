"use client";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

export default function AppNavbar() {
  const { user, logout } = useAuth();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} href="/" className="fw-bold text-warning">
          Black-Friday Course App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} href="/about-us">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} href="/contact-us">
              Contact Us
            </Nav.Link>
            {user && (
              <Nav.Link as={Link} href="/my-courses">
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
