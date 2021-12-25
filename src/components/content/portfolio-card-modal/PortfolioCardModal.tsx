import React from 'react';
import styles from './PortfolioCardModal.module.scss';
import { BaseIcon, BasePopup } from '@base/index';
import { useSelector } from 'react-redux';
import { RootState } from 'store/reducers/rootReducer';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { ALL_ICONS } from '@constants/icons';

interface Props {
  className: string;
}

const PortfolioCardModal: React.FC<Props> = ({ className }) => {
  const { id } = useSelector((state: RootState) => state.modal);
  const { projects } = useSelector((state: RootState) => state.project);

  const work = projects[id - 1];

  const {
    t,
    i18n: { language },
  } = useTranslation('portfolio');

  const [page, setPage] = React.useState(1);

  const prevPage = () => {
    setPage(page - 1);
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevDisable = () => {
    if (page <= 1) {
      return true;
    }
    return false;
  };

  const nextDisable = () => {
    if (work.images.length <= page) {
      return true;
    }
    return false;
  };

  const slideComputed = (pageNumber = 1) => {
    let startIndex = pageNumber - 1;
    let endIndex = pageNumber;

    let sliders = work.images.slice(startIndex, endIndex);
    return sliders;
  };

  if (work) {
    return (
      <BasePopup className={className}>
        <>
          <h1 className={styles.Title}>{work.title}</h1>

          <div className={styles.Slider__content}>
            <div className={styles.Slider__navbar}>
              <BaseIcon
                icon={ALL_ICONS.ARROW}
                className={` ${styles.Navbar_left} ${
                  prevDisable() ? styles.disable : ''
                }`}
                onClick={prevPage}
              />

              <BaseIcon
                icon={ALL_ICONS.ARROW}
                className={` ${styles.Navbar_right} ${
                  nextDisable() ? styles.disable : ''
                }`}
                onClick={nextPage}
              />
            </div>

            <ul className={styles.Slider}>
              {slideComputed(page).map((item, index) => (
                <li className='' key={index}>
                  <Image src={item} layout={'fill'} alt={'Project image'} />
                </li>
              ))}
            </ul>
          </div>

          <h3 className={styles.Subtitle}>{t('project.description')}</h3>

          <p className={styles.Description}>{work.description[language]}</p>

          <h3 className={styles.Subtitle}>{t('project.scope_of_work')}</h3>

          <div className={styles.Description}>
            {work.scope_of_work[language]}
          </div>

          <h3 className={styles.Subtitle}>{t('project.tech')}</h3>

          <ul className={styles.TechnologiesList}>
            {work.technologies.map((item, index) => (
              <li className={styles.TechnologiesItem} key={index}>
                {item}
              </li>
            ))}
          </ul>
        </>
      </BasePopup>
    );
  } else {
    return null;
  }
};

export default PortfolioCardModal;
