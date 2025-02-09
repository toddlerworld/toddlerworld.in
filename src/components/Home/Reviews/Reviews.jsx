import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Reviews.scss";
import { useMediaQuery } from "react-responsive";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import reviews from "./Reviews-list.json";

const NavigationButton = ({ className, onClick, children }) => (
  <button
    className={`nav-button ${className}`}
    onClick={onClick}
    aria-label={className.includes("prev") ? "Previous" : "Next"}
  >
    {children}
  </button>
);

const Reviews = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    prevArrow: (
      <NavigationButton>
        <ChevronLeft />
      </NavigationButton>
    ),
    nextArrow: (
      <NavigationButton>
        <ChevronRight />
      </NavigationButton>
    ),
    adaptiveHeight: true,
  };

  return (
    <section className="testimonials">
      <div className="testimonials__container">
        <h2 className="testimonials__title">The Trust We've Earnt</h2>
        <div className="testimonials__slider-container">
          <Slider {...settings}>
            {reviews.map((review) => (
              <TestimonialCard
                key={review.id}
                img={review.image}
                review={review.review}
                author={review.author}
                alt={review.alt}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ img, review, author, alt }) => (
  <div className="testimonial-card">
    <div className="testimonial-card__content">
      <div className="testimonial-card__avatar-wrapper">
        <img src={img} alt={alt} className="testimonial-card__avatar" />
      </div>
      <blockquote className="testimonial-card__quote">{review}</blockquote>
      <cite className="testimonial-card__author">{author}</cite>
    </div>
  </div>
);

export default Reviews;
