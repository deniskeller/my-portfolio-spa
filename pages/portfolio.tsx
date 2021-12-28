// @ts-nocheck
import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Default } from '@layouts/index';
import { Portfolio } from '@view/index';

const PortfolioPage: React.FC = () => (
  <Default>
    <Portfolio />
  </Default>
);

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'portfolio'])),
  },
});

export default PortfolioPage;
