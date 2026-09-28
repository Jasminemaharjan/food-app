import React from 'react'

export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner" id='carousel'>
                    <div className="carousel-caption" style={{ zIndex: "10" }}>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search"placeholder="Search"aria-label="Search"/>
                            <button className="btn btn-outline-success text-white" type="submit"> Search</button>
                        </form>
                    </div>
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src="https://images.pexels.com/photos/31094832/pexels-photo-31094832.jpeg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://i.pinimg.com/736x/28/91/7b/28917bc1d2c8c8f564e9049855a4f171.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.pinimg.com/736x/39/79/d0/3979d02efb7859039b06c14afb52f8ea.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
