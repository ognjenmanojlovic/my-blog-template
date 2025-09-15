import React from 'react';
import styles from './styles.module.css';

export default function HomepageAboutMe() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutBox}>
        <div className={styles.aboutImage}>
          <img src="./img/me.png" alt="Ognjen Manojlovic" />
        </div>
        <div className={styles.aboutText}>
          <h2>Über mich</h2>
          <p>
            Ich bin Ognjen, 21 Jahre alt, IT-Enthusiast mit Fokus auf <b>DevSecOps</b> und <b>Cloud</b>. 
            Diese Seite ist mein Portfolio – eine Kombination aus Wissen, Projekten und Praxis.
          </p>
          <p>
            Meine Laufbahn begann an der <b>HTL Anichstraße</b> in Innsbruck, 
            Zweig <b>Wirtschaftsingenieurwesen – Betriebsinformatik</b>, 
            die ich 2024 erfolgreich abgeschlossen habe.
          </p>
          <p>
            Danach habe ich als <b>IT-Systemadministrator</b> gearbeitet 
            und praktische Erfahrung im Bereich Netzwerke und IT-Security gesammelt.
          </p>
          <p>
            Seit 2025 absolviere ich die <b>Developer Academy </b> 
            mit Schwerpunkt <b>DevSecOps & IT-Security</b>, 
            um mein Wissen gezielt zu vertiefen und mich auf meine zukünftige Karriere vorzubereiten.
          </p>
        </div>
      </div>
    </section>
  );
}
