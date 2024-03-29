import React from 'react';
import { useTranslation } from 'next-i18next';
import styles from './About.module.scss';
import { BaseButton, BaseContainer } from '@base/index';
import { technologies } from '@constants/globals/technologies';

interface Props {}

const About: React.FC<Props> = () => {
  const { t } = useTranslation('about');

  return (
    <BaseContainer>
      <p className={styles.Description}>{t('description')}</p>
      <div className={styles.Skills}>
        <h2 className={styles.Skills__title}>{t('title')}</h2>
        <div className={styles.Skills__content}>
          <div className=''>
            <h3 className={styles.Skills__subtitle}>
              {t('subtitle_comfort')}:
            </h3>
            <ul className={styles.Skills__list}>
              {technologies.comfort.map((tech, index) => (
                <li key={index} className={styles.Skills__item}>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <div className=''>
            <h3 className={styles.Skills__subtitle}>
              {t('subtitle_experience')}:
            </h3>
            <ul className={styles.Skills__list}>
              {technologies.experience.map((tech, index) => (
                <li key={index} className={styles.Skills__item}>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <BaseButton>
        <a href='/resume/resume.pdf' download>
          {t('btn_title')}
        </a>
      </BaseButton>
    </BaseContainer>
  );
};

export default About;
