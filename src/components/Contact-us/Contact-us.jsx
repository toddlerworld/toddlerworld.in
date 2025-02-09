import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import OpeningHours from '../Home/Contact/OpeningHours/OpeningHours';
import './Contact-us.scss';

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <motion.div
        className="heading-contactus"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="heading">Contact Us</h1>
        <hr className="hr-about-us" />
      </motion.div>

      <div className="contactus-container">
        <motion.div
          className="contactus-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="left-aligned-contactus">
            <h3>Drop us a line!</h3>
            <form
              action="https://getform.io/f/f5e8cb21-2e57-4c0b-af0c-ef2930b0ca8a"
              method="POST"
              className="form-contactus"
            >
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="Email" required />
              <textarea name="message" placeholder="Message" rows="6" required></textarea>
              <button type="submit" className="contactus-send-button">
                Send Message
              </button>
            </form>
            <p className="contactus-captcha">
              This site is protected by reCAPTCHA and the Google{' '}
              <Link to="https://policies.google.com/privacy">Privacy Policy</Link> and{' '}
              <Link to="https://policies.google.com/terms">Terms of Service</Link> apply.
            </p>
          </div>

          <div className="right-aligned-contactus">
            <h3>Better yet, see us in person!</h3>
            <p>
              We would love to see you in person. So feel free to call us to book an appointment.
            </p>

            <Link to="https://wa.me/917889744619" className="whatsapp-button">
              <img
                src="/images/contactus/whatsapp-logo.webp"
                alt="WhatsApp"
                width="28"
                height="28"
              />
              <span>Message us on WhatsApp</span>
            </Link>

            <h3>Toddler World</h3>
            <p>
              Airport Avenue, Near Railway Bridge,
              <br />
              Srinagar, Jammu and Kashmir,
              <br />
              India
            </p>

            <p>
              Phone:{' '}
              <a href="tel:+917051427879" className="phone">
                +91.7051.427879
              </a>
              ,{' '}
              <a href="tel:+917889744619" className="phone">
                +91.7889.744619
              </a>
            </p>

            <h3>Hours</h3>
            <OpeningHours />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="contactus-maps-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <iframe
          title="Toddler World Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.730162425703!2d74.7713164!3d34.025136700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e191dba7d84fa3%3A0x16d8642869049f5a!2sToddler%20World!5e0!3m2!1sen!2suk!4v1695935838910!5m2!1sen!2suk"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </motion.div>
    </>
  );
};

export default ContactUs;
