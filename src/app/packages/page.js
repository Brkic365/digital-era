// src/app/packages/page.js
"use client"

import React from "react"; // No specific React hooks needed here if Package handles its own state
import styles from "../../styles/pages/Packages.module.scss";
import TitleTextCta from "../../components/TitleTextCta";
import Package from "../../components/Package"; // Ensure this component is updated for Stripe
import FooterBanner from "../../components/FooterBanner"; // Ensure this is updated if it has a direct pay button
import { motion } from "framer-motion";
import { Rocket, TrendingUp, Star } from 'lucide-react';

// --- Animation Variants ---
const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const itemVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const gridStagger = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2, // Delay between grid items (packages)
        }
    }
};

// --- !!! IMPORTANT: REPLACE WITH YOUR ACTUAL STRIPE PRICE IDs !!! ---
const STRIPE_PRICE_IDS = {
  BEGINNER: 'price_1RRtdRKbh8GcDvUdwkjfRXg0',       // Example: price_1LqXyZ2eZvKYlo2CiL71c9oX
  FULL: 'price_1RRtdqKbh8GcDvUdiDneVy5b',             // Example: price_1LqXyZ2eZvKYlo2CvM7q9t0Y
  PREMIUM: 'price_1RRteDKbh8GcDvUdV7NcQNUh',         // Example: price_1LqXyZ2eZvKYlo2C5sWq5fPZ
};

export default function PackagesPage() {
  return (
    <main className={styles.packagesPage}>
      {/* PRICING SECTION (Packages) */}
      <motion.section
        id="pricing"
        className={styles.pricingSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariant}
      >
        <TitleTextCta
            title="Choose Your Subscription Package"
            subtitle="At Digital Era, we offer more than just services—we offer a partnership. We believe in empowering you with the knowledge and resources you need to make informed decisions and grow your business successfully."
            cta={null} // No global CTA here, each package has its own
            align="center"
            crumbText="Pricing Plans"
          />
        <motion.section
            className={styles.packageGrid}
            variants={gridStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
          {/* Beginner Package */}
          <motion.div variants={itemVariant}>
             <Package
               index={1}
               icon={Rocket}
               title="Beginner Package – Launch Essentials"
               price={99.99} // Display price
               about="Perfect for first-time digital nomads and new entrepreneurs."
               listTitle="Includes:"
               checks={[
                  "Monthly Call With Advisor",
                  "Legal & Structure Support",
                  "Website & Branding",
                  "Tools & Templates",
                  "Business Pro Recommendations"
                ]}
               minuses={[
                  "Credit Card Travel Strategy",
                  "AI Employee Setup",
                  "Company Formation (UAE/International)",
                  "Email & Lead Funnel Strategy",
                  "Tax Optimization",
                  "Concierge Services",
                  "Custom Marketing/Ads",
                  "Platform Builds (e-com/course)",
                  "Travel Hacking Support",
                  "Payment Gateway Setup"
                ]}
               stripePriceId={STRIPE_PRICE_IDS.BEGINNER} // Pass Stripe Price ID
             />
          </motion.div>

          {/* Full Package */}
          <motion.div variants={itemVariant}>
             <Package
               index={2}
               icon={TrendingUp}
               title="Full Package – Build & Grow"
               price={199.99} // Display price
               about="Built for creators, coaches, freelancers & e-com entrepreneurs ready to scale."
               listTitle="Includes:"
               isFeatured={true}
               checks={[
                  "Monthly Strategy Call with CEO (30 min)",
                  "Legal & Structure Support",
                  "Website & Branding",
                  "Tools & Templates",
                  "Business Pro Recommendations",
                  "Credit Card Travel Strategy",
                  "AI Employee Setup",
                  "Company Formation (UAE/International)",
                  "Email & Lead Funnel Strategy",
                  "Tax Optimization",
                  "Travel Hacking Support (Partial)",
                  "Payment Gateway Setup"
                ]}
               minuses={[
                  "Weekly Strategy Call with CEO",
                  "Concierge Services",
                  "Custom Marketing/Ads",
                  "Platform Builds (e-com/course)",
                ]}
               stripePriceId={STRIPE_PRICE_IDS.FULL} // Pass Stripe Price ID
             />
          </motion.div>

          {/* Premium Package */}
          <motion.div variants={itemVariant}>
             <Package
               index={3}
               icon={Star}
               title="Premium Package – Scale Like a Pro"
               price={299.99} // Display price
               about="For advanced entrepreneurs scaling into global brands or digital empires."
               listTitle="Includes:"
               checks={[
                  "Weekly Strategy Call with CEO (30 min)",
                  "Legal & Structure Support",
                  "Website & Branding",
                  "Tools & Templates",
                  "Business Pro Recommendations",
                  "Credit Card Travel Strategy",
                  "AI Employee Setup (Advances + Hiring)",
                  "Company Formation (UAE/International) (Premium Access)",
                  "Email & Lead Funnel Strategy",
                  "Tax Optimization (International Tax Planning)",
                  "Concierge Services",
                  "Custom Marketing/Ads",
                  "Travel Hacking Support",
                  "Platform Builds (e-com/course)",
                  "Payment Gateway Setup"
                ]}
               minuses={[]} // No minuses for the premium package in this example
               stripePriceId={STRIPE_PRICE_IDS.PREMIUM} // Pass Stripe Price ID
             />
          </motion.div>
        </motion.section>
      </motion.section>
      <FooterBanner />
    </main>
  );
}