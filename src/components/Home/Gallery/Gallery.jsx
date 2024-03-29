import React from 'react';
import './Gallery.scss';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import images from './images.json';

const Gallery = () => {
    return (
        <div className="gallery" data-testid="gallery-component">
            <h1>Photo Gallery</h1>
            <hr className="hr-gallery"/>
            <Carousel
                className="crsl"
                showIndicators={false}
                autoPlay
                infiniteLoop
                centerMode
                useKeyboardArrows
                interval={4000}
                showStatus={false}>
                {
                    images.map(
                        image => <img
                            src={image.source}
                            alt={image.alt}
                            key={image.id}
                            height="100%"
                            width="100%"
                        />
                    )
                }
            </Carousel>
        </div>
    );
};
export default Gallery;