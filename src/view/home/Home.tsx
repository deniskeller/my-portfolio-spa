import React from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { BaseContainer, BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import styles from './Home.module.scss';

interface Props {}

const Home: React.FC<Props> = () => {
  const { t } = useTranslation('home');

  return (
    <BaseContainer contentCenter='contentCenter'>
      <div className={styles.Content}>
        <img src='/images/others/myphoto.png' className={styles.Photo} />

        <div className=''>
          <h1 className={styles.Name}>{t('name')}</h1>
          <p className={styles.Description}>{t('description')}</p>

          <div className={styles.Social}>
            <BaseIcon
              icon={ALL_ICONS.INSTAGRAM}
              viewBox='0 0 60 60'
              className={styles.navbar__logo}
            />
            <BaseIcon
              icon={ALL_ICONS.VK}
              viewBox='0 0 60 60'
              className={styles.navbar__logo}
            />
            <BaseIcon
              icon={ALL_ICONS.GITHUB}
              viewBox='0 0 60 60'
              className={styles.navbar__logo}
            />
            <BaseIcon
              icon={ALL_ICONS.LINKEDIN}
              viewBox='0 0 60 60'
              className={styles.navbar__logo}
            />
          </div>
        </div>
      </div>
    </BaseContainer>
  );
};

export default Home;
