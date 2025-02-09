import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import './Nursery.scss';

const Nursery = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="nursery-container">
      <motion.div
        className="nursery-image-wrapper"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="/images/nursery/1.webp"
          alt="A child engaging in imaginative play wearing a police outfit, developing social and creative skills"
          className="nursery-image"
          loading="eager"
          data-testid="nursery-image"
        />
      </motion.div>

      <motion.div
        className="heading-nursery"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h1 className="heading">NURSERY (3 - 4 YEARS)</h1>
        <hr className="hr-about-us" />
      </motion.div>

      <motion.div
        className="nursery-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="left-aligned-nursery">
          <strong>
            Escalates the possibilities of learning in your child:
            <i> Nursery at Toddler World.</i>
          </strong>

          <p>
            This programme is for children between 3 years to 4 years old. Once children graduate
            from Pre-Nursery, we move on to a more advanced curriculum that escalates the
            possibilities of learning in your child. The programme focuses on better reading skills,
            a richer vocabulary and stronger skills in basic math. This ensures that your child is
            ready to venture into a new world of learning that is rich with possibilities.
          </p>
        </div>

        <div className="right-aligned-nursery">
          <h1>Learn More</h1>
          <p>There is a lot more to know. Please feel free to contact us.</p>
          <div className="contact-us-nursery" data-testid="contact-us-comp">
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

export default Nursery;
