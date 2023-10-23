import React from 'react';
import './PlayEquipment.scss';
import CardItem from '../CardItem/CardItem';

const PlayEquipment = () => {
    return (
        <div className='play-equipment-container' data-testid='play-equipment-container'>
            <h1>Our Facilities include...</h1>
            <hr className="hr-about-us"/>
            <div className="card">
                <div className="wrapper">
                    <ul className="items">
                        <CardItem
                            src="/images/playequipment/1.webp"
                            text={'The only place in Srinagar to have a purpose built climbing wall for our Toddlers'}
                            label="Wall Climbing"
                        />
                        <CardItem
                            src="/images/playequipment/2.webp"
                            text={'Selection of carefully chosen toys from United Kingdom to enhance key skills'}
                            label="Small World Toys"
                        />
                        <CardItem
                            src="/images/playequipment/3.webp"
                            text={'The only soft play area in Srinagar designed specifically keeping the young ones in mind'}
                            label="Soft Play Area"
                        />
                    </ul>
                    <ul className='items'>
                        <CardItem
                            src="/images/playequipment/4.webp"
                            text={'Outdoor Splash Pool for children to break free during hot summer days.'}
                            label="Splash Pool"
                        />
                        <CardItem
                            src="/images/playequipment/5.webp"
                            text={'Specially designed outdoor play area with soft flooring for safety of children.'}
                            label="Outdoor Play Area"
                        />
                        <CardItem
                            src="/images/playequipment/6.webp"
                            text={'There is a lot more to keep the kids entertained throughout the year.'}
                            label="And much more..."
                        />

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PlayEquipment;