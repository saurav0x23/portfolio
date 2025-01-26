import React, { useCallback, useRef, useEffect } from "react";
import Navbar from "./Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const scrollTimeout = useRef<number>();
  const lastScrollPos = useRef(0);

  const handleScroll = useCallback(() => {
    if (scrollTimeout.current) {
      cancelAnimationFrame(scrollTimeout.current);
    }

    scrollTimeout.current = requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      const triggerHeight = document.documentElement.scrollHeight * 0.2;
      const scrollingDown = scrollY > lastScrollPos.current;

      // Only update if scroll direction changes significantly
      if (Math.abs(scrollY - lastScrollPos.current) > 50) {
        const shouldShow = scrollY > triggerHeight && !scrollingDown;
        navbarRef.current?.classList.toggle("navbar-visible", shouldShow);
        navbarRef.current?.classList.toggle("navbar-hidden", !shouldShow);
        lastScrollPos.current = scrollY;
      }
    });
  }, []);

  useEffect(() => {
    // Add smooth scroll behavior to the whole app
    document.documentElement.style.scrollBehavior = "smooth";

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.documentElement.style.scrollBehavior = "auto";
      if (scrollTimeout.current) cancelAnimationFrame(scrollTimeout.current);
    };
  }, [handleScroll]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-900 via-purple-900 to-indigo-900 bg-fixed">
      {/* Navbar with glass effect */}
      <div
        ref={navbarRef}
        className="fixed top-0 inset-x-0 z-50 bg-sky-900/20 backdrop-blur-lg border-b border-sky-400/20"
      >
        <Navbar />
      </div>

      {/* Content Area */}
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 pt-28">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-sky-900/20 backdrop-blur-lg border-t border-sky-400/20 mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-gray-300">
            © {new Date().getFullYear()} Saurav Pandey
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
