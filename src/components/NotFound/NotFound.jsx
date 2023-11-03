import React from 'react';
import './NotFound.scss';
import {Button} from '../Button/Button';
import {Link} from 'react-router-dom';

const NotFound = () => {
    return(
        <>
            <div className="error-page-container" data-testid="error-page">
                <h1>Lost your Way?</h1>

                <p>Sorry we can&apos;t find that page! <br/>
                    But we&apos;re sure you&apos;ll find your way back home by clicking the button below.</p>
                <Link to="/">
                    <Button
                        className="btn btn-primary"
                        text="Go Home"
                    >
                        Go Home
                    </Button>
                </Link>
            </div>
        </>
    );
};

export default NotFound;