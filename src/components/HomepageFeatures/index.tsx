import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { JSX } from 'react';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Mein Ziel',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Nach der Developer Academy möchte ich in Zürich als <b>DevSecOps Engineer</b> starten 
        und mein Wissen in Cloud & Security einsetzen.
      </>
    ),
  },
  {
    title: 'Meine Projekte',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Hier findest du bald alle meine Projekte – dokumentiert in einer strukturierten Übersicht.
        Jedes Projekt zeigt, was ich gelernt und umgesetzt habe.
      </>
    ),
  },
  {
    title: 'Mein Blog',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Im Blog teile ich aktuelle Updates, persönliche Erfahrungen und meine Fortschritte.
        So kannst du meinen Weg Schritt für Schritt mitverfolgen.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className={styles.featuresBox}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
