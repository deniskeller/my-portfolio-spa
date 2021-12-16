import React from 'react';
import styles from './Portfolio.module.scss';
import { BaseContainer } from '@base/index';
import { PortfolioCard } from '@content/index';
import { portfolioWorks } from '@constants/portfolio/portfolio';

interface Props {}

const Portfolio: React.FC<Props> = () => {
  return (
    <BaseContainer>
      <div className={styles.Portfolio}>
        {portfolioWorks.map((project) => (
          <PortfolioCard key={project.id} {...project} />
        ))}
      </div>
    </BaseContainer>
  );
};

export default Portfolio;
