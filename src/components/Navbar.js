// components/Navbar.jsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, Router, X } from "lucide-react";
import styles from '../styles/components/Navbar.module.scss';
import { useRouter } from "next/navigation";

export default function Navbar() {

  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoArea} onClick={() => router.push("/")}>
        <div className={styles.logoCircle}>
          <Image src="/images/logo.png" alt="Logo" width={25} height={25} />
        </div>
        <span className={styles.brand}>DIGITAL ERA</span>
      </div>

      <div className={styles.navLinks}>
        <Link href="/about">About Us</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/contact">Contact Us</Link>
      </div>

      <div className={styles.menuIcon}>
        <button onClick={toggleMenu}>{isOpen ? <X /> : <Menu />}</button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={styles.mobileMenu}
          >
            <Link href="/about">About Us</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/contact">Contact Us</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}