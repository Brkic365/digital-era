import React from 'react'
import styles from "../styles/components/Step.module.scss"
import GradientIcon from './GradientIcon'

function Step({index, icon, title, points}) {
  return (
    <section className={styles.step}>
      <h1>{index}</h1>
      <section className={styles.card}>
        <div className={styles.top}>
          <GradientIcon icon={icon} size="3rem" />
          <h4>{title}</h4>
        </div>
        <ul>
          {points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </section>
    </section>
  )
}

export default Step