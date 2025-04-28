import React from 'react';
import styles from "../styles/components/FooterBanner.module.scss";
import ArrowButton from './ArrowButton'; // Keep if used for booking button
import { Plane, Calendar, Mail } from 'lucide-react'; // Keep needed icons

function FooterBanner() {
  // Placeholders - replace with actual links/email
  const bookingLink = "/contact"; // Or your Calendly/booking page link
  const contactEmail = "info@the-digital-era.com"; // Replace with your actual email

  return (
    <section className={styles.footerBanner}>
      {/* Optional: Background graphic can be added/removed via SCSS */}
      {/* <Plane className={styles.backgroundIcon} aria-hidden="true" /> */}

      <div className={styles.content}>
        {/* Main Heading */}
        <h2>
          <Plane className={styles.headingIcon} aria-hidden="true" />
          Let’s Build Your Dream Life
        </h2>

        {/* Subheading/Tagline */}
        <p className={styles.tagline}>
          Work remotely. Travel in style. Pay less tax. Scale with clarity.
          <br />
          This is the Digital Era, and your journey starts now.
        </p>

        {/* Consultation Offer */}
        <div className={styles.consultationOffer}>
          <p>
            👉 Start with a 20-Min Consultation — Only $99.99
          </p>
        </div>

        {/* Contact/Booking Info */}
        <div className={styles.actions}>
          <p className={styles.actionItem}>
            <Calendar size={18} />
            <span>Book your strategy session today and {"let's"} create your custom roadmap.</span>
          </p>
          {/* Using ArrowButton for the booking link */}
          <ArrowButton
            cta={{
              text: "Book Strategy Session",
              href: bookingLink
            }}
            style={{
              backgroundColor: "#BB9B4E", // Example style, adjust as needed
              color: "white",
              borderColor: "#BB9B4E",
              marginTop: '0.5rem', // Add some space above email
            }}
          />
          <p className={styles.actionItem}>
            <Mail size={18} />
            <span>Questions? Email us at: <a href={`mailto:${contactEmail}`}>{contactEmail}</a></span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default FooterBanner;