// src/components/Package.js
"use client";
import React, { useState } from 'react';
import styles from "../styles/components/Package.module.scss";
import GradientIcon from './GradientIcon';
import { BsCheckCircleFill, BsXCircleFill } from 'react-icons/bs';
import getStripe from '../lib/getStripe';
import ArrowButton from './ArrowButton';
import IntakeFormModal from './IntakeFormModal'; // Import the modal

const USING_STRIPE = false; // Boolean flag

function Package({
  index,
  icon,
  title,
  price,
  about,
  listTitle,
  checks = [],
  minuses = [],
  isFeatured = false,
  stripePriceId
}) {
  const [loadingStripe, setLoadingStripe] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal

  const formatPrice = (num) => {
    if (typeof num !== 'number') return null;
    const parts = num.toFixed(2).split('.');
    return `$${parts[0]}`;
  }

  const formattedPrice = formatPrice(price);

  const handleStripeSubscribe = async () => {
    if (!stripePriceId) {
      console.error("Stripe Price ID is missing for this package.");
      alert("Sorry, this package cannot be subscribed to at the moment.");
      return;
    }
    setLoadingStripe(true);
    try {
      const response = await fetch('/api/checkout_sessions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId: stripePriceId, mode: 'subscription' }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create checkout session.');
      }

      const { sessionId } = await response.json();
      const stripe = await getStripe();
      if (!stripe) throw new Error("Stripe.js failed to load.");

      const { error } = await stripe.redirectToCheckout({ sessionId });
      if (error) throw error;

    } catch (error) {
      console.error('Stripe subscription error:', error);
      alert(`Error: ${error.message || 'Could not process subscription.'}`);
    } finally {
      setLoadingStripe(false);
    }
  };

  const openIntakeForm = () => {
    setIsModalOpen(true);
  };

  const closeIntakeForm = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className={`${styles.package} ${isFeatured ? styles.featured : ''}`}>
        {isFeatured && <div className={styles.featuredBadge}>Most Popular</div>}
        {/* H1 removed for cleaner card-only look, can be added back if design needs it */}
        {/* <h1>{index}</h1> */}
        <div className={styles.card}>
          <div className={styles.top}>
            <GradientIcon icon={icon} size="2.5rem" />
            <h4>{title}</h4>
          </div>

          {formattedPrice && (
            <div className={styles.priceSection}>
              <span className={styles.priceAmount}>{formattedPrice}</span>
              <span className={styles.priceFrequency}>/ month</span>
            </div>
          )}

          {about && <p className={styles.aboutText}>{about}</p>}

          {(checks.length > 0 || minuses.length > 0) && (
            <hr className={styles.separator} />
          )}

          {checks.length > 0 && (
            <div className={styles.featureSection}>
              {listTitle && <h5 className={styles.listTitle}>{listTitle}</h5>}
              <ul className={`${styles.featureList} ${styles.checkList}`}>
                {checks.map((point, i) => (
                  <li key={`check-${index}-${i}`}>
                    <BsCheckCircleFill className={styles.listIcon} aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {minuses.length > 0 && (
            <div className={styles.featureSection}>
              <h5 className={`${styles.listTitle} ${styles.minusTitle}`}>Not Included:</h5>
              <ul className={`${styles.featureList} ${styles.minusList}`}>
                {minuses.map((point, i) => (
                  <li key={`minus-${index}-${i}`}>
                    <BsXCircleFill className={`${styles.listIcon} ${styles.minusIcon}`} aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Conditional Button Rendering */}
          <div className={styles.actionButtonContainer}>
            {USING_STRIPE ? (
              <ArrowButton
                cta={{
                  text: loadingStripe ? "Processing..." : "Subscribe Now",
                  // Pass onClick only if not loading to prevent double clicks during handler
                  onClick: loadingStripe ? undefined : handleStripeSubscribe,
                }}
                style={{
                  width: '100%',
                  backgroundColor: isFeatured ? '#BB9B4E' : (loadingStripe ? '#ccc' : '#333'),
                  color: 'white',
                  borderColor: isFeatured ? '#BB9B4E' : (loadingStripe ? '#ccc' : '#333'),
                  opacity: loadingStripe ? 0.7 : 1,
                  cursor: loadingStripe ? 'not-allowed' : 'pointer',
                }}
                disabled={loadingStripe} // Add disabled prop to ArrowButton if it supports it
              />
            ) : (
              <ArrowButton
                cta={{
                  text: "Select Package",
                  onClick: openIntakeForm,
                }}
                style={{
                  width: '100%',
                  backgroundColor: '#BB9B4E', // Use theme accent color
                  color: 'white',
                  borderColor: '#BB9B4E',
                }}
              />
            )}
          </div>
        </div>
      </section>

      {/* Intake Form Modal */}
      <IntakeFormModal
        isOpen={isModalOpen}
        onClose={closeIntakeForm}
        selectedPackageTitle={title} // Pass the title of the selected package
      />
    </>
  );
}

export default Package;