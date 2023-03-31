import React from 'react';
const InvoiceDetails = () => {
    return (
        <>
            <div id="invoice-buyer" className="invoice-init-values">
                <h4 className="invoice-headers">Buyer details</h4>
                <div class="row">
                    <div className="init-details">
                        <label for="invoice-buyer-details" class="col-sm-2 col-form-label">Company</label>
                    </div>
                    <div class="col-sm-5" className="init-details">
                        <input type="text" class="form-control form-control-sm form-text" aria-label="invoice-detail-1" placeholder="company" />
                    </div>
                </div>

                <div class="row">
                    <div className="init-details">
                        <label for="invoice-buyer-details" class="col-sm-2 col-form-label">Name</label>
                    </div>
                    <div class="col-sm-5" className="init-details">
                        <input type="text" class="form-control form-control-sm form-text" aria-label="invoice-detail-1" placeholder="name" />
                    </div>
                </div>

                <div class="row">
                    <div className="init-details">
                        <label for="invoice-buyer-details" class="col-sm-2 col-form-label">Address</label>
                    </div>
                    <div class="col-sm-5" className="init-details">
                        <input type="text" class="form-control form-control-sm form-text" aria-label="invoice-detail-1" placeholder="address" />
                    </div>
                </div>
                <div class="row">
                    <div className="init-details">
                        <label for="invoice-buyer-details" class="col-sm-2 col-form-label">City</label>
                    </div>
                    <div class="col-sm-5" className="init-details">
                        <input type="text" class="form-control form-control-sm form-text" aria-label="invoice-detail-1" placeholder="city" />
                    </div>
                </div>
                <div class="row">
                    <div className="init-details">
                        <label for="invoice-buyer-details" class="col-sm-2 col-form-label">Country</label>
                    </div>
                    <div class="col-sm-5" className="init-details">
                        <input type="text" class="form-control form-control-sm form-text" aria-label="invoice-detail-1" placeholder="country" />
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
                        <input type="text" class="form-control form-control-sm form-text" aria-label="invoice-detail-1" placeholder="company" />
                    </div>
                </div>

                <div class="row">
                    <div className="init-details">
                        <label for="invoice-seller-details" class="col-sm-2 col-form-label">Name</label>
                    </div>
                    <div class="col-sm-5" className="init-details">
                        <input type="text" class="form-control form-control-sm form-text" aria-label="invoice-detail-1" placeholder="name" />
                    </div>
                </div>

                <div class="row">
                    <div className="init-details">
                        <label for="invoice-seller-details" class="col-sm-2 col-form-label">Address</label>
                    </div>
                    <div class="col-sm-5" className="init-details">
                        <input type="text" class="form-control form-control-sm form-text" aria-label="invoice-detail-1" placeholder="address" />
                    </div>
                </div>
                <div class="row">
                    <div className="init-details">
                        <label for="invoice-seller-details" class="col-sm-2 col-form-label">City</label>
                    </div>
                    <div class="col-sm-5" className="init-details">
                        <input type="text" class="form-control form-control-sm form-text" aria-label="invoice-detail-1" placeholder="city" />
                    </div>
                </div>
                <div class="row">
                    <div className="init-details">
                        <label for="invoice-seller-details" class="col-sm-2 col-form-label">Country</label>
                    </div>
                    <div class="col-sm-5" className="init-details">
                        <input type="text" class="form-control form-control-sm form-text" aria-label="invoice-detail-1" placeholder="country" />
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
                        <input type="date" class="form-control form-control-sm form-text" aria-label="invoice-detail-1" placeholder="deet 1" />
                    </div>
                </div>

                <div class="row">
                    <div className="init-details">
                        <label for="invoice-date-details" class="col-sm-2 col-form-label">Date</label>
                    </div>
                    <div class="col-sm-6" className="init-details">
                        <input type="date" class="form-control form-control-sm form-text" aria-label="invoice-detail-1" placeholder="deet 1" />
                    </div>
                </div>

                <div class="row">
                    <div className="init-details">
                        <label for="invoice-date-details" class="col-sm-2 col-form-label">PO&nbsp;Number</label>
                    </div>
                    <div class="col-sm-6" className="init-details">
                        <input type="text" class="form-control form-control-sm form-text" aria-label="invoice-detail-1" placeholder="123456" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default InvoiceDetails;