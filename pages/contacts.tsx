// @ts-nocheck
import React from 'react';

import { Default } from '@layouts/index';
import { Contacts } from '@view/index';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

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
