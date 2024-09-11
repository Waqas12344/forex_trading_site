import styles from "../style";

const About = () => {
  return (
    <section id="about" className={`${styles.paddingY} ${styles.flexCenter} flex-col`}>
      <div className={`${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <h1 className={`${styles.heading2} text-center`}>
          About <span className="text-gradient">ROR Forex Trading</span>
        </h1>
        <p className={`${styles.paragraph} max-w-[800px] text-center mt-5`}>
          ROR Forex Trading is a leading institute dedicated to empowering traders worldwide. 
          With years of experience, we offer extensive resources, professional training, 
          and a comprehensive understanding of the Forex market. Our mission is to 
          guide individuals on the path to financial freedom by equipping them with the 
          necessary knowledge and tools to excel in the Forex world.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center mt-10">
        <div className={`flex-1 ${styles.flexCenter} flex-col sm:mb-0 mb-10`}>
          <h2 className="font-poppins font-semibold text-[24px] text-white leading-[36px] mb-4">
            Our Vision
          </h2>
          <p className={`${styles.paragraph} max-w-[400px] text-center`}>
            We envision a world where everyone can unlock the doors to financial success 
            through the power of Forex trading.
          </p>
        </div>

        <div className={`flex-1 ${styles.flexCenter} flex-col sm:mb-0 mb-10`}>
          <h2 className="font-poppins font-semibold text-[24px] text-white leading-[36px] mb-4">
            Our Mission
          </h2>
          <p className={`${styles.paragraph} max-w-[400px] text-center`}>
            Our mission is to provide traders with top-tier education and state-of-the-art 
            trading tools that allow them to conquer the Forex market.
          </p>
        </div>
      </div>

      <div className={`${styles.flexCenter} flex-col mt-10`}>
        <h2 className="font-poppins font-semibold text-[24px] text-white leading-[36px] mb-4">
          Why Choose Us?
        </h2>
        <ul className={`${styles.paragraph} max-w-[600px] list-disc list-inside`}>
          <li>Experienced Traders with Proven Results</li>
          <li>Comprehensive and Engaging Training Programs</li>
          <li>Advanced Trading Tools and Strategies</li>
          <li>24/7 Support from Our Professional Team</li>
          <li>Accessible and Easy-to-Use Learning Platforms</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
