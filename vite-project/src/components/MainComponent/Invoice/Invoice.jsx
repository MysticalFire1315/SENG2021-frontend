import React from "react";

const Invoice = () => {
    return (
        <div id="invoice-box">
            <div id="invoice-title">
                <h2>INVOICE</h2>
                <p>1231241*TEST ID</p>
            </div>
            <div id="invoice-buyer">
                <h4 className="invoice-headers">Buyer details</h4>
                <p>Detail 1: Input 1</p>
                <p>Detail 2: Input 2</p>
                <p>Detail 3: Input 3</p>
            </div>
            <div id="invoice-seller">
                <h4 className="invoice-headers">Seller details</h4>
                <p>Detail 1: Input 1</p>
                <p>Detail 2: Input 2</p>
                <p>Detail 3: Input 3</p>
            </div>
            <div id="invoice-date">
                <h4 className="invoice-headers">Date details</h4>
                <p>Detail 1: Input 1</p>
                <p>Detail 2: Input 2</p>
                <p>Detail 3: Input 3</p>
            </div>
            <div id="invoice-item-list">
                <div id="invoice-item-tab">
                    <ul className="invoice-elements">
                        <li>Item</li>
                        <li>Quantity</li>
                        <li>Description</li>
                        <li>Cost</li>
                    </ul>
                </div>
                <div id="invoice-item">

                </div>
            </div>
        </div>
    );
}
export default Invoice;