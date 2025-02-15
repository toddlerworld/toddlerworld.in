import React from 'react';
import './Welcome.scss';
import { Button } from '../../Button/Button';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <>
      <div className="welcome" data-testid="welcome-component">
        <h2>Welcome To Toddler World</h2>
        <p className="welcome-paragraph">
          Toddler World is a friendly, caring and committed facility in Srinagar, which provides
          developmental childcare, embracing excellence and quality. Our programme is designed to
          foster the physical, cognitive, social, emotional and cultural development of each child
          in a loving and nurturing environment. We believe children learn through hands-on
          activities. Our nursery is specifically designed to allow free movement and exploration
          according to each child’s abilities. Its large, bright, colourful playrooms and outdoor
          play areas accessorised by state-of-the-art equipment and age-appropriate toys create a
          magical haven for your child.{' '}
        </p>
        <Link to="https://www.campuskidz.in/Logon/KidEnquiry?SchoolCode=TODDLER" target="_blank">
          <Button className="register-button" buttonStyle="primary-button" buttonSize="large">
            Submit an Enquiry
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Welcome;
