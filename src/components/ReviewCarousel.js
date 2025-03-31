"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "../styles/components/ReviewCarousel.module.scss";
import {
  HiArrowNarrowLeft,
  HiArrowNarrowRight,
} from "react-icons/hi";

const reviews = [
  {
    author: "John Doe",
    img: "jane.png",
    about: "Founder of Jane's Artisan Bakery",
    review:
      "Working with Digital Era was an incredible experience. Their branding and website design took my business to the next level!",
  },
  {
    author: "Jane Doe",
    img: "jane.png",
    about: "Founder of Jane's Artisan Bakery",
    review:
      "Working with Digital Era was an incredible experience. Their branding and website design took my business to the next level!",
  },
  {
    author: "Jane Doe",
    img: "jane.png",
    about: "Founder of Jane's Artisan Bakery",
    review:
      "Working with Digital Era was an incredible experience. Their branding and website design took my business to the next level!",
  },
  {
    author: "Jane Doe",
    img: "jane.png",
    about: "Founder of Jane's Artisan Bakery",
    review:
      "Working with Digital Era was an incredible experience. Their branding and website design took my business to the next level!",
  },
  {
    author: "Jane Doe",
    img: "jane.png",
    about: "Founder of Jane's Artisan Bakery",
    review:
      "Working with Digital Era was an incredible experience. Their branding and website design took my business to the next level!",
  },
  {
    author: "Jane Doe",
    img: "jane.png",
    about: "Founder of Jane's Artisan Bakery",
    review:
      "Working with Digital Era was an incredible experience. Their branding and website design took my business to the next level!",
  },
  {
    author: "Luke Doe",
    img: "jane.png",
    about: "Founder of Jane's Artisan Bakery",
    review:
      "Working with Digital Era was an incredible experience. Their branding and website design took my business to the next level!",
  },
];

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
    skipSnaps: true,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const index = emblaApi.selectedScrollSnap();
    setSelectedIndex(index % reviews.length);
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className={styles.carousel}>
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.container}>
          {reviews.map((review, index) => (
            <div
              className={`${styles.slide} ${
                index === selectedIndex ? styles.active : ""
              }`}
              key={index}
            >
              <p className={styles.reviewText}>{review.review}</p>
              <div className={styles.authorInfo}>
                <img
                  src={`/images/reviews/${review.img}`}
                  alt={review.author}
                  className={styles.avatar}
                />
                <div className={styles.authorText}>
                  <p className={styles.name}>{review.author}</p>
                  <p className={styles.about}>{review.about}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.controls}>
        <div className={styles.buttons}>
          <button
            className={styles.prev}
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
          >
            <HiArrowNarrowLeft />
          </button>
          <button
            className={styles.next}
            onClick={scrollNext}
            disabled={nextBtnDisabled}
          >
            <HiArrowNarrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
