"use client";

import React from "react";
import styles from "../../styles/pages/Contact.module.scss";
import { HiOutlineMail, HiOutlinePhone, HiOutlineChatAlt2 } from "react-icons/hi";
import { FaXTwitter } from "react-icons/fa6";

const ContactPage = () => {
  return (
    <section className={styles.contact}>
      <img className={styles.graphic} src="/images/contact_graphic.png" />
      <div className={styles.header}>
        <h1>Contact Our Team</h1>
        <p>Got any questions about our services? {"We’re"} here to help!</p>
      </div>

      <div className={styles.grid}>
        <form className={styles.form}>
          <div className={styles.row}>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <input type="email" placeholder="you@company.com" />
          <input type="tel" placeholder="(555) 000-0000" />

          <textarea placeholder="Leave us a message…" rows={6} />

          <div className={styles.services}>
            <label><input type="checkbox" /> Business Consulting</label>
            <label><input type="checkbox" /> Web Development</label>
            <label><input type="checkbox" /> Content Creation</label>
            <label><input type="checkbox" /> Design</label>
            <label><input type="checkbox" /> User Research</label>
            <label><input type="checkbox" /> Other</label>
          </div>

          <button type="submit">Send Message</button>
        </form>

        <div className={styles.sidebar}>
          <div>
            <h4>Chat with Us</h4>
            <p>Speak to our friendly team via chat.</p>
            <ul>
              <li><HiOutlineMail /> <a href="mailto:hello@example.com">Shoot us an email</a></li>
              <li><FaXTwitter /> <a href="#">Message us on X</a></li>
            </ul>
          </div>

          <div>
            <h4>Call Us</h4>
            <p>Call our team {"Mon–Fri"} from 8am to 9pm.</p>
            <p><HiOutlinePhone /> <a href="tel:+15550000000">+1 (555) {"000–0000"}</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
