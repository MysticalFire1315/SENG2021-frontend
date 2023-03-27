import React from "react";

const NavHeader = () => {
    return (
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
            <a class="navbar-brand" href="https://www.google.com/search?q=elegant&biw=2400&bih=1166&sxsrf=APwXEdeS44Y8U_hf51NB-N2vpX0rZMYDkg%3A1679812344919&ei=-OYfZPTcN-jg2roP2I2ryAk&ved=0ahUKEwj0uO7Q_Pj9AhVosFYBHdjGCpkQ4dUDCA8&uact=5&oq=elegant&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIECCMQJzIKCAAQigUQsQMQQzINCAAQigUQsQMQgwEQQzINCAAQigUQsQMQgwEQQzIHCAAQigUQQzIHCAAQigUQQzIHCAAQigUQQzIHCAAQigUQQzIHCAAQigUQQzIHCAAQigUQQ0oECEEYAFAAWABgsgJoAHABeACAAdgBiAHYAZIBAzItMZgBAKABAqABAcABAQ&sclient=gws-wiz-serp">Elegant E-invoices</a>
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
                        <a class="nav-link" href="/need-help">Need Help?</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavHeader;