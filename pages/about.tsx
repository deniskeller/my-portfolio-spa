// @ts-nocheck
import React from 'react';

import { Default } from '@layouts/index';
import { About } from '@view/index';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const HomePage: React.FC = () => (
  <Default>
    <About />
  </Default>
);

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'about'])),
  },
});

export default HomePage;
