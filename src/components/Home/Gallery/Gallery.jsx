import React, { useState, useEffect } from "react";
import "./Gallery.scss";
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  PlayArrow,
} from "@material-ui/icons";
import images from "./images.json";

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState("next");

  useEffect(() => {
    let slideTimer;
    if (isPlaying) {
      slideTimer = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1,
        );
        setDirection("next");
      }, 5000);
    }
    return () => clearInterval(slideTimer);
  }, [isPlaying]);

  const handlePrevious = () => {
    setDirection("prev");
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setDirection("next");
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handleThumbnailClick = (index) => {
    setDirection(index > currentImageIndex ? "next" : "prev");
    setCurrentImageIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="gallery" data-testid="gallery-component">
      <h2 className="gallery__title">Photo Gallery</h2>

      <div className="gallery__main">
        <button
          className="gallery__nav gallery__nav--prev"
          onClick={handlePrevious}
          aria-label="Previous image"
        >
          <ChevronLeft />
        </button>

        <div className="gallery__image-container">
          <img
            src={images[currentImageIndex].source}
            alt={images[currentImageIndex].alt}
            className={`gallery__image gallery__image--${direction}`}
            key={currentImageIndex} // Force re-render for animation
          />
        </div>

        <button
          className="gallery__nav gallery__nav--next"
          onClick={handleNext}
          aria-label="Next image"
        >
          <ChevronRight />
        </button>

        <button
          className="gallery__nav gallery__nav--play"
          onClick={togglePlayPause}
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isPlaying ? <Pause /> : <PlayArrow />}
        </button>
      </div>

      <div className="gallery__thumbnails">
        {images.map((image, index) => (
          <button
            key={image.id}
            className={`gallery__thumbnail-btn ${
              index === currentImageIndex
                ? "gallery__thumbnail-btn--active"
                : ""
            }`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img
              src={image.source}
              alt={`Thumbnail ${index + 1}`}
              className="gallery__thumbnail-img"
            />
          </button>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
