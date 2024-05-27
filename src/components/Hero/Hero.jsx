import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
{/*src={getImageUrl("hero/heroImage.png")}*/}
export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello, I'm Kalyani</h1>
        <p className={styles.description}>
          I am a curious , life long learner eager to apply my knowledge to real-time Projects.
          Seeking challenging position where i can make valuable contributions to the organization.
        </p>
        <a href="mailto:vadakapuramkalyani@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage2.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
