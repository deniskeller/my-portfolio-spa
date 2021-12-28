// @ts-nocheck
import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Default } from '@layouts/index';
import { Resume } from '@view/index';

const ResumePage: React.FC = () => (
  <Default>
    <Resume />
  </Default>
);

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'resume'])),
  },
});

export default ResumePage;
