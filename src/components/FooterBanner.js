import React from 'react'
import styles from "../styles/components/FooterBanner.module.scss"
import ArrowButton from './ArrowButton'

import { HiRocketLaunch } from "react-icons/hi2";

function FooterBanner() {
  return (
    <section className={styles.footerBanner}>
      <HiRocketLaunch className={styles.rocket} />
      <div className={styles.left}>
        <h1>Ready to Excel Your Business?</h1>
        <ArrowButton 
          cta={{
            text: "Learn More",
            href: "/contact"
          }}
          style={{
            backgroundColor: "#BB9B4E",
            color: "white",
            borderColor: "#BB9B4E"
          }}
        />
      </div>
    </section>
  )
}

export default FooterBanner