import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../Button/Button';
import './Careers.scss';

const Careers = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <motion.div
        className="heading-careers"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="heading">CAREERS</h1>
        <hr className="hr-about-us" />
      </motion.div>

      <div className="careers-container">
        <motion.div
          className="careers-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="left-aligned-careers">
            <strong>A career in childcare with Toddler World.</strong>

            <p>
              If you are looking for jobs in childcare, an exciting challenge, or your current
              career isn't fulfilling you or going in the direction that you had hoped then why not
              consider working for the Srinagar's best childcare provider.
            </p>

            <p>
              At Toddler World we have a wide range of opportunities for careers in childcare to
              both challenge and fulfil your working life.
            </p>

            <p>
              No matter if you have worked in the childcare environment for many years, or are
              simply looking to start a new chapter in your career path we would encourage you to
              look at our vacancy listings and contact us to see if we have any opportunities for
              you to come and join the team.
            </p>

            <p>But why choose Toddler World when looking for a career in childcare?</p>

            <p>
              Toddler world is created by a family that wanted to provide the best childcare
              solutions available, getting the best from around the world and give those facilities
              to the children in Kashmir.
            </p>

            <p>
              The company has strong beliefs in both offering equal opportunities to all of its
              employees, investing in people and recognising its staff as their leading resource.
            </p>

            <p>
              Toddler World provides top quality support and training for all of their staff on a
              continual basis, helping to improve individuals own technical and organisational
              skills and thus providing the kind of overall service that every parent looks for when
              seeking out a place of security and to trust to send the most important thing in their
              lives, their children.
            </p>

            <strong>How can I work for Toddler World?</strong>

            <p>
              If you are interested in a career at a Toddler World, send us your details below or
              email us your CV at <a href="mailto:info@toddlerworld.in">info@toddlerworld.in</a>.
              Whenever a position becomes available which matches your skills, we will get in touch
              with you.
            </p>
          </div>

          <div className="right-aligned-careers">
            <h1>Did you know?</h1>
            <p>
              We offer competitive package in addition to outstanding training and development
              opportunity. So, what are you waiting for? If you are focussed and energetic with a
              passion to work in the childcare industry, apply today.
            </p>
            <div className="register-interest-careers" data-testid="send-details-test">
              <a href="#send-details" data-testid="send-link-test">
                <Button buttonStyle="primary-button" buttonSize="large">
                  Send your details
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="heading-careers"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="heading" id="send-details" data-testid="send-details">
          SEND YOUR DETAILS
        </h2>
        <hr className="hr-about-us" />
      </motion.div>

      <motion.div
        className="careers-form"
        data-testid="careers-form-test"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <iframe
          title="Career Application Form"
          src="https://docs.google.com/forms/u/0/d/e/1FAIpQLSd5JQ_npNHs9jCVW4oVfrLS4qybFBK8vU6Op6Y70fm8qp7uGw/formResponse?embedded=true"
        />
      </motion.div>
    </>
  );
};

export default Careers;
