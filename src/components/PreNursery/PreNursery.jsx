import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import './PreNursery.scss';

const PreNursery = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="prenursery-container">
      <motion.div
        className="prenursery-image-wrapper"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="/images/prenursery/1.webp"
          alt="A young girl developing fine motor skills through practical life activities"
          className="prenursery-image"
          loading="eager"
        />
      </motion.div>

      <motion.div
        className="heading-prenursery"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h1 className="heading">PRE NURSERY (2 - 3 YEARS)</h1>
        <hr className="hr-about-us" />
      </motion.div>

      <motion.div
        className="prenursery-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="left-aligned-prenursery">
          <strong>
            A strong foundation for success in school and in life:{' '}
            <i>Pre-Nursery at Toddler World.</i>
          </strong>

          <p>
            Welcome to the pre-nursery years—the most critical and pivotal for determining your
            child's lifelong learning ability. Your talkative child is at the prime age for
            developing pre-reading skills and forming social relations with his/her peers. Our
            pre-nursery programme is designed to help your child build a strong foundation for
            school success. He/She will enter kindergarten ready to learn and prepared to succeed.
            We teach your child the cognitive and social-emotional skills that will help him/her
            become a lifelong learner: problem-solving, self-regulation, independence, interactive
            learning, and collaborative play.
          </p>

          <strong>How our pre-nursery programme approach helps your preschooler progress:</strong>

          <strong>Citizen</strong>
          <p>
            Your child’s ability to share and communicate with others is just as important as
            learning his/her ABCs and 123s. That’s why Toddler World focuses on teaching your child
            the value of family and community. This will be the foundation of his/her ultimate
            well-being.
          </p>

          <strong>Scholar</strong>
          <p>
            Through our curriculum and innovative world-class methodologies, your child will gain
            the early literacy and language skills that will determine his/her future academic
            success. Our teachers also work with your child to develop his/her pre-writing skills,
            by focusing on grip and letter shape.
          </p>

          <strong>Mind</strong>
          <p>
            Our teachers use different activities & latest technology to open your child’s eyes to
            the wonders of science and technology. We also build on your child’s math skills.
          </p>

          <strong>Body</strong>
          <p>
            Your preschooler will dance, sing, play and achieve developmental milestones in the
            process. He/She will also learn the habits of healthy living by doing physical
            activities daily.
          </p>

          <strong>Milestones</strong>
          <p>
            Before graduating from preschool, your child will be able to achieve specific
            milestones.
          </p>

          <strong>Assessment</strong>
          <p>
            Your child will be regularly assessed to assure that he/she is meeting these
            developmental milestones and is progressing in his/her learning.
          </p>
        </div>

        <div className="right-aligned-prenursery">
          <h1>Learn More</h1>
          <p>There is a lot more to know. Please feel free to contact us.</p>
          <div className="contact-us-prenursery" data-testid="contact-us-comp">
            <Link to="/contact-us" data-testid="contact-us-link-test">
              <Button buttonStyle="primary-button" buttonSize="large" data-testid="contact-us-test">
                Contact us
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PreNursery;
