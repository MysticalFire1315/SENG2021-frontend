import React from "react"

const Footer = () => {
    return (
        <footer className="footer">
            <nav class="navbar navbar-footer navbar-expand-md navbar-dark bg-dark">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav footer-items">
                        <li class="nav-item active">
                            <a class="nav-link" href="https://www.google.com/">Google</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">Place1</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">Place2</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">Place3</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">Place4</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <nav class="navbar navbar-footer navbar-expand-md navbar-dark bg-dark">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse footer-copyright" id="navbarNav">
                    <p>&copy; Elegant Builders 2023-2023</p>
                </div>
            </nav>
        </footer>
    );
}
export default Footer;