import React from "react"

import '../components/MainComponent/Invoice/Invoice.css';
import '../components/MainComponent/Invoice/InvoiceOptions.css';

import Header from "../components/Header/Header";
import MainComponent from "../components/MainComponent/MainComponent";
import Carousel from '../components/Carousel/Carousel';
import { BoxLeft, BoxRight } from '../components/ScrollBox/ScrollBox';
import Invoice from '../components/MainComponent/Invoice/Invoice';
import InvoiceOptions from '../components/MainComponent/Invoice/InvoiceOptions';
import NavHeader from "../components/NavbarElements";
import Footer from "../components/Footer/Footer";
const Home = () => {
    return (
        <div id="Home" className="app">
            <NavHeader />
            <Header />
            <Carousel />
            <MainComponent />
            <BoxLeft />
            <BoxRight />
            <InvoiceOptions />
            <Invoice />
            <Footer />
        </div>
    );
}

export default Home;