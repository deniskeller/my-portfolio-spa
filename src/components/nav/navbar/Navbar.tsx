import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Trans, useTranslation } from 'next-i18next';

import styles from './Navbar.module.scss';
import { BaseIcon, BasePopup } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/reducers/rootReducer';
import { isPopup, setPopupName } from 'store/modals/actions';
import { MobileMenuPopup } from '..';

interface Props {
  className?: string;
}

const Navbar: React.FC<Props> = ({ className }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { t } = useTranslation('common');

  // const [open, setOpen] = React.useState(false);

  const lek = useSelector((state: RootState) => state.modal.setPopupName);
  // console.log('isPopup: ', isPopup);
  console.log('setPopupName: ', lek);

  const [modal, setModal] = React.useState(false);
  const menuOpen = () => {
    setModal(true);
    // dispatch(isPopup(false));
    // dispatch(setPopupName('kek-popup'));
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
          onClick={menuOpen}
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

      <BasePopup visible={modal} setVisible={setModal}>
        <ul>
          {links.map((link, index) => {
            return (
              <li key={index}>
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
      </BasePopup>

      {/* <div className={styles.navbar__mobile}></div> */}
      {/* <MobileMenuPopup className={styles.navbar__mobile_menu_popup} /> */}
    </div>
  );
};

export default Navbar;
