import React, { useState } from "react";
import InvoiceItem from "./InvoiceItem";
const Invoice = () => {

    const [items, setItem] = useState([<InvoiceItem key={0} />]);

    const handleAddItem = (e) => {
        e.preventDefault();
        setItem([...items, <InvoiceItem key={items.length} />]);
    };

    return (
        <div id="invoice-box">
            <div id="invoice-title">
                <h2>INVOICE</h2>
                <p>TESTID:12570513571</p>
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
                <form name="item-details" id="item-form">
                    {items}
                </form>
                <div class="d-grid gap-2 col-6 ms-5">
                    <button onClick={handleAddItem} type="button" class="btn btn-sm" style={{
                        textAlign: "left", backgroundColor: "#DCDCDC"
                    }}>+ Add invoice line</button>
                    <button onClick={handleAddItem} type="button" class="btn btn-sm" style={{
                        textAlign: "right", backgroundColor: "#DCDCDC"
                    }}>X</button>
                </div>
            </div>
        </div>
    );
}
export default Invoice;