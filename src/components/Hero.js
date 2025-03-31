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
          src="https://lottie.host/f0be8ed1-1ef5-4264-9e75-3ab854870028/jCKZiqODhj.lottie"
          loop
          autoplay
        />
        </div>
    </section>
  )
}

export default Hero