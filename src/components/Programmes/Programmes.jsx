import React, { useEffect } from "react";
import { motion } from "framer-motion";
import CardItem from "../CardItem/CardItem";
import "./Programmes.scss";

const Programmes = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const programmes = [
    {
      src: "/images/programmes/2.webp",
      text: "A strong foundation for success in school and in life: Pre-Nursery at Toddler World",
      label: "Pre Nursery (2 - 3 years)",
      path: "/pre-nursery",
      alt: "Pre-nursery children developing foundational skills",
    },
    {
      src: "/images/programmes/3.webp",
      text: "Escalates the possibilities of learning in your child: Nursery at Toddler World",
      label: "Nursery (3 - 4 years)",
      path: "/nursery",
      alt: "Nursery students engaged in advanced learning activities",
    },
  ];

  return (
    <div className="programmes-container" data-testid="programmes-container">
      <motion.div
        className="programmes-top-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Our Programmes</h2>
        <p>
          Our programmes are designed keeping in mind your child's age and
          ability to absorb information. We make sure to provide your child with
          every opportunity to challenge themselves while also paying equal
          attention to keeping them fit and active. Our activities are not only
          confined to the classroom but also include various other activities to
          make learning fun.
        </p>
      </motion.div>

      <motion.div
        className="programmes-cards-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="cards-grid">
          {programmes.map((programme, _) => (
            <CardItem key={programme.path} {...programme} />
          ))}
        </div>
      </motion.div>

      <motion.div
        className="programmes-bottom-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3>Tailored to your child's developmental stage</h3>
        <p>
          Our programmes are meticulously crafted to align with the
          developmental milestones of your child. We strive to create an
          environment where they can thrive intellectually, physically and
          emotionally. Beyond traditional classroom settings, we offer a diverse
          range of activities aimed at making learning a joyous and holistic
          experience.
        </p>
      </motion.div>
    </div>
  );
};

export default Programmes;
