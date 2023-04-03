import Head from 'next/head'

import '../styles/styles.css'

import '../styles/Carousel.module.css'
import '../styles/Currency.module.css'
import '../styles/Footer.module.css'
import '../styles/Header.module.css'
import '../styles/MainComponent.module.css'
import '../styles/Invoice.module.css'
import "bootstrap/dist/css/bootstrap.min.css" // Import bootstrap CSS
import { useEffect } from "react";
// Scrollbox css is in main
export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
