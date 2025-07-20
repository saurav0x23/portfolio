// Enhanced Layout.tsx
import React, { useRef, useEffect } from "react";
import Navbar from "./Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Particle Background */}
      <div className="fixed inset-0 z-90">
        {[...Array(300)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/30"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${
                Math.random() * 10 + 5
              }s infinite ease-in-out ${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Navbar */}
      <div ref={navbarRef} className="fixed top-0 inset-x-0 z-50">
        <Navbar  />
      </div>

      {/* Content Area */}
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black/80 backdrop-blur-lg border-t-2 border-white mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-white">
            © {new Date().getFullYear()} SAURAV PANDEY
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
