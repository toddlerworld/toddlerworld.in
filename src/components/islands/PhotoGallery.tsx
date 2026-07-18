import { useCallback, useEffect, useRef, useState } from 'react';
import './PhotoGallery.css';

interface Photo {
  id: string;
  source: string;
  alt: string;
}

export default function PhotoGallery({ photos }: { photos: Photo[] }) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const thumbsRef = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + photos.length) % photos.length),
    [photos.length]
  );

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % photos.length), 5000);
    return () => clearInterval(id);
  }, [playing, photos.length]);

  // Center the active thumbnail within the thumb strip only. Scrolling the strip
  // directly (instead of scrollIntoView) never scrolls ancestors/the window, so
  // auto-advance can't yank the viewport back when the gallery is off-screen.
  useEffect(() => {
    const strip = thumbsRef.current;
    const active = strip?.querySelector<HTMLElement>('[data-active="true"]');
    if (!strip || !active) return;
    strip.scrollTo({
      left: active.offsetLeft - strip.clientWidth / 2 + active.clientWidth / 2,
      behavior: 'smooth',
    });
  }, [index]);

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') go(-1);
    if (e.key === 'ArrowRight') go(1);
  };

  return (
    <div
      className="gallery"
      onKeyDown={onKey}
      tabIndex={0}
      role="group"
      aria-roledescription="carousel"
      aria-label="Photo gallery"
    >
      <div
        className="gallery__stage"
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current == null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
      >
        {photos.map((p, i) => (
          <img
            key={p.id}
            className={`gallery__img${i === index ? ' is-active' : ''}`}
            src={p.source}
            alt={p.alt}
            width={1200}
            height={800}
            loading={i === 0 ? 'eager' : 'lazy'}
            aria-hidden={i !== index}
          />
        ))}

        <button
          className="gallery__arrow gallery__arrow--prev"
          onClick={() => go(-1)}
          aria-label="Previous photo"
        >
          <Chevron dir="left" />
        </button>
        <button
          className="gallery__arrow gallery__arrow--next"
          onClick={() => go(1)}
          aria-label="Next photo"
        >
          <Chevron dir="right" />
        </button>

        <div className="gallery__toolbar">
          <button
            className="gallery__play"
            onClick={() => setPlaying((v) => !v)}
            aria-label={playing ? 'Pause slideshow' : 'Play slideshow'}
          >
            {playing ? <PauseIcon /> : <PlayIcon />}
          </button>
          <span className="gallery__count">
            {index + 1} / {photos.length}
          </span>
        </div>
      </div>

      <div className="gallery__thumbs" ref={thumbsRef}>
        {photos.map((p, i) => (
          <button
            key={p.id}
            className={`gallery__thumb${i === index ? ' is-active' : ''}`}
            data-active={i === index}
            onClick={() => setIndex(i)}
            aria-label={`Go to photo ${i + 1}`}
          >
            <img src={p.source} alt="" width={120} height={90} loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  );
}

function Chevron({ dir }: { dir: 'left' | 'right' }) {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
      <path
        d={dir === 'left' ? 'M15 6l-6 6 6 6' : 'M9 6l6 6-6 6'}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path d="M7 5l12 7-12 7z" fill="currentColor" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path d="M7 5h4v14H7zM13 5h4v14h-4z" fill="currentColor" />
    </svg>
  );
}
