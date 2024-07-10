// src/components/Lightbox.js
import React from "react";
import styles from "./Lightbox.module.scss";

const Lightbox = ({ isOpen, src, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.lightboxOverlay} onClick={onClose}>
      <div
        className={styles.lightboxContent}
        onClick={(e) => e.stopPropagation()}
      >
        <img src={src} alt="lightbox" className={styles.lightboxImage} />
        <button className={styles.lightboxClose} onClick={onClose}>
          ×
        </button>
      </div>
    </div>
  );
};

export default Lightbox;
