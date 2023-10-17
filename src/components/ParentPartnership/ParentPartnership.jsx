import React from 'react';
import './ParentPartnership.scss';
const ParentPartnership = () => {
    return(
        <div className='parent-partnership-container'>
            <h1 className='heading'>Parent Partnership</h1>
            <hr className='hr-about-us' />
            <div className='p-parent-partnership'>
                <p>
                    The importance of developing a positive relationship between our staff and parents can never be
                    underestimated. After all, we all want the same thing: to create a happy, nurturing atmosphere
                    conducive to your child’s development and well-being.<br/><br/>

                    This is why we strive every day to make sure that all our parents receive excellent customer
                    service, we communicate with you at every opportunity and at every stage of your child’s
                    development.<br/><br/>

                    Meetings between teachers and parents are scheduled twice a year, to review your child’s progress
                    and achievements and to set targets for future development.<br/><br/>

                    In addition to these formal meetings, parents are welcome to contact members of staff anytime
                    throughout the year should they have any queries or concerns which they would like to discuss.<br/><br/>

                    We provide various resources and services to ensure that you feel well informed and secure in the
                    knowledge that your child is looked after in a safe and caring environment.<br/><br/>

                    We’d love you to get involved too. So if you’d like to know more, just ask a member of Toddler
                    World staff team next time you’re here.<br/><br/>

                    <strong>Together we can make a difference.</strong>
                </p>
                <img src='/images/parentpartnership/1.webp'
                    alt='A mother and father kissing their child'
                    className='image-parent-partnership' />
            </div>
        </div>
    );
};

export default ParentPartnership;