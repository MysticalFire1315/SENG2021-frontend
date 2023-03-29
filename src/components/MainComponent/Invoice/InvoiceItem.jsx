import React from "react";

const InvoiceItem = () => {
    return (
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
    );
}

export default InvoiceItem;