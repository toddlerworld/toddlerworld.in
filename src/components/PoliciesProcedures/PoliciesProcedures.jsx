import React, {useEffect} from 'react';
import './PoliciesProcedures.scss';
const PoliciesProcedures = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return(
        <div className='policies-procedures-container'>
            <h1 className='heading'>Policies and Procedures</h1>
            <hr className='hr-about-us' />
            <div className='p-policies-procedures'>
                <p>
                    Toddler World maintains Policies and Procedures, which includes but is not limited to the
                    below-listed policies.<br/><br/>
                    <ul>
                        <li>Health and Safety</li>
                        <li>Incident</li>
                        <li>Accident</li>
                        <li>Sick Child</li>
                        <li>Behaviour</li>
                        <li>Biting</li>
                    </ul>
                </p>
                <img src='/images/policies-procedures/1.webp'
                    alt='Pencils'
                    className='image-policies-procedures'
                />
            </div>
        </div>
    );
};

export default PoliciesProcedures;