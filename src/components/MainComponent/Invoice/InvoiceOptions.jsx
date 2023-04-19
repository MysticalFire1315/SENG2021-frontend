import React, { useState } from "react";
import { invoiceCreate, invoiceRender } from "../../../pages/api/backend";
import InputError from "./InputError";
import { v4 as uuidv4 } from 'uuid';
const InvoiceOptions = (props) => {
    const data = props.data;

    const [errorList, setErrorList] = useState([]);
    const handleAddError = (violation) => {
        const errorKey = uuidv4();
        setErrorList(errorList => ([...errorList, <InputError key={errorKey} id={errorKey} violation={violation} />]));
    };
    const makeInvoice = async () => {
        const obj = await invoiceCreate(data);
        showErrorOrRender(obj);
    };

    const handleFileInput = async (file) => {
        return;
        const obj = await invoiceCreate(file); // Should replace with a function that takes in input file and returns output UBL XML file
        if (obj.violations.length !== 0) {
            for (const violation of obj.violations) {
                handleAddError(violation);
                console.log(violation);
            }
        }
    };

    const showErrorOrRender = async (obj) => {
        if (obj.violations.length !== 0) {
            for (const violation of obj.violations) {
                handleAddError(violation);
                console.log(violation);
            }
        } else {
            const renderedHtml = await invoiceRender(obj.token);
            console.log(renderedHtml);
            // Redirect users to /rendered endpoint and show html
            localStorage.setItem('rawHtml', renderedHtml);
            window.open(`${window.location.origin}/Rendered`)
        }
    }

    return (
        <div id="invoice-options">
            <div className="error-list">
                {errorList}
            </div>
            <button type="button" class="btn btn-secondary btn-sm">Download My Invoice</button>
            <button type="button" onClick={makeInvoice} class="btn btn-secondary btn-sm">Render My Invoice</button>
            <button type="button" class="btn btn-secondary btn-sm">Email My Invoice</button>
            <div class="row">
                <label for="formFileSm">Upload a file (.json, .yml, .xml)</label>
                <input class="form-control form-control-sm" style={{ width: "350px", position: "relative" }} id="formFileSm" type="file" accept=".json,.yml,.xml" onChange={(e) => handleFileInput(e.target.value)} multiple />
            </div>
        </div>
    );
}

export default InvoiceOptions;