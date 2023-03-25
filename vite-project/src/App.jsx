import './App.css';
import Header from "./components/Header/Header";
import MainComponent from "./components/MainComponent/MainComponent";
import Footer from "./components/Footer/Footer";
import NavHeader from './components/NavbarElements';
import Carousel from './components/Carousel/Carousel';
import Box from './components/ScrollBox/ScrollBox';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
function App() {
  return (
    <div class="app">
      <NavHeader />
      <Header />
      <Carousel />
      <MainComponent />
      <Box num={1} />
      <Box num={2} />

      <Box num={3} />

      <Footer />
    </div>
  );
}

export default App;
