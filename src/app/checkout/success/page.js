// src/app/checkout/success/page.js
import Link from 'next/link';
import styles from '../../../styles/pages/CheckoutResult.module.scss'; // Create this SCSS file

// This can be a Server Component
export default function SuccessPage({ searchParams }) {
  const sessionId = searchParams?.session_id;

  // In a real app, you might want to:
  // 1. Verify the session_id with Stripe on the backend to prevent tampering.
  // 2. Fetch order/subscription details using the session_id.
  // 3. Update your database (e.g., mark order as paid, activate subscription).
  // For this example, we'll keep it simple.

  return (
    <div className={styles.checkoutResultPage}>
      <div className={styles.content}>
        <h1>Payment Successful!</h1>
        <p>Thank you for your purchase. Your transaction has been completed.</p>
        {sessionId && (
          <p className={styles.sessionIdInfo}>
            Your session ID is: <span>{sessionId}</span> <br/>
            (You can use this to confirm details with support if needed).
          </p>
        )}
        <p>You should receive a confirmation email shortly.</p>
        <Link href="/" className={styles.homeButton}>
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}