import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./Environment.scss";

const Environment = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="our-environment-container">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="heading">Our Environment</h1>
        <hr className="hr-environment" />
      </motion.div>

      <motion.div
        className="p-our-environment"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p>
          Toddler World is a space where once the child walks in, he is so lured
          that he is unable to withdraw from it. Our well-designed environment
          not only supports child's growth and development but also affirms
          family's expectations of high quality.
          <strong>Peace of mind</strong>
          We understand that the safety and well-being of your child is your top
          priority. That's why we go above and beyond to ensure your child feels
          safe, comfortable, and cared for—in all dimensions of our programme.
          <strong>Home away from home</strong>
          We provide your child home away from home. Our personalised, nurturing
          vibe even carries over to our buildings and grounds. The nursery has
          been specifically designed to create a fun, interactive, and dynamic
          experience. At Toddler World, you can be sure that your child will
          gain the first steps toward a lifelong love of learning.
          <strong>Caring Growth Environment</strong>
          Our dedicated staff is trained to create an environment which caters
          to:
          <ul>
            <li>Different stages of development of the child</li>
            <li>Individual differences amongst children</li>
            <li>Varied potentials/skills of individual children</li>
            <li>Last but not the least, all aspects of intelligence</li>
          </ul>
          Our space is intentionally designed to give your child the best
          possible experience!
        </p>

        <div className="image-wrapper">
          <img
            src="/images/environment/environment.webp"
            alt="A child exploring our carefully designed play area, showcasing our nurturing learning environment"
            loading="eager"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Environment;
