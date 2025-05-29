// src/app/checkout/cancel/page.js
import Link from 'next/link';
import styles from '../../../styles/pages/CheckoutResult.module.scss'; // Reuse or create specific styles

export default function CancelPage() {
  return (
    <div className={styles.checkoutResultPage}>
       <div className={styles.content}>
        <h1>Payment Cancelled</h1>
        <p>Your payment was not processed. You have not been charged.</p>
        <p>If you have any questions, please contact us.</p>
        <Link href="/packages" className={styles.homeButton}>
          View Packages
        </Link>
        <Link href="/" className={styles.homeButton}>
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}