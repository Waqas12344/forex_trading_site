import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Navbar component
import Footer from "./components/Footer"; // Footer component
import Home from "./pages/Home"; // Home page component
import About from "./pages/About"; // About page component
import styles from "./style"; // Import your styles
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";

const App = () => {
  return (
    <Router>
      {/* Wrap the whole layout with proper styling */}
      <div className="bg-primary w-full overflow-hidden">
        {/* Navbar with proper padding and alignment */}
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        {/* Main content area (where routes will render pages) */}
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/signIn" element={<SignIn/>} />
              {/* Add more routes as needed */}
            </Routes>
          </div>
        </div>

        {/* Footer with proper padding and alignment */}
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
