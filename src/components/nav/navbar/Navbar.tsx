import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Trans, useTranslation } from 'next-i18next';

import styles from './Navbar.module.scss';
import BaseIcon from '@base/BaseIcon';
import { ICONS_ENUM } from '@constants/icons';

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
      <div>
        <BaseIcon icon={ICONS_ENUM.LOGO} viewBox='0 0 60 60' />
        <div className=''>
          <ul>
            {links.map((link) => {
              return (
                <li>
                  <Link href={link.href}>
                    <a
                      className={
                        router.pathname === link.href ? styles.active : ''
                      }
                    >
                      {t(`${'menu.' + link.title}`)}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={''}>
          <p>
            <Trans>{t('created.by')}</Trans>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
