import React from 'react'

const Currency = () => {
    return (
        <>
            <div id="currency-box">
                <label class="form-label">Choose a currency</label>
                <div class="d-grid gap-2 d-md-block">
                    <button type="button" class="btn btn-secondary btn-sm">USD ($)</button>
                    <button type="button" class="btn btn-secondary btn-sm">AUD ($)</button>
                    <button type="button" class="btn btn-secondary btn-sm">NZD ($)</button>
                    <button type="button" class="btn btn-secondary btn-sm">EUR (&euro;)</button>
                </div>
            </div>
        </>
    );
}

export default Currency;
