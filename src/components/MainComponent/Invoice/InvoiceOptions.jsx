import React from "react";

const InvoiceOptions = () => {

    // Select the export button and invoice div
    const exportBtn = document.querySelector("#export-btn");
    const invoiceDiv = document.querySelector("#invoice-box");

    // Add click event listener to the export button
    exportBtn.addEventListener("click", () => {
        // Initialize jsPDF
        const doc = new jsPDF();

        // Get the invoice div's HTML content
        const html = invoiceDiv.innerHTML;

        // Set the PDF's format and add the invoice HTML to it
        doc.fromHTML(html, 15, 15, { width: 170 });

        // Save the PDF with a filename including the current date and time
        doc.save(`Invoice-${new Date().toLocaleString()}.pdf`);
    });

    return (
        <div id="invoice-options">
            <button id="export-button">Export My Invoice</button>
            <button id="download-button">Download My Invoice</button>
            <button id="save-button">Save My Invoice</button>
        </div>
    );
}

export default InvoiceOptions;