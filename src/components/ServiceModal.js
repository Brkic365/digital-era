import React from "react";
import styles from "../styles/components/ServiceModal.module.scss";
import GradientIcon from "./GradientIcon";
import { IoClose } from "react-icons/io5";

function ServiceModal({ title, icon, text, points = [], onClose }) {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <IoClose />
        </button>
        <div className={styles.header}>
          <GradientIcon icon={icon} size="3rem" />
          <h2>{title}</h2>
        </div>
        <p className={styles.description}>{text} Our services include:</p>
        <ul className={styles.points}>
          {points.map((item, index) => (
            <li key={index}>
              <strong>{item.title}</strong>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ServiceModal;
