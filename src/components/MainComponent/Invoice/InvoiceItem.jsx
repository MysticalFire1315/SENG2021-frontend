import React from "react";
const InvoiceItem = (props) => {
    const id = props.id;

    const name = `item${id}`;
    const quantity = `quantity${id}`;
    const description = `description${id}`;
    const cost = `cost${id}`;

    const handleRemoveItem = () => {
        props.onRemove(id);
    }
    const handleChange = (event) => {
        props.onChange(event.target.name, event.target.value);
    }
    const preventPasteNegative = (event) => {
        props.onPaste(event);
    }
    const preventMinus = (event) => {
        props.onKeyDown(event);
    }

    return (
        <div className="invoice-item">
            <ul className="invoice-element-value">
                <li className="item-name">
                    <input type="text" className="txtbgcolor" name={name} placeholder="item" aria-placeholder="item" style={{ width: "255px" }} onChange={handleChange} />
                </li>
                <li className="item-quantity">
                    <input type="number" className="txtbgcolor" name={quantity} placeholder="quantity" aria-placeholder="quantity" style={{ width: "80px" }} onChange={handleChange} onPaste={preventPasteNegative} onKeyDown={preventMinus} min={0} />
                </li>
                <li className="item-description">
                    <input type="text" className="txtbgcolor" name={description} placeholder="description" aria-placeholder="description" style={{ width: "300px" }} onChange={handleChange} />
                </li>
                <li className="item-cost">
                    <input type="number" className="txtbgcolor" name={cost} placeholder="cost" aria-placeholder="cost" style={{ width: "70px" }} onChange={handleChange} onPaste={preventPasteNegative} onKeyDown={preventMinus} min={0} />
                </li>
                <li>
                    <button type="button" className="button-delete" onClick={handleRemoveItem}>x</button>
                </li>
            </ul>
        </div>
    );
}

export default InvoiceItem;