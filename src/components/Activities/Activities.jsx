import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import "./Activities.scss";

const Activities = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const activities = [
    "Prayers & Duas",
    "Singing, Dance, Painting, Sand Pit",
    "Clay Modeling & Pottery",
    "Indoor soft play area",
    "Gardening and Planting Saplings",
    "Role Play",
    "Character Building Stories",
    "Folk Stories and Puppets",
    "Movies and AV facilities",
    "Reading Nook",
    "Story Telling Area",
  ];

  return (
    <div className="activities-container" data-testid="activities-container">
      <motion.div
        className="activities-image-wrapper"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="/images/activities/1.webp"
          alt="Educational bead maze toy enhancing cognitive development"
          className="activities-image"
          loading="eager"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h1 className="heading">Our Activities</h1>
        <hr className="hr-about-us" />
      </motion.div>

      <motion.div
        className="activities-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="left-aligned-activities">
          <strong>
            <u>Montessori Activities</u>
          </strong>
          <ul>
            {activities.map((activity, index) => (
              <motion.li
                key={activity}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.05 }}
              >
                {activity}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="right-aligned-activities">
          <h1>Play Equipment</h1>
          <p>
            A range of play equipment is available to help children develop an
            array of skills, and great care is taken to choose materials that
            will create an inspiring sensory experience.
          </p>
          <div className="register-interest-activities">
            <Link to="/play-equipment">
              <Button buttonStyle="primary-button" buttonSize="large">
                Find out more
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Activities;
