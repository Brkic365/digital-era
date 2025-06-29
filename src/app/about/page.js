// src/app/about/page.js
"use client"

import React from 'react';
import styles from "../../styles/pages/About.module.scss";
import TitleTextCta from '../../components/TitleTextCta'; // Keep for Final CTA
// Import motion
import { motion } from 'framer-motion';
// Import icons
import { Code2, Scale, BookUser, User } from 'lucide-react';
import { BsCheckCircleFill } from 'react-icons/bs'; // Check icon for lists
import FooterBanner from '../../components/FooterBanner';
import SubtitleCrumb from '../../components/SubtitleCrumb';

// --- Animation Variants (Can reuse from Home or define here) ---
const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const itemVariant = { // For individual items like cards
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const gridStagger = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15, // Stagger delay for grid items
        }
    }
};


function About() {

  return (
    <main className={styles.about}>
      {/* --- SIMPLE HERO --- */}
      <motion.section
        className={styles.aboutHero}
        initial="hidden"
        animate="visible" // Animate immediately
        variants={sectionVariant}
      >
        <div className={styles.heroContent}>
          <SubtitleCrumb text="About Us" />
          <motion.h1 variants={itemVariant}>Empowering the Next Generation of Entrepreneurs</motion.h1>
          <motion.p variants={itemVariant}>Digital Era provides the strategies, network, and systems for building location-independent businesses that generate real freedom.</motion.p>
        </div>
      </motion.section>
      {/* --- END SIMPLE HERO --- */}


      {/* --- FOUNDER SECTION --- */}
      <motion.section
        className={styles.founderSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariant}
      >
         {/* Animate the content wrapper within the section */}
         <motion.div className={styles.founderContent} variants={gridStagger}> {/* Use stagger for columns */}
            <motion.div className={styles.founderText} variants={itemVariant}> {/* Text column */}
                 <h2>Shubeg Singh — Founder & CEO</h2>
                 {/* Add motion.p if you want paragraph-level stagger */}
                 <p>Shubeg Singh is a Canadian entrepreneur and the Founder & CEO of Digital Era, a modern platform helping the next generation of entrepreneurs build location-independent businesses.</p>
                 <p>His journey began in 2015, working in fast food, where he got an early look at the limits of trading time for money. In 2018, he started working at a consumer electronics store till 2022, gaining insight into tech and consumer behavior. While there, he started reselling electronics — a side hustle that sparked his passion for entrepreneurship and set him on the path to building his own ventures.</p>
                 <p>While pursuing a business degree, Shubeg came to a pivotal realization: <strong>Traditional education is designed to prepare people for the 9-to-5 — not to build wealth, freedom, or fulfillment.</strong></p>
                 <p>He saw firsthand that schools often focus on training individuals to work for others, rather than teaching them how to create something of their own. That insight drove him to leave school and fully commit to entrepreneurship, choosing to learn through experience rather than theory.</p>
                 <p>In 2022, Shubeg launched and scaled a successful dropshipping business, which he later sold. He followed that with the launch of an AI startup, which was also acquired — then went on to build several other profitable e-commerce companies operated entirely online.</p>
                 <p>Today, Shubeg is based in Dubai, managing multiple ventures while traveling the world and working entirely from his laptop. Through Digital Era, he shares the knowledge, systems, and global strategies he’s developed — helping others escape the conventional path and create the same kind of location-independent lifestyle he now enjoys.</p>
                 <p><strong>His mission is to teach aspiring entrepreneurs how to build real businesses, reduce taxes, automate operations, and design a life of freedom.</strong></p>
            </motion.div>
            {
              /*
            <motion.div className={styles.founderImageWrapper} variants={itemVariant}>
                <img src="/images/members/shubeg.jpg" alt="Shubeg Singh, Founder & CEO of Digital Era" className={styles.founderImage} /> 
            </motion.div>
            */
            }
         </motion.div>
      </motion.section>
      {/* --- END FOUNDER SECTION --- */}

      {/* --- TEAM / NETWORK SECTION --- */}
      <motion.section
        className={styles.teamNetworkSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }} // Trigger earlier
        variants={sectionVariant}
      >
         {/* Animate Header and Intro */}
         <motion.div className={styles.teamHeader} variants={itemVariant}>
             <h2>Meet the Digital Era Team</h2>
             <p className={styles.teamSubtitle}>World-Class Experts. One Unified Mission.</p>
         </motion.div>
        <motion.div className={styles.teamIntroText} variants={itemVariant}>
          <p>While Shubeg leads the vision, Digital {"Era's"} strength lies in its team — a global network of specialists dedicated to helping clients succeed in today’s fast-moving digital landscape.</p>
          <p>{"We’ve"} handpicked our team from top-performing professionals across multiple disciplines — not just for their technical skill, but for their integrity, transparency, and results-driven mindset. Each member is committed to ensuring our clients receive not only expert advice but real-world implementation that delivers lasting impact.</p>
          <p>Our trusted team & partner networks includes:</p>
        </motion.div>

        {/* Animate Grid with Stagger */}
        <motion.div
            className={styles.expertsGrid}
            variants={gridStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            {/* Wrap each card in motion.div */}
            <motion.div className={styles.expertCard} variants={itemVariant}>
                 <div className={styles.expertIconWrapper}><Code2 size={30} /></div>
                 <h4>Elite Developers</h4>
                 <p>We work with top-tier developers experienced in building high-performance websites, e-commerce stores, membership platforms, and custom digital systems designed for conversion and scale.</p>
            </motion.div>

            <motion.div className={styles.expertCard} variants={itemVariant}>
                 <div className={styles.expertIconWrapper}><Scale size={30} /></div>
                 <h4>International Business Lawyers</h4>
                 <p>Our legal partners include some of the most respected professionals in the field — especially in high-leverage jurisdictions like the UAE — providing expert guidance on structuring, compliance, and contracts.</p>
            </motion.div>

            <motion.div className={styles.expertCard} variants={itemVariant}>
                 <div className={styles.expertIconWrapper}><BookUser size={30} /></div>
                 <h4>Accountants & Global Tax Advisors</h4>
                 <p>We refer you to expert accountants who understand international and local tax law, ensuring {"you're"} set up to operate efficiently and legally pay less tax based on your citizenship and business model.</p>
            </motion.div>

            <motion.div className={`${styles.expertCard} ${styles.summaryCard}`} variants={itemVariant}>
                 <div className={styles.expertIconWrapper}><User size={30} /></div>
                 <h4>Your Success is the Goal</h4>
                 <p>At every stage, Digital Era connects you to proven, trustworthy professionals — while guiding the entire process to ensure your business is built smarter, faster, and with full transparency.</p>
            </motion.div>
        </motion.div>
      </motion.section>
      {/* --- END TEAM / NETWORK SECTION --- */}
      
      {/* --- FINAL CTA --- */}
      {/* Animate the final CTA section */}
      <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariant}
            // Added style to ensure it doesn't inherit dark background if placed after team section accidentally
            style={{ background: 'white', paddingTop: '4rem', paddingBottom: '4rem' }}
        >
      </motion.div>
      {/* --- END FINAL CTA --- */}
      <FooterBanner />
    </main>
  )
}

export default About;