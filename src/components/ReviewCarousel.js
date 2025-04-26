"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "../styles/components/ReviewCarousel.module.scss"; // Ensure this path is correct
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

// Added more reviews for better testing
const reviews = [
  {
    author: "Emily C.",
    img: "jane.png",
    about: "Copywriter & Coach",
    review:
      "Digital Era helped me launch my business, set up an LLC in Dubai, and now I’m literally working from a rooftop café in Lisbon. And I flew here in business class... for free.",
  },
  {
    author: "James H.",
    img: "john.png",
    about: "E-commerce Founder",
    review:
      "The consultation with Shubeg changed everything. I finally have a business structure, a tax strategy, and even AI employees working for me. This is the real deal.",
  },
  // --- Add or remove reviews below to test grid vs carousel ---
  // {
  //   author: "Sophia L.",
  //   img: "sophia.png",
  //   about: "Startup Advisor",
  //   review:
  //     "Incredible insights and actionable steps. The team helped streamline our international operations significantly. Highly recommended for global entrepreneurs.",
  // },
  // {
  //   author: "Michael B.",
  //   img: "michael.png",
  //   about: "SaaS Developer",
  //   review:
  //     "Setting up the technical infrastructure felt daunting, but Digital Era made it seamless. Their expertise in cloud solutions and automation saved us months.",
  // },
];

// --- Reusable Review Card Component ---
// Extracted for use in both grid and carousel slides
const ReviewCard = ({ review, isActive = false, isGridItem = false }) => (
  <div
    className={`${styles.slide} ${isActive ? styles.active : ""} ${isGridItem ? styles.gridItem : ""}`}
  >
    <blockquote className={styles.reviewText} aria-label={`Review by ${review.author}`}>
      "{review.review}"
    </blockquote>
    <div className={styles.authorInfo}>
      <img
        src={`/images/reviews/${review.img}`}
        alt={`Portrait of ${review.author}`}
        className={styles.avatar}
        width={48}
        height={48}
        loading="lazy" // Add lazy loading for images
      />
      <div className={styles.authorText}>
        <p className={styles.name}>{review.author}</p>
        <p className={styles.about}>{review.about}</p>
      </div>
    </div>
  </div>
);


const ReviewCarouselOrGrid = () => {
  const isCarousel = reviews.length > 2; // Condition to determine mode

  // --- Embla Hooks and State (Declared unconditionally) ---
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
    active: isCarousel, // Only activate embla if it's a carousel
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  // --- Callbacks (only relevant for carousel mode) ---
  const scrollPrev = useCallback(() => {
    if (!isCarousel) return;
    emblaApi?.scrollPrev();
  }, [emblaApi, isCarousel]);

  const scrollNext = useCallback(() => {
    if (!isCarousel) return;
    emblaApi?.scrollNext();
  }, [emblaApi, isCarousel]);

  const scrollTo = useCallback(
    (index) => {
      if (!isCarousel) return;
      emblaApi?.scrollTo(index);
    },
    [emblaApi, isCarousel]
  );

  // --- Effects (conditionally attach listeners) ---
  const onSelect = useCallback(() => {
    if (!emblaApi || !isCarousel) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, isCarousel]);

  const onInit = useCallback(() => {
    if (!emblaApi || !isCarousel) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
  }, [emblaApi, isCarousel, onSelect]);


  useEffect(() => {
    if (!emblaApi || !isCarousel) return; // Only run effect logic if it's a carousel

    onInit();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onInit);

    return () => {
      // Check emblaApi exists before trying to call off
      // although it should exist if we entered the effect
      emblaApi?.off("select", onSelect);
      emblaApi?.off("reInit", onInit);
    };
  }, [emblaApi, isCarousel, onInit, onSelect]); // Include isCarousel dependency

  // --- Conditional Rendering ---

  if (!isCarousel) {
    // --- Render Grid ---
    return (
      <section className={`${styles.carousel} ${styles.reviewGridContainer}`}>
        {/* Optionally add a title for the grid section */}
        {/* <h2 className={styles.gridTitle}>What Our Clients Say</h2> */}
        <div className={styles.reviewGrid}>
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} isGridItem={true} />
          ))}
        </div>
      </section>
    );
  }

  // --- Render Carousel ---
  return (
    <section className={styles.carousel}>
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.container}>
          {reviews.map((review, index) => (
            <ReviewCard
                key={index}
                review={review}
                isActive={index === selectedIndex}
            />
          ))}
        </div>
      </div>

      {/* Controls only rendered for Carousel */}
      <div className={styles.controls}>
        <button
          className={`${styles.navButton} ${styles.prev}`}
          onClick={scrollPrev}
          aria-label="Previous review"
        >
          <HiArrowNarrowLeft />
        </button>

        <div className={styles.dots}>
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`${styles.dot} ${
                index === selectedIndex ? styles.dotActive : ""
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>

        <button
          className={`${styles.navButton} ${styles.next}`}
          onClick={scrollNext}
          aria-label="Next review"
        >
          <HiArrowNarrowRight />
        </button>
      </div>
    </section>
  );
};

export default ReviewCarouselOrGrid; // Renamed component for clarity