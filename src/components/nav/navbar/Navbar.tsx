import React from 'react';
import { BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import { MobileMenuPopup, NavbarLink } from '..';
import styles from './Navbar.module.scss';

interface Props {}

const links = [
  {
    href: '/',
    title: 'home',
  },
  {
    href: '/about',
    title: 'about',
  },
  // {
  //   href: '/resume',
  //   title: 'resume',
  // },
  {
    href: '/portfolio',
    title: 'portfolio',
  },
  {
    href: '/contacts',
    title: 'contacts',
  },
];

const Navbar: React.FC<Props> = () => {
  const [modal, setModal] = React.useState(false);
  const menuOpen = () => {
    setModal(true);
  };

  React.useEffect(() => {
    const className = 'overflow-hidden';

    if (modal) {
      document.body.classList.add(className);
    } else {
      document.body.classList.remove(className);
    }
  }, [modal]);

  return (
    <div className={styles.navbar}>
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
            <NavbarLink
              href={link.href}
              title={link.title}
              index={index}
              key={index}
            />
          );
        })}
      </ul>

      <MobileMenuPopup visible={modal} setVisible={setModal}>
        <ul>
          {links.map((link, index) => {
            return (
              <NavbarLink
                href={link.href}
                title={link.title}
                index={index}
                key={index}
              />
            );
          })}
        </ul>
      </MobileMenuPopup>
    </div>
  );
};

export default Navbar;
