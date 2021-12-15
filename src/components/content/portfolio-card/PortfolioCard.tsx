import React from 'react';
import Image from 'next/image';
import styles from './PortfolioCard.module.scss';

interface Props {
  src: string;
  id: number;
}

const PortfolioCard: React.FC<Props> = ({ id, src }) => {
  console.log('src: ', src);
  const handleClick = () => console.log('id :' + id);

  return (
    <div className={styles.PortfolioCard} onClick={handleClick}>
      <Image src={src} width={300} height={250} alt={'Portfolio card'} />
    </div>
  );
};

export default PortfolioCard;
