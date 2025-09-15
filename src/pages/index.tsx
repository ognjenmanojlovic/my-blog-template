import React, { JSX } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';
import HomepageAboutMe from '@site/src/components/HomepageAboutMe';


export default function Home(): JSX.Element {
  return (
    <Layout
      title="Ognjen Manojlovic | IT & DevSecOps Portfolio"
      description="Meine Projekte, mein Wissen, mein Fortschritt"
    >
      {/* Hero Section */}
      <header className={styles.heroBanner}>
        <div className="container">
          <h1 className="hero__title">Ognjen Manojlovic</h1>
          <p className="hero__subtitle">
            Meine Projekte, mein Wissen, mein Fortschritt
          </p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/docs/projects/overview">
              🚀 Zu meinen Projekten
            </Link>
            <Link className="button button--secondary button--lg" to="/blog">
              📝 Blog lesen
            </Link>
          </div>
        </div>
      </header>

      <main>
        <HomepageAboutMe />
        {/* Features Sektion */}
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

