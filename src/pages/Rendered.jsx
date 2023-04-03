import React from 'react';
import NavHeader from '../components/NavbarElements';
import Footer from '../components/Footer/Footer';

const Rendered = () => {

  return (
    <div id="Rendered" className="app">
      {/* This sets the html directly */}
      <div dangerouslySetInnerHTML={{ __html: localStorage.getItem('rawHtml') }}></div>
    </div>
  );
};

export default Rendered;
