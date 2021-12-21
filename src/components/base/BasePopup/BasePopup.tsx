import React, { ReactNode, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPopup } from 'store/modals/actions';
import { RootState } from 'store/reducers/rootReducer';
import styles from './BasePopup.module.scss';

interface Props {
  children: ReactNode;
  className: string;
}

const BasePopup: React.FC<Props> = ({ children, className }) => {
  const { popup, id } = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();
  const thisClass = useRef<HTMLDivElement>(null);
  const thisModal = useRef<HTMLDivElement>(null);

  const [visible, setVisible] = useState(false);

  React.useEffect(() => {
    const className = 'overflow-hidden';

    if (visible) {
      document.body.classList.add(className);
    } else {
      document.body.classList.remove(className);
    }
  }, [visible]);

  React.useEffect(() => {
    if (thisClass.current.classList.contains(popup)) {
      showPopup();
    }
    if (!popup) {
      hidePopup();
    }
  }, [popup, id]);

  const keyUp = (e: React.KeyboardEvent<Element>) => {
    if (e.keyCode == 27) {
      hidePopup();
    }
  };

  const showPopup = () => {
    document.addEventListener('keyup', keyUp);
    setVisible(true);
  };

  const hidePopup = () => {
    document.removeEventListener('keyup', keyUp);
    dispatch(setPopup('', 0));
    setVisible(false);
  };

  return (
    <div
      className={` ${styles.BasePopup} ${
        visible ? styles.visible : ''
      } ${className}`}
      ref={thisClass}
    >
      <div className={styles.BasePopup_content} ref={thisModal}>
        <svg
          width='30'
          height='30'
          viewBox='0 0 30 30'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={styles.BasePopup_close}
          onClick={() => hidePopup()}
        >
          <path
            d='M2.58211 0.707444C2.19158 0.31692 1.55842 0.31692 1.16789 0.707444C0.777369 1.09797 0.777369 1.73113 1.16789 2.12166L14.0465 15.0003L1.16796 27.8788C0.777439 28.2694 0.777438 28.9025 1.16796 29.293C1.55849 29.6836 2.19165 29.6836 2.58218 29.293L15.4607 16.4145L27.8787 28.8325C28.2692 29.223 28.9024 29.223 29.2929 28.8325C29.6834 28.4419 29.6834 27.8088 29.2929 27.4182L16.8749 15.0003L29.293 2.58224C29.6835 2.19172 29.6835 1.55856 29.293 1.16803C28.9025 0.777507 28.2693 0.777506 27.8788 1.16803L15.4607 13.5861L2.58211 0.707444Z'
            fill='#004236'
          />
        </svg>

        {children}
      </div>
    </div>
  );
};

export default BasePopup;
