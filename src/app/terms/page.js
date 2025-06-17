"use client";

import React from "react";
import styles from "../../styles/pages/Terms.module.scss";
import { motion } from "framer-motion";
import FooterBanner from "../../components/FooterBanner"; // Keep if used on this page
import Link from "next/link"; // For the privacy policy link

// --- Animation Variants (Can reuse from Home/FAQ or define here) ---
const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const itemVariant = { // For individual paragraphs/headings
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } } // Slightly faster
};

const listStagger = { // For staggering list items
    hidden: {},
    visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } } // Faster stagger
};


const TermsPage = () => {
  const effectiveDate = "11/11/2025";
  const companyEmail = "info@the-digital-era.com";
  const websiteUrl = "https://the-digital-era.com";
  const privacyPolicyUrl = "/privacy"; // Updated to relative path

  return (
    <motion.section
        className={styles.terms}
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
        transition={{ delay: 0.1 }}
    >
      <motion.h1 variants={itemVariant}>Terms of Service</motion.h1>
      <motion.p variants={itemVariant} className={styles.date}><strong>Effective Date:</strong> {effectiveDate}</motion.p>

      <motion.p variants={itemVariant}>
        Welcome to Digital Era! By using our website and services, you agree to the following terms and conditions. Please read them carefully before proceeding.
      </motion.p>

      {/* --- ARTICLE 1 --- */}
      <motion.h2 variants={itemVariant}>Article 1 – Acceptance of the Website Terms and Conditions of Use</motion.h2>
      <motion.p variants={itemVariant}>
        <strong>1.1</strong> These website terms and conditions of use for Digital Era, constitute a legal agreement
        and are entered into by and between you and Digital Era ({'"Digital Era"'} {'"Company,"'} {'"we,"'} {'"us,"'}
        {'"our"'}). When we refer to {'"you,"'} {'"your,"'} or {'"Users,"'} we are referring to all users of the Website.
      </motion.p>
      <motion.p variants={itemVariant}>
        <strong>1.2</strong> The following terms and conditions, together with any documents and/or additional
        terms they expressly incorporated by reference (collectively, these {'"Terms and Conditions,"'}
        {'"Terms"'}), govern your access to and use, including any content, functionality, and services
        offered on or through {websiteUrl} (the {'"Website"'}). These Terms shall
        commence when you first visit {websiteUrl} or use any feature of the Website
        and shall apply to all of your subsequent visits and uses.
      </motion.p>
      <motion.p variants={itemVariant}>
        <strong>1.3</strong> BY USING THE WEBSITE OR BY CLICKING TO ACCEPT THE TERMS AND CONDITIONS,
        YOU ACCEPT AND AGREE TO BE BOUND AND COMPLY WITH THESE TERMS AND
        CONDITIONS AND OUR PRIVACY POLICY, FOUND AT <Link href={privacyPolicyUrl} className={styles.inlineLink}>{websiteUrl}/privacy</Link>, INCORPORATED HEREIN BY REFERENCE. IF
        YOU DO NOT AGREE TO THESE TERMS AND CONDITIONS OR THE PRIVACY POLICY, YOU
        MUST NOT ACCESS OR USE THE WEBSITE.
      </motion.p>
      <motion.p variants={itemVariant}>
        <strong>1.4</strong> By using the Website, you represent and warrant that you are the legal age of majority
        under applicable law to form a binding contract with the Company and meet all of the
        foregoing eligibility requirements. If you are under 13 years of age, you are not authorized
        to use the Website, with or without registering. In addition, if you are under 18 years old,
        you may use the Website, with or without registering, only with the approval of your parent
        or guardian. If you do not meet all of these requirements, you must not access or use the
        Website.
      </motion.p>

      {/* --- ARTICLE 2 --- */}
      <motion.h2 variants={itemVariant}>Article 2 – Modifications to the Terms and Conditions and to the Website</motion.h2>
      <motion.p variants={itemVariant}>
        <strong>2.1</strong> We reserve the right in our sole discretion to revise and update these Terms and
        Conditions from time to time. Any and all such modifications are effective immediately upon
        posting and apply to all access to and continued use of the Website. You agree to periodically
        review the terms and conditions in order to be aware of any such modifications and your
        continued use of the Website shall be your acceptance of these modifications.
      </motion.p>
      <motion.p variants={itemVariant}>
        <strong>2.2</strong> The information and material on this Website may be suspended, withdrawn, or
        terminated at any time in our sole discretion without notice. We will not be liable if, for any
        reason, all or any part of the Website is restricted to Users or unavailable at any time or for
        any period.
      </motion.p>

      {/* --- ARTICLE 3 --- */}
      <motion.h2 variants={itemVariant}>Article 3 – Your Use of the Website and Account Set-Up and Security</motion.h2>
      <motion.p variants={itemVariant}>
        <strong>3.1</strong> The security of your personal information is very important to us. We use physical,
        electronic, and administrative measures designed to secure your personal information from
        accidental loss and from unauthorized access, use, alteration, and disclosure. Unfortunately,
        the transmission of information via the Internet is not completely secure. Although we do
        our best to protect your personal information, we cannot guarantee the security of your
        personal information transmitted to our Website. Any transmission of personal information
        is at your own risk. We are not responsible for circumvention of any privacy settings or
        security measures contained on the Website.
      </motion.p>
      <motion.p variants={itemVariant}>
        <strong>3.2</strong> The safety and security of your information also depends on you. Users are responsible
        for obtaining their own access to the Website. Users are required to ensure that all persons
        who access the Website through a User’s internet connection are aware of these Terms and
        Conditions and comply with them. It is a condition of your use of the Website that all the
        information you provide on the Website is true, accurate, current, and complete.
      </motion.p>
      <motion.p variants={itemVariant}>
        <strong>3.3</strong> Your provision of registration information and any submissions you make to the Website
        through any functionality such as applications, chat functions, e-mail, message boards,
        personal, or profiles (collectively, {'"Interactive Functions"'}) constitutes your consent to all
        actions we take with respect to such information consistent with our Privacy Policy, found at
        <Link href={privacyPolicyUrl} className={styles.inlineLink}> {websiteUrl}/privacy</Link>.
      </motion.p>
      <motion.p variants={itemVariant}>
        <strong>3.4</strong> Any username, password, or any other piece of information chosen by you, or provided
        to you as part of our security procedures, must be treated as confidential, and you must not
        disclose it to any other person or entity. You are responsible for maintaining the
        confidentiality of your password and account, if any, and are fully responsible for any and all
        activities that occur under your password or account. You understand and agree that should
        you be provided an account, your account is personal to you and you agree not to provide
        any other person with access to the Website or portions of it using your username,
        password, or other security information. You agree to notify us immediately of any
        unauthorized access to or use of your username or password or any other breach of
        security. You also agree to ensure that you logout from your account at the end of each
        session. You are responsible for any password misuse or any unauthorized access.
      </motion.p>
      <motion.p variants={itemVariant}>
        <strong>3.5</strong> We reserve the right at any time and from time to time, to disable or terminate your
        account, any username, password, or other identifier, whether chosen by you or provided by
        us, in our sole discretion for any or no reason, including any violation of any provision of
        these Terms and Conditions.
      </motion.p>
      <motion.p variants={itemVariant}>
        <strong>3.6</strong> You are prohibited from attempting to circumvent and from violating the security of the
        Website, including, without limitation:
      </motion.p>
      <motion.ul variants={listStagger} className={styles.numberedList}>
        <motion.li variants={itemVariant}> (a) accessing content and data that is not intended for you;</motion.li>
        <motion.li variants={itemVariant}> (b) attempting to breach or breaching the security and/or authentication measures which are not authorized;</motion.li>
        <motion.li variants={itemVariant}> (c) restricting, disrupting or disabling service to the Company, hosts, servers, or networks;</motion.li>
        <motion.li variants={itemVariant}> (d) illicitly reproducing TCP/IP packet header;</motion.li>
        <motion.li variants={itemVariant}> (e) disrupting network services and otherwise disrupting Digital Era’s ability to monitor the Website;</motion.li>
        <motion.li variants={itemVariant}> (f) using any robot, spider, or other automatic device, process, or means to access the Website for any purpose, including monitoring or copying any of the material on the Website;</motion.li>
        <motion.li variants={itemVariant}> (g) introducing any viruses, trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful;</motion.li>
        <motion.li variants={itemVariant}> (h) attacking the Website via a denial-of-service attack, distributed denial-of-service attack, flooding, mailbombing, or crashing; and</motion.li>
        <motion.li variants={itemVariant}> (i) otherwise attempting to interfere with the proper working of the Website.</motion.li>
      </motion.ul>


      {/* --- ARTICLE 4 --- */}
      <motion.h2 variants={itemVariant}>Article 4 – Pricing and Payment</motion.h2>
      <motion.p variants={itemVariant}>
        <strong>4.1</strong> Subject to these Terms and Conditions, access to the Website is provided to you for free.
        When you purchase digital services and subscription packages (each a {'"Service"'} and
        collectively, the {'"Services"'}) from Digital Era (such purchase, a {'"Transaction"'}), you expressly
        authorize us (or our third-party service providers) to charge you for such Transaction.
      </motion.p>
      <motion.p variants={itemVariant}>
        <strong>4.2</strong> When you initiate a Transaction, you authorize us to provide your payment information to
        our third-party service providers so we can complete your Transaction and to charge your
        payment method for the type of Transaction you have selected. You may need to provide
        additional information to verify your identity before completing your Transaction. You
        represent and warrant that you have the legal right to use all payment method(s)
        represented by any such payment information.
      </motion.p>
      <motion.p variants={itemVariant}>
        <strong>4.3</strong> Prices for Services will be paid to the Company in United States Dollars or Canadian
        Dollars. All prices displayed on the Website are exclusive of applicable taxes. Any applicable
        taxes will be calculated and clearly displayed at the payment portal prior to completing the
        transaction.
      </motion.p>
      <motion.p variants={itemVariant}>
        <strong>4.4</strong> Given the nature of digital services and subscription packages, Digital Era does not offer
        refunds or accept returns or exchanges for any Transaction including Services. Users
        acknowledge and accept with the Company that:
      </motion.p>
      <motion.ul variants={listStagger} className={styles.numberedList}>
        <motion.li variants={itemVariant}>(a) all sales for Services are final and non-refundable;</motion.li>
        <motion.li variants={itemVariant}>(b) Services will be promptly delivered to the User through the e-mail address provided at check-out; and</motion.li>
        <motion.li variants={itemVariant}>(c) Users will not receive a physical or tangible version of the Services.</motion.li>
      </motion.ul>
      <motion.p variants={itemVariant}>
        <strong>4.5</strong> In the unlikely event where there is a technical issue relating to the e-delivery of a Service,
        Users may contact Customer Support for assistance.
      </motion.p>

      {/* --- ARTICLE 5 --- */}
      <motion.h2 variants={itemVariant}>Article 5 – Termination</motion.h2>
      <motion.p variants={itemVariant}>
        <strong>5.1</strong> Digital Era may terminate the sales agreement between the parties with immediate
        effect at any time and without reason.
      </motion.p>
      <motion.p variants={itemVariant}>
        <strong>5.3</strong> Upon request from the respective User, the Company is entitled to delete or destroy all
        copies of the respective User’s data, unless agreed to otherwise in writing.
      </motion.p>

      {/* --- ARTICLE 6 --- */}
      <motion.h2 variants={itemVariant}>Article 6 – Modifications to Service</motion.h2>
      <motion.p variants={itemVariant}>
        <strong>6.1</strong> Company reserves the right to modify or discontinue, temporarily or permanently, the
        Website, or any part thereof, including, but not limited to, any Service with or without
        notice. Users agree that the Company will not be liable to you or any third party for
        modifying, suspending, or discontinuing the Website.
      </motion.p>

      {/* --- ARTICLE 7 --- */}
      <motion.h2 variants={itemVariant}>Article 7 – Intellectual Property Rights and Ownership</motion.h2>
      <motion.h3 variants={itemVariant} className={styles.subArticleHeading}>Website Content</motion.h3>
      <motion.p variants={itemVariant}>
        <strong>7.1</strong> Users acknowledge and agree that the Website may contain content ({'"Website Content"'})
        that is protected by copyright, patent, trademark, trade secret or other proprietary rights
        and laws. Except as expressly authorized by the Company, Users agree not to modify, copy,
        frame, scrape, rent, lease, loan, sell, distribute or create derivative works based on the
        Website or the Website Content, in whole or in part. In connection with your use of the
        Website you will not engage in or use any data mining, robots, scraping or similar data
        gathering or extraction methods. Any use of the Website or the Website Content other than
        as specifically authorized herein is strictly prohibited.
      </motion.p>
      <motion.p variants={itemVariant}>
        <strong>7.2</strong> The technology and software underlying the Website or distributed in connection
        therewith is the property of Digital Era, our affiliates, or our partners (the {'"Software"'}). You
        agree not to copy, modify, create a derivative work of, reverse engineer, reverse assemble, or
        otherwise attempt to discover any source code, sell, assign, sublicense, or otherwise transfer
        any right in the Software. Any rights not expressly granted herein are reserved by Digital Era.
      </motion.p>
      <motion.p variants={itemVariant}>
        <strong>7.3</strong> The Company name, the Company logo, and all related names, logos, product and service
        names, designs, images, and slogans are, registered or unregistered, trademarks of the
        Company or its affiliates or licensors (collectively, the {'"Company Trademarks"'}). Nothing in
        this Terms of Service or the Website should be construed as granting, by implication,
        estoppel, or otherwise, any license or right to use any of the Company Trademarks displayed
        on the Website, without our prior written permission in each instance. Other names, logos,
        product and service names, designs, images, and slogans mentioned, or which appear on
        this Website are the trademarks of their respective owners. Use of any such property, except
        as expressly authorized, shall constitute an infringement or violation of the rights of the
        property owner and may be a violation of federal or other laws and could subject the
        infringer to legal action. All goodwill generated from the use of the Company Trademarks
        will insure to our exclusive benefit.
      </motion.p>
      <motion.p variants={itemVariant}>
        <strong>7.4</strong> Company will have the right, but not the obligation, in their sole discretion to refuse or
        remove any Website Content that is created, posted, made available, linked to, or uploaded
        via the Website. However, you acknowledge that Company does not pre-screen Website
        Content. Without limiting the foregoing, Company will have the right to remove any Website
        Content that violates these Terms and Conditions or is deemed to be objectionable by
        Company, in its sole discretion.
      </motion.p>
      <motion.p variants={itemVariant}>
        <strong>7.5</strong> You acknowledge and agree that any questions, comments, suggestions, ideas, feedback
        or other information about the Website ({'"Submissions"'}), provided by you to Company are
        non-confidential and Company will be entitled to the unrestricted use and dissemination of
        these Submissions for any purpose, commercial or otherwise, without acknowledgment or
        compensation to you. You acknowledge and agree that Company may preserve content and
        may also disclose content if required to do so by law or in the good faith belief that such
        preservation or disclosure is reasonably necessary to: (a) comply with legal process,
        applicable laws or government requests; (b) enforce these Terms; (c) respond to claims that
        any content violates the rights of third parties; or (d) protect the rights, property, or
        personal safety of Company, its Users and the public. You understand that the technical
        processing and transmission of the Website, including your content, may involve (a)
        transmissions over various networks; and (b) changes to conform and adapt to technical
        requirements of connecting networks or devices.
      </motion.p>
      <motion.h3 variants={itemVariant} className={styles.subArticleHeading}>Licence</motion.h3>
      <motion.p variants={itemVariant}>
        <strong>7.6</strong> Subject to these Terms and Conditions, Company grants you a non-exclusive,
        non-transferable, non-sublicensable, worldwide, royalty-free, fully paid up, limited and
        revocable license to: (i) access and use the functionality of the Website to purchase a
        Service; and (ii) upon the purchase of a Service, to store, access, publicly display, and use
        each Service for personal or internal business development use in any form, medium or
        technology. The license granted in this Section 7.6 does not assign or transfer to the User
        any copyright or ownership of the purchased Service.
      </motion.p>
      <motion.p variants={itemVariant}>
        <strong>7.7</strong> Except as explicitly permitted in these Terms and Conditions, you may not, directly or
        indirectly:
      </motion.p>
      <motion.ul variants={listStagger} className={styles.numberedList}>
        <motion.li variants={itemVariant}>(i) modify or create derivative works of the Website or a Service;</motion.li>
        <motion.li variants={itemVariant}>(ii) decompile, reverse engineer, or translate any portion of the Website into human-readable form (except to the extent expressly allowed by applicable law);</motion.li>
        <motion.li variants={itemVariant}>(iii) rent, lease, share, distribute, sub-license, or sell the Website or Service to any third party;</motion.li>
        <motion.li variants={itemVariant}>(iv) remove, alter, or deface proprietary notices or marks on the Website;</motion.li>
        <motion.li variants={itemVariant}>(v) disclose the results of testing or benchmarking of the Website;</motion.li>
        <motion.li variants={itemVariant}>(vi) circumvent or disable the Website’s security, copyright protection, or license management mechanisms;</motion.li> {/* Note: comma added for proper listing */}
        <motion.li variants={itemVariant}>(vii) interfere with the Website’s operation;</motion.li>
        <motion.li variants={itemVariant}>(viii) use the Website or Service to violate the law or the rights of any third party;</motion.li>
        <motion.li variants={itemVariant}>(ix) attempt to do any of the foregoing;</motion.li>
        <motion.li variants={itemVariant}>(x) distribute, reproduce, or commercially exploit the Service.</motion.li>
      </motion.ul>
      <motion.p variants={itemVariant}>
        The Company may take any actions it deems reasonable, including denying access
        to Users or terminating your Service’s license for any breach of this Section 7.7.
      </motion.p>
      <motion.h3 variants={itemVariant} className={styles.subArticleHeading}>Copyright Complaints</motion.h3>
      <motion.p variants={itemVariant}>
        <strong>7.8</strong> Company respects the intellectual property of others, so if you believe that your work
        has been copied in a way that constitutes copyright infringement, or that your intellectual
        property rights have been otherwise violated, you should notify Company of your
        infringement claim. A notification of claimed copyright infringement should be emailed to
        Company’s at <a href={`mailto:${companyEmail}`} className={styles.inlineLink}>{companyEmail}</a>.
      </motion.p>


      {/* --- ARTICLE 8 --- */}
      <motion.h2 variants={itemVariant}>Article 8 – Conditions of Use</motion.h2>
      <motion.p variants={itemVariant}>
        <strong>8.1</strong> As a condition of your access and use, you agree that you may use the Website only for
        lawful purposes and in accordance with these Terms and Conditions.
      </motion.p>
      <motion.p variants={itemVariant}>
        <strong>8.2</strong> Without limiting the foregoing, you warrant and agree that your use of the Website shall not:
      </motion.p>
      <motion.ul variants={listStagger} className={styles.numberedList}>
        <motion.li variants={itemVariant}> (a) In any manner violate any applicable federal, provincial, local, or international law or regulation including, without limitation, any laws regarding the export of data or software, patent, trademark, trade secret, copyright, or other intellectual property, legal rights (including the rights of publicity and privacy of others) or contain any material that could give rise to any civil or criminal liability under applicable laws or regulations or that otherwise may be in conflict with these Terms and Conditions and our Privacy Policy found at <Link href={privacyPolicyUrl} className={styles.inlineLink}>{websiteUrl}/privacy</Link>;</motion.li>
        <motion.li variants={itemVariant}> (b) In any manner violate the terms of use of any third-party website that is linked to the Website, including but not limited to, any third-party social media website;</motion.li>
        <motion.li variants={itemVariant}> (c) Include or contain any material that is exploitive, obscene, harmful, threatening, abusive, harassing, hateful, defamatory, sexually explicit or pornographic, violent, inflammatory, or discriminatory based on race, sex, religion, nationality, disability, sexual orientation, or age or other such legally prohibited ground or be otherwise objectionable, such determination to be made in Company’s sole discretion;</motion.li>
        <motion.li variants={itemVariant}> (d) Involve stalking, attempting to exploit or harm any individual (including minors) in any way by exposing them to inappropriate content or otherwise or ask for personal information as prohibited under applicable laws, regulations, or code;</motion.li>
        <motion.li variants={itemVariant}> (e) Involve, provide, or contribute any false, inaccurate, or misleading information;</motion.li>
        <motion.li variants={itemVariant}> (f) Include sending, knowingly receiving, uploading, downloading, using, or reusing any material that does not comply with these Terms and Conditions;</motion.li>
        <motion.li variants={itemVariant}> (g) Impersonate or attempt to impersonate the Company, a Company employee, another User, or any other person or entity (including, without limitation, by using email addresses, or screen names associated with any of the foregoing);</motion.li>
        <motion.li variants={itemVariant}> (h) Transmit, or procure the sending of, any advertisements or promotions, sales, or encourage any other commercial activities, including, without limitation, any {'"spam"'}, {'"junk mail"'}, {'"chain letter"'}, contests, sweepstakes and other sales promotions, barter, or advertising or any other similar solicitation;</motion.li>
        <motion.li variants={itemVariant}> (i) Encourage any other conduct that restricts or inhibits anyone’s use or enjoyment of the Website, or which, as determined by us, may harm the Company or Users of the Website or expose them to liability;</motion.li>
        <motion.li variants={itemVariant}> (j) Cause annoyance, inconvenience, or needless anxiety or be likely to upset, embarrass, or alarm any other person;</motion.li>
        <motion.li variants={itemVariant}> (k) Promote any illegal activity, or advocate, promote, or assist any unlawful act;</motion.li>
        <motion.li variants={itemVariant}> (l) Give the impression that they originate from or are endorsed by us or any other person or entity, if this is not the case;</motion.li>
        <motion.li variants={itemVariant}> (m) Interfere with or disrupt the Website or servers or networks connected to the Website, or disobey any requirements, procedures, policies or regulations of networks connected to the Website;</motion.li>
        <motion.li variants={itemVariant}> (n) Use machine-generated user identities;</motion.li>
        <motion.li variants={itemVariant}> (o) Further or promote any criminal activity or enterprise or provide instructional information about illegal activities; and</motion.li>
        <motion.li variants={itemVariant}> (p) Obtain or attempt to access or otherwise obtain any materials or information through any means not intentionally made available or provided for through the Website.</motion.li>
      </motion.ul>

      {/* --- ARTICLE 9 --- */}
      <motion.h2 variants={itemVariant}>Article 9 – Site Monitoring and Enforcement, Suspension, and Termination</motion.h2>
      <motion.p variants={itemVariant}>
        <strong>9.1</strong> Company has the right, without provision of notice to:
      </motion.p>
      <motion.ul variants={listStagger} className={styles.numberedList}>
          <motion.li variants={itemVariant}>(a) Remove or refuse to post on the Website any Submissions for any or no reason in our sole discretion;</motion.li>
          <motion.li variants={itemVariant}>(b) At all times, take such actions with respect to any Submission deemed necessary or appropriate in our sole discretion, including, without limitation, for violating the Website or Terms and Conditions;</motion.li>
          <motion.li variants={itemVariant}>(c) Take appropriate legal action, including, without limitation, referral to law enforcement or regulatory authority, or notifying the harmed party of any illegal or unauthorized use of the Website. Without limiting the foregoing, we have the right to fully cooperate with any law enforcement authorities or court order requesting or directing us to disclose the identity or other information of anyone posting any materials on or through the Website;</motion.li>
          <motion.li variants={itemVariant}>(d) Terminate or suspend your access to all or part of the Website for any or no reason, including, without limitation, any violation of these Terms and Conditions.</motion.li>
      </motion.ul>
      <motion.p variants={itemVariant}>
        <strong>9.2</strong> YOU WAIVE AND HOLD HARMLESS THE COMPANY AND THEIR RESPECTIVE
        DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, SERVICE PROVIDERS, CONTRACTORS,
        LICENSORS, LICENSEES, AND SUCCESSORS FROM ANY AND ALL CLAIMS RESULTING FROM
        ANY ACTION TAKEN BY THE COMPANY AND ANY OF THE FOREGOING PARTIES RELATING
        TO ANY, INVESTIGATIONS BY EITHER THE COMPANY OR SUCH PARTIES OR BY LAW
        ENFORCEMENT AUTHORITIES.
      </motion.p>
      <motion.p variants={itemVariant}>
        <strong>9.3</strong> We have no obligation, nor any responsibility to any party to monitor the Website or its
        use, and do not and cannot undertake to review material that Users submit to the Website.
        We cannot ensure prompt removal of objectionable material after it has been posted and we
        have no liability for any action or inaction regarding transmissions, communications, or
        content provided by any User or third party, subject to applicable laws.
      </motion.p>


      {/* --- ARTICLE 10 --- */}
      <motion.h2 variants={itemVariant}>Article 10 – No Reliance</motion.h2>
      <motion.p variants={itemVariant}>
        <strong>10.1</strong> The content on our Website is provided for general information purposes only. It is not
        intended to amount to advice on which you should rely. You must obtain more specific or
        professional advice before taking, or refraining from, any action or inaction on the basis of
        the content on our Website.
      </motion.p>
      <motion.p variants={itemVariant}>
        <strong>10.2</strong> Although we make reasonable efforts to update the information on our Website, we
        make no representations, warranties, or guarantees, whether express or implied, that the
        content on our Website is accurate, complete, or up to date. Your use of the Website is at
        your own risk and neither the Company its respective directors, officers, employees, agents,
        service providers, contractors, licensors, licensees, or successors has any responsibility or
        liability whatsoever for your use of the Website.
      </motion.p>
      <motion.p variants={itemVariant}>
        <strong>10.3</strong> The Website may include content provided by third parties, including from other users
        and third party licensors. All statements and/or opinions expressed in any such third-party
        content, other than the content provided by the Company, are solely the opinions and the
        responsibility of the person or entity providing those materials. Such materials do not
        necessarily reflect the opinion of the Company. Neither the Company nor its respective
        directors, officers, employees, agents, service providers, contractors, licensors, licensees, or
        successors has any responsibility or liability whatsoever to you, or any third party, for the
        content or accuracy of any third-party materials.
      </motion.p>

      {/* --- ARTICLE 11 --- */}
      <motion.h2 variants={itemVariant}>Article 11 – Support Policy</motion.h2>
      <motion.p variants={itemVariant}>
        <strong>11.1</strong> Company shall provide technical support for the Website within 1-4 weeks of a Users
        request for support. Upon investigating the support request or inquiry related to a session
        or subscription, if Company determines that the cause of the request for support is related
        to a software bug, Company shall make best efforts to engage in debugging the software
        immediately. Company makes no representations as to the functionality of the Website or
        length of time required to debug the Website.
      </motion.p>
      <motion.p variants={itemVariant}>
        <strong>11.2</strong> By using the Website, Users acknowledge and agree that technical support for
        Participants shall be attended to by Administrators to the extent that such support does not
        include resolving software bugs.
      </motion.p>

      {/* --- ARTICLE 12 --- */}
      <motion.h2 variants={itemVariant}>Article 12 – Privacy</motion.h2>
      <motion.p variants={itemVariant}>
        <strong>12.1</strong> By submitting your personal information and using our Website, you consent to the
        collection, use, reproduction, hosting, transmission, and disclosure of any such user
        submissions in compliance with our Privacy Policy, found at
        <Link href={privacyPolicyUrl} className={styles.inlineLink}> {websiteUrl}/privacy</Link> as we deem necessary for use of the Website.
      </motion.p>
      <motion.p variants={itemVariant}>
        <strong>12.2</strong> By using this Website you are consenting to the use of cookies which allow a server to
        recall previous requests or registration and/or IP addresses to analyze website use patterns.
        You can set your browser to notify you before you receive a cookie, giving you the chance to
        decide whether to accept it. You can also set your browser to turn off cookies. If you do,
        however, some areas of the Website may not function adequately. For more information on
        this automated information gathering practices, see
        <Link href={privacyPolicyUrl} className={styles.inlineLink}> {websiteUrl}/privacy</Link>
      </motion.p>

      {/* --- ARTICLE 13 --- */}
      <motion.h2 variants={itemVariant}>Article 13 – Third-Party Websites</motion.h2>
      <motion.p variants={itemVariant}>
        <strong>13.1</strong> For your convenience, the Service may provide links or pointers to third-party sites. We
        make no representations about any other websites that may be accessed from this Website.
        Such links to third-party sites from the Website may include links to certain social media
        features that enable you to link or transmit on your own or using certain third-party
        websites, certain content from this Website. If you choose to access any such sites, you do so
        at your own risk. We have no control over the contents of any such third-party sites and
        accept no responsibility for such sites or for any loss or damage that may arise from your
        use of them. You are subject to any terms and conditions of such third-party sites.
      </motion.p>
      <motion.p variants={itemVariant}>
        <strong>13.2</strong> You may link to our homepage, provided you do so in a way that is fair and legal and
        does not damage our reputation or take advantage of it. You must not establish a link in such
        a way as to suggest any form of association, approval, or endorsement on our part where
        none exists. Our Website must not be framed on any other site, nor may you create a link to
        any part of our Website other than the homepage. We reserve the right to withdraw linking
        permission without notice. The website in which you are linking must comply in all respects
        with this Terms and Conditions. You agree to cooperate with us in causing any unauthorized
        framing or linking to immediately stop.
      </motion.p>

      {/* --- ARTICLE 14 --- */}
      <motion.h2 variants={itemVariant}>Article 14 – Geographic Restrictions</motion.h2>
      <motion.p variants={itemVariant}>
        <strong>14.1</strong> We provide the Website for use by persons located worldwide. The Website is not
        intended for use in any jurisdiction where its use is not permitted. If you access the Website
        or Application from outside of the United Arab Emirates, you do so at your own risk and you
        are responsible for compliance with local laws of your jurisdiction.
      </motion.p>

      {/* --- ARTICLE 15 --- */}
      <motion.h2 variants={itemVariant}>Article 15 – Disclaimer of Warranties</motion.h2>
      <motion.p variants={itemVariant}>
        <strong>15.1</strong> YOU UNDERSTAND AND AGREE THAT YOUR USE OF THE WEBSITE, ITS CONTENT,
        AND ANY PRODUCTS OR ITEMS PURCHASED OR ATTAINED THROUGH THE WEBSITE IS AT
        YOUR OWN RISK. THE WEBSITE, ITS CONTENT, AND ANY PRODUCTS OR ITEMS
        PURCHASED OR ATTAINED THROUGH THE WEBSITE ARE PROVIDED ON AN {'"AS IS"'} AND
        {'"AS AVAILABLE"'} BASIS, WITHOUT ANY WARRANTIES OR CONDITIONS OF ANY KIND,
        EITHER EXPRESS OR IMPLIED INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
        WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR
        NON-INFRINGEMENT. THE FOREGOING DOES NOT AFFECT ANY WARRANTIES THAT
        CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
      </motion.p>
      <motion.p variants={itemVariant}>
        <strong>15.2</strong> NEITHER THE COMPANY NOR ITS RESPECTIVE DIRECTORS, OFFICERS, EMPLOYEES,
        AGENTS, SERVICE PROVIDERS, CONTRACTORS, LICENSORS, LICENSEES, OR SUCCESSORS
        MAKE ANY WARRANTY, REPRESENTATION, OR ENDORSEMENT WITH RESPECT TO THE
        COMPLETENESS, SECURITY, RELIABILITY, SUITABILITY, ACCURACY, CURRENCY, OR
        AVAILABILITY OF THE WEBSITE, ITS CONTENTS, AND ANY PRODUCT. WITHOUT LIMITING
        THE FOREGOING, NEITHER THE COMPANY NOR ITS RESPECTIVE DIRECTORS, OFFICERS,
        EMPLOYEES, AGENTS, SERVICE PROVIDERS, CONTRACTORS, LICENSORS, LICENSEES, OR
        SUCCESSORS REPRESENT OR WARRANT THAT THE WEBSITE, ITS CONTENT, OR ANY
        PRODUCTS OR ITEMS PURCHASED OR ATTAINED THROUGH THE WEBSITE OR THE
        APPLICATION WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED, THAT
        DEFECTS WILL BE CORRECTED, THAT OUR WEBSITE OR THE SERVER THAT MAKES IT
        AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
      </motion.p>
      <motion.p variants={itemVariant}>
        <strong>15.3</strong> WE CANNOT AND DO NOT GUARANTEE OR WARRANT THAT PRODUCTS, FILES, OR
        DATA AVAILABLE FOR DOWNLOADING FROM THE INTERNET OR THE WEBSITE WILL BE
        FREE OF VIRUSES OR OTHER DESTRUCTIVE CODE. YOU ARE SOLELY AND ENTIRELY
        RESPONSIBLE FOR YOUR USE OF THE WEBSITE AND YOUR COMPUTER, INTERNET, AND
        DATA SECURITY. TO THE FULLEST EXTENT PROVIDED BY LAW, WE WILL NOT BE LIABLE
        FOR ANY LOSS OR DAMAGE CAUSED BY DENIAL-OF-SERVICE ATTACK, DISTRIBUTED
        DENIAL-OF-SERVICE ATTACK, OVERLOADING, FLOODING, MAILBOMBING, OR CRASHING,
        VIRUSES, TROJAN HORSES, WORMS, LOGIC BOMBS, OR OTHER TECHNOLOGICALLY
        HARMFUL MATERIAL THAT MAY INFECT YOUR COMPUTER EQUIPMENT, COMPUTER
        PROGRAMS, DATA, OR OTHER PROPRIETARY MATERIAL DUE TO YOUR USE OF THE
        WEBSITE OR ANY PRODUCTS OR ITEMS PURCHASED OR ATTAINED THROUGH THE
        WEBSITE OR TO YOUR DOWNLOADING OF ANY MATERIAL POSTED ON IT, OR ON ANY
        WEBSITE LINKED TO IT.
      </motion.p>

      {/* --- ARTICLE 16 --- */}
      <motion.h2 variants={itemVariant}>Article 16 – Limitation on Liability</motion.h2>
      <motion.p variants={itemVariant}>
        <strong>16.1</strong> EXCEPT WHERE SUCH EXCLUSIONS ARE PROHIBITED BY LAW, UNDER NO
        CIRCUMSTANCE WILL THE COMPANY NOR ITS RESPECTIVE DIRECTORS, OFFICERS,
        EMPLOYEES, AGENTS, SERVICE PROVIDERS, CONTRACTORS, LICENSORS, LICENSEES, OR
        SUCCESSORS BE LIABLE FOR NEGLIGENCE, GROSS NEGLIGENCE, NEGLIGENT
        MISREPRESENTATION, FUNDAMENTAL BREACH, DAMAGES OF ANY KIND, UNDER ANY
        LEGAL THEORY, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL,
        CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING, BUT NOT LIMITED TO, PERSONAL
        INJURY, PAIN AND SUFFERING, EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF
        PROFITS, LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF
        GOODWILL, LOSS OF DATA, AND WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE),
        BREACH OF CONTRACT, BREACH OF PRIVACY, OR OTHERWISE, EVEN IF THE PARTY WAS
        ALLEGEDLY ADVISED OR HAD REASON TO KNOW, ARISING OUT OF OR IN CONNECTION
        WITH YOUR USE, OR INABILITY TO USE, OR RELIANCE ON, THE WEBSITE, ANY LINKED
        WEBSITES OR SUCH OTHER THIRD-PARTY WEBSITES, NOR ANY WEBSITE CONTENT,
        PRODUCTS, MATERIALS, OR INFORMATION THEREON EVEN IF THE PARTY WAS
        ALLEGEDLY ADVISED OR HAD REASON TO KNOW.
      </motion.p>

      {/* --- ARTICLE 17 --- */}
      <motion.h2 variants={itemVariant}>Article 17 – Indemnification</motion.h2>
      <motion.p variants={itemVariant}>
        <strong>17.1</strong> To the maximum extent permitted by applicable law, you agree to defend, indemnify,
        and hold harmless the Company, its respective directors, officers, employees, agents, service
        providers, contractors, licensors, successors, and assigns from and against any claims,
        liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including
        reasonable attorneys’ fees) arising out of or relating to your breach of these Terms and
        Conditions or your use of the Website, including, but not limited to, any Transaction, links to
        third-party sites, any use of the Website content, services, and Services.
      </motion.p>

      {/* --- ARTICLE 18 --- */}
      <motion.h2 variants={itemVariant}>Article 18 – Governing Law and Choice of Forum</motion.h2>
      <motion.p variants={itemVariant}>
        <strong>18.1</strong> The Website and these Terms and Conditions will be governed by and construed in
        accordance with the laws of the Freezone of the United Arab Emirates, without giving effect
        to any choice or conflict of law provision, principle, or rule of any other jurisdiction and
        notwithstanding your domicile, residence, or physical location.
      </motion.p>
      <motion.p variants={itemVariant}>
        <strong>18.2</strong> Any action or proceeding arising out of or relating to the Website and under these
        Terms and Conditions will be instituted in the courts of the United Arab Emirates, and each
        party irrevocably submits to the exclusive jurisdiction of such courts in any such action or
        proceeding. You waive any and all objections to the exercise of jurisdiction over you by such
        courts and to the venue of such courts.
      </motion.p>

      {/* --- ARTICLE 19 --- */}
      <motion.h2 variants={itemVariant}>Article 19 – Waiver</motion.h2>
      <motion.p variants={itemVariant}>
        <strong>19.1</strong> Except as otherwise set forth in this Terms and Conditions, no failure to exercise, or
        delay in exercising, any right, remedy, power, or privilege arising from these Terms and
        Conditions operates, or may be construed, as a waiver thereof; and no single or partial
        exercise of any right, remedy, power, or privilege hereunder precludes any other or further
        exercise thereof or the exercise of any other right, remedy, power, or privilege.
      </motion.p>

      {/* --- ARTICLE 20 --- */}
      <motion.h2 variants={itemVariant}>Article 20 – Severability</motion.h2>
      <motion.p variants={itemVariant}>
        <strong>20.1</strong> If any term or provision of these Terms and Conditions is invalid, illegal, or
        unenforceable in any jurisdiction, such invalidity, illegality, or unenforceability shall not
        affect any other term or provision of these Terms and Conditions or invalidate or render
        unenforceable such term or provision in any other jurisdiction.
      </motion.p>

      {/* --- ARTICLE 21 --- */}
      <motion.h2 variants={itemVariant}>Article 21 – Entire Agreement</motion.h2>
      <motion.p variants={itemVariant}>
        <strong>21.1</strong> The Terms and Conditions and our Privacy Policy constitute the sole and entire
        agreement between you and Company regarding the Website and supersedes all prior and
        contemporaneous understandings, agreements, representations and warranties, both
        written and oral, regarding such subject matter.
      </motion.p>

      {/* --- ARTICLE 22 --- */}
      <motion.h2 variants={itemVariant}>Article 22 – Interpretation</motion.h2>
      <motion.p variants={itemVariant}>
        <strong>22.2</strong> Wherever the singular is used in this Terms and Conditions it is deemed to include the
        plural or the body politic or corporate where the context or the parties so require. A
        reference in this Terms and Conditions to a numbered or lettered section, paragraph or
        clause refers to the section, paragraph or clause bearing that number or letter in this Terms
        and Conditions, unless otherwise stated.
      </motion.p>

      {/* --- ARTICLE 23 --- */}
      <motion.h2 variants={itemVariant}>Article 23 – Reporting and Contact</motion.h2>
      <motion.p variants={itemVariant}>
        This website is operated by Digital Era. Should you become aware of misuse of the website
        including libelous or defamatory conduct, you must report it to the Company at <a href={`mailto:${companyEmail}`} className={styles.inlineLink}>{companyEmail}</a>.
        All other feedback, comments, requests for technical support, and
        other communications relating to the Website should be directed to <a href={`mailto:${companyEmail}`} className={styles.inlineLink}>{companyEmail}</a>.
      </motion.p>

      {/* --- ARTICLE 24 --- */}
      <motion.h2 variants={itemVariant}>Article 24 – Service Offerings</motion.h2>
      <motion.p variants={itemVariant}>
        Digital Era provides business development solutions including access to curated
        subscription-based packages, 1-on-1 video consultations, and other customized digital
        services. The offerings are subject to change at the Company’s discretion and may require
        additional terms based on the service tier or engagement level. Users agree to review the
        service descriptions and relevant obligations prior to committing to a purchase.
      </motion.p>

      <div style={{marginTop: "4rem"}}>
        <FooterBanner />
      </div>
    </motion.section>
  );
};

export default TermsPage;