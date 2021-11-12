import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Trans, useTranslation } from 'next-i18next';

import styles from './Navbar.module.scss';
import BaseIcon from '@base/BaseIcon/BaseIcon';
import { ALL_ICONS } from '@constants/icons';
import { useSelector } from 'react-redux';
import { RootState } from 'store/reducers/rootReducer';

interface Props {
  className?: string;
}

const Navbar: React.FC<Props> = ({ className }) => {
  const router = useRouter();
  const { t } = useTranslation('common');

  const links = [
    {
      href: '/',
      title: 'home',
    },
    {
      href: '/about',
      title: 'about',
    },
    {
      href: '/resume',
      title: 'resume',
    },
    {
      href: '/portfolio',
      title: 'portfolio',
    },
    {
      href: '/contacts',
      title: 'contacts',
    },
  ];

  return (
    <div className={styles.navbar}>
      {/* <div className={styles.navbar__desktop}> */}
      <div className={styles.navbar__header}>
        <BaseIcon
          icon={ALL_ICONS.LOGO}
          viewBox='0 0 60 60'
          className={styles.navbar__logo}
        />
        <BaseIcon
          icon={ALL_ICONS.MENU_OPEN}
          viewBox='0 0 30 30'
          className={styles.navbar__burger}
        />
      </div>

      <ul className={styles.navbar__nav}>
        {links.map((link, index) => {
          return (
            <li key={index}>
              <Link href={link.href}>
                <a
                  className={router.pathname === link.href ? styles.active : ''}
                >
                  {t(`${'menu.' + link.title}`)}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
      {/* </div> */}

      {/* <div className={styles.navbar__mobile}></div> */}
    </div>
  );
};

export default Navbar;
