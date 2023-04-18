import React, { useState } from "react";
import { invoiceCreate, invoiceRender } from "../../../pages/api/backend";
import InputError from "./InputError";
const InvoiceOptions = (props) => {
    const data = props.data;

    const [errorList, setErrorList] = useState([]);
    const [count, setCount] = useState(0);
    const handleAddError = (violation) => {
        const errorKey = count;
        setErrorList(errorList => ([...errorList, <InputError key={errorKey} id={errorKey} violation={violation} />]));
        setCount(count + 1);
    };
    const makeInvoice = async () => {
        console.log("here");
        console.log(data);
        const obj = await invoiceCreate(data);
        showErrorOrRender(obj);
    };

    const handleFileInput = async (file) => {
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
            // Redirect users to /rendered endpoint and show html
            localStorage.setItem('rawHtml', renderedHtml);
            window.open(`${window.location.origin}/rendered`)
        }
    }

    return (
        <div id="invoice-options">
            {/* FOr testing */}
            <div style={{
                position: "fixed", bottom: "0",
                right: "20px", zIndex: "99999"
            }}>
                <InputError key={5} id={5} violation={"testing12342141212412412414"} />
                <InputError key={6} id={6} violation={"1234"} />
                <InputError key={7} id={7} violation={"testing1234"} />
            </div>
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