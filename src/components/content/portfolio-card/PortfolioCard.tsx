import React from 'react';
import Image from 'next/image';
import styles from './PortfolioCard.module.scss';
import { useTranslation } from 'next-i18next';

interface Props {
  id: number;
  title: string;
  description: string;
  images: string[];
}

const PortfolioCard: React.FC<Props> = ({ id, title, description, images }) => {
  const {
    t,
    i18n: { language },
  } = useTranslation('portfolio');

  const handleClick = () => console.log('id :' + id);

  return (
    <div className={styles.PortfolioCard} onClick={handleClick}>
      <div className={styles.PortfolioCard__img}>
        <Image src={images[0]} layout={'fill'} alt={'Portfolio card'} />
      </div>

      <div className={styles.PortfolioCard__content}>
        <div className={styles.PortfolioCard__title}>
          {title}
          <span className={styles.PortfolioCard__menu}></span>
        </div>
        <div className={styles.PortfolioCard__descraption}>
          {description[language]}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
