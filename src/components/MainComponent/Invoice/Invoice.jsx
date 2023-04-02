import React, { useEffect, useState } from "react";
import InvoiceItem from "./InvoiceItem";
import InvoiceDetails from "./InvoiceDetails";
import Currency from "../Currency/Currency";
import { v4 as uuidv4 } from 'uuid';
const Invoice = () => {
    const [itemIds, setItemIds] = useState([]);
    const [items, setItems] = useState([]);         // If there are no E-invoice items, the E-invoice validator must check there is at least 1 invoice line
    const [count, setCount] = useState(0);
    const [data, setData] = useState({});
    const handleChange = (key, value) => {
        setData({ ...data, [key]: value });
    }

    const handlePercentChange = (e, key, value) => {
        console.log(data['discount']);
        console.log(value);
        if (value > 100) {
            setData({ ...data, [key]: data['discount'] });
        } else {
            setData({ ...data, [key]: value });
        }
    }

    useEffect(() => {
        console.log(data);
    }, [data]);

    const handleAddItem = (e) => {
        e.preventDefault();
        const itemId = count;
        setCount(count + 1);
        setItemIds([...itemIds, itemId]);
        setItems([...items, <InvoiceItem key={itemId} id={itemId} onRemove={handleRemoveItem} onChange={handleChange} onPaste={preventPasteNegative} onKeyDown={preventMinus} />]);
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


    const preventMinus = (e) => {
        if (e.code === 'Minus') {
            e.preventDefault();
        }
    };
    const preventPasteNegative = (e) => {
        const clipboardData = e.clipboardData || window.clipboardData;
        const pastedData = parseFloat(clipboardData.getData('text'));

        if (pastedData < 0) {
            e.preventDefault();
        }
    };
    const percentBounds = (e) => {
        console.log(e.target.value);
        console.log(parseInt(e.target.value));

        if (parseInt(e.target.value) > 100) {
            e.preventDefault();
        }
    }

    return (
        <div id="invoice-box">
            <div id="invoice-title">
                <h2>INVOICE</h2>
                <p>TESTID:12570513571</p>
            </div>

            <InvoiceDetails onChange={handleChange} />

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

            <Currency onChange={handleChange} />

            <div id="invoice-final-details">
                <div id="invoice-gross-amount" class="row mb-1">
                    <label for="gross-amount" class="col-sm-5 col-form-label">Gross&nbsp;Total</label>
                    <div class="col-sm-5">
                        <input type="number" class="form-control" onChange={(e) => handleChange('grossamount', e.target.value)} onPaste={preventPasteNegative} onKeyDown={preventMinus} min={0} />
                    </div>
                </div>
                <div id="invoice-tax-amount" class="row mb-1">
                    <label for="tax-amount" class="col-sm-5 col-form-label">Tax&nbsp;Total</label>
                    <div class="col-sm-5">
                        <input type="number" class="form-control" onChange={(e) => handleChange('taxamount', e.target.value)} onPaste={preventPasteNegative} onKeyDown={preventMinus} min={0} />
                    </div>
                </div>
                <div id="invoice-discount" class="row mb-1">
                    <label for="discount-amount" class="col-sm-6 col-form-label">Discount:(%)</label>
                    <div class="col-sm-6">
                        <input type="number" class="form-control" onChange={(e) => { handlePercentChange(e, 'discount', e.target.value) }} onPaste={preventPasteNegative} onKeyDown={(e) => { preventMinus(e) }} min={0} max={100} />
                    </div>
                </div>
                <div id="invoice-net-amount" class="row mb-1">
                    <label for="net-amount" class="col-sm-5 col-form-label">Net&nbsp;Total</label>
                    <div class="col-sm-5">
                        <input type="number" class="form-control" onChange={(e) => handleChange('nettotal', e.target.value)} onPaste={preventPasteNegative} onKeyDown={preventMinus} min={0} />
                    </div>
                </div>
            </div>
            <div id="invoice-note">
                <label for="invoice-notes">Notes</label>
                <textarea name="textarea" rows="4" className="note-text" class="form-control" placeholder="Detail any notes here" aria-label="invoice notes" onChange={(e) => handleChange('notes', e.target.value)} />
            </div>
            <div id="invoice-footer">Invoice formatted in accordance with A-NZ-PEPPOL-BIS-3.0 UBL XML rules</div>
        </div >
    );
}
export default Invoice;