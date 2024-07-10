"use client";

import React, { useState } from "react";
import { RiTeamLine } from "react-icons/ri";
import { SiCustomink } from "react-icons/si";
import { FaUserFriends } from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import { TbSeo } from "react-icons/tb";
import { MdOutlineSupportAgent } from "react-icons/md";

//scss
import styles from "./WhyChoose.module.scss";

const WhyChoose = () => {
  return (
    <div className={styles.whyChoose}>
      <div className={`${styles.wrapper} wrapper`}>
        <h3>Why Choose Us?</h3>
        <p>
          We are one of the leading online marketing agencies committed to
          providing you with the best solutions for your business.
        </p>
        <div className={styles.whyChooseBottom}>
          <div className={`${styles.wrapper} wrapper`}>
            <div>
              <div className={styles.whyChooseListing}>
                <div className={styles.whyChooseItem}>
                  <div className={styles.icon}>
                    <RiTeamLine />
                  </div>
                  <div className={styles.details}>
                    <div className={styles.heading}>Experienced Team</div>
                    <div className={styles.subHeading}>
                      Our team of expert professionals is highly trained to
                      handle all complexities of digital marketing techniques
                      and provide you with the best services for your business.
                      Our professionals have years of work experience in all
                      sectors of the digital marketing ecosphere.
                    </div>
                  </div>
                </div>
                <div className={styles.whyChooseItem}>
                  <div className={styles.icon}>
                    <SiCustomink />
                  </div>
                  <div className={styles.details}>
                    <div className={styles.heading}>Custom design</div>
                    <div className={styles.subHeading}>
                      We are adamant to understand our clients requirements and
                      providing them customized with web development services to
                      suit both their business requirements and mood.
                    </div>
                  </div>
                </div>
                <div className={styles.whyChooseItem}>
                  <div className={styles.icon}>
                    <FaUserFriends />
                  </div>
                  <div className={styles.details}>
                    <div className={styles.heading}>User-friendly</div>
                    <div className={styles.subHeading}>
                      One component that describes the success of a website is
                      its user-friendliness. Our web developers are committed to
                      providing you with user-friendly attractive websites.
                      These websites are not only attractive but are super easy
                      to browse.
                    </div>
                  </div>
                </div>
                <div className={styles.whyChooseItem}>
                  <div className={styles.icon}>
                    <MdDevices />
                  </div>
                  <div className={styles.details}>
                    <div className={styles.heading}>Responsive design</div>
                    <div className={styles.subHeading}>
                      The website and mobile app solutions provided by us are
                      responsive and provide you with the best web experience
                      irrespective of whether you browse them on your PC,
                      tablet, or mobile phone.
                    </div>
                  </div>
                </div>
                <div className={styles.whyChooseItem}>
                  <div className={styles.icon}>
                    <TbSeo />
                  </div>
                  <div className={styles.details}>
                    <div className={styles.heading}>SEO-Friendly</div>
                    <div className={styles.subHeading}>
                      Our web solutions are tailor-made to complement the best
                      SEO processes, which makes them appear in the search
                      results easily and effortlessly.
                    </div>
                  </div>
                </div>
                <div className={styles.whyChooseItem}>
                  <div className={styles.icon}>
                    <MdOutlineSupportAgent />
                  </div>
                  <div className={styles.details}>
                    <div className={styles.heading}>Technical Support</div>
                    <div className={styles.subHeading}>
                      We offer technological support solutions to our clients
                      and continuously strive to make sure that their online
                      business witnesses continuous growth with our expert tech
                      support solutions.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
