import React from 'react'
import styles from "../styles/components/SubtitleCrumb.module.scss"

function SubtitleCrumb({text}) {
  return (
    <div className={styles.subtitleCrumb}>
      <div className={styles.icon}>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.71739 0.533997L4.11603 0.96302L10.5197 7.36654L10.8324 7.68018L10.4051 7.79466L5.42172 9.12849L5.03122 10.5829L13.4471 8.32792L13.4582 8.28691L5.71739 0.533997ZM3.59141 1.16126L0.704895 11.9303L1.94564 13.171L4.33481 4.25529L4.44938 3.8272L4.76208 4.14077L8.41761 7.79713L9.8455 7.41513L3.59141 1.16126ZM4.7142 4.81589L2.39337 13.4762L12.8148 10.6837L13.2941 8.89777L4.73646 11.1912L4.30834 11.3058L4.42367 10.8776L5.76696 5.86947L4.71423 4.81592L4.7142 4.81589Z" fill="#E8F1FA"/>
      </svg>
      </div>
      <p className={styles.crumbText}>{text}</p>
    </div>
  )
}

export default SubtitleCrumb