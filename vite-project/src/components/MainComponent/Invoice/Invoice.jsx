import React from "react";

const Invoice = () => {
    return (
        <div id="invoice-box">
            <div id="invoice-title">
                <h2>E-Invoice Formatter</h2>
            </div>
            <div id="invoice-id">
                <p>1231241*TEST ID</p>
            </div>
            <div id="buyer">
                <h4>Buyer details</h4>
                <p>Detail 1: 12312</p>
                <p>Detail 2: 412421</p>
                <p>Detail 3: 1412412</p>
            </div>
            <div id="seller">
                <h4>Seller details</h4>
                <p>Detail 1: 12312</p>
                <p>Detail 2: 412421</p>
                <p>Detail 3: 1412412</p>
            </div>
            <div id="date">
                <h4>Date details</h4>
                <p>Detail 1: 12312</p>
                <p>Detail 2: 412421</p>
                <p>Detail 3: 1412412</p>
            </div>
            <div id="invoice-item-list">

            </div>
        </div>
    );
}
export default Invoice;