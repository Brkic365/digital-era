"use client"

import styles from "../../styles/pages/Packages.module.scss";
import TitleTextCta from "../../components/TitleTextCta";
import Package from "../../components/Package";
import { motion } from "framer-motion"; // Import motion
import {
  Rocket, TrendingUp, Star
} from 'lucide-react';

// --- Animation Variants ---
const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      // type: "spring", // Optional: use spring physics
      // stiffness: 100,
    },
  },
};

const itemVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
};

const gridStagger = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2, // Delay between grid items (packages)
        }
    }
}


export default function Home() {
  return (
    <main className={styles.packagesPage}>
      {/* PRICING SECTION (Packages) */}
      <motion.section
        id="pricing"
        className={styles.pricingSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }} // Trigger earlier for section title
        variants={sectionVariant}
      >
        {/* TitleTextCta could potentially be wrapped in motion.div too */}
        <TitleTextCta
            title="Choose Your Subscription Package"
            subtitle="At Digital Era, we offer more than just services—we offer a partnership. We believe in empowering you with the knowledge and resources you need to make informed decisions and grow your business successfully."
            cta={null}
            align="center"
            crumbText="Pricing Plans"
          />
        <motion.section
            className={styles.packageGrid}
            variants={gridStagger} // Apply stagger to the grid container
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }} // Trigger when grid starts appearing
        >
          {/* Wrap each Package in motion.div and apply itemVariant */}
          <motion.div variants={itemVariant}>
             <Package index={1} icon={Rocket} title="Beginner Package – Launch Essentials" price={99.99} about="Perfect for first-time digital nomads and new entrepreneurs." listTitle="Includes:" checks={[ "1-on-1 consultation call with a Digital Era Advisor once a month (30 Minutes)", "Business structure + legal overview", "Website & branding support", "Access to curated startup tools & templates", "Developer + accountant + lawyer recommendations based on your location and business" ]} minuses={[ "Travel hacking & credit card setup not included", "No direct AI setup or mentorship included" ]} />
          </motion.div>
          <motion.div variants={itemVariant}>
             <Package index={2} icon={TrendingUp} title="Full Package – Build & Grow" price={199.99} about="Built for creators, coaches, freelancers & e-com entrepreneurs ready to scale." listTitle="Includes:" isFeatured={true} checks={[ "Everything in the Beginner Package", "1-on-1 consultation call with CEO & Founder Shubeg Singh once a month (30 Minutes)", "Full credit card strategy setup for free first-class/business travel", "AI employee systems setup — automate your work using tools like ChatGPT & custom workflows", "UAE LLC / international company formation assistance", "Email funnel & lead gen strategy", "Access to our top-tier developers and marketing partners", "Region-based accountant match for tax optimization", "Smart banking, payment processing, and invoicing solutions", "Payment gateway setup & advisory – We’ll help you choose the best, most reliable payment processors based on your company location and products. Avoid frozen funds and get paid faster with the right strategy." ]} />
          </motion.div>
          <motion.div variants={itemVariant}>
             <Package index={3} icon={Star} title="Premium Package – Scale Like a Pro" price={299.99} about="For advanced entrepreneurs scaling into global brands or digital empires." listTitle="Includes:" checks={[ "Everything in the Full Package", "Weekly private consultations with CEO & Founder Shubeg Singh (30 Minutes)", "Deep-dive AI automation & hiring of AI employees (virtual assistants, support agents, etc.)", "Hands-on business concierge service", "Full e-commerce, membership, or course platform builds", "Custom marketing & ad campaign execution", "International tax planning & investment structuring", "Travel hacking support: fly first class for free with the best cards in your country", "Premium access to UAE LLC setup & legal partners" ]} />
          </motion.div>
        </motion.section>
      </motion.section>
    </main>
  );
}