import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Trans, useTranslation } from 'next-i18next';

import styles from './Navbar.module.scss';

const Navbar: React.FC = () => {
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
    <div className={styles.bg}>
      <div>
        {/* <div className=''>Denis Keller</div> */}
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
