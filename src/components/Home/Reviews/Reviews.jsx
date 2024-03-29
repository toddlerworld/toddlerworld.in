import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Reviews.scss';
import { useMediaQuery } from 'react-responsive';
import { Avatar } from '@material-ui/core';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import reviews from './Reviews-list.json';

const PreviousBtn = (props) => {
    const {className, onClick} = props;
    return (
        <div className={className} onClick={onClick}>
            <ArrowBackIos className='back-arrow-review' />
        </div>
    );
};

const NextBtn = (props) => {
    const {className, onClick} = props;
    return (
        <div className={className} onClick={onClick}>
            <ArrowForwardIos className='forward-arrow-review' />
        </div>
    );
};

const Reviews = () => {
    const isDesktop = useMediaQuery({ 
        query: '(min-width: 768px)' 
    });

    return (
        <div className='testimonial'>
            <div className='testimonial-items'>
                <h1>The Trust We&apos;ve Earnt</h1>
                <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots={isDesktop} autoplay={true} autoplaySpeed={5000}>
                    {
                        reviews.map(
                            theReview =>
                                <Card
                                    key={theReview.id}
                                    img={theReview.image}
                                    review={theReview.review}
                                    author={theReview.author}
                                    alt={theReview.alt}
                                />
                        )
                    }
                </Slider>
            </div>
        </div>
    );
};

const Card = ({img, review, author, alt}) => {
    return (
        <div className='reviews-cards' data-testid='review-card'>
            <Avatar
                imgProps={{style: {borderRadius: '50%'}}}
                src={img}
                style={{
                    width: 120,
                    height: 120,
                    border: '1px solid lightgray',
                    padding: 7,
                    marginBottom: 20
                }}
                alt={alt}
            />
            <p>
                {review}
            </p>
            <p style={{ marginTop: 25 }}>
                <span style={{ fontWeight: 500, color: 'green' }} data-testid="author">
                    {author}
                </span>
            </p>
        </div>
    );
};

export default Reviews;