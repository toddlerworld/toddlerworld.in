import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./MainSection.scss";
import { Button } from "../../Button/Button";

const MainSection = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <section
      className="hero-container"
      data-testid="main-section"
      role="banner"
      aria-label="Welcome Section"
    >
      <div className="hero-content">
        <motion.h1
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
        >
          Welcome to Toddler World
        </motion.h1>

        <motion.div
          className="button-container"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={{ ...fadeIn.transition, delay: 0.2 }}
        >
          <Link
            to="/welcome"
            className="cta-link"
            aria-label="Learn more about Toddler World"
          >
            <Button
              className="cta-button"
              buttonStyle="primary-button"
              buttonSize="large"
            >
              Find out more!
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default MainSection;
