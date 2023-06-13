import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button"

export const metadata = {
  title: "About Alister",
  description: "About page by porteous89",
};

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/757292/pexels-photo-757292.jpeg"
          fill={true}
          alt="magic mushroom"
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Psychedelic Healing</h1>
          <h2 className={styles.imgDesc}>
            By your side throughout your Journey
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are we?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What do we do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. 
            <br />
            <br /> - A suscipit eos. 
            <br /> 
            <br /> - Animi quibusdam cum omnis officiis voluptatum quo eaeveniet? 
            <br />
            <br /> - Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <Button url="contact" text="Contact Us" />
        </div>
      </div>
    </div>
  );
};

export default About;
