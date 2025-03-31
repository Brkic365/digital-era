"use client"

import React from 'react'
import styles from "../styles/components/ArrowButton.module.scss"

import { HiArrowUpRight } from "react-icons/hi2";

import { useRouter } from 'next/navigation'

function ArrowButton({cta, style = {}}) {

  const router = useRouter();

  return (
    <button onClick={() => router.push(cta.href)} className={styles.arrowBtn} style={style}>
      <p className={styles.btnText}>{cta.text}</p>
      <HiArrowUpRight />
    </button>
  )
}

export default ArrowButton