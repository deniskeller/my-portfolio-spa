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
        <div className={styles.Photo} />

        <div className={styles.Userinfo}>
          <h1 className={styles.Name}>{t('name')}</h1>
          <p className={styles.Description}>{t('description')}</p>

          <div className={styles.Social}>
            <BaseIcon
              icon={ALL_ICONS.INSTAGRAM}
              viewBox='0 0 30 30'
              className={styles.Social__icon}
            />
            <BaseIcon
              icon={ALL_ICONS.VK}
              viewBox='0 -5 35 30'
              className={`${styles.Social__icon} ${styles.Social__icon__vk}`}
            />
            <BaseIcon
              icon={ALL_ICONS.GITHUB}
              viewBox='0 0 30 30'
              className={styles.Social__icon}
            />
            <BaseIcon
              icon={ALL_ICONS.LINKEDIN}
              viewBox='0 0 30 30'
              className={styles.Social__icon}
            />
          </div>
        </div>
      </div>
    </BaseContainer>
  );
};

export default Home;
