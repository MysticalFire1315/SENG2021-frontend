import React from "react";

const Carousel = () => {
    return (
        <div id="carouselExampleIndicators" class="carousel slide carousel-fade carousel-dark" data-bs-ride="true">
            <div class="carousel-indicators carousel-custom">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="carousel-caption d-none d-md-block">
                        <h2 style={{
                            color: "#243762", fontFamily: "Trebuchet MS, Lucida Sans Unicode"
                        }}>&quot;I never thought that invoice transactions could be made so simple!&quot;</h2>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h4 style={{
                            color: "#243762", fontFamily: "Trebuchet MS, Lucida Sans Unicode"
                        }}>Ada Lovelace</h4>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="carousel-caption d-none d-md-block">
                        <h2 style={{
                            color: "#243762", fontFamily: "Trebuchet MS, Lucida Sans Unicode"
                        }}>&quot;From creating invoices for me, letting me store them, saving them for later. What else can I say?&quot;</h2>
                        <br></br>
                        <br></br>
                        <h4 style={{
                            color: "#243762", fontFamily: "Trebuchet MS, Lucida Sans Unicode"
                        }}>John Smith</h4>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="carousel-caption d-none d-md-block">
                        <h2 style={{
                            color: "#243762", fontFamily: "Trebuchet MS, Lucida Sans Unicode"
                        }}>&quot;They always respond so quickly to any concerns I have. That&apos;s always great.&quot;</h2>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h4 style={{
                            color: "#243762", fontFamily: "Trebuchet MS, Lucida Sans Unicode"
                        }}>Bill Jones</h4>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );

}

export default Carousel;