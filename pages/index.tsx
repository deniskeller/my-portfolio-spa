// @ts-nocheck
import React from 'react';

import { Default } from '@layouts/index';
import { Home } from '@view/index';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const HomePage: React.FC = () => (
  <Default>
    <Home />
  </Default>
);

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'home'])),
  },
});

export default HomePage;
