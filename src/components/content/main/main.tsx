import React from 'react';
import styles from './Main.module.scss';

const Main: React.FC = ({ children }) => (
  <div className={styles.bg}>{children}</div>
);

export default Main;
