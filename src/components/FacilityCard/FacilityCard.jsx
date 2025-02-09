import React from "react";
import { motion } from "framer-motion";

const FacilityCard = ({ src, label, text, alt }) => {
  return (
    <motion.div
      className="facility-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="image-wrapper">
        <img src={src} alt={alt || label} loading="lazy" />
        <div className="label">{label}</div>
      </div>
      <div className="content">
        <p>{text}</p>
      </div>
    </motion.div>
  );
};

export default FacilityCard;
