import React, { ReactNode } from 'react';
import styles from './PortfolioCardModal.module.scss';
import { BasePopup } from '@base/index';

interface Props {}

const PortfolioCardModal: React.FC<Props> = ({}) => {
  const [modal, setModal] = React.useState(false);
  // const menuOpen = () => {
  //   setModal(true);
  // };
  return (
    <BasePopup visible={modal} setVisible={setModal}>
      <div className={styles.PortfolioCardModal}>asdsf</div>
    </BasePopup>
  );
};

export default PortfolioCardModal;
