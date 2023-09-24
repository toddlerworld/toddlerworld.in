import React from 'react';
import './Youtube.scss';

const Youtube = () => {
    return (
        <div className="youtube-container">
            <h1>YOU&apos;LL LOVE WHY WE'RE DIFFERENT. TAKE A LOOK</h1>
            <hr className="hr-youtube"/>
            <p>Toddler World is renowned for providing rich learning opportunities in unique and exciting
				environment. </p>

            <iframe className="youtube-video" src="https://www.youtube.com/embed/FxxsA-qaHTM"></iframe>
        </div>
    );
};

export default Youtube;