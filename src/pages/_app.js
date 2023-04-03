import '@/styles/globals.css'
import NavHeader from '@/components/NavbarElements';
import Footer from '@/components/Footer/Footer.jsx';
export default function App({ Component, pageProps }) {
  return (
    <div>
      <NavHeader />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// export default function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/NeedHelp">
//           <h1>Need help?</h1>
//         </Route>
//         <Route path="/Rendered">
//           <h1>Rendered Invoice</h1>
//         </Route>
//         <Route path="/">
//           <h1>Home</h1>
//         </Route>
//       </Switch>
//     </Router>
//   )
// }
