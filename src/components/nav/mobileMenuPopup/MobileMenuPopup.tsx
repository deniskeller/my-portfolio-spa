import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Trans, useTranslation } from 'next-i18next';

import styles from './MobileMenuPopup.module.scss';
import { BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/reducers/rootReducer';
import { isPopup, setPopupName } from 'store/modals/actions';

interface Props {
  className?: string;
}

const MobileMenuPopup: React.FC<Props> = ({ className }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { t } = useTranslation('common');

  const menuClose = () => {
    dispatch(isPopup(false));
  };

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
      <div className={styles.navbar__header}>
        <BaseIcon
          icon={ALL_ICONS.MENU_CLOSE}
          viewBox='0 0 30 30'
          className={styles.navbar__burger}
          onClick={menuClose}
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
    </div>
  );
};

export default MobileMenuPopup;
