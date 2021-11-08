import React from 'react';
import { useTranslation } from 'next-i18next';
import styles from './Portfolio.module.scss';

interface Props {}

const Portfolio: React.FC<Props> = () => {
  const { t } = useTranslation('portfolio');

  return <div className={styles.green}>Portfolio page</div>;
};

export default Portfolio;
