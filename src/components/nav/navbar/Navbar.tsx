import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Trans, useTranslation } from 'next-i18next';

import styles from './Navbar.module.scss';

const Navbar: React.FC = () => {
  const router = useRouter();
  const { t } = useTranslation('common');

  return (
    <div className={styles.bg}>
      <div>
        {/* <div className=''>Denis Keller</div> */}
        <div className=''>
          <ul>
            <li>
              <Link href={'/'}>
                <a className={router.pathname === '/' ? styles.active : ''}>
                  {t('menu.home')}
                </a>
              </Link>
            </li>
            <li>
              <Link href={'/about'}>
                <a
                  className={router.pathname === '/about' ? styles.active : ''}
                >
                  {t('menu.about')}
                </a>
              </Link>
            </li>
            <li>
              <Link href={'/resume'}>
                <a
                  className={router.pathname === '/resume' ? styles.active : ''}
                >
                  {t('menu.resume')}
                </a>
              </Link>
            </li>
            <li>
              <Link href={'/portfolio'}>
                <a
                  className={
                    router.pathname === '/portfolio' ? styles.active : ''
                  }
                >
                  {t('menu.portfolio')}
                </a>
              </Link>
            </li>
            <li>
              <Link href={'/contacts'}>
                <a
                  className={
                    router.pathname === '/contacts' ? styles.active : ''
                  }
                >
                  {t('menu.contact')}
                </a>
              </Link>
            </li>
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
