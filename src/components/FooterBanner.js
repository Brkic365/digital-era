// src/components/FooterBanner.js
import React, { useState } from 'react'; // Import useState
import styles from "../styles/components/FooterBanner.module.scss";
import ArrowButton from './ArrowButton';
import { Plane, Calendar, Mail } from 'lucide-react';
import getStripe from '../lib/getStripe'; // Import getStripe

import { useRouter } from 'next/navigation';

// --- !!! IMPORTANT: REPLACE WITH YOUR ACTUAL STRIPE PRICE ID !!! ---
const STRATEGY_SESSION_PRICE_ID = 'price_1RRtm539gvg6me8b5ugm09WI'; // Replace!

function FooterBanner() {
  const router = useRouter();
  
  const [loading, setLoading] = useState(false);
  const contactEmail = "info@the-digital-era.com";

  const handleStrategySessionCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/checkout_sessions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId: STRATEGY_SESSION_PRICE_ID, mode: 'payment' }),
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
      console.error('Strategy session checkout error (Footer):', error);
      alert(`Error: ${error.message || 'Could not process payment.'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.footerBanner}>
      <div className={styles.content}>
        <h2>
          <Plane className={styles.headingIcon} aria-hidden="true" />
          Let’s Build Your Dream Life
        </h2>
        <p className={styles.tagline}>
          Work remotely. Travel in style. Pay less tax. Scale with clarity.
          <br />
          This is the Digital Era, and your journey starts now.
        </p>
        <div className={styles.consultationOffer}>
          <p>
            👉 Start with a 15-Min Consultation — Only $99.99
          </p>
        </div>
        <div className={styles.actions}>
          <p className={styles.actionItem}>
            <Calendar size={18} />
            <span>Book your strategy session today and {"let's"} create your custom roadmap.</span>
          </p>
          <ArrowButton
            cta={{
              text: loading ? "Processing..." : "Book Strategy Session",
              //onClick: handleStrategySessionCheckout,
              onClick: () => router.push("/contact")
            }}
            style={{
              backgroundColor: "#BB9B4E",
              color: "white",
              borderColor: "#BB9B4E",
              marginTop: '0.5rem',
              opacity: loading ? 0.7 : 1,
              cursor: loading ? 'not-allowed' : 'pointer',
            }}
          />
          <p className={styles.actionItem} style={{ marginTop: '1rem' }}>
            <Mail size={18} />
            <span>Questions? Email us at: <a href={`mailto:${contactEmail}`}>{contactEmail}</a></span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default FooterBanner;