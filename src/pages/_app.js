import Head from 'next/head';

import '../styles/styles.css';

import '../styles/Carousel.css';
import '../styles/Currency.css';
import '../styles/MainComponent.css';
import '../styles/Invoice.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import bootstrap CSS
import { useEffect } from 'react';
// Scrollbox css is in main
export default function App({ Component, pageProps }) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Elegant Builders" />
        <meta name="description" content="A Free E-invoice Creation Tool!" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
