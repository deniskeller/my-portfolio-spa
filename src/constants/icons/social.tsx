export enum SocialIcons {
  // TELEGRAM = 'TELEGRAM',
  // EMAIL = 'EMAIL',
  // LINKEDIN = 'LINKEDIN',
  // INSTAGRAM = 'INSTAGRAM',
  // VK = 'VK',
  // GITHUB = 'GITHUB',
  LOGO = 'LOGO',
}

export const socialIcons = {
  [SocialIcons.LOGO]: (
    <>
      <circle cx='30' cy='30' r='30' fill='#272822' />
      <path
        d='M13.32 39V13.944H22.644C24.468 13.944 26.148 14.4 27.684 15.312C29.244 16.224 30.48 17.46 31.392 19.02C32.304 20.556 32.76 22.236 32.76 24.06V28.884C32.76 30.708 32.304 32.4 31.392 33.96C30.48 35.496 29.244 36.72 27.684 37.632C26.148 38.544 24.468 39 22.644 39H13.32Z'
        fill='#EC272F'
      />
      <ellipse
        cx='24.9251'
        cy='21.4464'
        rx='2.43648'
        ry='4.18209'
        transform='rotate(6.95782 24.9251 21.4464)'
        fill='white'
      />
      <path
        d='M38.68 31.384L49.12 46H28.96V20.944H49.12L38.68 31.384ZM37.744 32.32L30.292 39.772V44.668H46.564L37.744 32.32Z'
        fill='#48B32B'
      />
    </>
  ),
};
