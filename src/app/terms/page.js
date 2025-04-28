"use client"

import React from "react";
import styles from "../../styles/pages/Terms.module.scss";
import { motion } from "framer-motion"; // Import motion

// --- Animation Variants (Can reuse from Home/FAQ or define here) ---
const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const itemVariant = { // For individual paragraphs/headings
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

const listStagger = { // For staggering list items
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
};


const TermsPage = () => {
  return (
    // Animate the overall section container
    <motion.section
        className={styles.terms}
        initial="hidden"
        animate="visible" // Animate immediately on load
        variants={sectionVariant}
        transition={{ delay: 0.1 }} // Slight delay
    >
      {/* Graphic */}
      <img className={styles.graphic} src="/images/contact_graphic.png" alt=""/>

      {/* Animate content blocks */}
      <motion.h1 variants={itemVariant}>Terms of Service</motion.h1>
      <motion.p variants={itemVariant} className={styles.date}><strong>Effective Date:</strong> 27/04/2025</motion.p>

      <motion.p variants={itemVariant}>
        Welcome to Digital Era! By using our website and services, you agree to the following terms and conditions. Please read them carefully before proceeding.
      </motion.p>

      <motion.h2 variants={itemVariant}>1. Acceptance of Terms</motion.h2>
      <motion.p variants={itemVariant}>
        By accessing or using the Digital Era website and services, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, please do not use our services.
      </motion.p>

      <motion.h2 variants={itemVariant}>2. Services Provided</motion.h2>
      <motion.p variants={itemVariant}>
        Digital Era offers digital solutions, including but not limited to:
      </motion.p>
      <motion.ul variants={listStagger}> {/* Stagger list items */}
        <motion.li variants={itemVariant}>Branding and Design</motion.li>
        <motion.li variants={itemVariant}>Website Development</motion.li>
        <motion.li variants={itemVariant}>Marketing Strategies</motion.li>
        <motion.li variants={itemVariant}>Business Consulting</motion.li>
      </motion.ul>
      <motion.p variants={itemVariant}>
        We reserve the right to modify, suspend, or discontinue any service at any time without prior notice.
      </motion.p>

      <motion.h2 variants={itemVariant}>3. User Responsibilities</motion.h2>
      <motion.p variants={itemVariant}>When using our website or services, you agree to:</motion.p>
      <motion.ul variants={listStagger}>
        <motion.li variants={itemVariant}>Provide accurate and complete information.</motion.li>
        <motion.li variants={itemVariant}>Comply with all applicable laws and regulations.</motion.li>
        <motion.li variants={itemVariant}>Refrain from using our services for any illegal or unauthorized purposes.</motion.li>
      </motion.ul>

      <motion.h2 variants={itemVariant}>4. Intellectual Property</motion.h2>
      <motion.p variants={itemVariant}>
        All content, designs, logos, and materials created by Digital Era are the intellectual property...
      </motion.p>

      <motion.h2 variants={itemVariant}>5. Payment Terms</motion.h2>
      <motion.p variants={itemVariant}>
        Payment for services must be made as agreed in the invoice or contract...
      </motion.p>

      <motion.h2 variants={itemVariant}>6. Limitation of Liability</motion.h2>
      <motion.p variants={itemVariant}>
        Digital Era is not liable for any direct, indirect, incidental, or consequential damages...
      </motion.p>

      <motion.h2 variants={itemVariant}>7. Termination</motion.h2>
      <motion.p variants={itemVariant}>
        We reserve the right to terminate or suspend your access to our services...
      </motion.p>

      <motion.h2 variants={itemVariant}>8. Changes to Terms</motion.h2>
      <motion.p variants={itemVariant}>
        Digital Era reserves the right to modify these Terms of Service at any time...
      </motion.p>

      <motion.h2 variants={itemVariant}>9. Contact Us</motion.h2>
      <motion.p variants={itemVariant}>
        If you have any questions or concerns about these Terms of Service, please contact us at:
      </motion.p>
      <motion.p variants={itemVariant}>Email:  info@the-digital-era.com</motion.p>
      <motion.p variants={itemVariant}>Phone: [Insert Phone Number]</motion.p>

      <motion.p variants={itemVariant} className={styles.notice}>
        <strong>
          By using our website and services, you acknowledge that you have read and agree to these Terms of Service.
        </strong>
      </motion.p>
    </motion.section>
  );
};

export default TermsPage;