"use client";

import React from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import { useState, useEffect } from "react";

import { usePathname } from "next/navigation";

import WhiteLogo from "../../assets/img/white-logo.png";
import Logo from "../../assets/img/logo.png";
import Button from "../Button/Button";

const Header = () => {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={
        scrolled
          ? `${styles.headerWrapper} ${styles.fixed}`
          : styles.headerWrapper
      }
    >
      <div className={`${styles.wrapper} wrapper`}>
        <div className={styles.logo}>
          {scrolled ? (
            <Image src={Logo} alt="SEO DIGIT" height="42" width="130" />
          ) : (
            <Image src={WhiteLogo} alt="SEO DIGIT" height="42" width="130" />
          )}
        </div>
        <div className={styles.menuWrapper}>
          <ul>
            <li className={`${pathname === "/" ? styles.active : ""}`}>
              <a href="/">Home</a>
            </li>
            <li className={`${pathname === "/about" ? styles.active : ""}`}>
              <a href="/about">About Us</a>
            </li>
            <li
              className={`${
                pathname === "/digital-marketing" ? styles.active : ""
              }`}
            >
              <a href="/digital-marketing">Digital Marketing</a>
            </li>
            <li
              className={`${
                pathname === "/website-design" ? styles.active : ""
              }`}
            >
              <a href="/website-design">Website Design</a>
            </li>
            <li
              className={`${
                pathname === "/web-development" ? styles.active : ""
              }`}
            >
              <a href="/web-development">Web Development</a>
            </li>
            <li className={`${pathname === "/blog" ? styles.active : ""}`}>
              <a href="/blog">Blog</a>
            </li>
          </ul>
        </div>
        <div className={styles.buttonWrapper}>
          <Button branding="primary" label="Call Us" link="/#" />
        </div>
      </div>
    </div>
  );
};

export default Header;
