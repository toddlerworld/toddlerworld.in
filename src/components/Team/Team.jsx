import React, {useEffect} from 'react';
import './Team.scss';
const Team = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return(
        <div className='our-team-container'>
            <h1 className='heading'>Our Team</h1>
            <hr className='hr-about-us' />
            <div className='p-about-us'>
                <p>Toddler World staff are selected for their empathy with children, their commitment to childcare and their
                    practical ability to deliver.<br/><br/><br/>

                    Our experienced, fun-loving educators are experts in making the learning process exciting and
                    interactive for your child. We believe that play, laughter and fun is an important part of child’s life
                    and we support this belief by encouraging children to use their imagination. At Toddler World we strive
                    to develop your child’s learning potential and inspire their personal growth.<br/><br/><br/>

                    Our team is committed to continuous development and on-going improvement, not only for the children in
                    their care but also for themselves. At Toddler World we never stop learning, we provide top quality
                    training to all our staff on an on-going basis. This ensures that every member of our team is always
                    improving their practical skills, which is key to staff motivation and satisfaction.<br/><br/><br/>

                    All to ensure that they provide the outstanding quality care that your child deserves and that you
                    expect.
                </p>
                <img src='/images/team/1.jpg' alt='Teacher showing how to write to a child' className='image-our-team'/>
            </div>
        </div>
    );
};

export default Team;