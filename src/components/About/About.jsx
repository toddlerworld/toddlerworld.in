import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../Button/Button";
import "./About.scss";

const AboutSection = ({ image, title, description, link, index }) => {
  return (
    <motion.div
      className="about-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div className="image-wrapper">
        <img
          src={image.src}
          alt={image.alt}
          loading={index === 0 ? "eager" : "lazy"}
          width="600"
          height="450"
        />
      </div>
      <div className="content-wrapper">
        <h2>{title}</h2>
        <p>{description}</p>
        <Link
          to={link}
          className="about-link"
          aria-label={`Learn more about ${title}`}
        >
          <Button buttonStyle="primary-button" buttonSize="large">
            Learn More
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const sections = [
    {
      image: {
        src: "/images/about/first.webp",
        alt: "Teacher showing how to write to a child",
      },
      title: "Our Team",
      description:
        "Meet our dedicated educators who bring learning to life with passion and expertise.",
      link: "/our-team",
    },
    {
      image: {
        src: "/images/about/second.webp",
        alt: "Children sitting on chairs and reading books",
      },
      title: "Our Environment",
      description:
        "Explore our safe, nurturing spaces designed for discovery and growth.",
      link: "/our-environment",
    },
    {
      image: {
        src: "/images/about/third.webp",
        alt: "Nine Children playing together",
      },
      title: "Our Activities",
      description:
        "Discover the engaging activities that make learning fun and memorable.",
      link: "/activities",
    },
  ];

  return (
    <main className="about-container">
      <motion.div
        className="about-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>About Us</h1>
      </motion.div>
      <div className="sections-wrapper">
        {sections.map((section, index) => (
          <AboutSection key={section.title} {...section} index={index} />
        ))}
      </div>
    </main>
  );
};

export default About;
