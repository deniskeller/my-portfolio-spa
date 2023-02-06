// @ts-nocheck
import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const NdaPage: React.FC = () => {
  const { t } = useTranslation('nda');

  return (
    <h1
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      {t('nda.title')}
    </h1>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'nda'])),
  },
});

export default NdaPage;
