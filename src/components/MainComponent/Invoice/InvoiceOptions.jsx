import React from "react";
import jsPDF from "jspdf";

const InvoiceOptions = () => {

    const generatePDF = () => {
        const report = new jsPDF('l', 'mm', 'a4');
        let width = report.internal.pageSize.getWidth()
        let height = report.internal.pageSize.getHeight()
        report.html(document.querySelector('#invoice-box')).then(() => {
            report.save('invoice.pdf');
        });

    }

    return (
        <div id="invoice-options">
            <button type="button" onClick={generatePDF} class="btn btn-secondary btn-sm">Download My Invoice</button>
            <button type="button" class="btn btn-secondary btn-sm">Preview My Invoice</button>
            <button type="button" class="btn btn-secondary btn-sm">Save My Invoice</button>
            <div class="row" className="fileInput">
                <label for="formFileSm" class="form-label">Input a file (JSON, YAML, XML)</label>
                <input class="form-control form-control-sm" id="formFileSm" type="file" />
            </div>
        </div>
    );
}

export default InvoiceOptions;