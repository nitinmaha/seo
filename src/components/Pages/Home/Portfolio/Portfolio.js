import React from "react";
import { FaBriefcaseMedical } from "react-icons/fa";
import { PiHandHeartBold } from "react-icons/pi";
import { FaHome } from "react-icons/fa";
import { MdOutlineFitnessCenter } from "react-icons/md";
import { PiBankBold } from "react-icons/pi";
import { FaCar } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdAgriculture } from "react-icons/md";

import styles from "./Portfolio.module.scss";

const Portfolio = () => {
  return (
    <>
      <div className={styles.portfolioTop}>
        <div className={`${styles.wrapper} wrapper`}>
          <h3>Industry Portfolio</h3>
          <p>
            We are backed by modern technological interventions and a highly
            skilled workforce. We cater our services to different industry
            verticals.
          </p>
        </div>
      </div>
      <div className={styles.portfolioBottom}>
        <div className={`${styles.wrapper} wrapper`}>
          <div>
            <div className={styles.portListing}>
              <div className={styles.portItem}>
                <div className={styles.icon}>
                  <FaBriefcaseMedical />
                </div>
                <div className={styles.details}>
                  <div className={styles.heading}>Medical</div>
                  <div className={styles.subHeading}>
                    If you are a real estate company, we can help you boost your
                    business online with our customized and responsive web
                    solutions.
                  </div>
                </div>
              </div>
              <div className={styles.portItem}>
                <div className={styles.icon}>
                  <PiHandHeartBold />
                </div>
                <div className={styles.details}>
                  <div className={styles.heading}>Hospitality</div>
                  <div className={styles.subHeading}>
                    If you are a real estate company, we can help you boost your
                    business online with our customized and responsive web
                    solutions.
                  </div>
                </div>
              </div>
              <div className={styles.portItem}>
                <div className={styles.icon}>
                  <FaHome />
                </div>
                <div className={styles.details}>
                  <div className={styles.heading}>Real State</div>
                  <div className={styles.subHeading}>
                    If you are a real estate company, we can help you boost your
                    business online with our customized and responsive web
                    solutions.
                  </div>
                </div>
              </div>
              <div className={styles.portItem}>
                <div className={styles.icon}>
                  <MdOutlineFitnessCenter />
                </div>
                <div className={styles.details}>
                  <div className={styles.heading}>Fitness</div>
                  <div className={styles.subHeading}>
                    If you are a real estate company, we can help you boost your
                    business online with our customized and responsive web
                    solutions.
                  </div>
                </div>
              </div>
              <div className={styles.portItem}>
                <div className={styles.icon}>
                  <PiBankBold />
                </div>
                <div className={styles.details}>
                  <div className={styles.heading}>Banking</div>
                  <div className={styles.subHeading}>
                    If you are a real estate company, we can help you boost your
                    business online with our customized and responsive web
                    solutions.
                  </div>
                </div>
              </div>
              <div className={styles.portItem}>
                <div className={styles.icon}>
                  <FaCar />
                </div>
                <div className={styles.details}>
                  <div className={styles.heading}>Automobile</div>
                  <div className={styles.subHeading}>
                    If you are a real estate company, we can help you boost your
                    business online with our customized and responsive web
                    solutions.
                  </div>
                </div>
              </div>
              <div className={styles.portItem}>
                <div className={styles.icon}>
                  <FaShoppingCart />
                </div>
                <div className={styles.details}>
                  <div className={styles.heading}>E-commerce</div>
                  <div className={styles.subHeading}>
                    If you are a real estate company, we can help you boost your
                    business online with our customized and responsive web
                    solutions.
                  </div>
                </div>
              </div>
              <div className={styles.portItem}>
                <div className={styles.icon}>
                  <MdAgriculture />
                </div>
                <div className={styles.details}>
                  <div className={styles.heading}>
                    Agriculture and allied industries
                  </div>
                  <div className={styles.subHeading}>
                    If you are a real estate company, we can help you boost your
                    business online with our customized and responsive web
                    solutions.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
