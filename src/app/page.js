"use client"

import Image from "next/image";
import styles from "../styles/pages/Home.module.scss";
import Hero from "../components/Hero";
import GradientIcon from "../components/GradientIcon";
// import ServiceCard from "../components/ServiceCard"; // Still commented out
import Link from "next/link";
import TitleTextCta from "../components/TitleTextCta";
import Package from "../components/Package";
// import ProjectCard from "../components/ProjectCard"; // Still commented out
import ReviewCarouselOrGrid from "../components/ReviewCarousel";
import FooterBanner from "../components/FooterBanner";
import { motion } from "framer-motion"; // Import motion
import {
  Rocket, TrendingUp, Star, Handshake, Palette, Code, Banknote, LineChart,
  CheckCircle2, Plane, Bot, Landmark, Target
} from 'lucide-react';
import { BsCheckCircleFill } from 'react-icons/bs';
import ArrowButton from "../components/ArrowButton";

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

const listStagger = {
    hidden: {}, // No specific hidden state needed for container
    visible: {
        transition: {
            staggerChildren: 0.15, // Delay between list items
        }
    }
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
    // No animation needed on the main container itself usually
    <main className={styles.home}>
      {/* HERO SECTION */}
      {/* Hero component likely has its own internal animations, but we wrap it just in case */}
      <motion.section
         initial="hidden"
         animate="visible" // Animate immediately on load
         variants={sectionVariant}
         // No viewport needed for initial load animation
      >
        <Hero
            title="Welcome to Digital Era"
            subtitle="Build Your Online Business. Travel the World. Work from Anywhere. We help you turn ideas into income-generating online businesses you can run globally."
            cta={{
            text: "Get Started",
            href: "/contact"
            }}
        />
      </motion.section>

      {/* SERVICES SECTION - COMMENTED OUT */}
      {/* ... */}


      {/* STRATEGY CALL / VALUE PROPOSITION SECTION */}
      <motion.section
        className={styles.strategyCallSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is in view, once
        variants={sectionVariant}
      >
        <div className={styles.contentWrapper}>
            {/* Left Column Content */}
            <motion.div className={styles.strategyLeftCol} variants={listStagger}> {/* Apply stagger to column */}
                 <motion.p variants={itemVariant} className={styles.introEmphasis}>
                    At Digital Era, we help you create the life most people only dream about — by turning your ideas and skills into a powerful, income-generating online business you can run from anywhere in the world.
                </motion.p>
                <motion.p variants={itemVariant} className={styles.subtleEmphasis}>But we go beyond just business setup. We show you how to:</motion.p>
                <motion.ul className={styles.iconList} variants={listStagger}> {/* Stagger list items */}
                    <motion.li variants={itemVariant}><Landmark className={styles.icon} /><span>Pay less or zero taxes (legally)</span></motion.li>
                    <motion.li variants={itemVariant}><Landmark className={styles.icon} /><span>Set up your company in high-leverage jurisdictions like the UAE</span></motion.li>
                    <motion.li variants={itemVariant}><Bot className={styles.icon} /><span>Automate operations with AI-powered employees</span></motion.li>
                    <motion.li variants={itemVariant}><Plane className={styles.icon} /><span>And even travel first class for free using smart credit card strategies tailored to your country</span></motion.li>
                </motion.ul>
                <motion.h3 variants={itemVariant} className={styles.transitionText}>
                    This is more than entrepreneurship. <br/>It’s freedom engineering — and you’re in the right place.
                </motion.h3>
            </motion.div>

            {/* Right Column Content (The Offer Box) */}
            <motion.div className={styles.strategyRightCol} variants={itemVariant}> {/* Animate the box as one item */}
                <div className={styles.callOfferBox}>
                    <h2><span role="img" aria-label="Chat bubble">💬</span> Start With a Personalized Strategy Session</h2>
                    <p className={styles.priceHighlight}>
                    Only $99.99 for 15 Minutes That Could Change Everything
                    </p>
                    <p>
                    Not sure where to begin? Have a big idea but not sure how to launch it? Let’s talk.
                    For just $99.99, you’ll get a 15-minute private strategy session with a Digital Era advisor — designed to give you absolute clarity and direction on your next step.
                    </p>
                    <h3>What You’ll Get in Your Call:</h3>
                    {/* You could stagger these list items too if desired */}
                    <ul className={styles.checkList}>
                      <li><BsCheckCircleFill className={styles.checkIcon} /><span>A clear understanding of how we can help you bring your business idea to life</span></li>
                      <li><BsCheckCircleFill className={styles.checkIcon} /><span>Expert insight into how to structure your company based on your location, goals, and citizenship</span></li>
                      <li><BsCheckCircleFill className={styles.checkIcon} /><span>High-level overview of your best path to pay little or no tax (legally)</span></li>
                      <li><BsCheckCircleFill className={styles.checkIcon} /><span>Review of your idea or existing business, with suggestions to expand, improve, or launch it faster</span></li>
                      <li><BsCheckCircleFill className={styles.checkIcon} /><span>Help choosing the best subscription package based on your goals, lifestyle, and budget</span></li>
                      <li><BsCheckCircleFill className={styles.checkIcon} /><span>Answers to all your early questions about business setup, automation, marketing, and remote work</span></li>
                    </ul>
                    <p className={styles.clarification}>
                      <span role="img" aria-label="Light bulb">💡</span> Think of it as a mini-roadmap session...
                    </p>
                    <h3><span role="img" aria-label="Rocket">🚀</span> Who This Call Is Perfect For:</h3>
                    {/* You could stagger these list items too */}
                    <ul className={styles.targetList}>
                      <li><Target className={styles.targetIcon} /><span>You have an idea, side hustle, or skill but don’t know how to turn it into a business</span></li>
                      <li><Target className={styles.targetIcon} /><span>You’re overwhelmed with options — LLCs, offshore, taxes, websites, AI — and need clarity</span></li>
                      <li><Target className={styles.targetIcon} /><span>You want expert eyes on your vision and how to scale it from day one</span></li>
                      <li><Target className={styles.targetIcon} /><span>You’re ready to invest in yourself and your freedom, but want to make the right move</span></li>
                    </ul>
                    <Link href="/contact" passHref>
                       <button className={styles.ctaButton}>Book Your $99.99 Strategy Session</button>
                     </Link>
                </div>
            </motion.div>
        </div>
      </motion.section>
      {/* END OF STRATEGY CALL SECTION */}

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
             <Package index={1} icon={Rocket} title="Beginner Package – Launch Essentials" price={99.99} about="Perfect for first-time digital nomads and new entrepreneurs." listTitle="Includes:" checks={[ "1-on-1 consultation call once a month (30 Minutes)", "Business structure + legal overview", "Website & branding support", "Access to curated startup tools & templates", "Developer + accountant + lawyer recommendations based on your location and business" ]} minuses={[ "Travel hacking & credit card setup not included", "No direct AI setup or mentorship included" ]} />
          </motion.div>
          <motion.div variants={itemVariant}>
             <Package index={2} icon={TrendingUp} title="Full Package – Build & Grow" price={199.99} about="Built for creators, coaches, freelancers & e-com entrepreneurs ready to scale." listTitle="Includes everything in Beginner, plus:" isFeatured={true} checks={[ "1-on-1 consultation call with CEO & Founder Shubeg Singh once a month (30 Minutes)", "Full credit card strategy setup for free first-class/business travel", "AI employee systems setup — automate your work using tools like ChatGPT & custom workflows", "UAE LLC / international company formation assistance", "Email funnel & lead gen strategy", "Access to our top-tier developers and marketing partners", "Region-based accountant match for tax optimization", "Smart banking, payment processing, and invoicing solutions", "Payment gateway setup & advisory – We’ll help you choose the best, most reliable payment processors based on your company location and products. Avoid frozen funds and get paid faster with the right strategy." ]} />
          </motion.div>
          <motion.div variants={itemVariant}>
             <Package index={3} icon={Star} title="Premium Package – Scale Like a Pro" price={299.99} about="For advanced entrepreneurs scaling into global brands or digital empires." listTitle="Includes everything in Full, plus:" checks={[ "Weekly private consultations with CEO & Founder Shubeg Singh (30 Minutes)", "Deep-dive AI automation & hiring of AI employees (virtual assistants, support agents, etc.)", "Hands-on business concierge service", "Full e-commerce, membership, or course platform builds", "Custom marketing & ad campaign execution", "International tax planning & investment structuring", "Travel hacking support: fly first class for free with the best cards in your country", "Premium access to UAE LLC setup & legal partners" ]} />
          </motion.div>
        </motion.section>
      </motion.section>

      {/* REVIEWS SECTION */}
      <motion.section
        id="reviews"
        className={styles.reviews}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }} // Trigger earlier
        variants={sectionVariant}
      >
        {/* You might animate TitleTextCta separately if desired */}
        <TitleTextCta
            title="What Our Clients Say"
            subtitle={null}
            cta={null}
            align="center"
            crumbText="Testimonials"
          />
        {/* Animate the carousel/grid container */}
        <motion.div variants={itemVariant}>
           <ReviewCarouselOrGrid />
        </motion.div>
      </motion.section>

      {/* Footer Banner Section */}
      <motion.section
        className={styles.footerBannerSection} // Added a specific class if needed for targeting
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariant}
       >
        <FooterBanner />
      </motion.section>
    </main>
  );
}