import React from 'react';
import { useTranslation } from 'next-i18next';
import styles from './Resume.module.scss';

interface Props {}

const Resume: React.FC<Props> = () => {
  const { t } = useTranslation('resume');

  return <div className={styles.green}>Resume page</div>;
};

export default Resume;
