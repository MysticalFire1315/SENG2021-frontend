import React, { useState } from 'react';
import NavHeader from '../components/NavbarElements';
import Footer from '../components/Footer/Footer';
import Head from 'next/head';
import Image from 'next/image';

export default function NeedHelp() {
  const [showInvoiceIds, setShowInvoiceIds] = useState(false);
  const [showCreate, setCreate] = useState(false);
  const [showNavigation, setShowNavigation] = useState(false);
  const [showPOnumber, setShowPOnumber] = useState(false);
  const [showRender, setShowRender] = useState(false);

  return (
    <div id="NeedHelp" className="app">
      <Head>
        <title>Need Help?</title>
      </Head>
      <NavHeader />
      <div style={{ padding: '10px' }}></div>
      <section>
        <h1
          style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#255',
            paddingLeft: '30px',
          }}
        >
          Need Help?
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#666', paddingLeft: '30px' }}>
          Welcome to our Need Help page for E-invoicing! <br></br> This page is
          designed to provide support and guidance on using our electronic
          invoicing system.
        </p>
        <h1
          style={{
            fontSize: '1.3rem',
            fontWeight: 'bold',
            color: '#666',
            marginBottom: '45px',
            paddingLeft: '30px',
            textDecorationLine: 'underline',
          }}
        >
          See below:
        </h1>
      </section>

      <section>
        <h4
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#708090',
            marginBottom: '10px',
            paddingLeft: '30px',
          }}
          onClick={() => setCreate(!showCreate)}
        >
          Formatting for Invoice IDs
        </h4>
        {showCreate && (
          <p
            style={{
              fontSize: '1rem',
              color: '#696969',
              marginBottom: '10px',
              paddingLeft: '30px',
            }}
          >
            To format an Invoice ID, click &quot;Other Sites&quot; and then
            &quot;See examples&quot; to view examples of an invoice.
          </p>
        )}
      </section>

      <section>
        <h4
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#708090',
            marginBottom: '10px',
            paddingLeft: '30px',
          }}
          onClick={() => setShowInvoiceIds(!showInvoiceIds)}
        >
          Creating an invoice
        </h4>
        {showInvoiceIds && (
          <p
            style={{
              fontSize: '1rem',
              color: '#696969',
              marginBottom: '10px',
              paddingLeft: '30px',
            }}
          >
            To create an invoice, fill out the form with your required details, then click render invoice to view your completed invoice.
            <br></br>
            <Image
              src="/render.png"
              alt="render.png"
              width={983}
              height={752}
              style={{ marginBottom: '40px'}}
            />
            <br></br>
            <Image
              src="/rendered.png"
              alt="rendered.png"
              width={1064}
              height={661}
              style={{ marginBottom: '40px' }}
            />
            <br></br>
            Alternatively, one can choose to upload a file in the correct format as <a href="http://seng2021-f12a-api-env.eba-pymctycp.ap-southeast-2.elasticbeanstalk.com/docs/guide">documented</a>
              here. Then, users can upload a JSON, YML or XML file, and the formatted invoice will be downloaded automatically.
             <br></br>
            <Image
              src="/download.png"
              alt="download.png"
              width={977}
              height={760}
              style={{ marginBottom: '40px' }}
            />
             
          </p>
        )}
      </section>

      <section>
        <h4
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#708090',
            marginBottom: '10px',
            paddingLeft: '30px',
          }}
          onClick={() => setShowNavigation(!showNavigation)}
        >
          Navigating the Page
        </h4>
        {showNavigation && (
          <p
            style={{
              fontSize: '1rem',
              color: '#696969',
              marginBottom: '10px',
              paddingLeft: '30px',
            }}
          >
            To navigate the page, you can use the navigation links at the top
            and bottom of the screen. Clicking &quot;Home&quot; will take you
            back to the home page, and the &quot;Need Help?&quot; link in the
            top right will take you to this page.
          </p>
        )}
      </section>

      <section>
        <h4
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#708090',
            marginBottom: '10px',
            paddingLeft: '30px',
          }}
          onClick={() => setShowPOnumber(!showPOnumber)}
        >
          What does the PO number mean?
        </h4>
        {showPOnumber && (
          <p
            style={{
              fontSize: '1rem',
              color: '#696969',
              marginBottom: '10px',
              paddingLeft: '30px',
            }}
          >
            A PO number is a unique identifying number assigned to an Invoice.
          </p>
        )}
      </section>

      <section>
        <h4
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#708090',
            marginBottom: '10px',
            paddingLeft: '30px',
          }}
          onClick={() => setShowRender(!showRender)}
        >
          Rendering an invoice
        </h4>
        {showRender && (
          <p
            style={{
              fontSize: '1rem',
              color: '#696969',
              marginBottom: '10px',
              paddingLeft: '30px',
            }}
          >
            Contents to render invoice
          </p>
        )}
      </section>
      <Footer />
    </div>
  );
}
