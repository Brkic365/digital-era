"use client";

import React from "react";
import styles from "../../styles/pages/Privacy.module.scss"; // We'll create this SCSS file
import { motion } from "framer-motion";
import FooterBanner from "../../components/FooterBanner"; // Optional, if you want it on this page
import Link from "next/link"; // For internal links if any

// --- Animation Variants (Can reuse or define specifically) ---
const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }
};

// No listStagger needed here as lists are mostly single-level within paragraphs

const PrivacyPage = () => {
  const companyEmail = "info@the-digital-era.com";
  const websiteUrl = "https://the-digital-era.com"; // If needed for full URLs

  return (
    <motion.section
        className={styles.privacy}
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
        transition={{ delay: 0.1 }}
    >
      <motion.h1 variants={itemVariant}>Privacy Statement</motion.h1>

      <motion.p variants={itemVariant}>
        The purpose of this Privacy Statement is to inform you about the types of personal information Digital
        Era (as follows, {'"Digital Era"'}, {'"we"'}, {'"our"'}, or {'"us"'}) collects, uses, and discloses when you visit,
        interact, or purchase digital art (each a {'"Product"'} and collectively, the {'"Products"'}) from {' '}
        {websiteUrl} (the {'"Site"'}). It explains how we use and disclose that information, the choices
        you have regarding such use and disclosure and how you may correct that information.
      </motion.p>
      <motion.p variants={itemVariant}>
        We will treat personal information in a manner consistent with our Privacy Policy unless we have your
        consent to treat it differently.
      </motion.p>

      {/* --- SECTION 1 --- */}
      <motion.h2 variants={itemVariant}>1. Collection of Personal Information</motion.h2>
      <motion.h3 variants={itemVariant} className={styles.subHeading}>a. To which companies does this Privacy Policy apply?</motion.h3>
      <motion.p variants={itemVariant}>
        This Privacy Policy applies to the collection, use, and disclosure of personal information by Digital Era
        on our Site.
      </motion.p>

      <motion.h3 variants={itemVariant} className={styles.subHeading}>b. What is personal information?</motion.h3>
      <motion.p variants={itemVariant}>
        Personal information is any factual or subjective information about an identifiable individual. Personal
        information includes such information as a person’s name, address, email address, phone number, date of
        birth and financial information ({'"Personal Information"'}). Specific personal information, such as your
        name, address, phone number or email address, is obtained only if you supply it voluntarily.
      </motion.p>

      <motion.h3 variants={itemVariant} className={styles.subHeading}>c. What Personal Information do we collect?</motion.h3>
      <motion.p variants={itemVariant}>
        When you visit our site, we automatically collect certain information about your device, including
        information about your IP address, web browser, time zone, and some of the cookies that are installed on
        your device. Additionally, we collect information about how you interact with the Site, including, the
        individual webpages or products that you view, any terms you might search, how many times you’ve
        visited our site, referring and existing pages, date and time stamps, transmitted data volume, operating
        system, and other technical data such as details of your visits to our website. We refer to this
        automatically-collected information as {'"Device Information."'} When we refer to Personal Information,
        we are also talking about Device Information, unless we address Device Information specifically.
      </motion.p>
      <motion.p variants={itemVariant}>
        We also collect Personal Information that you may provide to us, including: your basic personal details
        such as your name, contact data such as your telephone number, zip/postal code, or email address; and
        demographic data such as your address, preferences, interests, and other personal information relating to
        you that you may provide to us.
      </motion.p>
      <motion.p variants={itemVariant}>
        Furthermore, once your consent is obtained, Digital Era may collect the following types of Personal
        Information: (a) information by telephone or through the Site’s registration forms, transaction documents,
        or other documents or submissions related to the services we provide including your payment
        information, payment history using our Site, other parties to transactions; and your reasons for purchasing
        our Products; (b) information that we receive about you from other online entities who have initially
        obtained your information but have transferred it to us on a contractual basis so that we can provide our
        services to you; (c) information, aggregate or user specific, received from our Site; (d) other information
        you may provide when you contact our Support Team or online chat; and (e) Device Information to screen
        and protect against fraud.
      </motion.p>

      <motion.h3 variants={itemVariant} className={styles.subHeading}>d. When and how do we obtain consent?</motion.h3>
      <motion.p variants={itemVariant}>
        Before Digital Era, collects, uses, or discloses your Personal Information, we first obtain your express or
        implied consent. The form of consent will largely depend on the sensitivity of the information and the
        reasonable expectation of privacy that you may have in the specific circumstance. For example, we may
        obtain your express consent in writing, through electronic means, or verbally. Alternatively, your consent
        may be implied through an action that you’ve taken or by continuing to use the Site after being notified of
        our policy. Since we obtain consent the first time we receive your Personal Information, by continuing to
        make use of our Site, you imply that your consent is on-going in accordance with this Privacy Policy.
      </motion.p>

      {/* --- SECTION 2 --- */}
      <motion.h2 variants={itemVariant}>2. Use of Personal Information</motion.h2>
      <motion.h3 variants={itemVariant} className={styles.subHeading}>a. How do we use your Personal Information and Device Information?</motion.h3>
      <motion.p variants={itemVariant}>
        The Personal Information you provide to us will be used to: confirm your identity, set up accounts;
        provide on-going service; determine your eligibility for Products; adhere to legal and regulatory
        requirements set by the United Arab Emirates; verify your contact data such as your telephone number,
        zip/postal code, or email address; prevent errors and omissions; screening purchase transactions for fraud;
        send you information or communication; optimize your experience on our Site; and to assess the success
        of our marketing and advertising campaigns. When you send us an email or enter your Personal
        Information in an online form, we will collect your Personal Information in order to respond to you, to
        provide the requested services, to facilitate billing transactions and processing payments, or to improve
        our website services. We will not pass on such data without your consent. With your consent, we may also
        use your Personal Information to provide you with targeted advertisements or marketing communications
        that we believe may be of interest to you. You can withdraw this consent at any time.
      </motion.p>

      <motion.h3 variants={itemVariant} className={styles.subHeading}>b. Where do we store your Personal Information?</motion.h3>
      <motion.p variants={itemVariant}>
        We store your Personal Information in hard copy and electronic form at our offices in United Arab
        Emirates. Our service providers may, from time to time, also hold your Personal Information in
        connection with purposes for which you provided your consent. Our service providers may store your
        information temporarily in Canada or the United States.
      </motion.p>

      <motion.h3 variants={itemVariant} className={styles.subHeading}>c. How long will we use, disclose, or retain your Personal Information and Device Information?</motion.h3>
      <motion.p variants={itemVariant}>
        Your Personal Information will be used, disclosed, or retained for as long as necessary to fulfill the
        purposes for which it was collected and permitted or required by law. Generally, we do not disclose your
        Personal Information or Device Information, and where we do, we will identify to whom and for what
        purposes the disclosure will be made and will obtain your consent to such disclosure. We make reasonable
        security arrangements to protect your Personal Information against risks such as unauthorized access,
        collection, use, disclosure or disposal. We integrate these security measures into the design, application,
        and operation of the Site. We take reasonable measures to evolve with the risks so that the integrity and
        confidentiality of your Personal Information and our systems are maintained.
      </motion.p>

      {/* --- SECTION 3 --- */}
      <motion.h2 variants={itemVariant}>3. Disclosure of Personal Information</motion.h2>
      <motion.p variants={itemVariant}>
        We use service providers to help us operate our Site, and to administer business activities on our behalf,
        such as sending emails, completing purchase transactions, fulfilling digital orders. We may share your
        information with these third parties for those limited purposes.
      </motion.p>

      {/* --- SECTION 4 --- */}
      <motion.h2 variants={itemVariant}>4. Changes</motion.h2>
      <motion.p variants={itemVariant}>
        We may update this Privacy Policy from time to time to reflect, for example, changes to our practices or
        for other operational, legal, or regulatory reasons. We will notify you before we make changes to this
        policy and give you the opportunity to review and comment on the revised policy before consenting to use
        our Services.
      </motion.p>
      <motion.p variants={itemVariant}>
        We are also committed to keeping your Personal Information accurate. Please notify us of any changes
        to your information. By doing so, we can ensure our records are accurate and we’ll be better able to assist
        you. This includes changes to contact information, address, employment, and banking information.
      </motion.p>

      {/* --- SECTION 5 --- */}
      <motion.h2 variants={itemVariant}>5. Contact</motion.h2>
      <motion.p variants={itemVariant}>
        For more information about our privacy practices, if you have questions, or if you would like to make a
        complaint, please contact us:
      </motion.p>
      <motion.p variants={itemVariant}>
        Support: <a href={`mailto:${companyEmail}`} className={styles.inlineLink}>{companyEmail}</a>
      </motion.p>

      {/* Footer Banner - Optional */}
      <div style={{marginTop: "4rem"}}>
        <FooterBanner />
      </div>
    </motion.section>
  );
};

export default PrivacyPage;