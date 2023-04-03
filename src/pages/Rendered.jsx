import React from 'react';
import NavHeader from '../components/NavbarElements';
import Footer from '../components/Footer/Footer';
import Head from 'next/head';
export default function Rendered() {
  return (
    <div id="Rendered" className="app">
      <Head>
        <title>Elegant Invoice</title>
      </Head>
      <NavHeader />
      {/* This sets the html directly */}
      <div dangerouslySetInnerHTML={{ __html: localStorage.getItem('rawHtml') }}></div>
      <Footer />
    </div>
  );
};
