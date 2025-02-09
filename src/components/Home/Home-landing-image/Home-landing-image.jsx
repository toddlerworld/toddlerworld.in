import React from 'react';
import './Home-landing-image.scss';
import { Button } from '../../Button/Button';
import { Link } from 'react-router-dom';

const HomeLandingImage = () => {
  return (
    <>
      <div className="home-landing-container" data-testid="home-landing-image">
        <h1>ENABLING A SUCCESSFUL TRANSITION TO A PRIMARY SCHOOL</h1>
        <Link to="/school-transitions">
          <Button button-style="primary-button">Find out more</Button>
        </Link>
      </div>
    </>
  );
};

export default HomeLandingImage;
