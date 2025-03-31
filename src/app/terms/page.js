import React from "react";
import styles from "../../styles/pages/Terms.module.scss";

const TermsPage = () => {
  return (
    <section className={styles.terms}>
      <img className={styles.graphic} src="/images/contact_graphic.png" />
      <h1>Terms of Service</h1>
      <p className={styles.date}><strong>Effective Date:</strong> 31/03/2025</p>

      <p>
        Welcome to Digital Era! By using our website and services, you agree to the following terms and conditions. Please read them carefully before proceeding.
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using the Digital Era website and services, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, please do not use our services.
      </p>

      <h2>2. Services Provided</h2>
      <p>
        Digital Era offers digital solutions, including but not limited to:
      </p>
      <ul>
        <li>Branding and Design</li>
        <li>Website Development</li>
        <li>Marketing Strategies</li>
        <li>Business Consulting</li>
      </ul>
      <p>
        We reserve the right to modify, suspend, or discontinue any service at any time without prior notice.
      </p>

      <h2>3. User Responsibilities</h2>
      <p>When using our website or services, you agree to:</p>
      <ul>
        <li>Provide accurate and complete information.</li>
        <li>Comply with all applicable laws and regulations.</li>
        <li>Refrain from using our services for any illegal or unauthorized purposes.</li>
      </ul>

      <h2>4. Intellectual Property</h2>
      <p>
        All content, designs, logos, and materials created by Digital Era are the intellectual property of Digital Era unless otherwise stated. You may not copy, reproduce, or distribute any materials without our written permission.
      </p>

      <h2>5. Payment Terms</h2>
      <p>
        Payment for services must be made as agreed in the invoice or contract. Failure to make timely payments may result in suspension or termination of services.
      </p>

      <h2>6. Limitation of Liability</h2>
      <p>
        Digital Era is not liable for any direct, indirect, incidental, or consequential damages resulting from the use of our website or services. Your use of our services is at your own risk.
      </p>

      <h2>7. Termination</h2>
      <p>
        We reserve the right to terminate or suspend your access to our services at any time, with or without cause, and without prior notice.
      </p>

      <h2>8. Changes to Terms</h2>
      <p>
        Digital Era reserves the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on this page. Continued use of our services constitutes acceptance of the updated terms.
      </p>

      <h2>9. Contact Us</h2>
      <p>
        If you have any questions or concerns about these Terms of Service, please contact us at:
      </p>
      <p>Email: [Insert Contact Email]</p>
      <p>Phone: [Insert Phone Number]</p>

      <p className={styles.notice}>
        <strong>
          By using our website and services, you acknowledge that you have read and agree to these Terms of Service.
        </strong>
      </p>
    </section>
  );
};

export default TermsPage;
