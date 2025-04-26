"use client"

import Image from "next/image";
import styles from "../styles/pages/Home.module.scss";
import Hero from "../components/Hero";
import GradientIcon from "../components/GradientIcon";
import ServiceCard from "../components/ServiceCard";
import Link from "next/link";
import TitleTextCta from "../components/TitleTextCta";
import Package from "../components/Package";
import ProjectCard from "../components/ProjectCard"; // Keep if you plan to use it later
import ReviewCarouselOrGrid from "../components/ReviewCarousel";
import FooterBanner from "../components/FooterBanner";
import { Rocket, TrendingUp, Star, Handshake, Palette, Code, Banknote, LineChart } from 'lucide-react'; // Import Lucide icons

export default function Home() {
  return (
    <main className={styles.home}>
      <Hero
        title="Welcome to Digital Era"
        subtitle="Build Your Online Business. Travel the World. Work from Anywhere. At Digital Era, we help you create the life most people only dream about — by turning your ideas and skills into a powerful, income-generating online business you can run from anywhere in the world."
        cta={{
          text: "Get Started",
          href: "/contact"
        }}
      />

      <section id="services" className={styles.services}>
        <div className={styles.title}>
          <TitleTextCta
            title="Our Services: A Full Suite of Business Development Solutions"
            subtitle="Our creative team gets to work to bring your ideas to life as soon as possible with highest quality possible. We always use latest technologies and best practices."
            cta={null}
            align="center"
            crumbText="Why Choose Digital Era?"
          />
          <div className={styles.categories}>
            <div className={styles.category}>
              <GradientIcon icon={Handshake} size="1.75rem" /> {/* Updated icon */}
              <span>Strategy & Planning</span>
            </div>
            <div className={styles.category}>
              <GradientIcon icon={Palette} size="1.75rem" /> {/* Updated icon */}
              <span>Brand Creation</span>
            </div>
            <div className={styles.category}>
              <GradientIcon icon={Code} size="1.75rem" /> {/* Updated icon */}
              <span>Digital Presence</span>
            </div>
          </div>
        </div>
        <div className={styles.servicesList}>
          <ServiceCard
            icon={Handshake} // Updated icon
            title="Legal & Business Structure Guidance"
            text="Setting up your business legally is crucial, and we’ve partnered with the best legal experts to make sure everything is in place from the start."
            points={[
              {
                title: "Business Registration & Structure",
                text: "We’ll guide you in selecting the right legal structure for your business, whether it’s an LLC, corporation, or another model, with the support of our trusted legal partners."
              },
              {
                title: "Licensing & Compliance",
                text: "Our partners will help you navigate local, state, and federal requirements to ensure that your business remains compliant and operates smoothly."
              },
              {
                title: "Contracts & Agreements",
                text: "Protect your business with legally sound contracts tailored to your specific needs, crafted by our expert legal network."
              }
            ]}
          />

          <ServiceCard
            icon={Palette} // Updated icon
            title="Website Development & Digital Presence"
            text="In today’s digital world, your website is your storefront. Digital Era works with the best developers from around the world to ensure your website is not only beautiful but also optimized for performance and conversions."
            points={[
              {
                title: "Custom Website Design & Development",
                text: "Our world-class development partners create custom, mobile-responsive websites that capture your brand identity and engage visitors."
              },
              {
                title: "E-commerce Solutions",
                text: "If you’re selling online, we’ll connect you with the best developers to build a seamless e-commerce platform that enhances the customer experience."
              },
              {
                title: "Mobile Optimization",
                text: "We ensure that your website is optimized for mobile, ensuring a smooth experience for customers on any device."
              }
            ]}
          />

          <ServiceCard
            icon={Code} // Updated icon
            title="Digital Marketing Strategy & Execution"
            text="Marketing is essential to driving traffic and growing your business. At Digital Era, we guide you through the process of building and executing a powerful marketing strategy, with the help of our global marketing partners."
            points={[
              {
                title: "Target Audience Identification",
                text: "We help you define your target market and create messaging that resonates with your audience."
              },
              {
                title: "SEO & Paid Advertising",
                text: "Our digital marketing experts work with you to create SEO strategies and paid campaigns that drive organic traffic and generate leads."
              },
              {
                title: "Social Media Marketing",
                text: "We’ll connect you with top social media experts who will build a strategy to boost your brand’s visibility and engagement on the platforms that matter most."
              }
            ]}
          />

          <ServiceCard
            icon={Banknote} // Updated icon
            title="Financial Guidance & Accounting Support"
            text="A strong financial foundation is key to business growth. With our network of top accounting professionals, we’ll guide you in managing your business finances effectively."
            points={[
              {
                title: "Accounting & Tax Planning",
                text: "Our partners will help you navigate the complex world of business finances and taxes, ensuring that you minimize risks and remain compliant."
              },
              {
                title: "Budgeting & Forecasting",
                text: "We’ll help you develop realistic financial plans, manage cash flow, and prepare for future growth."
              },
              {
                title: "Business Funding & Investment",
                text: "If you’re seeking funding, we’ll connect you with financial experts who can help you secure investment and scale your operations."
              }
            ]}
          />

          <ServiceCard
            icon={LineChart} // Updated icon
            title="Ongoing Business Growth & Optimization"
            text="Once your business is up and running, Digital Era continues to support you with ongoing growth strategies and optimization."
            points={[
              {
                title: "Performance Monitoring & Adjustments",
                text: "We regularly assess your business performance in areas like marketing, website traffic, and financial health, making adjustments as needed to stay on track."
              },
              {
                title: "Strategic Consulting",
                text: "As your business grows, we offer strategic consulting to help you pivot, scale, or expand your operations efficiently."
              },
              {
                title: "Partnerships & Networking",
                text: "Through our extensive network of industry leaders and professionals, we’ll help you connect with potential business partners, investors, and collaborators to fuel further growth."
              }
            ]}
          />
        </div>
        {/* Optional Link */}
        {/* <p className={styles.helpText}>Want to see how we can help? <Link href="/services">Explore All Services</Link></p> */}
      </section>

      <section id="pricing" className={styles.pricingSection}> {/* Changed class name */}
        <TitleTextCta
            title="Choose Your Subscription Package"
            subtitle="At Digital Era, we offer more than just services—we offer a partnership. We believe in empowering you with the knowledge and resources you need to make informed decisions and grow your business successfully."
            cta={null} // Removed CTA, maybe add later?
            align="center" // Centered align looks better here
            crumbText="Pricing Plans" // Updated crumb text
          />
        <section className={styles.packageGrid}>
          <Package
            index={1}
            icon={Rocket} // Pass Lucide component
            title="Beginner Package – Launch Essentials"
            price={99.99}
            about="Perfect for first-time digital nomads and new entrepreneurs."
            listTitle="Includes:"
            checks={[
              "1-on-1 consultation call once a month (30 Minutes)",
              "Business structure + legal overview",
              "Website & branding support",
              "Access to curated startup tools & templates",
              "Developer + accountant + lawyer recommendations based on your location and business"
            ]}
            minuses={[
              "Travel hacking & credit card setup not included",
              "No direct AI setup or mentorship included"
            ]}
          />
          <Package
            index={2}
            icon={TrendingUp} // Pass Lucide component
            title="Full Package – Build & Grow"
            price={199.99}
            about="Built for creators, coaches, freelancers & e-com entrepreneurs ready to scale."
            listTitle="Includes everything in Beginner, plus:"
            isFeatured={true} // Mark as featured
            checks={[
              "1-on-1 consultation call with CEO & Founder Shubeg Singh once a month (30 Minutes)",
              "Full credit card strategy setup for free first-class/business travel",
              "AI employee systems setup — automate your work using tools like ChatGPT & custom workflows",
              "UAE LLC / international company formation assistance",
              "Email funnel & lead gen strategy", 
              "Access to our top-tier developers and marketing partners",
              "Region-based accountant match for tax optimization",
              "Smart banking, payment processing, and invoicing solutions",
              "Payment gateway setup & advisory – We’ll help you choose the best, most reliable payment processors based on your company location and products. Avoid frozen funds and get paid faster with the right strategy."
            ]}
            // No minuses listed for the full package in the example, add if needed
          />
          <Package
            index={3}
            icon={Star} // Pass Lucide component
            title="Premium Package – Scale Like a Pro"
            price={299.99}
            about="For advanced entrepreneurs scaling into global brands or digital empires."
            listTitle="Includes everything in Full, plus:"
            checks={[
              "Weekly private consultations with CEO & Founder Shubeg Singh (30 Minutes)",
              "Deep-dive AI automation & hiring of AI employees (virtual assistants, support agents, etc.)",
              "Hands-on business concierge service",
              "Full e-commerce, membership, or course platform builds",
              "Custom marketing & ad campaign execution",
              "International tax planning & investment structuring",
              "Travel hacking support: fly first class for free with the best cards in your country",
              "Premium access to UAE LLC setup & legal partners"
            ]}
            // No minuses listed for the premium package in the example, add if needed
          />
        </section>
      </section>

      {/* Commented out Success Stories section - uncomment and update if needed
      <section id="success-stories" className={styles.successStories}>
        <TitleTextCta
            title="Client Success Stories"
            subtitle="We’ve helped numerous businesses build a solid foundation, optimize their operations, and scale successfully. Here’s what some of our clients have to say:"
            cta={{
              text: "View Case Studies", // Example CTA text
              href: "/case-studies" // Example href
            }}
            align="center" // Center might be better
            crumbText="Our Work" // Updated crumb text
          />
        <div className={styles.projects}>
          <ProjectCard
            img="/images/projects/project-1.jpg" // Use descriptive image names
            title="Client A Transformation"
            text="Brief description of the results achieved for Client A."
            href="/case-studies/client-a" // Link to specific case study
          />
          <ProjectCard
            img="/images/projects/project-2.jpg"
            title="Client B Growth Story"
            text="Brief description of the results achieved for Client B."
            href="/case-studies/client-b"
          />
          <ProjectCard
            img="/images/projects/project-3.jpg"
            title="Client C Scalability"
            text="Brief description of the results achieved for Client C."
            href="/case-studies/client-c"
          />
        </div>
      </section>
      */}

      <section id="reviews" className={styles.reviews}>
        <TitleTextCta
            title="What Our Clients Say"
            subtitle={null}
            cta={null}
            align="center"
            crumbText="Testimonials"
          />
        <ReviewCarouselOrGrid />
      </section>

      <FooterBanner />
    </main>
  );
}