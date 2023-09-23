import React from 'react';
import './Cards.scss';
import CardItem from '../../CardItem/CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>A bit about us</h1>
            <div className='card'>
                <div className='wrapper'>
                    <ul className='items'>
                        <CardItem
                            src='/gifs/placeholder1.gif'
                            text={"Our well-designed environment supports child's growth and development"}
                            label='Our Environment'
                            path='/our-environment'
                        />
                        <CardItem
                            src='/gifs/placeholder2.gif'
                            text='World class infrastructure for holistic development of the child'
                            label='Our Facilities'
                            path='/play-equipment'
                        />
                        <CardItem
                            src='/gifs/placeholder3.gif'
                            text='Our age appropriate programs that grow with your child'
                            label='Our Programmes'
                            path='/login'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
