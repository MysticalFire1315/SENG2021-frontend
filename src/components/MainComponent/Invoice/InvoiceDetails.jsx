import React from 'react';
const InvoiceDetails = (props) => {

    const handleChange = (event) => {
        props.onChange(event.target.name, event.target.value);
    }

    return (
        <>
            <div id="invoice-buyer" className="invoice-init-values">
                <h4 className="invoice-headers">Buyer details</h4>
                <div class="row">
                    <div className="init-details">
                        <label for="invoice-buyer-details" class="col-sm-2 col-form-label">Company</label>
                    </div>
                    <div class="col-sm-5" className="init-details">
                        <input type="text" class="form-control form-control-sm form-text" placeholder="company" name="buyercompany" onChange={handleChange} />
                    </div>
                </div>

                <div class="row">
                    <div className="init-details">
                        <label for="invoice-buyer-details" class="col-sm-2 col-form-label">Name</label>
                    </div>
                    <div class="col-sm-5" className="init-details">
                        <input type="text" class="form-control form-control-sm form-text" placeholder="name" name="buyername" onChange={handleChange} />
                    </div>
                </div>

                <div class="row">
                    <div className="init-details">
                        <label for="invoice-buyer-details" class="col-sm-2 col-form-label">Address</label>
                    </div>
                    <div class="col-sm-5" className="init-details">
                        <input type="text" class="form-control form-control-sm form-text" placeholder="address" name="buyeraddress" onChange={handleChange} />
                    </div>
                </div>
                <div class="row">
                    <div className="init-details">
                        <label for="invoice-buyer-details" class="col-sm-2 col-form-label">City</label>
                    </div>
                    <div class="col-sm-5" className="init-details">
                        <input type="text" class="form-control form-control-sm form-text" placeholder="city" name="buyercity" onChange={handleChange} />
                    </div>
                </div>
                <div class="row">
                    <div className="init-details">
                        <label for="invoice-buyer-details" class="col-sm-2 col-form-label">Country</label>
                    </div>
                    <div class="col-sm-5" className="init-details">
                        <input type="text" class="form-control form-control-sm form-text" placeholder="country" name="buyercountry" onChange={handleChange} />
                    </div>
                </div>
            </div>

            <div id="invoice-seller" className="invoice-init-values">
                <h4 className="invoice-headers">Seller details</h4>
                <div class="row">
                    <div className="init-details">
                        <label for="invoice-seller-details" class="col-sm-2 col-form-label">Company</label>
                    </div>
                    <div class="col-sm-5" className="init-details">
                        <input type="text" class="form-control form-control-sm form-text" placeholder="company" name="sellercompany" onChange={handleChange} />
                    </div>
                </div>

                <div class="row">
                    <div className="init-details">
                        <label for="invoice-seller-details" class="col-sm-2 col-form-label">Name</label>
                    </div>
                    <div class="col-sm-5" className="init-details">
                        <input type="text" class="form-control form-control-sm form-text" placeholder="name" name="sellername" onChange={handleChange} />
                    </div>
                </div>

                <div class="row">
                    <div className="init-details">
                        <label for="invoice-seller-details" class="col-sm-2 col-form-label">Address</label>
                    </div>
                    <div class="col-sm-5" className="init-details">
                        <input type="text" class="form-control form-control-sm form-text" placeholder="address" name="selleraddress" onChange={handleChange} />
                    </div>
                </div>
                <div class="row">
                    <div className="init-details">
                        <label for="invoice-seller-details" class="col-sm-2 col-form-label">City</label>
                    </div>
                    <div class="col-sm-5" className="init-details">
                        <input type="text" class="form-control form-control-sm form-text" placeholder="city" name="sellercity" onChange={handleChange} />
                    </div>
                </div>
                <div class="row">
                    <div className="init-details">
                        <label for="invoice-seller-details" class="col-sm-2 col-form-label">Country</label>
                    </div>
                    <div class="col-sm-5" className="init-details">
                        <input type="text" class="form-control form-control-sm form-text" placeholder="country" name="sellercountry" onChange={handleChange} />
                    </div>
                </div>
            </div>

            <div id="invoice-date" className="invoice-init-values">
                <h4 className="invoice-headers">Other details</h4>
                <div class="row">
                    <div className="init-details">
                        <label for="invoice-date-details" class="col-sm-2 col-form-label">Date&nbsp;Due</label>
                    </div>
                    <div class="col-sm-6" className="init-details">
                        <input type="date" class="form-control form-control-sm form-text" name="datedue" onChange={handleChange} min={0} />
                    </div>
                </div>

                <div class="row">
                    <div className="init-details">
                        <label for="invoice-date-details" class="col-sm-2 col-form-label">Date</label>
                    </div>
                    <div class="col-sm-6" className="init-details">
                        <input type="date" class="form-control form-control-sm form-text" name="date" onChange={handleChange} min={0} />
                    </div>
                </div>

                <div class="row">
                    <div className="init-details">
                        <label for="invoice-date-details" class="col-sm-2 col-form-label">PO&nbsp;Number</label>
                    </div>
                    <div class="col-sm-6" className="init-details">
                        <input type="text" class="form-control form-control-sm form-text" placeholder="123456789" name="POnumber" onChange={handleChange} min={0} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default InvoiceDetails;