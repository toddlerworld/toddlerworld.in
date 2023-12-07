import React, {useEffect} from 'react';
import {Button} from '../Button/Button';
import './Activities.scss';
import {Link} from 'react-router-dom';

const Activities = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return(
        <div className='activities-container' data-testid='activities-container'>
            <img src='/images/activities/1.webp'
                alt='Baby Bead Maze Toy For Brain Development'
                className='activities-image'
            />
            <h1 className='heading'>Our Activities</h1>
            <hr className='hr-about-us' />
            <div className='left-aligned-activities'>
                <p>
                    <strong><u>Montessori Activities</u></strong><br /><br />
                    <ul>
                        <li>Prayers & Duas</li>
                        <li>Singing, Dance, Painting, Sand Pit</li>
                        <li>Clay Modeling & Pottery</li>
                        <li>Indoor soft play area</li>
                        <li>Gardening and Planting Saplings</li>
                        <li>Role Play</li>
                        <li>Character Building Stories</li>
                        <li>Folk Stories and Puppets</li>
                        <li>Movies and AV facilities</li>
                        <li>Reading Nook</li>
                        <li>Story Telling Area</li>
                    </ul>
                </p>
            </div>
            <div className='right-aligned-activities'>
                <h1>Play Equipment</h1>
                <p>A range of play equipment is available to help children develop an array of skills, and great care
                    is taken to choose materials that will create an inspiring sensory experience.
                </p>
                <div className='register-interest-activities'>
                    <Link to='/play-equipment'>
                        <Button
                            buttonStyle="primary-button"
                            buttonSize="large"
                        >
                            Find out more
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Activities;