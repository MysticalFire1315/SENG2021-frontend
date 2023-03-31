import React from "react";
import jsPDF from "jspdf";

const InvoiceOptions = () => {

    const generatePDF = () => {
        const report = new jsPDF('portrait', 'pt', 'A4');
        report.html(document.querySelector('#invoice-box')).then(() => {
            report.save('invoice.pdf');
        });

    }

    return (
        <div id="invoice-options">
            <button type="button" onClick={generatePDF} id="export-button">Download My Invoice</button>
            <button id="download-button">Preview My Invoice</button>
            <button id="save-button">Save My Invoice</button>
            <div class="row" className="fileInput">
                <label for="formFileSm" class="form-label">Input a file (JSON, YAML, XML)</label>
                <input class="form-control form-control-sm" id="formFileSm" type="file" />
            </div>
        </div>
    );
}

export default InvoiceOptions;