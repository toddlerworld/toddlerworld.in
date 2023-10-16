import React from 'react';
import './Environment.scss';

const environment = () => {
    return (
        <div className='our-environment-container'>
            <h1 className='heading'>Our Environment</h1>
            <hr className='hr-about-us' />
            <div className='p-our-environment'>
                <p>
                    Toddler World is a space where once the child walks in, he is so lured that he is unable to withdraw
                    from it. Our well-designed environment not only supports child&apos;s growth and development but also
                    affirms family’s expectations of high quality. <br/><br/><br/>



                    <strong>Peace of mind:</strong><br/>
                    We understand that the safety and well-being of your child is your top priority.
                    That’s why we go above and beyond to ensure your child feels safe, comfortable, and cared for—in
                    all dimensions of our program.<br/><br/><br/>



                    <strong>Home away from home:</strong><br/>
                    We provide your child home away from home. Our personalized, nurturing vibe even carries over to our
                    buildings and grounds. The nursery has been specifically designed to create a fun, interactive, and
                    dynamic experience. At Toddler World, you can be sure that your child will gain the first steps toward
                    a lifelong love of learning.<br/><br/><br/>



                    <strong>Caring Growth Environment:</strong><br/>
                    Our dedicated staff is trained to create an environment which caters to :
                    <ul>
                        <li>Different stages of development of the child</li>
                        <li>Individual differences amongst children</li>
                        <li>Varied potentials/skills of individual children</li>
                        <li>Last but not the least, all aspects of intelligence</li>
                    </ul>
                    <br/>
                    Our space is intentionally designed to give your child the best possible experience!
                </p>
                <img src='/images/environment/our-environment.webp'
                    alt='Children playing in the play area'
                    className='image-our-environment' />
            </div>
        </div>
    );
};

export default environment;