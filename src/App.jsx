import './App.css';
import NavHeader from './components/NavbarElements';
import Footer from "./components/Footer/Footer";

import { Outlet } from "react-router-dom";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
function App() {
  return (
    <div id="app">
      <NavHeader />
      <div id="detail">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
