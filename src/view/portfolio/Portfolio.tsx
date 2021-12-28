// @ts-nocheck
import React from 'react';
import styles from './Portfolio.module.scss';
import { BaseContainer } from '@base/index';
import { PortfolioCard, PortfolioCardModal } from '@content/index';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/reducers/rootReducer';
import { fetchProjects } from 'store/projects/actions';

interface Props {}

const Portfolio: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const { projects, loading, error } = useSelector(
    (state: RootState) => state.project
  );

  React.useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  if (error) {
    return <h2 className={styles.Error}>{error}</h2>;
  }

  return (
    <BaseContainer>
      <div className={styles.Portfolio}>
        {loading ? (
          <h2 className={styles.Loading}>Загрузка...</h2>
        ) : (
          projects &&
          projects.map((project) => (
            <PortfolioCard key={project.id} {...project} />
          ))
        )}
      </div>
      <PortfolioCardModal className='portfolio_card_modal' />
    </BaseContainer>
  );
};

export default Portfolio;
