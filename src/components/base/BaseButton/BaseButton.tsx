import React, { ReactNode } from 'react';
import styles from './BaseButton.module.scss';

interface Props {
  children: ReactNode;
  onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
  style?: object;
  type?: string;
  disabled?: boolean;
  className?: string;
}

const BaseButton: React.FC<Props> = ({
  children,
  onClick,
  style,
  type = 'primary',
  disabled = false,
  className,
}) => {
  return (
    <button
      disabled={disabled}
      style={{ ...style }}
      className={`${styles.Button} ${styles['Button_' + type]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default BaseButton;
