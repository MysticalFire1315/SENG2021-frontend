import React from "react";

const NavHeader = () => {
    return (
        <nav class="navbar navbar-expand-md navbar-dark bg-primary">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav nav-items">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">Home <span class="sr-only"></span></a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Other Sites
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="/">Render My Invoice</a>
                            <a class="dropdown-item" href="/">Save My Invoice</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="/">See Examples</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Need Help?</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavHeader;