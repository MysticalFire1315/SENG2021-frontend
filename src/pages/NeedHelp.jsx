import React, { useState } from "react";
import NavHeader from "../components/NavbarElements";
import Footer from "../components/Footer/Footer";

const NeedHelp = () => {
  const [showInvoiceIds, setShowInvoiceIds] = useState(false);
  const [showNavigation, setShowNavigation] = useState(false);
  const [showPOnumber, setShowPOnumber] = useState(false);
  const [showRender, setShowRender] = useState(false);

  return (
    <div id="NeedHelp" className="app">
    <NavHeader />
    <div style={{ padding: "10px",  }}></div>
    <section>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#255", paddingLeft: "10px" }}>
          Need Help?
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#666", paddingLeft: "10px" }}>
          Welcome to our Need Help page for E-invoicing! <br></br> This page is
          designed to provide support and guidance on using our
          electronic invoicing system.
        </p>
        <h1 style={{ fontSize: "1.3rem", fontWeight: "bold", color: "#666", marginBottom: "45px", paddingLeft: "10px", textDecorationLine: "underline"}}>
          See below:
        </h1>
    </section>

    <section>
        <h4 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#708090", marginBottom: "10px", paddingLeft: "10px" }} onClick={() => setShowInvoiceIds(!showInvoiceIds)}>
          Formatting for Invoice IDs
        </h4>
        {showInvoiceIds && (
          <p style={{ fontSize: "1rem", color: "#696969", marginBottom: "10px", paddingLeft: "10px" }}>
            To format an Invoice ID, click "Other Sites" and then "See examples" to view examples of an invoice. 
          </p>
        )}
    </section>

    <section>
        <h4 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#708090", marginBottom: "10px", paddingLeft: "10px" }} onClick={() => setShowNavigation(!showNavigation)}>
          Navigating the Page
        </h4 >
        {showNavigation && (
          <p style={{ fontSize: "1rem", color: "#696969", marginBottom: "10px", paddingLeft: "10px" }}>
            To navigate the page, you can use the navigation links at the top
            and bottom of the screen. Clicking "Home" will take you back to the
            home page, and the "Need Help?" link in the top right will take you to this page.
          </p>
        )}
    </section>

    <section>
        <h4 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#708090", marginBottom: "10px", paddingLeft: "10px" }} onClick={() => setShowPOnumber(!showPOnumber)}>
          What does the PO number mean?
        </h4>
        {showPOnumber && (
          <p style={{ fontSize: "1rem", color: "#696969", marginBottom: "10px", paddingLeft: "10px" }}>
           A PO number is a unique identifying number assigned to an Invoice. 
          </p>
        )}
    </section>

    <section>
        <h4 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#708090", marginBottom: "10px", paddingLeft: "10px"}} onClick={() => setShowRender(!showRender)}>
          Rendering an invoice
        </h4>
        {showRender && (
          <p style={{ fontSize: "1rem", color: "#696969", marginBottom: "10px", paddingLeft: "10px" }}>
            Contents to render invoice
          </p>
        )}
    </section>
    <Footer />
    </div>
  );
};

export default NeedHelp;
