import React from 'react';
import './MainSection.scss';
import {Button} from '../../Button/Button';
import {Link} from 'react-router-dom';

const MainSection = () => {
    return (
        <>
            <div className="hero-container" data-testid="main-section">
                {/*<img src="/images/main-section/landing-image.png" className="landing-photo" alt="Background Image" data-testid="landing-photo"/>*/}
                <h1>Welcome to Toddler World</h1>
                <div className="button-login">
                    <Link to="/welcome">
                        <Button
                            className="login-button"
                            buttonStyle="primary-button"
                            buttonSize="large"
                        >
							Find out more!
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    );
};
export default MainSection;