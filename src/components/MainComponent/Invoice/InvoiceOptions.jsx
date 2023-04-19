import React from 'react';
import { invoiceCreate, invoiceRender } from '../../../pages/api/backend';

const InvoiceOptions = (props) => {
  const data = props.data;
  let token = null;

  const makeInvoice = async () => {
    console.log(data);
    const obj = await invoiceCreate(data);
    console.log(obj);
    if (obj.violations.length !== 0) {
      for (const violation of obj.violations) {
        console.log(violation);
      }
    } else {
      token = obj.token;
    }
  };

  const downloadInvoice = async () => {
    // Create invoice
    await makeInvoice();

    if (token === null) {
      return;
    }
    const xmlString =
      '<invoice><number>123</number><total>100.00</total></invoice>';
    const xmlBlob = new Blob([xmlString], { type: 'text/xml' });
    const xmlUrl = URL.createObjectURL(xmlBlob);
    const link = document.createElement('a');
    link.href = xmlUrl;
    link.download = 'invoice.xml';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(xmlUrl);
  };

  const renderInvoice = async () => {
    // Create invoice
    await makeInvoice();

    if (token === null) {
      return;
    }
    const renderedHtml = await invoiceRender(token);
    console.log(renderedHtml);
    // Redirect users to /rendered endpoint and show html
    localStorage.setItem('rawHtml', renderedHtml);
    window.open(`${window.location.origin}/Rendered`);
  };

  return (
    <div id="invoice-options">
      <button
        type="button"
        onClick={downloadInvoice}
        class="btn btn-secondary btn-sm"
      >
        Download My Invoice
      </button>
      <button
        type="button"
        onClick={renderInvoice}
        class="btn btn-secondary btn-sm"
      >
        Render My Invoice
      </button>
      <button type="button" class="btn btn-secondary btn-sm">
        Save My Invoice
      </button>
      {/* <div class="row" className="fileInput">
                <label for="formFileSm" class="form-label">Upload a file (.JSON, .YAML, .XML)</label>
                <input class="form-control form-control-sm" id="formFileSm" type="file" />
            </div> */}
    </div>
  );
};

export default InvoiceOptions;
