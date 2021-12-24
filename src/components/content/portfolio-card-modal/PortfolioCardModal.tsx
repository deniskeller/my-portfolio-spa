import React from 'react';
import styles from './PortfolioCardModal.module.scss';
import { BasePopup } from '@base/index';
import { useSelector } from 'react-redux';
import { RootState } from 'store/reducers/rootReducer';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

interface Props {
  className: string;
}

const PortfolioCardModal: React.FC<Props> = ({ className }) => {
  const [currentProject, setCurrentProject] = React.useState({});
  const { id } = useSelector((state: RootState) => state.modal);
  const { projects } = useSelector((state: RootState) => state.project);
  const setProject = projects.filter((project) => project.id == id);

  const work = projects[id - 1];

  const {
    t,
    i18n: { language },
  } = useTranslation('portfolio');

  React.useEffect(() => {
    setCurrentProject(setProject[0]);
  }, [id, projects]);

  console.log('currentProject: ', currentProject);
  console.log('work: ', work);

  const [page, setPage] = React.useState(1);

  const prevPage = () => {
    setPage(page - 1);
    // console.log('page: ', page);
  };

  const nextPage = () => {
    setPage(page + 1);
    // console.log('page: ', page);
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

          <ul className={styles.Slider}>
            <div className={styles.Slider__navbar}>
              <span
                className={` ${styles.Navbar_left} ${
                  prevDisable() ? styles.disable : ''
                }`}
                onClick={prevPage}
              >
                прев
              </span>
              <span
                className={` ${styles.Navbar_right} ${
                  nextDisable() ? styles.disable : ''
                }`}
                onClick={nextPage}
              >
                некс
              </span>
            </div>

            {slideComputed(page).map((item, index) => (
              <li className='' key={index}>
                <Image
                  width={200}
                  height={200}
                  src={item}
                  // layout={'fill'}
                  // alt={'Project image'}
                />
              </li>
            ))}
          </ul>

          <h3 className={styles.Subtitle}>{t('project.description')}</h3>

          <p className={styles.Description}>{work.description[language]}</p>

          <h3 className={styles.Subtitle}>{t('project.scope_of_work')}</h3>

          <div className=''>{work.scope_of_work[language]}</div>

          <h3 className={styles.Subtitle}>{t('project.tech')}</h3>

          <ul className=''>
            {work.technologies.map((item, index) => (
              <li className='' key={index}>
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
