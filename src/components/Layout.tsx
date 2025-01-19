import React from 'react';
import Navbar from './Navbar';

type LayoutProps = {
  children: React.ReactNode; // Accepts the content of individual pages
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <main className="w-[80%] mx-auto mt-8">
        {children}
      </main>
      
      {/* Optional Footer */}
      <footer className="w-[80%] mx-auto py-4 text-center text-gray-500">
        © {new Date().getFullYear()} My T-Rex Portfolio
      </footer>
    </div>
  );
};

export default Layout;
