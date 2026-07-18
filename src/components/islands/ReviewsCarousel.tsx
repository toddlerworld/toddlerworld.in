import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import './ReviewsCarousel.css';

interface Review {
  id: number;
  image: string;
  review: string;
  author: string;
  alt?: string;
}

export default function ReviewsCarousel({ reviews }: { reviews: Review[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || paused) return;
    const id = setInterval(() => emblaApi.scrollNext(), 6000);
    return () => clearInterval(id);
  }, [emblaApi, paused]);

  return (
    <div
      className="reviews"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="reviews__viewport" ref={emblaRef}>
        <div className="reviews__track">
          {reviews.map((r, i) => (
            <figure className={`reviews__slide${i === selected ? ' is-snapped' : ''}`} key={r.id}>
              <blockquote className="reviews__quote">{r.review}</blockquote>
              <figcaption className="reviews__author">
                <img
                  className="reviews__avatar"
                  src={r.image}
                  alt={r.author}
                  width={64}
                  height={64}
                  loading="lazy"
                />
                <span className="reviews__name">{r.author}</span>
                <span className="reviews__role">Toddler World parent</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="reviews__controls">
        <button className="reviews__arrow" onClick={scrollPrev} aria-label="Previous review">
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <path
              d="M15 6l-6 6 6 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="reviews__dots" role="tablist" aria-label="Choose review">
          {reviews.map((r, i) => (
            <button
              key={r.id}
              className={`reviews__dot${i === selected ? ' is-active' : ''}`}
              aria-label={`Review ${i + 1}`}
              aria-selected={i === selected}
              role="tab"
              onClick={() => scrollTo(i)}
            />
          ))}
        </div>
        <button className="reviews__arrow" onClick={scrollNext} aria-label="Next review">
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <path
              d="M9 6l6 6-6 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
