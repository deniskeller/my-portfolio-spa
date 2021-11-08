import React from 'react';
import { useTranslation } from 'next-i18next';
import styles from './Contacts.module.scss';

interface Props {}

const Contacts: React.FC<Props> = () => {
  const { t } = useTranslation('contacts');

  return <div className={styles.green}>Contacts page</div>;
};

export default Contacts;
