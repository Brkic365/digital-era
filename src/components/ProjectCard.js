"use client"

import React from 'react'
import styles from "../styles/components/ProjectCard.module.scss"

import { useRouter } from 'next/navigation'

import { HiArrowRight } from "react-icons/hi";

function ProjectCard({img, title, text, href}) {

  const router = useRouter();

  return (
    <section className={styles.project}>
      <div className={styles.img}>
        <img src={img} />
      </div>
      <div className={styles.info}>
        <div className={styles.left}>
          <h4>{title}</h4>
          <p>{text}</p>
        </div>
        <button onClick={() => router.push(href)}>
          <HiArrowRight />
        </button>
      </div>
    </section>
  )
}

export default ProjectCard