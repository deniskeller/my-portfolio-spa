import React from 'react';
import clsx from 'clsx';
import styles from './BaseIcon.module.scss';

import icons, { ALL_ICONS } from '@constants/icons';

interface Props {
  icon: keyof typeof ALL_ICONS;
  viewBox?: string;
  className?: string;
  fill?: string;
}

const BaseIcon: React.FC<Props> = ({
  icon,
  viewBox = '0 0 30 30',
  className,
  fill = 'none',
}) => (
  <svg
    className={clsx(`${!className ? styles.default : ''}`, className)}
    viewBox={viewBox}
    fill={fill}
  >
    {icons[icon]}
  </svg>
);

export default BaseIcon;
