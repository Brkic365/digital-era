"use client"

import React, { useState } from 'react';
import styles from "../styles/components/ServiceCard.module.scss";
import GradientIcon from './GradientIcon';
import ArrowButton from './ArrowButton';
import ServiceModal from './ServiceModal';

function ServiceCard({ icon, title, text, points = [] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section className={styles.serviceCard} onClick={openModal}>
        <div className={styles.top}>
          <GradientIcon icon={icon} size="3rem" />
          <h4>{title}</h4>
        </div>
        <p>{text}</p>
        <div className={styles.ctaHolder}>
          <ArrowButton
            cta={{
              text: "Learn More",
              href: null, // just visual, interaction is handled by modal
            }}
            style={{
              backgroundColor: "transparent",
              color: "#516681",
              width: "100%",
              pointerEvents: "none", // prevents button stealing the click
            }}
          />
        </div>
      </section>

      {isModalOpen && (
        <ServiceModal
          title={title}
          icon={icon}
          text={text}
          points={points}
          onClose={closeModal}
        />
      )}
    </>
  );
}

export default ServiceCard;
