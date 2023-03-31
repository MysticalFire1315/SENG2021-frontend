import './App.css';

import { Route, Routes, Navigate } from "react-router-dom";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import NeedHelp from './pages/NeedHelp';
import Home from './pages/InvoiceCreate';
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='need-help' element={<NeedHelp />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
}

export default App;
