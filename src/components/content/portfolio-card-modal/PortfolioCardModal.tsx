import React, { ReactNode } from 'react';
import styles from './PortfolioCardModal.module.scss';
import { BasePopup } from '@base/index';

interface Props {
  className: string;
}

const PortfolioCardModal: React.FC<Props> = ({ className }) => {
  return (
    <BasePopup className={className}>
      <div className={styles.PortfolioCardModal}>asdsf</div>
    </BasePopup>
  );
};

export default PortfolioCardModal;
