import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>&copy; 2023 porteous89. All rights reserved.</div>
      <div className={styles.social}>
        <Image
          src="/1.png"
          width={30}
          height={30}
          className={styles.icon}
          alt="facebook logo"
        />
        <Image
          src="/2.png"
          width={30}
          height={30}
          className={styles.icon}
          alt="insta logo"
        />
        <Link href="https://www.twitter.com">
          <Image
            src="/3.png"
            width={30}
            height={30}
            className={styles.icon}
            alt="twitter logo"
          />
        </Link>
        <Image
          src="/4.png"
          width={30}
          height={30}
          className={styles.icon}
          alt="youtube logo"
        />
      </div>
    </div>
  );
};

export default Footer;
