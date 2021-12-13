import React, { ReactNode } from 'react';
import styles from './BaseButton.module.scss';

interface Props {
  children: ReactNode;
  method?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
  style?: object;
  type?: string;
  disabled?: boolean;
}

const BaseButton: React.FC<Props> = ({
  children,
  method,
  style,
  type = 'primary',
  disabled = false,
}) => {
  return (
    <button
      disabled={disabled}
      style={{ ...style }}
      className={`${styles.Button} ${styles['Button_' + type]}`}
      onClick={method}
    >
      {children}
    </button>
  );
};

export default BaseButton;
