import React from 'react'
import styles from "../styles/components/SubtitleCrumb.module.scss"
import Image from 'next/image'

function SubtitleCrumb({text}) {
  return (
    <div className={styles.subtitleCrumb}>
      <div className={styles.icon}>
      <Image src="/images/logo.png" alt="Logo" width={22} height={22} />
      </div>
      <p className={styles.crumbText}>{text}</p>
    </div>
  )
}

export default SubtitleCrumb