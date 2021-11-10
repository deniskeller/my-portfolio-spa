import React from 'react';
import clsx from 'clsx';
import styles from './BaseIcon.module.scss';

import icons, { ICONS_ENUM } from '@constants/icons';

interface Props {
  icon: keyof typeof ICONS_ENUM;
  viewBox?: string;
  className?: string;
}

const BaseIcon: React.FC<Props> = ({
  icon,
  viewBox = '0 0 30 30',
  className,
}) => (
  <svg
    className={clsx(`${!className ? styles.default : ''}`, className)}
    viewBox={viewBox}
  >
    {icons[icon]}
  </svg>
);

export default BaseIcon;
