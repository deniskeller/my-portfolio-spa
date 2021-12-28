// @ts-nocheck
import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Default } from '@layouts/index';
import { Contacts } from '@view/index';

const ContactPage: React.FC = () => (
  <Default>
    <Contacts />
  </Default>
);

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'contacts'])),
  },
});

export default ContactPage;
