import React from 'react';
import Image from 'next/image';
import { BaseContainer, BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import styles from './Home.module.scss';
import { useTranslation } from 'next-i18next';

interface Props {}

const Home: React.FC<Props> = () => {
  const { t } = useTranslation('home');

  return (
    <BaseContainer contentCenter="contentCenter">
      <div className={styles.Content}>
        <div className={styles.Photo} />

        <div className={styles.Userinfo}>
          <h1 className={styles.Name}>{t('name')}</h1>
          <p className={styles.Description}>{t('description')}</p>

          <div className={styles.Social}>
            <a
              rel="noopener noreferrer"
              target={'_blank'}
              href="https://www.instagram.com/keller.js/"
            >
              <BaseIcon
                icon={ALL_ICONS.INSTAGRAM}
                viewBox="0 0 30 30"
                className={styles.Social__icon}
              />
            </a>

            <a
              rel="noopener noreferrer"
              target={'_blank'}
              href="https://vk.com/id14286270"
            >
              <BaseIcon
                icon={ALL_ICONS.VK}
                viewBox="0 0 35 25"
                className={`${styles.Social__icon} ${styles.Social__icon__vk}`}
              />
            </a>

            <a
              rel="noopener noreferrer"
              target={'_blank'}
              href="https://github.com/deniskeller"
            >
              <BaseIcon
                icon={ALL_ICONS.GITHUB}
                viewBox="0 0 30 30"
                className={styles.Social__icon}
              />
            </a>

            <a
              rel="noopener noreferrer"
              target={'_blank'}
              href="https://www.linkedin.com/in/denis-keller-8248691b1/"
            >
              <BaseIcon
                icon={ALL_ICONS.LINKEDIN}
                viewBox="0 0 30 30"
                className={`${styles.Social__icon} ${styles.Social__icon__linkedin}`}
              />
            </a>
          </div>
        </div>
      </div>
    </BaseContainer>
  );
};

export default Home;
