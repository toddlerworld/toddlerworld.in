import React, {useEffect} from 'react';
import './Welcome.scss';
const Welcome = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='welcome-container'>
            <h1 className='heading'>Thank you for your interest in Toddler World.</h1>
            <hr className='hr-about-us' />
            <div className='p-welcome'>
                <p>
                    Child is the most precious and valuable gift of our lives. Our priorities, aims and aspirations
                    completely revolve around them. We as parents strive to give them the best of everything. At Toddler
                    World we understand that and have created a loving and caring environment that your child deserves,
                    a place just like home that you can trust.<br/><br/><br/>

                    We know in our hearts that there is no greater responsibility than giving a child the best possible
                    start in life. Your child will enjoy interacting with other children and our staff, in an atmosphere
                    that is not only nurturing, but one where their individuality is respected. We have developed a
                    curriculum with the child as a whole in mind. Our staff will work together to create enriching
                    classroom experiences to ensure that your child maintains a healthy life balance.<br/><br/><br/>

                    With a low child to staff ratio, we&apos;re able to structure our learning  in a personal and meaningful
                    way. We offer the best infrastructure, methodology, curriculum, trained team and top of the line
                    learning equipment.<br/><br/><br/>

                    At Toddler World, we not only enroll your child, we enroll you too. You can enlighten yourself at
                    our parent counseling workshops – helping you to understand your child better.
                    <br/><br />
                    <strong>We welcome you to Toddler World for a joyful journey towards love & light.</strong>
                </p>
                <img src='/images/Welcome/welcome.webp'
                    alt='Two kids playing with toys'
                    className='image-welcome' />
            </div>
        </div>
    );
};

export default Welcome;