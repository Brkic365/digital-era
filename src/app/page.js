"use client"

import Image from "next/image";
import styles from "../styles/pages/Home.module.scss";
import Hero from "../components/Hero";
import Link from "next/link";
import TitleTextCta from "../components/TitleTextCta";
import ReviewCarouselOrGrid from "../components/ReviewCarousel";
import FooterBanner from "../components/FooterBanner";
import { motion } from "framer-motion"; // Import motion
import {
  Code2, BookUser, User, Scale, Building2, CreditCard, Sparkles,
  Network, Plane, Bot, Target, ShieldCheck, BrainCircuit
} from 'lucide-react';
import { BsCheckCircleFill } from 'react-icons/bs';

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
          staggerChildren: 0.15, // Stagger delay for grid items
      }
  }
};


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
         className={styles.heroSection}
      >
        <Hero
            title="Welcome to Digital Era"
            subtitle="Build Your Online Business. Travel the World. Work from Anywhere. Become a Digital-Nomad. We help you turn ideas into income-generating online businesses you can run globally."
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
                <motion.p variants={itemVariant} className={styles.subtleEmphasis}>But we {"don’t"} stop at business setup. We provide a full ecosystem designed for your success:</motion.p>
                  <motion.ul className={styles.iconList} variants={listStagger}> {/* Stagger list items */}
                      <motion.li variants={itemVariant}><Scale className={styles.icon} /><span>Legal strategies to reduce or eliminate your taxes</span></motion.li>
                      <motion.li variants={itemVariant}><Building2 className={styles.icon} /><span>Company formation in high-leverage jurisdictions like the UAE</span></motion.li>
                      <motion.li variants={itemVariant}><CreditCard className={styles.icon} /><span>Seamless payment gateway setup, even for high-risk industries</span></motion.li>
                      <motion.li variants={itemVariant}><Bot className={styles.icon} /><span>Automation with AI-powered virtual employees to save time and scale faster</span></motion.li>
                      <motion.li variants={itemVariant}><Target className={styles.icon} /><span>1-on-1 mentorship and strategic checkups to keep you on the right path</span></motion.li>
                      <motion.li variants={itemVariant}><Plane className={styles.icon} /><span>First-class travel for free using smart, country-specific credit card strategies</span></motion.li>
                      <motion.li variants={itemVariant}><Network className={styles.icon} /><span>Access to our trusted network of world-class marketers, developers, accountants, and legal experts</span></motion.li>
                      <motion.li variants={itemVariant}><Sparkles className={styles.icon} /><span>And much more — all designed to put you on the fastest path to freedom and success</span></motion.li>
                  </motion.ul>
                <motion.h3 variants={itemVariant} className={styles.transitionText}>
                    This is more than entrepreneurship. <br/>{"It’s freedom engineering — and you’re"} in the right place.
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
                    Not sure where to begin? Not sure what <Link href="/packages">package</Link> is best for you? Have a big idea but not sure how to launch it? Let’s talk.
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
                      <li><Target className={styles.targetIcon} /><span>You have an idea, side hustle, or skill but {"don’t"} know how to turn it into a business</span></li>
                      <li><Target className={styles.targetIcon} /><span>{"You’re"} overwhelmed with options — LLCs, offshore, taxes, websites, AI — and need clarity</span></li>
                      <li><Target className={styles.targetIcon} /><span>You want expert eyes on your vision and how to scale it from day one</span></li>
                      <li><Target className={styles.targetIcon} /><span>{"You’re"} ready to invest in yourself and your freedom, but want to make the right move</span></li>
                    </ul>
                    <Link href="/contact" passHref>
                       <button className={styles.ctaButton}>Book Your $99.99 Strategy Session</button>
                     </Link>
                </div>
            </motion.div>
        </div>
      </motion.section>
      {/* END OF STRATEGY CALL SECTION */}

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
          <p>Digital {"Era's"} strength lies in its team — a global network of specialists dedicated to helping clients succeed in today’s fast-moving digital landscape.</p>
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

      {/* --- PAYMENT GATEWAY & MARKETING/AI SECTION --- */}
      <motion.section
        className={styles.paymentGatewaySection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariant}
      >
         {/* Animate the main content block */}
         <motion.div className={styles.pgContent} variants={itemVariant}>
             <div className={styles.pgIconLargeWrapper}>
                  <ShieldCheck size={40} /> {/* Icon for Payment Security */}
             </div>
            <h2>Payment Gateway Setup & Strategy</h2>
            <p className={styles.pgSubtitle}>Protect Your Payments, Keep More Profits</p>
            <div className={styles.pgTextColumns}>
                <p>Unlike many agencies that simply suggest Stripe without understanding your business, Digital Era handles your payment gateway setup personally. We don’t take shortcuts or settle for default options because picking the wrong gateway can result in frozen funds or account bans.</p>
                <p>We ensure your revenue stream is secure and efficient from day one by helping you:</p>
            </div>
            <div className={styles.pgTextColumns}>
                <p>What We Do:</p>
            </div>
            {/* Could stagger list items here too */}
            <ul className={styles.pgChecklist}>
                <li><BsCheckCircleFill /><span>Match you with the right gateway based on your business model, location, and risk level</span></li>
                <li><BsCheckCircleFill /><span>Avoid risky platforms known for freezing or holding funds</span></li>
                <li><BsCheckCircleFill /><span>Minimize transaction fees and speed up payouts through smart gateway strategies</span></li>
                <li><BsCheckCircleFill /><span>Reduce chargebacks with proven tools, best practices, and dispute defense workflows</span></li>
                <li><BsCheckCircleFill /><span>Provide ongoing tools & support to monitor payment health and protect your accounts</span></li>
                <li><BsCheckCircleFill /><span>Ensure long-term compliance and scalability for high-growth businesses</span></li>
            </ul>
            <p className={styles.pgEmphasisText}>While other agencies overlook payment risks, we treat your gateway like your {"business's"} financial backbone - optimized, secure, and built to scale.</p>

            {/* Animate the Marketing/AI subsection */}
            <motion.div className={styles.marketingAiContent} variants={itemVariant}>
                 <div className={styles.subSectionHeader}>
                     <BrainCircuit size={24} /> {/* Icon for Marketing/AI */}
                    <h3>Marketing & AI Automation Experts</h3>
                 </div>
                 <p>From funnel building and lead generation to AI-powered systems and automation workflows, our marketing and tech partners help you build scalable growth strategies that align with your business goals.</p>
            </motion.div>

            <motion.p className={styles.pgFinalText} variants={itemVariant}>At every stage, Digital Era connects you to proven, trustworthy professionals — while guiding the entire process to ensure your business is built smarter, faster, and with full transparency.</motion.p>
         </motion.div>
      </motion.section>
      {/* --- END PAYMENT GATEWAY & MARKETING/AI SECTION --- */}

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