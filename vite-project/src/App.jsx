import './App.css';
import './components/MainComponent/Invoice/Invoice.css';
import './components/MainComponent/Invoice/InvoiceOptions.css';
import Header from "./components/Header/Header";
import MainComponent from "./components/MainComponent/MainComponent";
import Footer from "./components/Footer/Footer";
import NavHeader from './components/NavbarElements';
import Carousel from './components/Carousel/Carousel';
import { BoxLeft, BoxRight } from './components/ScrollBox/ScrollBox';
import Invoice from './components/MainComponent/Invoice/Invoice';
import InvoiceOptions from './components/MainComponent/Invoice/InvoiceOptions';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
function App() {
  return (
    <div id="app">
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

export default App;
