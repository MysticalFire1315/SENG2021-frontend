import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar">
            <button type="button">Elegant Builders</button>
            <div className="navbarDropdown">
                <ul>
                    <li className="nav-item active">
                        <a className="nav-link" href="/#">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/#">
                            Need Help?
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link"
                            href="/#"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Other Sites
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;