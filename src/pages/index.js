import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import '../components/MainComponent/Invoice/Invoice.css';
import '../components/MainComponent/Currency/Currency.css';
import '../components/Carousel/Carousel.css';
import '../components/MainComponent/MainComponent.css';

const inter = Inter({ subsets: ['latin'] })
import NavHeader from '@/components/NavbarElements'
import Header from '@/components/Header/Header'
import Carousel from '@/components/Carousel/Carousel'
import MainComponent from '@/components/MainComponent/MainComponent'
import { BoxLeft, BoxRight } from '@/components/ScrollBox/ScrollBox'
import Invoice from '@/components/MainComponent/Invoice/Invoice'
import Footer from '@/components/Footer/Footer'
export default function Home() {
  return (
    <div id="Home" className="app">
      <div id="darker-section">
        <NavHeader />
        <Header />
        <Carousel />
      </div>
      <div id="info-section">
        <MainComponent />
        <BoxLeft />
        <BoxRight />
      </div>
      <Invoice />
      <Footer />
    </div>
  );
}
