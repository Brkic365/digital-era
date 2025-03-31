import React from 'react'
import styles from "../styles/components/ServiceCard.module.scss"
import GradientIcon from './GradientIcon'
import ArrowButton from './ArrowButton'

function ServiceCard({ icon, title, text, href}) {
  return (
    <section className={styles.serviceCard}>
      <div className={styles.top}>
        <GradientIcon icon={icon}  size="3rem" />
        <h4>{title}</h4>
      </div>
      <p>{text}</p>
      <div className={styles.ctaHolder}>
        <ArrowButton 
          cta={{
            text: "Learn More",
            href,
          }}         
          style={{
            backgroundColor: "transparent",
            color: "#516681",
            width: "100%"
          }} />
        </div>
    </section>
  )
}

export default ServiceCard