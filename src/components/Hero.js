"use client"

import React from 'react'
import styles from "../styles/components/Hero.module.scss"
import ArrowButton from './ArrowButton'

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function Hero({ title, subtitle, cta}) {
  return (
    <section className={styles.hero}>
                <img src="/images/globe.png" className={styles.globe}/>
        <div className={styles.text}>
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <ArrowButton cta={cta}/>
        </div>
        <div className={styles.graphic}>
        <DotLottieReact
          src="https://lottie.host/6006c178-b955-4c7a-945a-0de20d1e974e/Rbc9x1Fs8b.lottie"
          loop
          autoplay
        />
        </div>
    </section>
  )
}

export default Hero