import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Education</h3>
             {/*  <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>*/}
              <h4>B-Tech : Mallareddy Engineering College for Women - CGPA - 9.11</h4>
              <h4>Intermediate : SR Junior College - Percentage - 99%</h4>
              <h4>Secondary School of Education : Nalanda High School - CGPA - 10</h4>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Achievements</h3>
              <h4> Winner-Trial Blazer Competition</h4>
              <h4>Runner Up-Young Engineer Competition </h4> 
              <h4>Winner-BhagavathGeeta Competition</h4>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Positions of Responsibility</h3>
              <h4>Active NSS Member with high Moral Values</h4>
              <h4>Lead Team Leader position in cambridge certification Teams of our college , Group Discussion Teams , Project Teams</h4>
              <h4>Active coordinator in Various College Events</h4>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
