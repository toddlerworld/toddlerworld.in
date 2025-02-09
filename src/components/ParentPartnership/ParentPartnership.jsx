import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./ParentPartnership.scss";

const ParentPartnership = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="parent-partnership-container">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="heading">Parent Partnership</h1>
        <hr className="hr-about-us" />
      </motion.div>

      <motion.div
        className="p-parent-partnership"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p>
          <span>
            The importance of developing a positive relationship between our
            staff and parents can never be underestimated. After all, we all
            want the same thing: to create a happy, nurturing atmosphere
            conducive to your child's development and well-being.
          </span>

          <span>
            This is why we strive every day to make sure that all our parents
            receive excellent customer service, we communicate with you at every
            opportunity and at every stage of your child's development.
          </span>

          <span>
            Meetings between teachers and parents are scheduled twice a year, to
            review your child's progress and achievements and to set targets for
            future development.
          </span>

          <span>
            In addition to these formal meetings, parents are welcome to contact
            members of staff anytime throughout the year should they have any
            queries or concerns which they would like to discuss.
          </span>

          <span>
            We provide various resources and services to ensure that you feel
            well informed and secure in the knowledge that your child is looked
            after in a safe and caring environment.
          </span>

          <span>
            We'd love you to get involved too. So if you'd like to know more,
            just ask a member of Toddler World staff team next time you're here.
          </span>

          <strong>Together we can make a difference.</strong>
        </p>

        <div className="image-wrapper">
          <img
            src="/images/parentpartnership/1.webp"
            alt="A heartwarming moment of family connection - parents sharing a loving moment with their child"
            loading="eager"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default ParentPartnership;
