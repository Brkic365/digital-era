import React from 'react'
import styles from "../../styles/pages/About.module.scss"
import Hero from '../../components/Hero'
import TitleTextCta from '../../components/TitleTextCta'
import CoreValue from '../../components/CoreValue'

function About() {
  return (
    <main className={styles.about}>
        <Hero 
          title="Empowering Entrepreneurs to Build Their Dreams"
          subtitle="At Digital Era, we guide you from idea to success, one step at a time."
          cta={{
            text: "Get Started",
            href: "/contact"
          }}        
        />
        <section className={styles.mission}>
            <h1>NEW ERA</h1>
            <h2>Welcome to Digital Era</h2>
            <p>At Digital Era, we specialize in providing comprehensive, personalized support to
 entrepreneurs and businesses, helping them navigate the complexities of starting and scaling
 their ventures. Whether {"you’re"} launching a new business, building your online presence, or
 optimizing your operations, we are here to guide you every step of the way.<br /><br />
 Through our strategic partnerships with top digital marketing agencies, world-class developers,
 leading accountants, and legal experts from around the globe, Digital Era offers a one-stop
 solution that covers every critical aspect of your business. With our expertise and our network,
 we ensure that your business is on the right path to long-term success.</p>
        </section>
        <section className={styles.story}>
          <TitleTextCta 
            title="Why Choose Digital Era?"
            subtitle="Starting and growing a successful business involves making key decisions across several
                    areas, and each one matters. At Digital Era, we offer you expert advice and unparalleled
                    guidance, supported by a global network of top-tier professionals. Whether you need help with
                    legal structures, developing a website, executing a digital marketing strategy, or managing your
                    finances, we provide the tools and resources you need to thrive."
            cta={null}
            align="left"
            crumbText="Our Journey"            
          />
          <img src="/images/about.png" className={styles.aboutImg} />
          <img src="/images/globe.png" className={styles.globe}/>
        </section>
        {/*
        <section className={styles.team}>
          <TitleTextCta 
            title="Meet Our Team"
            subtitle=""
            cta={null}
            align="center"
            crumbText="Who Are We?"
            color="white"             
          />
          <div className={styles.teamMembers}>
            <div className={styles.member}>
              <img src="/images/members/1.png" />
              <h4>John Doe</h4>
              <span>CEO</span>
            </div>
            <div className={styles.member}>
              <img src="/images/members/1.png" />
              <h4>John Doe</h4>
              <span>CEO</span>
            </div>
            <div className={styles.member}>
              <img src="/images/members/1.png" />
              <h4>John Doe</h4>
              <span>CEO</span>
            </div>
            <div className={styles.member}>
              <img src="/images/members/1.png" />
              <h4>John Doe</h4>
              <span>CEO</span>
            </div>
          </div>
        </section>
        */}
        <section className={styles.coreValues}>
          <TitleTextCta 
            title="Our Core Values"
            subtitle="Our values shape the culture of our organization and define the character of our company."
            cta={null}
            align="center"
            crumbText="What Do We Stand For?"            
          />
          <div className={styles.values}>
            <CoreValue 
              icon="design"
              title="Innovation"
              text="We tend to think outside the box."
            />
            <CoreValue 
              icon="handshake"
              title="Collaboration"
              text="Your success is our number one priority."
            />
            <CoreValue 
              icon="integrity"
              title="Integrity"
              text="Honesty and transparency guide our actions."
            />
            <CoreValue 
              icon="check"
              title="Trust"
              text="We rely on our your trust to deliver the value to you."
            />
          </div>
        </section>
        <TitleTextCta 
          title="Let’s Create Something!"
          subtitle="We would be delighted to have you join our team and let us help you on your journey as a business owner."
          cta={{
            text: "Contact Us",
            href: "/contact"
          }}
          align="spread"
          crumbText="Join Us"            
        />
    </main>
  )
}

export default About