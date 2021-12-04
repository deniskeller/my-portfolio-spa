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
import { MobileMenuPopup, NavbarLink } from '..';

interface Props {
  className?: string;
}

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
            <NavbarLink
              href={link.href}
              title={link.title}
              index={index}
              key={index}
            />
          );
        })}
      </ul>
      {/* </div> */}

      <BasePopup visible={modal} setVisible={setModal}>
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
        <div className=''>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          mollitia atque nemo dolor iure incidunt voluptates iste eos obcaecati
          consequuntur et alias, nam nobis amet illo, dolore aperiam quae enim
          consequatur sunt laborum cupiditate? Veritatis eos laudantium ipsam?
          Blanditiis quam pariatur sint quae consequatur. Aspernatur delectus
          culpa distinctio fugit a ipsum eos, facere laborum vitae deserunt
          soluta, vero qui aliquid laudantium corrupti aut veniam dolorum. Odit
          libero numquam totam autem laborum fuga magni accusantium quibusdam
          animi inventore amet, nesciunt nostrum possimus ea sapiente facere
          vitae esse. Quod repudiandae expedita quos, excepturi quam nulla?
          Optio est soluta velit dignissimos labore ea.
        </div>
      </BasePopup>

      {/* <div className={styles.navbar__mobile}></div> */}
      {/* <MobileMenuPopup className={styles.navbar__mobile_menu_popup} /> */}
    </div>
  );
};

export default Navbar;
