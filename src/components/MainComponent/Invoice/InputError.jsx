import React from "react";
import Image from "next/image";

const InputError = (props) => {
    return (
        <div className="error-message">
            <div class="alert alert-danger alert-dismissible fade show border border-danger" role="alert">
                <Image className="error-image" src="/error.png" alt="error.png" width={21} height={21} style={{ float: "left", marginRight: "10px" }} />
                <strong>{props.violation}</strong>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
    );
}

export default InputError;