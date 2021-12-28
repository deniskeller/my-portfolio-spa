import React from 'react';
import { useTranslation } from 'next-i18next';
import styles from './Contacts.module.scss';
import { BaseContainer } from '@base/index';

interface Props {}

const Contacts: React.FC<Props> = () => {
  const { t } = useTranslation('contacts');

  return (
    <BaseContainer>
      <div className={styles.contacts}>
        <a
          href='https://telegram.me/denisb163'
          target='_blank'
          rel="noopener noreferrer"
          className={styles.contact}
        >
          <svg
            className={styles.contact__img}
            width='30'
            height='30'
            viewBox='0 0 30 30'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M29.6065 0.320445C29.184 -0.0816181 28.5016 -0.118169 27.3317 0.283894C26.5192 0.576303 19.3049 3.6466 12.9354 6.60725C7.21591 9.27548 2.5688 11.6148 2.01635 11.9072C1.39891 12.1265 0.0665197 12.7844 0.0015253 13.8078C-0.0309719 14.4658 0.456486 15.0506 1.39891 15.5257C2.40632 16.1106 6.85844 17.7919 7.80086 18.1209C8.12583 19.3636 10.0432 26.6373 10.1407 27.0759C10.2706 27.7338 10.6606 28.0993 10.8556 28.2455C10.8881 28.2821 10.9531 28.3552 11.0181 28.3917C11.1156 28.4648 11.2456 28.5014 11.408 28.5014C11.6355 28.5014 11.8955 28.3917 12.123 28.209C13.3254 27.1125 15.4052 24.6635 15.9902 23.9691C18.5574 26.2352 21.3522 28.7573 21.6122 29.0497L21.6447 29.0862C22.2621 29.671 22.9121 30 23.497 30C23.692 30 23.887 29.9634 24.082 29.8903C24.7644 29.6345 25.2519 28.9035 25.4143 27.9166C25.4143 27.88 25.4468 27.7338 25.5118 27.478C26.6167 22.0684 27.4942 17.3167 28.2091 13.3327C28.8915 9.42169 29.444 5.58382 29.769 3.53695C29.834 3.02523 29.899 2.62317 29.9315 2.36731C30.0289 1.63629 30.0939 0.79561 29.6065 0.320445ZM8.4833 18.0112L23.9845 6.46104C24.017 6.42449 24.082 6.38794 24.1145 6.35139C24.1469 6.35139 24.1469 6.31484 24.1794 6.31484C24.2119 6.31484 24.2119 6.31484 24.2444 6.27829C24.2119 6.31484 24.1794 6.42449 24.1145 6.49759L20.1823 10.6279C17.4525 13.4423 13.8778 17.134 11.5055 19.5464V19.5829L11.473 19.6195C11.473 19.6195 11.473 19.656 11.4405 19.656C11.4405 19.6926 11.4405 19.6926 11.408 19.7291V19.8022C11.2456 21.8491 10.9531 25.358 10.8231 26.9297V26.8932C10.6931 26.4545 8.87326 19.4733 8.4833 18.0112Z'
              fill='white'
            />
          </svg>
        </a>
        <a href='mailto:dentean@mail.ru' className={styles.contact}>
          <svg
            className={styles.contact__img}
            width='30'
            height='30'
            viewBox='0 0 30 30'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M15 0C6.71014 0 0 6.70881 0 15C0 23.2899 6.70881 30 15 30C17.9125 30 20.7667 29.1448 23.19 27.5672C23.9161 27.0945 24.0746 26.0981 23.5258 25.4277L22.9103 24.6757C22.4463 24.1089 21.6293 23.9701 21.0127 24.3655C19.229 25.5095 17.1359 26.129 15 26.129C8.86343 26.129 3.87097 21.1366 3.87097 15C3.87097 8.86343 8.86343 3.87097 15 3.87097C21.0568 3.87097 26.129 7.35599 26.129 13.5484C26.129 15.8943 24.8532 18.3715 22.6107 18.6105C21.5613 18.583 21.5879 17.8328 21.7956 16.7945L23.2129 9.46929C23.3863 8.57359 22.7001 7.74194 21.7878 7.74194H19.0672C18.8663 7.74193 18.6724 7.81588 18.5226 7.94967C18.3728 8.08345 18.2774 8.26772 18.2548 8.46732L18.2542 8.47288C17.3652 7.39016 15.8077 7.15585 14.6269 7.15585C10.116 7.15585 6.29032 10.92 6.29032 16.3167C6.29032 20.2665 8.51522 22.7202 12.0968 22.7202C13.7289 22.7202 15.5667 21.7744 16.6325 20.4016C17.2084 22.4644 19.089 22.4643 20.9093 22.4643C27.4965 22.4643 30 18.1329 30 13.5484C30 5.30159 23.3482 0 15 0ZM13.6887 18.4131C12.343 18.4131 11.5071 17.4682 11.5071 15.9471C11.5071 13.2258 13.3687 11.5482 15.0532 11.5482C16.4015 11.5482 17.2065 12.47 17.2065 14.0141C17.2065 16.7396 15.1576 18.4131 13.6887 18.4131Z'
              fill='white'
            />
          </svg>
        </a>
        <a
          href='https://www.linkedin.com/in/denis-keller-8248691b1/'
          target='_blank'
          rel="noopener noreferrer"
          className={styles.contact}
        >
          <svg
            className={styles.contact__img}
            width='30'
            height='30'
            viewBox='0 0 30 30'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M3.99855 0C1.79539 0 0.00161311 1.79596 0 4.00396C0 6.21196 1.79378 8.00827 3.99855 8.00827C6.20251 8.00827 7.99537 6.21196 7.99537 4.00396C7.99537 1.79619 6.2024 0 3.99855 0Z'
              fill='white'
            />
            <path
              d='M6.99947 9.61719H0.997097C0.711577 9.61719 0.47998 9.849 0.47998 10.1351V29.4823C0.47998 29.7683 0.711577 30.0001 0.997097 30.0001H6.99935C7.28499 30.0001 7.51659 29.7682 7.51659 29.4823V10.1351C7.5167 9.84888 7.28511 9.61719 6.99947 9.61719Z'
              fill='white'
            />
            <path
              d='M22.3443 9.3894C20.1477 9.3894 18.2174 10.0592 17.0395 11.1514V10.1351C17.0395 9.84898 16.8079 9.61717 16.5222 9.61717H10.7645C10.4789 9.61717 10.2473 9.84898 10.2473 10.1351V29.4823C10.2473 29.7683 10.4789 30.0001 10.7645 30.0001H16.7611C17.0467 30.0001 17.2783 29.7682 17.2783 29.4823V19.9103C17.2783 17.1639 17.7828 15.4616 20.3003 15.4616C22.7805 15.4646 22.9661 17.29 22.9661 20.0744V29.4823C22.9661 29.7683 23.1977 30.0001 23.4835 30.0001H29.4829C29.7684 30.0001 30 29.7682 30 29.4823V18.8695C29.9999 14.4557 29.1297 9.3894 22.3443 9.3894Z'
              fill='white'
            />
          </svg>
        </a>
        <a
          href='https://www.instagram.com/keller.js/'
          target='_blank'
          rel="noopener noreferrer"
          className={styles.contact}
        >
          <svg
            className={styles.contact__img}
            width='30'
            height='30'
            viewBox='0 0 30 30'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M15.0033 7.30838C10.7468 7.30838 7.31344 10.7425 7.31344 15C7.31344 19.2575 10.7468 22.6916 15.0033 22.6916C19.2599 22.6916 22.6933 19.2575 22.6933 15C22.6933 10.7425 19.2599 7.30838 15.0033 7.30838ZM15.0033 20.0006C12.2527 20.0006 10.0039 17.758 10.0039 15C10.0039 12.242 12.246 9.99944 15.0033 9.99944C17.7607 9.99944 20.0028 12.242 20.0028 15C20.0028 17.758 17.754 20.0006 15.0033 20.0006ZM24.8015 6.99375C24.8015 7.99119 23.9983 8.7878 23.0078 8.7878C22.0106 8.7878 21.2142 7.98449 21.2142 6.99375C21.2142 6.00301 22.0173 5.19971 23.0078 5.19971C23.9983 5.19971 24.8015 6.00301 24.8015 6.99375ZM29.8946 8.81457C29.7808 6.41136 29.232 4.28261 27.4718 2.52873C25.7184 0.774852 23.5901 0.225929 21.1874 0.105433C18.7111 -0.0351445 11.2889 -0.0351445 8.8126 0.105433C6.41662 0.219235 4.28834 0.768158 2.52817 2.52203C0.767987 4.27591 0.225878 6.40466 0.10541 8.80788C-0.0351366 11.2847 -0.0351366 18.7086 0.10541 21.1854C0.219186 23.5886 0.767987 25.7174 2.52817 27.4713C4.28834 29.2251 6.40993 29.7741 8.8126 29.8946C11.2889 30.0351 18.7111 30.0351 21.1874 29.8946C23.5901 29.7808 25.7184 29.2318 27.4718 27.4713C29.2253 25.7174 29.7741 23.5886 29.8946 21.1854C30.0351 18.7086 30.0351 11.2914 29.8946 8.81457ZM26.6955 23.843C26.1735 25.1551 25.1629 26.1659 23.8444 26.6947C21.8701 27.478 17.1852 27.2972 15.0033 27.2972C12.8215 27.2972 8.12995 27.4713 6.1623 26.6947C4.85053 26.1726 3.83993 25.1618 3.31121 23.843C2.52817 21.8682 2.70887 17.1823 2.70887 15C2.70887 12.8177 2.53486 8.12507 3.31121 6.15698C3.83324 4.84492 4.84384 3.8341 6.1623 3.30525C8.13664 2.52203 12.8215 2.70278 15.0033 2.70278C17.1852 2.70278 21.8767 2.52873 23.8444 3.30525C25.1562 3.8274 26.1668 4.83822 26.6955 6.15698C27.4785 8.13176 27.2978 12.8177 27.2978 15C27.2978 17.1823 27.4785 21.8749 26.6955 23.843Z'
              fill='white'
            />
          </svg>
        </a>
        <a
          href='https://vk.com/id14286270'
          target='_blank'
          rel="noopener noreferrer"
          className={styles.contact}
        >
          <svg
            className={styles.contact__img}
            width='35'
            height='25'
            viewBox='0 0 35 25'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M17.0628 24.8808H19.1585C19.1585 24.8808 19.7899 24.7949 20.1122 24.3615C20.4185 23.9573 20.4185 23.2094 20.4185 23.2094C20.4185 23.2094 20.3733 19.6856 21.6858 19.1681C22.9793 18.6542 24.62 22.5694 26.3685 24.0744C27.7044 25.2246 28.7092 24.9777 28.7092 24.9777L33.3919 24.8973C33.3919 24.8973 35.8448 24.7053 34.6854 22.2896C34.5965 22.0976 34.0277 20.5067 31.2277 17.2425C28.2935 13.8393 28.6873 14.3879 32.2136 8.48867C34.3559 4.89535 35.2323 2.69912 34.9479 1.7665C34.7059 0.888745 33.1104 1.10635 33.1104 1.10635L27.8575 1.16304C27.8575 1.16304 27.4637 1.10635 27.1794 1.32762C26.895 1.54523 26.7214 2.04263 26.7214 2.04263C26.7214 2.04263 25.8873 4.83865 24.7731 7.19946C22.4062 12.1899 21.4656 12.4642 21.0937 12.135C20.2129 11.42 20.4389 9.24574 20.4389 7.68772C20.4389 2.85822 21.0281 0.830228 19.2999 0.309058C18.7312 0.142651 18.3068 0.0347597 16.8426 0.00550127C14.9614 -0.0200999 13.3747 0.0237883 12.4749 0.574217C11.8843 0.945433 11.4249 1.7665 11.6889 1.80856C12.0389 1.86342 12.8249 2.07554 13.2405 2.79056C13.7874 3.71586 13.7641 5.78225 13.7641 5.78225C13.7641 5.78225 14.0718 11.4804 13.0437 12.1881C12.3218 12.6672 11.3593 11.676 9.25926 7.14826C8.18738 4.84414 7.37654 2.26573 7.37654 2.26573C7.37654 2.26573 7.22341 1.79759 6.94049 1.52329C6.60945 1.22156 6.1282 1.11184 6.1282 1.11184L1.11879 1.1667C1.11879 1.1667 0.375038 1.19596 0.113995 1.60558C-0.12809 1.96217 0.0906611 2.73021 0.0906611 2.73021C0.0906611 2.73021 4.00777 14.227 8.44988 20.0166C12.5186 25.3234 17.1358 24.9814 17.1358 24.9814L17.0628 24.8808Z'
              fill='white'
            />
          </svg>
        </a>
        <a
          href='https://github.com/deniskeller'
          target='_blank'
          rel="noopener noreferrer"
          className={styles.contact}
        >
          <svg
            className={styles.contact__img}
            width='30'
            height='30'
            viewBox='0 0 30 30'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M10.0343 24.156C10.0343 24.28 9.89516 24.3793 9.71976 24.3793C9.52016 24.3979 9.38105 24.2986 9.38105 24.156C9.38105 24.0319 9.52016 23.9326 9.69556 23.9326C9.87702 23.914 10.0343 24.0133 10.0343 24.156ZM8.15323 23.8768C8.11089 24.0009 8.23186 24.1435 8.41331 24.1808C8.57056 24.2428 8.75202 24.1808 8.78831 24.0567C8.8246 23.9326 8.70968 23.79 8.52823 23.7341C8.37097 23.6907 8.19556 23.7527 8.15323 23.8768ZM10.8266 23.7713C10.6512 23.8148 10.5302 23.9326 10.5484 24.0753C10.5665 24.1994 10.7238 24.28 10.9052 24.2366C11.0806 24.1932 11.2016 24.0753 11.1835 23.9512C11.1653 23.8334 11.002 23.7527 10.8266 23.7713ZM14.8065 0C6.41734 0 0 6.53216 0 15.1362C0 22.0158 4.22177 27.9028 10.252 29.9747C11.0262 30.1174 11.2984 29.6273 11.2984 29.2241C11.2984 28.8395 11.2802 26.718 11.2802 25.4152C11.2802 25.4152 7.04637 26.3457 6.15726 23.5666C6.15726 23.5666 5.46774 21.7614 4.47581 21.2962C4.47581 21.2962 3.09073 20.3223 4.57258 20.3409C4.57258 20.3409 6.07863 20.4649 6.90726 21.9414C8.23185 24.3359 10.4516 23.6473 11.3165 23.2379C11.4556 22.2453 11.8488 21.5567 12.2843 21.1473C8.90323 20.7627 5.49194 20.2602 5.49194 14.2926C5.49194 12.5867 5.95161 11.7306 6.91935 10.6388C6.7621 10.2356 6.24798 8.57307 7.07661 6.4267C8.34073 6.02348 11.25 8.10161 11.25 8.10161C12.4597 7.75422 13.7601 7.57433 15.0484 7.57433C16.3367 7.57433 17.6371 7.75422 18.8468 8.10161C18.8468 8.10161 21.756 6.01728 23.0202 6.4267C23.8488 8.57927 23.3347 10.2356 23.1774 10.6388C24.1452 11.7368 24.7379 12.5929 24.7379 14.2926C24.7379 20.2788 21.1754 20.7565 17.7944 21.1473C18.3508 21.6374 18.8226 22.5679 18.8226 24.0257C18.8226 26.1162 18.8044 28.703 18.8044 29.2117C18.8044 29.6149 19.0827 30.105 19.8508 29.9623C25.8992 27.9028 30 22.0158 30 15.1362C30 6.53216 23.1956 0 14.8065 0ZM5.87903 21.3955C5.8004 21.4575 5.81855 21.6002 5.92137 21.718C6.01815 21.8173 6.15726 21.8607 6.23589 21.7801C6.31452 21.718 6.29637 21.5753 6.19355 21.4575C6.09677 21.3582 5.95766 21.3148 5.87903 21.3955ZM5.22581 20.893C5.18347 20.9736 5.24395 21.0729 5.36492 21.1349C5.46169 21.1969 5.58266 21.1783 5.625 21.0915C5.66734 21.0108 5.60685 20.9116 5.48589 20.8496C5.36492 20.8123 5.26815 20.8309 5.22581 20.893ZM7.18548 23.1014C7.08871 23.182 7.125 23.3681 7.26411 23.486C7.40323 23.6287 7.57863 23.6473 7.65726 23.548C7.73589 23.4674 7.6996 23.2813 7.57863 23.1634C7.44556 23.0207 7.26411 23.0021 7.18548 23.1014ZM6.49597 22.1895C6.39919 22.2515 6.39919 22.4128 6.49597 22.5555C6.59274 22.6982 6.75605 22.7602 6.83468 22.6982C6.93145 22.6175 6.93145 22.4562 6.83468 22.3136C6.75 22.1709 6.59274 22.1088 6.49597 22.1895Z'
              fill='white'
            />
          </svg>
        </a>
      </div>
    </BaseContainer>
  );
};

export default Contacts;
