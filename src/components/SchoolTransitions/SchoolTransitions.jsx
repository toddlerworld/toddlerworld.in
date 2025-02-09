import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import './SchoolTransitions.scss';

const SchoolTransitions = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <motion.div
        className="school-transitions-image-wrapper"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="/images/SchoolTransitions/1.webp"
          alt="Children preparing for their school transition journey"
        />
      </motion.div>

      <motion.div
        className="heading-school-transitions"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h1 className="heading">SCHOOL TRANSITIONS</h1>
        <hr className="hr-about-us" />
      </motion.div>

      <div className="school-transitions-container">
        <motion.div
          className="school-transitions-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="left-aligned-school-transitions">
            <p>
              Starting school is an important milestone for every child and their parents. At
              Toddler World we believe that when children leave our nursery to embark on the next
              chapter in their lives we must do all we can to support and celebrate this transition,
              ensuring the children are well prepared for the next stage in their learning. Within
              Toddler World, it is a firm belief that all children need to be able to start school
              ready to learn, that they are able to make friends and play and that they are
              confident to ask for what they need and voice what they think.
              <br />
              <br />
              Children’s early experiences are paramount for their future success and these are
              influenced by many factors including the impact of their early education and care.
              Parents and Facilitators working together in partnership is important to develop the
              home learning environment. By working together we believe that this will help improve
              your child’s progress and support them in making a better start at school.
              <br />
              <br />
              In the time leading up to the children leaving the nursery to start school the
              Facilitators will plan and provide a variety of activities to promote school readiness
              for example:
              <br />
              <br />
              <ul>
                <li>Reading books together about starting school</li>
                <li>Role playing the teacher with the children</li>
                <li>Eating lunch independently</li>
                <li>Taking part in a fun sports day</li>
              </ul>
              <br />
              At Toddler World we want to involve parents in the transition process and will share
              ideas with you as to what you can do at home to support your child in being ready to
              start school. Our staff understand that it is paramount to communicate as much as
              possible and endeavour to ensure that as parent&apos;s you feel re-assured at all
              times so that this experience is a seamless transition for both parents and children.
              These discussions are held in the parent-teacher meetings closer to the transition
              time.
            </p>
          </div>

          <div className="right-aligned-school-transitions">
            <h1>Facts</h1>
            <p>
              For 3 years running, 99% of our toddlers have been admitted to top schools in
              Srinagar. Want to know more? Drop us a line and we will be in touch.
            </p>
            <div className="register-interest-school-transitions">
              <Link to="/contact-us">
                <Button buttonStyle="primary-button" buttonSize="large">
                  Get in touch
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SchoolTransitions;

/*import React, {useEffect} from 'react';
import './SchoolTransitions.scss';
import {Button} from '../Button/Button';
import {Link} from 'react-router-dom';

const SchoolTransitions = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return(
        <>
            <div className='school-transitions-image'>
                <img src='/images/SchoolTransitions/1.webp' alt='school-transitions' />
            </div>
            <div className='heading-school-transitions'>
                <h1 className='heading'>SCHOOL TRANSITIONS</h1>
                <hr className='hr-about-us' />
            </div>
            <div className='school-transitions-container'>
                <div className='left-aligned-school-transitions'>
                    <p>
                        Starting school is an important milestone for every child and their parents. At Toddler World
                        we believe that when children leave our nursery to embark on the next chapter in their lives we
                        must do all we can to support and celebrate this transition, ensuring the children are well
                        prepared for the next stage in their learning. Within Toddler World, it is a firm belief that
                        all children need to be able to start school ready to learn, that they are able to make friends
                        and play and that they are confident to ask for what they need and voice what they think.
                        <br /><br />

                        Children’s early experiences are paramount for their future success and these are influenced by
                        many factors including the impact of their early education and care. Parents and Facilitators
                        working together in partnership is important to develop the home learning environment. By
                        working together we believe that this will help improve your child’s progress and support them
                        in making a better start at school.<br /><br />

                        In the time leading up to the children leaving the nursery to start school the Facilitators
                        will plan and provide a variety of activities to promote school readiness for example:
                        <br /><br />

                        <ul>
                            <li>Reading books together about starting school</li>
                            <li>Role playing the teacher with the children</li>
                            <li>Eating lunch independently</li>
                            <li>Taking part in a fun sports day</li>
                        </ul>
                        <br />
                        At Toddler World we want to involve parents in the transition process and will share ideas with
                        you as to what you can do at home to support your child in being ready to start school. Our
                        staff understand that it is paramount to communicate as much as possible and endeavour to
                        ensure that as parent&apos;s you feel re-assured at all times so that this experience is a
                        seamless transition for both parents and children. These discussions are held in the
                        parent-teacher meetings closer to the transition time.
                    </p>
                </div>
                <div className='right-aligned-school-transitions'>
                    <h1>Facts</h1>
                    <p>For 3 years running, 99% of our toddlers have been admitted to top schools in Srinagar.
                        Want to know more? Drop us a line and we will be in touch.
                    </p>
                    <div className='register-interest-school-transitions'>
                        <Link to="/contact-us">
                            <Button
                                buttonStyle="primary-button"
                                buttonSize="large"
                            >
                                Get in touch
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SchoolTransitions;*/
