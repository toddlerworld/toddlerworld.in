import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './Team.scss';

const Team = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="our-team-container">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="heading">Our Team</h1>
        <hr className="hr-about-us" />
      </motion.div>

      <motion.div
        className="p-about-us"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p>
          <span>
            Toddler World staff are selected for their empathy with children, their commitment to
            childcare and their practical ability to deliver.
          </span>

          <span>
            Our experienced, fun-loving educators are experts in making the learning process
            exciting and interactive for your child. We believe that play, laughter and fun is an
            important part of child's life and we support this belief by encouraging children to use
            their imagination. At Toddler World we strive to develop your child's learning potential
            and inspire their personal growth.
          </span>

          <span>
            Our team is committed to continuous development and on-going improvement, not only for
            the children in their care but also for themselves. At Toddler World we never stop
            learning, we provide top quality training to all our staff on an on-going basis. This
            ensures that every member of our team is always improving their practical skills, which
            is key to staff motivation and satisfaction.
          </span>

          <span>
            All to ensure that they provide the outstanding quality care that your child deserves
            and that you expect.
          </span>
        </p>

        <div className="image-wrapper">
          <img
            src="/images/team/1.webp"
            alt="A dedicated teacher engaging with a young student during a reading session"
            loading="eager"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Team;
