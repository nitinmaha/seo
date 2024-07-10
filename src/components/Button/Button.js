import Link from "next/link";
import React from "react";
import styles from "./Button.module.scss";

const Button = (props) => {
  return (
    <>
      {props?.link ? (
        <>
          <Link
            className={`${styles.base} ${styles[props?.branding]} ${
              props?.size
            }`}
            href={props.link}
            target={props?.target}
          >
            {props.label}
          </Link>
        </>
      ) : (
        <button
          className={`${styles.base} ${styles[props?.branding]} ${props?.size}`}
          type={props?.type}
          onClick={props?.onClick}
        >
          {props.label}
        </button>
      )}
    </>
  );
};

export default Button;
