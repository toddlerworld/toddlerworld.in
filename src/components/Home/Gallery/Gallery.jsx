import React from 'react';
import './Gallery.scss';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import images from './images.json';

const Gallery = () => {
    return (
        <div className="gallery">
            <h1>Image Gallery</h1>
            <hr className="hr-gallery"/>
            <Carousel
                className="crsl"
                showIndicators={false}
                autoPlay
                infiniteLoop
                centerMode
                interval={4000}
                showStatus={false}>
                {
                    images.map(
                        image => <img
                            src={image.source}
                            alt={image.alt}
                            key={image.id}
                        />
                    )
                }
            </Carousel>
        </div>
    );
};
export default Gallery;