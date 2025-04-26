import React from 'react';
import styles from "../styles/components/Package.module.scss"; // Ensure path is correct
import GradientIcon from './GradientIcon'; // Assuming this component exists and works
import { BsCheckCircleFill, BsXCircleFill } from 'react-icons/bs';
import { LucideProps } from 'lucide-react'; // Import type for icon component

function Package({
  index,
  icon, // Icon is now a component
  title,
  price,
  about,
  listTitle,
  checks = [],
  minuses = [],
  isFeatured = false
}) {

  const formatPrice = (num) => {
    if (typeof num !== 'number') return null;
    // Basic formatting, consider Intl.NumberFormat for better localization
    const parts = num.toFixed(2).split('.');
    return `$${parts[0]}`; // Only show main dollar amount for simplicity here
  }

  const formattedPrice = formatPrice(price);

  return (
    // Add 'featured' class conditionally. Root element has .package class.
    <section className={`${styles.package} ${isFeatured ? styles.featured : ''}`}>
      {/* Conditionally render the badge */}
      {isFeatured && <div className={styles.featuredBadge}>Most Popular</div>}

      {/* The main content card */}
      <div className={styles.card}> {/* Changed outer section to div */}

        {/* Top section: Icon and Title */}
        <div className={styles.top}>
          {/* Pass the icon component to GradientIcon */}
          <GradientIcon icon={icon} size="2.5rem" />
          <h4>{title}</h4>
        </div>

        {/* Price Display */}
        {formattedPrice && (
          <div className={styles.priceSection}>
              <span className={styles.priceAmount}>{formattedPrice}</span>
              <span className={styles.priceFrequency}>/ month</span>
          </div>
        )}

        {/* About Text */}
        {about && <p className={styles.aboutText}>{about}</p>}

        {/* Separator - Render only if there are list items */}
        {(checks.length > 0 || minuses.length > 0) && (
            <hr className={styles.separator} />
        )}

        {/* Included Features (Checks) */}
        {checks.length > 0 && (
          <div className={styles.featureSection}>
            {listTitle && <h5 className={styles.listTitle}>{listTitle}</h5>}
            <ul className={`${styles.featureList} ${styles.checkList}`}>
              {checks.map((point, i) => (
                <li key={`check-${index}-${i}`}>
                  <BsCheckCircleFill className={styles.listIcon} aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Excluded Features (Minuses) */}
        {minuses.length > 0 && (
          <div className={styles.featureSection}>
             <h5 className={`${styles.listTitle} ${styles.minusTitle}`}>Not Included:</h5>
            <ul className={`${styles.featureList} ${styles.minusList}`}>
              {minuses.map((point, i) => (
                <li key={`minus-${index}-${i}`}>
                  <BsXCircleFill className={`${styles.listIcon} ${styles.minusIcon}`} aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

export default Package;