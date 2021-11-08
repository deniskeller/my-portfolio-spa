import Head from 'next/head';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, maximum-scale=1'
      />
      <meta
        name='keywords'
        content='javascript freelancer, javascript developer, frontend freelancer, ReactJS developer, VueJS developer, dev, freelance, freelancer, resume, hire, javascript, portfolio'
      />
      <meta name='author' content='Denis Keller' />
      <meta
        name='description'
        content='Hire an expert Frontend developer for your project. My name is Denis and I`m a freelancer. I work with javascript, RectJS, VueJS, HTML, CSS.'
      />
      <title>Frontend Developer | Freelance | Javascript</title>
    </Head>
    <Component {...pageProps} />
  </>
);
export default appWithTranslation(MyApp);
