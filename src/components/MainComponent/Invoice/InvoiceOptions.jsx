import React, { useState } from 'react';
import {
  invoiceCreate,
  invoiceDownload,
  invoiceRender,
} from '../../../pages/api/backend';
import InputError from './InputError';
import { v4 as uuidv4 } from 'uuid';

const InvoiceOptions = (props) => {
  const data = props.data;
  const [errorList, setErrorList] = useState([]);
  const [files, setFiles] = useState("");
  let token = null;

  const handleAddError = (violation) => {
    const errorKey = uuidv4();
    setErrorList((errorList) => [
      ...errorList,
      <InputError key={errorKey} id={errorKey} violation={violation} />,
    ]);
  };

  const makeInvoice = async () => {
    console.log(data);
    for (const key in data) {
      if (data[key] == "") {
        handleAddError("Missing Input Fields");
        return;
      }
    }
    const obj = invoiceCreate(data);
    if (obj.violations.length !== 0) {
      for (const violation of obj.violations) {
        handleAddError(violation);
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
    const xmlString = await invoiceDownload(token);
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

  const handleFileInput = async (e) => {
    return;
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = e => {
      console.log("e.target.result", e.target.result);
      setFiles(e.target.result);
    };
    // Should replace with a function that takes in input file and returns output UBL XML file

    const obj = invoiceCreate(data);
    if (obj.violations.length !== 0) {
      for (const violation of obj.violations) {
        handleAddError(violation);
        console.log(violation);
      }
    } else {
      token = obj.token;
    }
  };

  return (
    <div id="invoice-options">
      <div className="invoice-file-options">
        <div class="row">
          <label for="formFileSm">Uploading a file? (.json, .yml, .xml)</label>
          <input
            class="form-control form-control-sm"
            style={{ width: '350px', position: 'relative' }}
            id="formFileSm"
            type="file"
            accept=".json,.yml,.xml"
            onChange={handleFileInput}
          />
        </div>
      </div>
      <div className="error-list">{errorList}</div>
      <button
        type="button"
        onClick={downloadInvoice}
        class="btn btn-secondary btn-sm me-5"
      >
        Download My Invoice
      </button>
      <button
        type="button"
        onClick={renderInvoice}
        class="btn btn-secondary btn-sm ms-5"
      >
        Render My Invoice
      </button>
    </div>
  );
};

export default InvoiceOptions;
