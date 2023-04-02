import React from "react"

import '../components/MainComponent/Invoice/Invoice.css';
import '../components/MainComponent/Currency/Currency.css';
import '../components/Carousel/Carousel.css';
import '../components/MainComponent/MainComponent.css';

import Header from "../components/Header/Header";
import MainComponent from "../components/MainComponent/MainComponent";
import Carousel from '../components/Carousel/Carousel';
import { BoxLeft, BoxRight } from '../components/ScrollBox/ScrollBox';
import Invoice from '../components/MainComponent/Invoice/Invoice';
import NavHeader from "../components/NavbarElements";
import Footer from "../components/Footer/Footer";
const Home = () => {
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

export default Home;