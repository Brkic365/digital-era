// components/GradientIcon.js
import React from 'react';
import styles from '../styles/components/GradientIcon.module.scss'; // Use this SCSS file

const GradientIcon = ({ icon: IconComponent, size = '1em', className = '' }) => {
  const wrapperStyle = {
    width: size,
    height: size,
  };

  return (
    <div
      className={`${styles.gradientIconWrapper} ${className}`} // Uses the wrapper class
      style={wrapperStyle}
      aria-hidden="true"
    >
      {/* Icon gets its own class */}
      <IconComponent className={styles.iconSvg} />
    </div>
  );
};

export default GradientIcon;