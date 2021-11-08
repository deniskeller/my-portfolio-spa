import React from 'react';
import { useTranslation } from 'next-i18next';
import styles from './About.module.scss';

interface Props {}

const About: React.FC<Props> = () => {
  const { t } = useTranslation('about');

  return <div className={styles.green}>About page</div>;
};

export default About;
