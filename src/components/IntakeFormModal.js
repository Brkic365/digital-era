// src/components/IntakeFormModal.js
"use client";
import React, { useState, useEffect } from 'react';
import styles from '../styles/components/IntakeFormModal.module.scss';
import { IoClose } from "react-icons/io5";

const initialFormData = {
  fullName: '',
  email: '',
  businessStage: '',
  businessStageOther: '',
  lookingFor: '',
  whyAgency: '',
  packageKnowledge: '',
};

const IntakeFormModal = ({ isOpen, onClose, selectedPackageTitle }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(''); // 'success', 'error', ''

  // Effect to reset form when modal becomes visible *if* not already showing success
  useEffect(() => {
    if (isOpen) {
      if (submissionStatus !== 'success') { // Don't reset if success message is up
        setFormData(initialFormData);
        setErrors({});
      }
    } else {
      // If modal is being closed and was showing success, then reset for next time.
      // Also reset if it was closed with an error.
      if (submissionStatus === 'success' || submissionStatus === 'error') {
        setFormData(initialFormData);
        setErrors({});
      }
      setSubmissionStatus(''); // Always clear submission status when modal is fully closed.
    }
  }, [isOpen]); // Rerun when isOpen changes

  const handleActualClose = () => {
      onClose(); // This will trigger the useEffect above to reset states if needed
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid.';
    }
    if (!formData.businessStage) newErrors.businessStage = 'Please select your business stage.';
    if (formData.businessStage === 'Other' && !formData.businessStageOther.trim()) {
      newErrors.businessStageOther = 'Please specify your business stage.';
    }
    if (!formData.lookingFor.trim()) newErrors.lookingFor = 'This field is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmissionStatus('');

    try {
      const response = await fetch('/api/send_intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, selectedPackage: selectedPackageTitle || "General Inquiry / Strategy Session" }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Failed to send intake form.');
      setSubmissionStatus('success');
      // Do not reset formData here, let the success message display.
      // Reset will occur when 'Close' on success message is clicked (via handleActualClose -> onClose -> useEffect)
      // or if modal is closed via overlay before success message is dismissed.
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={handleActualClose}> {/* Click overlay to close & reset */}
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={handleActualClose} aria-label="Close form"> {/* Button to close & reset */}
          <IoClose />
        </button>

        {submissionStatus === 'success' ? (
          <div className={styles.confirmationMessage}>
            <h3><span role="img" aria-label="check mark">✅</span> Success!</h3>
            <p>We’ll review your responses and recommend the best-fit package for you or Strategy Session depending where you are. {"We’ll"} follow up within 24 hours with a direct payment link to get started.</p>
            <button onClick={handleActualClose} className={styles.confirmButton}>Close</button> {/* Button to close & reset */}
          </div>
        ) : (
          <>
            <div className={styles.modalHeader}>
              <h2><span role="img" aria-label="writing hand">📝</span>Intake Form</h2>
              <p>Thanks for your interest in working with us! Please take 2 minutes to fill this out.</p>
              {/* Display context title if provided and meaningful */}
              {selectedPackageTitle && (
                <p className={styles.selectedPackageInfo}>
                  Inquiry regarding: <strong>{selectedPackageTitle}</strong>
                </p>
              )}
            </div>

            <form onSubmit={handleSubmit} className={styles.form} noValidate>
              {/* Full Name */}
              <div className={styles.formGroup}>
                <label htmlFor="fullName">Full Name:</label>
                <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Your full name" required />
                {errors.fullName && <span className={styles.errorText}>{errors.fullName}</span>}
              </div>

              {/* Email Address */}
              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="your.email@example.com" required />
                {errors.email && <span className={styles.errorText}>{errors.email}</span>}
              </div>

              {/* Business Stage */}
              <div className={styles.formGroup}>
                <label htmlFor="businessStage">What stage are you currently at in your business journey?</label>
                <select id="businessStage" name="businessStage" value={formData.businessStage} onChange={handleChange} required>
                  <option value="">-- Select Stage --</option>
                  <option value="Getting Started">{"I’m"} just getting started and need help with ideas and direction</option>
                  <option value="Idea Development">I have a business idea and need help developing it</option>
                  <option value="Grow/Scale">I already have a business and want to grow/scale it</option>
                  <option value="Other">Other</option>
                </select>
                {errors.businessStage && <span className={styles.errorText}>{errors.businessStage}</span>}
              </div>

              {formData.businessStage === 'Other' && (
                <div className={styles.formGroup}>
                  <label htmlFor="businessStageOther">Please specify "Other":</label>
                  <input type="text" id="businessStageOther" name="businessStageOther" value={formData.businessStageOther} onChange={handleChange} placeholder="Your current stage" />
                  {errors.businessStageOther && <span className={styles.errorText}>{errors.businessStageOther}</span>}
                </div>
              )}

              {/* Looking For / Struggling With */}
              <div className={styles.formGroup}>
                <label htmlFor="lookingFor">Tell us briefly what {"you’re"} looking for or struggling with:</label>
                <textarea id="lookingFor" name="lookingFor" value={formData.lookingFor} onChange={handleChange} rows="4" placeholder='(Example: "Need help launching an offer," "Not sure how to get more clients," etc.)' required />
                {errors.lookingFor && <span className={styles.errorText}>{errors.lookingFor}</span>}
              </div>

              {/* Why Agency (Optional) */}
              <div className={styles.formGroup}>
                <label htmlFor="whyAgency">Why do you feel we are the right agency to help you? (Optional)</label>
                <textarea id="whyAgency" name="whyAgency" value={formData.whyAgency} onChange={handleChange} rows="3" placeholder="(Optional but helpful)" />
              </div>

              {/* Package Knowledge */}
              <div className={styles.formGroup}>
                <label>Have you looked at our packages already?</label>
                <div className={styles.radioGroup}>
                  <label><input type="radio" name="packageKnowledge" value="Yes, know which one" checked={formData.packageKnowledge === "Yes, know which one"} onChange={handleChange} /> Yes, I already know which one I want</label>
                  <label><input type="radio" name="packageKnowledge" value="Unsure, need help" checked={formData.packageKnowledge === "Unsure, need help"} onChange={handleChange} /> {"I’m unsure – I’d"} like help picking the right one</label>
                  <label><input type="radio" name="packageKnowledge" value="Need custom" checked={formData.packageKnowledge === "Need custom"} onChange={handleChange} /> I need something custom</label>
                </div>
              </div>
              
              <div className={styles.formFooter}>
                  <p>✅ Once you submit this form, {"we’ll"} review your responses{selectedPackageTitle !== "Strategy Session Inquiry" && " and recommend the best-fit package for you."} {"We’ll"} follow up within 24 hours with a direct payment link to get started.</p>
              </div>

              <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Intake Form'}
              </button>
              {submissionStatus === 'error' && <p className={styles.errorText} style={{textAlign: 'center', marginTop: '1rem'}}>Failed to submit. Please try again.</p>}
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default IntakeFormModal;