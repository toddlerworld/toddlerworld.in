import React from 'react';
import {Button} from '../Button/Button';
import './PreNursery.scss';

const PreNursery = () => {
    return(
        <>
            <div className='heading-prenursery'>
                <img src='/images/prenursery/1.webp' alt='A girl cutting bread' className='prenursery-image'/>
                <h1 className='heading'>PRE NURSERY (2 - 3 YEARS)</h1>
                <hr className='hr-about-us' />
            </div>
            <div className='prenursery-container'>
                <div className='left-aligned-prenursery'>
                    <p>
                        <strong>A strong foundation for success in school and in life:
                            <i>Pre-Nursery at Toddler World.</i>
                        </strong><br /><br />

                        Welcome to the pre-nursery years—the most critical and pivotal for determining your child&apos;s
                        lifelong learning ability. Your talkative child is at the prime age for developing pre-reading
                        skills and forming social relations with his/her peers. Our pre-nursery program is designed to
                        help your child build a strong foundation for school success. He/She will enter kindergarten
                        ready to learn and prepared to succeed. We teach your child the cognitive and social-emotional
                        skills that will help him/her become a lifelong learner: problem-solving, self-regulation,
                        independence, interactive learning, and collaborative play. <br /><br />

                        <strong>How our pre-nursery program approach helps your preschooler progress:</strong><br/><br/>

                        <strong>Citizen</strong><br/>
                        Your child’s ability to share and communicate with others is just as important as learning
                        his/her ABCs and 123s. That’s why Toddler World focuses on teaching your child the value of
                        family and community. This will be the foundation of his/her ultimate well-being.<br/><br/>

                        <strong>Scholar</strong><br/>
                        Through our curriculum and innovative world-class methodologies, your child will gain the early
                        literacy and language skills that will determine his/her future academic success. Our teachers
                        also work with your child to develop his/her pre-writing skills, by focusing on grip and letter
                        shape.<br/><br/>

                        <strong>Mind</strong><br/>
                        Our teachers use different activities & latest technology to open your child’s eyes to the
                        wonders of science and technology. We also build on your child’s math skills.<br/><br/>

                        <strong>Body</strong><br/>
                        Your preschooler will dance, sing, play and achieve developmental milestones in the process.
                        He/She will also learn the habits of healthy living by doing physical activities daily.
                        <br/><br/>

                        <strong>Milestones</strong><br/>
                        Before graduating from preschool, your child will be able to achieve specific milestones.
                        <br/><br/>

                        <strong>Assessment</strong><br/>
                        Your child will be regularly assessed to assure that he/she is meeting these developmental
                        milestones and is progressing in his/her learning.
                    </p>
                </div>
                <div className='right-aligned-prenursery'>
                    <h1>Learn More</h1>
                    <p>There is a lot more to know. Please feel free to contact us.
                    </p>
                    <div className='contact-us-prenursery' data-testid="contact-us-comp">
                        <a href='/contact-us' data-testid="contact-us-link-test">
                            <Button
                                buttonStyle="primary-button"
                                buttonSize="large"
                                data-testid="contact-us-test"
                            >
                                Contact us
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PreNursery;