"use client"

import styles from "../../styles/pages/Packages.module.scss";
import TitleTextCta from "../../components/TitleTextCta";
import Package from "../../components/Package";
import FooterBanner from "../../components/FooterBanner";
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
             <Package index={1} icon={Rocket} title="Beginner Package – Launch Essentials" price={99.99} about="Perfect for first-time digital nomads and new entrepreneurs." listTitle="Includes:" 
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
              ]}/>
          </motion.div>
          <motion.div variants={itemVariant}>
             <Package index={2} icon={TrendingUp} title="Full Package – Build & Grow" price={199.99} about="Built for creators, coaches, freelancers & e-com entrepreneurs ready to scale." listTitle="Includes:" isFeatured={true}
             checks={[ 
              "Monthly Call With CEO (30 min)", 
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
              "Concierge Services", 
              "Custom Marketing/Ads", 
              "Platform Builds (e-com/course)",
              ]}/>
          </motion.div>
          <motion.div variants={itemVariant}>
             <Package index={3} icon={Star} title="Premium Package – Scale Like a Pro" price={299.99} about="For advanced entrepreneurs scaling into global brands or digital empires." listTitle="Includes:"
             checks={[ 
              "Weekly Call With CEO", 
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
             minuses={[ 
              ]}/>
          </motion.div>
        </motion.section>
      </motion.section>
      <FooterBanner />
    </main>
  );
}