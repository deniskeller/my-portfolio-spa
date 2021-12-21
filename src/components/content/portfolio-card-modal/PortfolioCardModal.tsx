import React from 'react';
import styles from './PortfolioCardModal.module.scss';
import { BasePopup } from '@base/index';
import { useSelector } from 'react-redux';
import { RootState } from 'store/reducers/rootReducer';
import { useTranslation } from 'next-i18next';

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

  if (work) {
    return (
      <BasePopup className={className}>
        <>
          <div className={styles.PortfolioCardModal}>{work.title}</div>
          <div className=''>{work.description[language]}</div>
          <div className=''>{work.scope_of_work[language]}</div>
          <ul className=''>
            {work.technologies.map((item, index) => (
              <li className='' key={index}>
                {item}
              </li>
            ))}
          </ul>
          <ul className=''>
            {work.images.map((item, index) => (
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
