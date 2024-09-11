import React, { useState } from "react";
import styles from "../style"; // Import your styles

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false); // Determines if Sign Up form should show

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      alert("Account created successfully!");
    } else {
      alert("Logged in successfully!");
    }
  };
   
const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false); // Determines if Sign Up form should show  

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      alert("Account created successfully!");
    } else {
      alert("Logged in successfully!");
    }
  };

}



  return (
    <section className={`${styles.paddingY} ${styles.flexCenter} flex-col`}>
      <div className="w-full max-w-[600px] bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-center text-[32px] font-semibold text-primary mb-6">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h2>
        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
              <input
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                type="text"
                name="name"
                placeholder="Your Name"
                required={isSignUp}
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              type="password"
              name="password"
              placeholder="Your Password"
              required
            />
          </div>
          <button
            className="w-full bg-primary text-white py-2 rounded-md hover:bg-secondary"
            type="submit"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>
        <p className="text-center mt-4">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            className="text-primary font-bold underline hover:text-secondary"
            onClick={toggleForm}
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </div>
    </section>
  );
};

export default Auth;
