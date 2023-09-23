import React from 'react';
import './MainSection.scss';
import {Button} from "../../Button/Button";
import {Link} from "react-router-dom";

const MainSection = () => {
    return(
        <>
            <div className='hero-container'>
                <video src='/images/home-page-pic.mp4' className='main-video' autoPlay loop muted />
                <h1>Welcome to <br />Toddler World</h1>
                <div className='button-login'>
                    <Link to='/login'>
                        <Button
                            className='login-button'
                            buttonStyle='primary-button'
                            buttonSize='large'
                        >
                            Find out more!
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default MainSection;