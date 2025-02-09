import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./Welcome.scss";

const Welcome = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="welcome-container">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="heading">
          Thank you for your interest in Toddler World.
        </h1>
        <hr className="hr-about-us" />
      </motion.div>

      <motion.div
        className="p-welcome"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p>
          <span>
            Child is the most precious and valuable gift of our lives. Our
            priorities, aims and aspirations completely revolve around them. We
            as parents strive to give them the best of everything. At Toddler
            World we understand that and have created a loving and caring
            environment that your child deserves, a place just like home that
            you can trust.
          </span>

          <span>
            We know in our hearts that there is no greater responsibility than
            giving a child the best possible start in life. Your child will
            enjoy interacting with other children and our staff, in an
            atmosphere that is not only nurturing, but one where their
            individuality is respected. We have developed a curriculum with the
            child as a whole in mind. Our staff will work together to create
            enriching classroom experiences to ensure that your child maintains
            a healthy life balance.
          </span>

          <span>
            With a low child to staff ratio, we're able to structure our
            learning in a personal and meaningful way. We offer the best
            infrastructure, methodology, curriculum, trained team and top of the
            line learning equipment.
          </span>

          <span>
            At Toddler World, we not only enroll your child, we enroll you too.
            You can enlighten yourself at our parent counseling workshops –
            helping you to understand your child better.
          </span>

          <strong>
            We welcome you to Toddler World for a joyful journey towards love &
            light.
          </strong>
        </p>

        <div className="image-wrapper">
          <img
            src="/images/Welcome/welcome.webp"
            alt="Children engaged in an interactive storytelling session, showcasing our nurturing learning environment"
            loading="eager"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Welcome;
