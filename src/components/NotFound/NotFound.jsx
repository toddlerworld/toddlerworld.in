import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import "./NotFound.scss";

const NotFound = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="error-page-container" data-testid="error-page">
      <motion.img
        className="not-found-background-image"
        src="/images/not-found/error-image.webp"
        alt="Decorative background"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      <motion.div
        className="error-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h1>Lost your way?</h1>
        <p>
          Sorry we can't find that page!
          <br />
          But we're sure you'll find your way back home by clicking the button
          below.
        </p>
        <Link to="/" className="home-button">
          <Button className="btn">Go Home</Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
