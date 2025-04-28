"use client";

import React from "react";
import styles from "../../styles/pages/Contact.module.scss";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi"; // Removed HiOutlineChatAlt2 as it wasn't used
import { FaXTwitter } from "react-icons/fa6";
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

const itemVariant = { // For individual items like form/sidebar
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const formItemVariant = { // For staggering form inputs
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
}

const formStagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } } // Faster stagger for form fields
}


const ContactPage = () => {
  return (
    // Animate the overall section container
    <motion.section
        className={styles.contact}
        initial="hidden"
        animate="visible" // Animate immediately on load
        variants={sectionVariant}
        transition={{ delay: 0.1 }} // Slight delay
    >
      {/* Graphic doesn't usually need animation */}
      <img className={styles.graphic} src="/images/contact_graphic.png" alt=""/>

      {/* Animate the header */}
      <motion.div className={styles.header} variants={itemVariant}>
        <h1>Contact Our Team</h1>
        <p>Got any questions about our services? {"We’re"} here to help!</p>
      </motion.div>

      {/* Animate the grid container */}
      <motion.div className={styles.grid} variants={sectionVariant}> {/* Can reuse section variant */}
        {/* Animate the form */}
        <motion.form className={styles.form} variants={formStagger}> {/* Stagger form children */}
          <motion.div className={styles.row} variants={formItemVariant}>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </motion.div>
          <motion.input variants={formItemVariant} type="email" placeholder="you@company.com" />
          <motion.input variants={formItemVariant} type="tel" placeholder="(555) 000-0000" />

          <motion.textarea variants={formItemVariant} placeholder="Leave us a message…" rows={6} />

          <motion.div className={styles.services} variants={formItemVariant}>
            <label><input type="checkbox" /> Business Consulting</label>
            <label><input type="checkbox" /> Web Development</label>
            <label><input type="checkbox" /> Content Creation</label>
            <label><input type="checkbox" /> Design</label>
            <label><input type="checkbox" /> User Research</label>
            <label><input type="checkbox" /> Other</label>
          </motion.div>

          <motion.button variants={formItemVariant} type="submit">Send Message</motion.button>
        </motion.form>

        {/* Animate the sidebar */}
        <motion.div className={styles.sidebar} variants={itemVariant} transition={{ delay: 0.2 }}> {/* Delay sidebar slightly */}
          {/* Animate sidebar blocks */}
          <motion.div variants={itemVariant}>
            <h4>Chat with Us</h4>
            <p>Speak to our friendly team via chat.</p>
            <ul>
              <li><HiOutlineMail /> <a href="mailto:info@the-digital-era.com">Shoot us an email</a></li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ContactPage;