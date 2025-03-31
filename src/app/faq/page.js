"use client";

import React, { useState } from "react";
import styles from "../../styles/pages/Faq.module.scss";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";

const faqs = [
  {
    question: "How do your global partnerships benefit my business?",
    answer: "By partnering with the best developers, legal experts, accountants, and marketing agencies worldwide, we ensure that you receive the highest level of expertise in every aspect of your business.",
  },
  {
    question: "Can you help me create a website for my business?",
    answer: "Absolutely! We partner with top developers to create custom, mobile-responsive websites designed to help you engage customers and convert visitors into clients.",
  },
  {
    question: "Will you assist me with legal matters?",
    answer: "Yes! We work with experienced legal professionals who will help with business formation, contracts, compliance, and more.",
  },
  {
    question: "How much do your services cost?",
    answer: "Our pricing is tailored to your specific needs. Contact us for a personalized quote, and we’ll create a plan that fits your budget and business goals.",
  },
];

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faq}>
      <img className={styles.graphic} src="/images/contact_graphic.png" />
      <div className={styles.header}>
        <h1>Frequently Asked Questions</h1>
        <p>Still wondering how we work? We've got you covered.</p>
      </div>

      <div className={styles.list}>
        {faqs.map((item, index) => (
          <div
            className={`${styles.card} ${openIndex === index ? styles.open : ""}`}
            key={index}
            onClick={() => toggle(index)}
          >
            <div className={styles.question}>
              <h3>{item.question}</h3>
              {openIndex === index ? (
                <HiOutlineChevronUp />
              ) : (
                <HiOutlineChevronDown />
              )}
            </div>
            {openIndex === index && (
              <div className={styles.answer}>
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqPage;
