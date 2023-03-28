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
                <div className="invoice-item">
                    <ul className="invoice-element-value">
                        <li className="item-name">
                            <input type="text" className="txtbgcolor" name="item" placeholder="item" aria-placeholder="item" style={{ width: "255px", borderColor: "transparent" }} />
                        </li>
                        <li className="item-quantity">
                            <input type="number" className="txtbgcolor" name="quantity" placeholder="quantity" aria-placeholder="quantity" style={{ width: "80px", borderWidth: 0 }} />
                        </li>
                        <li className="item-description">
                            <input type="text" className="txtbgcolor" name="description" placeholder="description" aria-placeholder="description" style={{ width: "300px", borderWidth: 0 }} />
                        </li>
                        <li className="item-cost">
                            <input type="number" className="txtbgcolor" name="cost" placeholder="cost" aria-placeholder="cost" style={{ width: "70px", borderWidth: 0 }} />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Invoice;