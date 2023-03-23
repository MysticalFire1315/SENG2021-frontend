import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Navbar from './components/NavbarElements';
import MetaComponents from './components/Metadata';

const App = () => {
  return (
    <div className="App">
      <MetaComponents />
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
