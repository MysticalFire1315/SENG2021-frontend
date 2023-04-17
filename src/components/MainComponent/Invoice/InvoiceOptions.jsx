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
        console.log(data);
        const obj = await invoiceCreate(data);
        console.log(obj);
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
    };

    return (
        <div id="invoice-options">
            {/* FOr testing */}
            <div style={{
                position: "fixed", bottom: "0",
                right: "20px", zIndex: "99999"
            }}>
                <InputError key={0} id={0} violation={"testing12342141212412412414"} />
                <InputError key={0} id={0} violation={"1234"} />
                <InputError key={0} id={0} violation={"testing1234"} />
            </div>
            <div className="error-list">
                {errorList}
            </div>
            <button type="button" class="btn btn-secondary btn-sm">Download My Invoice</button>
            <button type="button" onClick={makeInvoice} class="btn btn-secondary btn-sm">Render My Invoice</button>
            <button type="button" class="btn btn-secondary btn-sm">Email My Invoice</button>
            <div class="row" className="fileInput">
                <label for="formFileSm" class="form-label">Upload a file (.JSON, .YAML, .XML)</label>
                <input class="form-control form-control-sm" id="formFileSm" type="file" />
            </div>
        </div>
    );
}

export default InvoiceOptions;