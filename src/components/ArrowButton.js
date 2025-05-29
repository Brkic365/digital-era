// src/components/ArrowButton.js
"use client"

import React from 'react'
import styles from "../styles/components/ArrowButton.module.scss"
import { HiArrowUpRight } from "react-icons/hi2";
import { useRouter } from 'next/navigation'

function ArrowButton({ cta, style = {} }) {
  const router = useRouter();

  const handleClick = (e) => {
    if (cta.onClick) {
      e.preventDefault(); // Prevent default if onClick is used, good practice
      cta.onClick();
    } else if (cta.href) {
      router.push(cta.href);
    }
  };

  return (
    <button onClick={handleClick} className={styles.arrowBtn} style={style}>
      <p className={styles.btnText}>{cta.text}</p>
      <HiArrowUpRight />
    </button>
  )
}

export default ArrowButton;