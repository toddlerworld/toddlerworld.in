import React, {useEffect} from 'react';
import './Programmes.scss';
import CardItem from '../CardItem/CardItem';

const Programmes = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return(
        <div className="programmes-container" data-testid="programmes-container">
            <div className="programmes-top-container">
                <h2>Our Programmes</h2><br/>
                <p>Our programmes are designed keeping in mind your child’s age and
                    ability to absorb information. We make sure to provide your child
                    with every opportunity to challenge themselves while also paying equal
                    attention to keeping them fit and active. Our activities are not
                    only confined to the classroom but also include various other
                    activities to make learning fun.
                </p>
            </div>
            <div className="programmes-cards-container">
                <div className="card">
                    <div className="wrapper">
                        <ul className="items">
                            <CardItem
                                src="/images/programmes/1.webp"
                                text={'A high-energy toddler program that lets them explore the world: Toddlers at Toddler World'}
                                label="Play Group (18 - 24 months)"
                                path="/play-group"
                            />
                            <CardItem
                                src="/images/programmes/2.webp"
                                text={'A strong foundation for success in school and in life: Pre-Nursery at Toddler World'}
                                label="Pre Nursery (2 - 3 years)"
                                path="/pre-nursery"
                            />
                            <CardItem
                                src="/images/programmes/3.webp"
                                text={'Escalates the possibilities of learning in your child: Nursery at Toddler World'}
                                label="Nursery (3 - 4 years)"
                                path="/nursery"
                            />
                        </ul>
                    </div>
                </div>
            </div>
            <div className="programmes-bottom-container">
                <h3>Age appropriate programmes that grow with your child</h3><br/>
                <p>Our programmes are designed keeping in mind your child’s age and
                    ability to absorb information. We make sure to provide your
                    child with every opportunity to challenge themselves while
                    also paying equal attention to keeping them fit and active.
                    Our activities are not only confined to the classroom but also
                    include various other activities to make learning fun.
                </p>
            </div>
        </div>
    );
};

export default Programmes;