import React from 'react';
import { useTranslation } from 'next-i18next';
import styles from './Portfolio.module.scss';
import { BaseContainer } from '@base/index';
import { PortfolioCard } from '@content/index';
import { portfolioWorks } from '@constants/portfolio/portfolio';

interface Props {}

const Portfolio: React.FC<Props> = () => {
  const { t } = useTranslation('portfolio');
  console.log('portfolioWorks: ', portfolioWorks);

  return (
    <BaseContainer>
      <div className={styles.Portfolio}>
        {portfolioWorks.map((project) => (
          <PortfolioCard
            id={project.id}
            key={project.id}
            src={project.images[0]}
          />
        ))}
      </div>
    </BaseContainer>
  );
};

export default Portfolio;
