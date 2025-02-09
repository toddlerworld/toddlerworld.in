import React, { useEffect, useState } from "react";
import { lazy, Suspense } from "react";
import "./Home.scss";
import MainSection from "./MainSection/MainSection";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handler = (event) => setMatches(event.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [query]);

  return matches;
};

// Lazy load components
const Cards = lazy(() => import("./Card/Cards"));
const Welcome = lazy(() => import("./Welcome/Welcome"));
const HomeLandingImage = lazy(
  () => import("./Home-landing-image/Home-landing-image"),
);
const Youtube = lazy(() => import("./Youtube/Youtube"));
const Gallery = lazy(() => import("./Gallery/Gallery"));
const Contact = lazy(() => import("./Contact/Contact"));
const Reviews = lazy(() => import("./Reviews/Reviews"));

const BackgroundImage = () => {
  const isDesktop = useMediaQuery("(min-width: 600px)");

  return (
    <img
      src={
        isDesktop
          ? "/images/main-section/landing-image.webp"
          : "/images/mobile.webp"
      }
      className="landing-photo"
      alt="Toddler World Preschool Environment"
      loading="eager"
      fetchPriority="high"
      data-testid={`landing-photo-${isDesktop ? "desktop" : "mobile"}`}
    />
  );
};

const Home = () => {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-page">
      <BackgroundImage />
      <MainSection />

      <Suspense fallback={<div className="loading-skeleton">Loading...</div>}>
        <Welcome />
        <HomeLandingImage />
        <Cards />
        <Reviews />
        <Youtube />
        <Gallery />
        <Contact />
      </Suspense>
    </div>
  );
};

export default Home;
