"use client";

import React, { useState } from "react";
import styles from "../../styles/pages/Faq.module.scss";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";

const faqs = [
  {
    question: "What’s included in the $79.99 strategy session?",
    answer: "You’ll get a private 15-minute call with a Digital Era advisor who will go over your business idea, help you structure it, identify tax-saving strategies, and recommend the best subscription package based on your needs. It’s the perfect first step for anyone looking to build a freedom-based online business.",
  },
  {
    question: "Can you really help me pay zero or less tax — legally?",
    answer: "Yes — legally and transparently. We don’t promote shady loopholes or risky moves. Instead, we help you choose a tax-optimized jurisdiction (like the UAE or Estonia), structure your company properly, and work with vetted legal and tax professionals to make sure you’re compliant and efficient.",
  },
  {
    question: "How can you help me fly business/first class for free?",
    answer: "With our credit card strategy, we show you how to leverage region-specific cards to earn miles and points fast — based on your company structure and country. You’ll learn how to build a system that covers your flights and upgrades, especially as a business owner spending money anyway.",
  },
  {
    question: "What are AI employees? And how do they help me?",
    answer: "AI employees are automated systems or tools (like AI chatbots, writers, virtual assistants, task managers) that do repetitive tasks for you. We help you set up and train these AI tools to handle things like customer service, emails, lead generation, scheduling, and more — saving you time and money.",
  },
  {
    question: "Can I use Digital Era services if I don’t live in the U.S.?",
    answer: "Absolutely. We work with entrepreneurs and digital nomads worldwide. Whether you live in Europe, Asia, Africa, the Middle East, or the Americas — we’ll guide you on the best structure, payment solutions, and strategy based on your citizenship, residence, and goals.",
  },
  {
    question: "What if I don’t know what payment gateway to use?",
    answer: "No problem — we’ve got you covered. We help you choose the best, safest, and most reliable payment gateway based on your product or service, location, and risk level. Many people don’t realize that picking the wrong gateway can result in frozen funds or account bans, but we’ll help you avoid that completely.",
  },
  {
    question: "Will I get to speak with Shubeg Singh, the Founder?",
    answer: "Yes — if you're on the Full Package, you’ll get a monthly 1-on-1 call with Shubeg. If you’re on the Premium Package, you’ll receive weekly private sessions directly with him, including high-level strategy, mindset coaching, and direct support in scaling your business.",
  },
  {
    question: "Which package is best for me?",
    answer: "That’s exactly what the $39.99 consultation is for. We’ll go over your current situation, goals, and experience — then recommend the most suitable package for your level. There’s no pressure, just honest advice to help you make the best decision.",
  },
  {
    question: "Can you help me if I already have a business?",
    answer: "Absolutely. Whether you’re just starting or you’re already earning 6–7 figures, we can help you optimize, automate, and scale. From AI systems to tax restructuring and international expansion, we’ll tailor everything based on your current business.",
  },
  {
    question: "Can I start with the Beginner Plan and upgrade later?",
    answer: "Absolutely. Many of our clients start with the Beginner Plan to lay a solid foundation, then upgrade to the Full or Premium Package as their business grows. You can switch plans anytime — whether you’re ready to scale, automate with AI, start traveling, or need more direct support from our founder. Just let us know, and we’ll guide you through the upgrade process seamlessly.",
  }
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
