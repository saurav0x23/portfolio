import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-center mx-auto">
      {/* Left Curve-Masked Div */}
      <div
        className="w-[24px] h-[24px] shadow-lg transition-transform duration-300"
        style={{
          maskImage:
            "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cpath d=%22M0 0 C100 30, 100 100, 100 100 L100 0 Z%22 fill=%22white%22/%3E%3C/svg%3E')",
          WebkitMaskImage:
            "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cpath d=%22M0 0 C100 50, 80 50, 100 100 L100 0 Z%22 fill=%22white%22/%3E%3C/svg%3E')",
        }}
      ></div>

      {/* Navbar */}
      <nav className="bg-background-950 w-[80%] p-1 flex justify-between items-center shadow-xl rounded-b-3xl bg-metal text-black transition-transform duration-300 border-b border-gray-300">
        {/* Icon */}
        <div className="h-12 w-12 bg-[#333333] rounded-full shadow-md"></div>

        {/* Navbar Links */}
        <ul className="flex items-center justify-center space-x-8">
          <li>
            <a
              href="#skills"
              className="hover:text-[#4CAF50] transition-colors duration-300 text-sm font-medium"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-[#FF7043] transition-colors duration-300 text-sm font-medium"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-[#4CAF50] transition-colors duration-300 text-sm font-medium"
            >
              Projects
            </a>
          </li>
          <li className="bg-accent w-44 h-[51px] rounded-3xl flex items-center justify-center text-white shadow-md">
            <a
              href="#contact"
              className="hover:text-[#FF7043] transition-colors duration-300 text-sm font-medium"
            >
              Say Hello!
            </a>
          </li>
        </ul>
      </nav>

      {/* Right Curve-Masked Div */}
      <div
        className="w-[24px] h-[24px] bg-metal shadow-lg transition-transform duration-300"
        style={{
          maskImage:
            "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cpath d=%22M100 0 C0 30, 0 100, 0 100 L0 0 Z%22 fill=%22white%22/%3E%3C/svg%3E')",
          WebkitMaskImage:
            "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cpath d=%22M100 0 C0 50, 20 50, 0 100 L0 0 Z%22 fill=%22white%22/%3E%3C/svg%3E')",
        }}
      ></div>
    </div>
  );
};

export default Navbar;
