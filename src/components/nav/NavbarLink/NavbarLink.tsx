import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import styles from './NavbarLink.module.scss';

interface Props {
  href: string;
  title: string;
  index: number;
}

const NavbarLink: React.FC<Props> = ({ href, title, index }) => {
  const router = useRouter();
  const { t } = useTranslation('common');

  return (
    <li key={index} className={styles.li}>
      <Link href={href}>
        <a className={router.pathname === href ? styles.active : ''}>
          {t(`${'menu.' + title}`)}
        </a>
      </Link>
    </li>
  );
};

export default NavbarLink;
