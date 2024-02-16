import React, {useEffect} from 'react';
import {Button} from '../Button/Button';
import './PlayGroup.scss';
import {Link} from "react-router-dom";

const PlayGroup = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return(
        <>
            <div className='heading-playgroup'>
                <img src='/images/playgroup/1.webp' alt='Two children looking through a window' className='playgroup-image'/>
                <h1 className='heading'>PLAY GROUP (18-24 MONTHS)</h1>
                <hr className='hr-about-us' />
            </div>
            <div className='playgroup-container'>
                <div className='left-aligned-playgroup'>
                    <p>
                        <strong>A high-energy play group programme that lets them explore the world: Play Group at
                            Toddler World.</strong><br /><br />

                        Your toddler is busy exploring his new-found language and adding to his vocabulary every day. This
                        is the prime age to develop your child’s socialization skills so that he becomes a good sharer,
                        communicator, and student in the years to come. Toddler World gives your child a head start by
                        allowing him to interact with nurturing teachers and peers, and by teaching him how to be a good
                        friend, citizen, and student.<br /><br />

                        In the dynamic environment of our toddler classrooms, your child will be motivated to explore and
                        engage with the world around him. Our toddler child care approach includes a balance of
                        child-directed and teacher-initiated opportunities, designed to instil a lifelong love of learning
                        in your child.<br /><br />

                        Our passionate and energetic staff provide your toddler with a consistent routine and schedule,
                        filled with exploration and introduction to new experiences. Regardless of developmental stage,
                        each day is filled with laughter, reading, building self-sufficiency, and hands-on learning.<br /><br />

                        <strong>How our programme approach helps your toddler grow:</strong><br/><br/>

                        <strong>Citizen</strong><br/>
                        Our toddler programme teaches the value and meaning of community. Your child and his classmates will
                        join in collaborative activities, such as creating a collage for the whole classroom to see. Through
                        dramatic play with a teacher, your child will also have fun taking on different roles so that he
                        will understand the perspectives of other people.<br/><br/>

                        <strong>Scholar</strong><br/>
                        Our staff encourages your child’s joy of expression and gives him plenty to talk about, by
                        introducing a new theme every fortnight. We spark discussion by reading stories and asking the
                        children to talk about what is happening in the book.<br/><br/>

                        <strong>Mind</strong><br/>
                        Your child will begin to understand the concept of cause and effect by filling up and dumping out
                        containers, as well as stacking and knocking down blocks. The children will also develop their
                        recall skills, by &apos;drawing&apos; a picture of a recent experience they had and describing
                        what&apos;s happening in the picture to their teacher.<br/><br/>

                        <strong>Body</strong><br/>
                        We develop motor skills through weekly activities and games. To develop small muscle control, your
                        child will also participate in fun, focused activities, such as stringing large beads, tearing paper
                        for art projects, and squishing and moulding play dough.<br/><br/>

                        <strong>Milestones</strong><br/>
                        Before graduating from the play group room, your child will be able to achieve specific
                        milestones.<br/><br/>

                        <strong>Assessment</strong><br/>
                        Your child will be regularly assessed to assure that he is meeting these developmental milestones
                        and is progressing in his/her learning. These will be discussed with the parents in our regular
                        parent-teacher meet.

                    </p>
                </div>
                <div className='right-aligned-playgroup'>
                    <h1>Learn More</h1>
                    <p>There is a lot more to know. Please feel free to contact us.
                    </p>
                    <div className='contact-us-playgroup' data-testid="contact-us-comp">
                        <Link to='/contact-us' data-testid="contact-us-link-test">
                            <Button
                                buttonStyle="primary-button"
                                buttonSize="large"
                                data-testid="contact-us-test"
                            >
                                Contact us
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PlayGroup;