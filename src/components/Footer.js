import styles from '../styles/components/Footer.module.scss';
import Image from 'next/image';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <div className={styles.logoCircle}>
            <Image src="/images/logo.png" alt="Logo" width={60} height={60} />
          </div>
          <div>
            <h2>Digital Era</h2>
            <p>
              Our creative team gets to work to bring your ideas to life as soon as
              possible with highest quality possible. We always use latest technologies and best practices.
            </p>
          </div>
        </div>

        <div className={styles.links}>
          <div>
            <h4>Pages</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4>Features</h4>
            <ul>
              <li><Link href="/terms">Terms of Service</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>© Digital Era 2024. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
