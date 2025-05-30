// src/components/FooterBanner.js
"use client";
import React, { useState } from 'react';
import styles from "../styles/components/FooterBanner.module.scss";
import ArrowButton from './ArrowButton';
import { Plane, Calendar, Mail } from 'lucide-react';
import IntakeFormModal from './IntakeFormModal'; // Import the modal

// Removed: getStripe, useRouter, STRATEGY_SESSION_PRICE_ID, as direct Stripe checkout is removed from this button for now

function FooterBanner() {
  // --- MODAL STATE LOCAL TO FOOTER BANNER ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  // loadingButton is for the ArrowButton's visual state, not directly related to modal submission here.
  const [loadingButton, setLoadingButton] = useState(false);
  const contactEmail = "info@the-digital-era.com"; // Replace with your actual email

  const openIntakeForm = () => {
    setIsModalOpen(true);
  };

  const closeIntakeForm = () => {
    setIsModalOpen(false);
    // Form reset logic is handled within IntakeFormModal on its close/success
  };
  // --- END MODAL STATE ---

  return (
    <> {/* Use React.Fragment to return multiple top-level elements (section + modal) */}
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
                text: loadingButton ? "Processing..." : "Book Strategy Session",
                onClick: openIntakeForm, // Opens the local modal
              }}
              style={{
                backgroundColor: "#BB9B4E",
                color: "white",
                borderColor: "#BB9B4E",
                marginTop: '0.5rem',
              }}
              // disabled={loadingButton} // Only if this button performs its own async action
            />
            <p className={styles.actionItem} style={{ marginTop: '1rem' }}>
              <Mail size={18} />
              <span>Questions? Email us at: <a href={`mailto:${contactEmail}`}>{contactEmail}</a></span>
            </p>
          </div>
        </div>
      </section>

      {/* IntakeFormModal is rendered here, controlled by FooterBanner's state */}
      <IntakeFormModal
        isOpen={isModalOpen}
        onClose={closeIntakeForm}
        // When opened from footer, it's a general inquiry or for the strategy session mentioned
        selectedPackageTitle="Strategy Session Inquiry"
      />
    </>
  );
}

export default FooterBanner;