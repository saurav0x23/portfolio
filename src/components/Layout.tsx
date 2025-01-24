import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

type LayoutProps = {
  children: React.ReactNode; // Accepts the content of individual pages
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [showNavbar, setShowNavbar] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;
      const triggerHeight = pageHeight * 0.2; // 10% of the page height

      // Show the navbar if scrolled past 10% of the page
      setShowNavbar(scrollPosition > triggerHeight);
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Navbar */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Navbar />
      </div>

      {/* Main Content */}
      <main className="w-[80%] mx-auto mt-8">{children}</main>

      {/* Optional Footer */}
      <footer className="w-[80%] mx-auto py-4 text-center text-gray-500">
        © {new Date().getFullYear()} Saurav Pandey
      </footer>
    </div>
  );
};

export default Layout;
