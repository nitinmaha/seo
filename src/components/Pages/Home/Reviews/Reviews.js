import React from "react";
import styles from "./Reviews.module.scss";
import Carousel from "@/components/Carousal/Carousal";

const slides = [
  {
    content: (
      <>
        <div class="item text-center px-6">
          <div class="text-4xl text-center mb-4">
            <i class="fa-solid fa-quote-left"></i>
          </div>
          <div class="mb-6 text-lg text-black px-6">
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic life One day however a small line of
            blind text by the name of Lorem Ipsum decided to leave for the far
            World of Grammar. The Big Oxmox advised her.
          </div>
          <div class="text-md text-pink-500 font-semibold">
            Satyam Singh
            <span class="text-sm text-gray-800">- Branch Head</span>
          </div>
        </div>
      </>
    ),
    bgColor: "",
  },
  {
    content: (
      <>
        <div class="item text-center px-6">
          <div class="text-4xl text-center mb-4">
            <i class="fa-solid fa-quote-left"></i>
          </div>
          <div class="mb-6 text-lg text-black px-6">
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic life One day however a small line of
            blind text by the name of Lorem Ipsum decided to leave for the far
            World of Grammar. The Big Oxmox advised her.
          </div>
          <div class="text-md text-pink-500 font-semibold">
            Satyam Singh
            <span class="text-sm text-gray-800">- Branch Head</span>
          </div>
        </div>
      </>
    ),
    bgColor: "",
  },
  {
    content: (
      <>
        <div class="item text-center px-6">
          <div class="text-4xl text-center mb-4">
            <i class="fa-solid fa-quote-left"></i>
          </div>
          <div class="mb-6 text-lg text-black px-6">
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic life One day however a small line of
            blind text by the name of Lorem Ipsum decided to leave for the far
            World of Grammar. The Big Oxmox advised her.
          </div>
          <div class="text-md text-pink-500 font-semibold">
            Satyam Singh
            <span class="text-sm text-gray-800">- Branch Head</span>
          </div>
        </div>
      </>
    ),
    bgColor: "",
  },
];

const Reviews = () => {
  return (
    <div className={styles.reviewWrapper}>
      <div className={`${styles.wrapper} wrapper`}>
        <h3>Client Reviews</h3>
        <div className={styles.subHeading}></div>

        <div className={`${styles.blogListing} flex gap-8 mt-12`}>
          <Carousel slides={slides} />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
