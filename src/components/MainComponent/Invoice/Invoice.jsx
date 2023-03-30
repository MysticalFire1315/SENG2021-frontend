import React, { useEffect, useState } from "react";
import InvoiceItem from "./InvoiceItem";
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
            <form>
                <div id="invoice-buyer">
                    <h4 className="invoice-headers">Buyer details</h4>
                    <div class="row g-3 align-items-center" style={{ width: "200px", borderColor: "transparent" }}>
                        <label for="invoice-buyer-details" class="col-sm-2 col-form-label">Detail-1</label>
                        <input type="text" class="form-control-sm form-text" id="invoice-detail-1" aria-labelledby="invoice-detail-1" placeholder="deet 1" />
                        <label for="invoice-buyer-details" class="col-sm-2 col-form-label">Detail-2</label>
                        <input type="text" class="form-control-sm form-text" id="invoice-detail-2" aria-labelledby="invoice-detail-2" placeholder="deet 2" />
                        <label for="invoice-buyer-details" class="col-sm-2 col-form-label">Detail-3</label>
                        <input type="text" class="form-control-sm form-text" id="invoice-detail-3" aria-labelledby="invoice-detail-3" placeholder="deet 3" />
                    </div>
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
            </form>
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
        </div>
    );
}
export default Invoice;