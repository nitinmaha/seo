"use client";

import React, { useState } from "react";
import Lightbox from "@/components/LightBox/LightBox";

//scss
import styles from "./OurService.module.scss";

const OurService = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const images = [
    "https://seodigit.in/demo/images/service-1.jpg",
    "https://seodigit.in/demo/images/service-2.jpg",
    "https://seodigit.in/demo/images/service-3.jpg",
  ];

  const openLightbox = (src) => {
    setCurrentImage(src);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage("");
  };
  return (
    <div className={styles.ourService}>
      <div className={`${styles.wrapper} wrapper`}>
        <h3>Our Services</h3>
        <p className="mb-5">Take a sneak peek into our range of expert digital solutions</p>
        <div className={styles.imageGallery}>
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Gallery Image ${index + 1}`}
              className={styles.galleryImage}
              onClick={() => openLightbox(src)}
            />
          ))}
        </div>
        <Lightbox
          isOpen={lightboxOpen}
          src={currentImage}
          onClose={closeLightbox}
        />
      </div>
    </div>
  );
};

export default OurService;
