import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Loader from "./components/Loader"; // Make sure to import the Loader component
import "./App.css";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Show loader while loading */}
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}

      {/* Main app content */}
      <div
        className={`${
          isLoading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-500`}
      >
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* Add more routes as needed */}
            </Routes>
          </Layout>
        </Router>
      </div>
    </>
  );
};

export default App;
