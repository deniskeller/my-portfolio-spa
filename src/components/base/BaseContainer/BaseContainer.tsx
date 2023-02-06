import React, { ReactNode } from 'react';
import styles from './BaseContainer.module.scss';

interface Props {
  children: ReactNode;
  contentCenter?: String;
}

const BaseContainer: React.FC<Props> = ({ children, contentCenter }) => {
  return (
    <div
      className={` ${styles.BaseContainer} ${
        contentCenter ? styles.ContentCenter : ''
      }`}
    >
      {children}
    </div>
  );
};

export default BaseContainer;
