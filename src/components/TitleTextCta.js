import React from 'react'
import styles from "../styles/components/TitleTextCta.module.scss"
import SubtitleCrumb from './SubtitleCrumb'
import ArrowButton from './ArrowButton'

function TitleTextCta({title, subtitle, cta, align, crumbText, color = null}) {
  return (
    <section className={`${styles.titleTextCta} ${align == "center" ? styles.centerAlign : align == "spread" ? styles.spreadAlign : styles.leftAlign}`}>
      <section className={styles.title}>
        <SubtitleCrumb text={crumbText} />
        <h2 style={color ? {color} : undefined}>{title}</h2>
      </section>
      <section className={styles.text}>
        <p style={color ? {color} : undefined}>{subtitle}</p>
        {cta && <ArrowButton cta={cta} />}
      </section>
    </section>
  )
}

export default TitleTextCta