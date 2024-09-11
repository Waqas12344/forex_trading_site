import React from "react";
import styles from "../style"; // Make sure the path to styles is correct
import { Navbar, Hero, Stats, Business, Testimonials, Clients, CTA, Footer } from "../components";

const Home = () => {
  return (
    <div>
      {/* <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div> */}

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Testimonials />

          
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
