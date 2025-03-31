import Image from "next/image";
import styles from "../styles/pages/Home.module.scss";
import Hero from "../components/Hero";
import GradientIcon from "../components/GradientIcon";
import ServiceCard from "../components/ServiceCard";
import Link from "next/link";
import TitleTextCta from "../components/TitleTextCta";
import Step from "../components/Step";
import ProjectCard from "../components/ProjectCard";
import ReviewCarousel from "../components/ReviewCarousel";
import FooterBanner from "../components/FooterBanner";

export default function Home() {
  return (
    <main className={styles.home}>
      <Hero 
        title="Your Trusted Guide to Business Success"
        subtitle="At Digital Era, we specialize in providing comprehensive, personalized support to
 entrepreneurs and businesses."
        cta={{
          text: "Get Started",
          href: "/contact"
        }}
      />
      <section className={styles.services}>
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
              <GradientIcon icon="strategy" size="1.75rem" />
              <span>Strategy & Planning</span>
            </div>
            <div className={styles.category}>
              <GradientIcon icon="pen" size="1.75rem" />
              <span>Brand Creation</span>
            </div>
            <div className={styles.category}>
              <GradientIcon icon="radio" size="1.75rem" />
              <span>Digital Presence</span>
            </div>
          </div>
        </div>
        <div className={styles.servicesList}>
          <ServiceCard 
            icon="handshake"
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
            icon="design"
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
            icon="code"
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
            icon="money"
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
            icon="money"
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
        {/*<p className={styles.helpText}>Want to see how we can help? <Link href="/">Explore All Services</Link></p>*/}
      </section>
      <section className={styles.steps}>
        <TitleTextCta 
            title="Our Approach: Expert Guidance and World-Class Partnerships"
            subtitle="At Digital Era, we offer more than just services—we offer a partnership. We believe in
                      empowering you with the knowledge and resources you need to make informed decisions and
                      grow your business successfully. Our approach includes:"
            cta={{
              text: "Learn More",
              href: "/contact"
            }}
            align="spread"
            crumbText="How It Works?"
          />
        <section className={styles.stepsList}>
          <Step 
            index={1}
            icon="talk"
            title="In-Depth Consultation"
            points={[
              "Westart by understanding your business, goals, and challenges.",
              "Through a detailed consultation, we create a customized roadmap to guide you through the necessary steps"
            ]}
          />
          <Step 
            index={2}
            icon="strategy"
            title="Clear, Actionable Plan"
            points={[
              "Once we understand your vision, we’ll lay out a clear plan of action, with specific steps and timelines to ensure that your business is set up for success."
            ]}
          />
          <Step 
            index={3}
            icon="tools"
            title="Global Network of Experts"
            points={[
              "Our strategic partnerships with world-class developers, digital marketing agencies, legal professionals, and accountants ensure that you receive top-tier expertise in every area of your business.",
              "You’ll have access to the best in the industry at every stage."
            ]}
          />
          <Step 
            index={4}
            icon="rocket"
            title="Continuous Optimization"
            points={[
              "As your business evolves, so do your needs.",
              "We regularly review your business progress and offer advice, fine-tuning strategies as necessary to ensure ongoing growth and success."
            ]}
          />
        </section>
      </section>
      {
        /*
<section className={styles.successStories}>
        <TitleTextCta 
            title="Client Success Stories"
            subtitle="We’ve helped numerous businesses build a solid foundation, optimize their operations, and
                      scale successfully. Here’s what some of our clients have to say:"
            cta={{
              text: "Learn More",
              href: "/"
            }}
            align="spread"
            crumbText="Some of Our Works"
          />
        <div className={styles.projects}>
          <ProjectCard 
            img="/images/projects/1.png"
            title="Business #1"
            text="Description of business number 1"
            href="/"
          />
          <ProjectCard 
            img="/images/projects/1.png"
            title="Business #2"
            text="Description of business number 2"
            href="/"
          />
          <ProjectCard 
            img="/images/projects/1.png"
            title="Business #3"
            text="Description of business number 3"
            href="/"
          />
        </div>
      </section>
        */
      }
      <section className={styles.reviews}>
        <TitleTextCta 
            title="Client Success Stories"
            subtitle="We’ve helped numerous businesses build a solid foundation, optimize their operations, and
                      scale successfully. Here’s what some of our clients have to say:"
            cta={null}
            align="center"
            crumbText="Testimonials"
          />
        <ReviewCarousel />
      </section>
      <FooterBanner />
    </main>
  );
}
