import React from 'react';
// import { Icon } from '@element/icon';
// import { ICONS_ENUM } from '@constant/icons';
import { useTranslation } from 'next-i18next';
import styles from './Home.module.scss';

interface Props {}

const Home: React.FC<Props> = () => {
  const { t } = useTranslation('home');

  return (
    <div className={styles.green}>
      <div className=''>
        <div className='' />

        <div className=''>
          <h1 className=''>{t('name')}</h1>
          <p className=''>{t('description')}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
