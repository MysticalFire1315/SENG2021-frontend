import React, { useEffect, useState } from "react";
import InvoiceItem from "./InvoiceItem";
import InvoiceDetails from "./InvoiceDetails";
import Currency from "../Currency/Currency";
import { v4 as uuidv4 } from 'uuid';
const Invoice = () => {
    const [itemIds, setItemIds] = useState([]);
    const [items, setItems] = useState([]);         // If there are no E-invoice items, the E-invoice validator must check there is at least 1 invoice line

    useEffect(() => {
        console.log(itemIds);
    }, [itemIds]);

    const handleAddItem = (e) => {
        e.preventDefault();
        const itemId = uuidv4();
        setItemIds([...itemIds, itemId]);
        setItems([...items, <InvoiceItem key={itemId} id={itemId} onRemove={handleRemoveItem} />]);
    };
    const handleRemoveItem = (id) => {
        if (itemIds.length == 0) {
            return;
        }
        const updatedItemIds = (itemIds) => itemIds.filter(itemId => itemId !== id);
        setItemIds(updatedItemIds);
        const updatedItems = (items) => items.filter(item => item.props.id !== id);
        setItems(updatedItems);
    }

    return (
        <div id="invoice-box">
            <div id="invoice-title">
                <h2>INVOICE</h2>
                <p>TESTID:12570513571</p>
            </div>
            <InvoiceDetails />
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
                </div>
            </div>
            <Currency />

            <div id="invoice-final-details">
                <div id="invoice-gross-amount" class="row mb-1">
                    <label for="gross-amount" class="col-sm-5 col-form-label">Gross&nbsp;Total</label>
                    <div class="col-sm-4">
                        <input type="number" class="form-control" />
                    </div>
                </div>
                <div id="invoice-tax-amount" class="row mb-1">
                    <label for="tax-amount" class="col-sm-5 col-form-label">Tax&nbsp;Total</label>
                    <div class="col-sm-5">
                        <input type="number" class="form-control" />
                    </div>
                </div>
                <div id="invoice-discount" class="row mb-1">
                    <label for="discount-amount" class="col-sm-5 col-form-label">Discount&nbsp;(%)</label>
                    <div class="col-sm-4">
                        <input type="number" class="form-control" />
                    </div>
                </div>
                <div id="invoice-net-amount" class="row mb-1">
                    <label for="net-amount" class="col-sm-5 col-form-label">Net&nbsp;Total</label>
                    <div class="col-sm-4">
                        <input type="number" class="form-control" />
                    </div>
                </div>
            </div>
            <div id="invoice-note">
                <label for="invoice-notes">Notes</label>
                <textarea name="textarea" rows="4" className="note-text" class="form-control" placeholder="Detail any notes here" aria-label="invoice notes" />
            </div>
            <div id="invoice-footer">Invoice formatted in accordance with A-NZ-PEPPOL-BIS-3.0 UBL XML rules</div>
        </div >
    );
}
export default Invoice;