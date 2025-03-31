import React from 'react'
import styles from "../styles/components/CoreValue.module.scss"

import GradientIcon from './GradientIcon'

function CoreValue({ icon, title, text }) {
  return (
    <section className={styles.coreValue}>
      <div className={styles.iconHolder}>
        <GradientIcon icon={icon} size="4rem" />
      </div>
      <h4>{title}</h4>
      <p>{text}</p>
    </section>
  )
}

export default CoreValue