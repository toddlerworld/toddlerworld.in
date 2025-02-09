import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./PoliciesProcedures.scss";

const PoliciesProcedures = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const policies = [
    "Health and Safety",
    "Incident",
    "Accident",
    "Sick Child",
    "Behaviour",
    "Biting",
  ];

  return (
    <div className="policies-procedures-container">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="heading">Policies and Procedures</h1>
        <hr className="hr-about-us" />
      </motion.div>

      <motion.div
        className="p-policies-procedures"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p>
          Toddler World maintains Policies and Procedures, which includes but is
          not limited to the below-listed policies.
          <motion.ul>
            {policies.map((policy, index) => (
              <motion.li
                key={policy}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {policy}
              </motion.li>
            ))}
          </motion.ul>
        </p>

        <div className="image-wrapper">
          <img
            src="/images/policies-procedures/1.webp"
            alt="Educational materials representing our commitment to structured policies and procedures"
            loading="eager"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default PoliciesProcedures;
