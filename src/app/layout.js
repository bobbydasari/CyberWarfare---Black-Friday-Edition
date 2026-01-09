import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { AuthProvider } from "@/context/AuthContext";
import AppNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "CourseApp - Black Friday Edition",
  description:
    "Master new skills with premium courses at unbeatable Black Friday prices!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          src="https://checkout.razorpay.com/v1/checkout.js"
          async
        ></script>
      </head>
      <body style={{ fontFamily: "'Inter', sans-serif" }}>
        <AuthProvider>
          <AppNavbar />
          <main style={{ minHeight: "80vh" }}>{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
