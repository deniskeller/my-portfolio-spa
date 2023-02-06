import React, { useEffect } from 'react';

import { Navbar } from '@nav/index';
import { Main } from '@content/index';

import styles from './Default.module.scss';

const Default: React.FC = ({ children }) => {
  return (
    <div className={styles.content}>
      <Navbar />
      <Main>{children}</Main>
    </div>
  );
};

export default Default;
