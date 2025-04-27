"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "../styles/components/ReviewCarousel.module.scss"; // Ensure this path is correct
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

// --- Default Avatar Filename ---
const defaultAvatarImage = "default-avatar.jpg";

const reviews = [
  {
    author: "Emily C.",
    img: defaultAvatarImage,
    about: "Copywriter & Coach",
    review:
      "Digital Era helped me launch my business, set up an LLC in Dubai, and now I’m literally working from a rooftop café in Lisbon. And I flew here in business class... for free.",
  },
  {
    author: "James H.",
    img: defaultAvatarImage,
    about: "E-commerce Founder",
    review:
      "The consultation with Shubeg changed everything. I finally have a business structure, a tax strategy, and even AI employees working for me. This is the real deal.",
  }
];

// --- Reusable Review Card Component ---
const ReviewCard = ({ review, isActive = false, isGridItem = false }) => (
  <div
    className={`${styles.slide} ${isActive ? styles.active : ""} ${isGridItem ? styles.gridItem : ""}`}
  >
    <blockquote className={styles.reviewText} aria-label={`Review by ${review.author}`}>
      "{review.review}"
    </blockquote>
    <div className={styles.authorInfo}>
      {/* The path is constructed correctly using the review.img value */}
      <img
        src={`/images/reviews/${review.img}`}
        alt={`Portrait of ${review.author}`}
        className={styles.avatar}
        width={48}
        height={48}
        loading="lazy"
      />
      <div className={styles.authorText}>
        <p className={styles.name}>{review.author}</p>
        <p className={styles.about}>{review.about}</p>
      </div>
    </div>
  </div>
);


const ReviewCarouselOrGrid = () => {
  // Determine if carousel mode based on the *actual* number of reviews
  const isCarousel = reviews.length > 2;

  // --- Embla Hooks and State ---
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: isCarousel, // Only loop if it's actually a carousel
    align: "center",
    containScroll: "trimSnaps",
    active: isCarousel,
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  // --- Callbacks ---
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

  // --- Effects ---
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
    if (!emblaApi || !isCarousel) return;

    onInit();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onInit);

    return () => {
      emblaApi?.off("select", onSelect);
      emblaApi?.off("reInit", onInit);
    };
  }, [emblaApi, isCarousel, onInit, onSelect]);

  // --- Conditional Rendering ---

  if (!isCarousel) {
    // --- Render Grid ---
    return (
      // Use a container that doesn't imply carousel if it's a grid
      <section className={`${styles.reviewGridContainer}`}>
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
                isGridItem={false} // Explicitly false for carousel items
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

export default ReviewCarouselOrGrid;