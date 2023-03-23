import './App.css';
import Header from "./components/Header/Header";
import MainComponent from "./components/MainComponent/MainComponent";
import Footer from "./components/Footer/Footer";
import NavHeader from './components/NavbarElements';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
function App() {
  return (
    <div>
      <NavHeader />
      <Header />
      <MainComponent />
      <Footer />
    </div>
  );
}

export default App;
