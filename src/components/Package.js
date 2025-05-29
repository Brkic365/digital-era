// src/components/Package.js
import React, { useState } from 'react'; // Import useState
import styles from "../styles/components/Package.module.scss";
import GradientIcon from './GradientIcon';
import { BsCheckCircleFill, BsXCircleFill } from 'react-icons/bs';
// Remove LucideProps import if not used directly elsewhere
// import { LucideProps } from 'lucide-react'; 
import getStripe from '../lib/getStripe'; // Adjust path if necessary
import ArrowButton from './ArrowButton'; // Import ArrowButton

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
  stripePriceId // New prop for Stripe Price ID
}) {
  const [loading, setLoading] = useState(false);

  const formatPrice = (num) => {
    if (typeof num !== 'number') return null;
    const parts = num.toFixed(2).split('.');
    return `$${parts[0]}`;
  }

  const formattedPrice = formatPrice(price);

  const handleSubscribe = async () => {
    if (!stripePriceId) {
      console.error("Stripe Price ID is missing for this package.");
      alert("Sorry, this package cannot be subscribed to at the moment.");
      return;
    }
    setLoading(true);
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

      if (!stripe) {
        throw new Error("Stripe.js failed to load.");
      }

      const { error } = await stripe.redirectToCheckout({ sessionId });
      if (error) throw error;

    } catch (error) {
      console.error('Subscription error:', error);
      alert(`Error: ${error.message || 'Could not process subscription.'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={`${styles.package} ${isFeatured ? styles.featured : ''}`}>
      {isFeatured && <div className={styles.featuredBadge}>Most Popular</div>}
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

        {/*
        <div className={styles.subscribeButtonContainer} style={{ marginTop: '1.5rem' }}>
          <ArrowButton
            cta={{
              text: loading ? "Processing..." : "Subscribe Now",
              onClick: handleSubscribe,
            }}
            style={{ 
                width: '100%', 
                backgroundColor: isFeatured ? '#BB9B4E' : '#333', // Example: different color for featured
                color: 'white',
                opacity: loading ? 0.7 : 1,
                cursor: loading ? 'not-allowed' : 'pointer',
            }}
          />
          <button 
            onClick={handleSubscribe} 
            disabled={loading} 
            className={styles.subscribeButton} // Add styling for this button
          >
            {loading ? "Processing..." : "Subscribe Now"}
          </button>
        </div>
        */}
      </div>
    </section>
  );
}

export default Package;