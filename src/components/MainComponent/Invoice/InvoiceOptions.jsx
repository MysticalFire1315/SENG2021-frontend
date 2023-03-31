import React from "react";
const InvoiceOptions = () => {
    return (
        <div id="invoice-options">
            <button type="button" class="btn btn-secondary btn-sm">Download My Invoice</button>
            <button type="button" class="btn btn-secondary btn-sm">Preview My Invoice</button>
            <button type="button" class="btn btn-secondary btn-sm">Save My Invoice</button>
            <div class="row" className="fileInput">
                <label for="formFileSm" class="form-label">Upload a file (.JSON, .YAML, .XML)</label>
                <input class="form-control form-control-sm" id="formFileSm" type="file" />
            </div>
        </div>
    );
}

export default InvoiceOptions;