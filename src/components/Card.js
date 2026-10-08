import React from 'react'

export default function Card() {
    return (
        <div className="card mt-3" style={{ width: "18rem" }}>

            <img
                src="https://i.pinimg.com/1200x/14/c6/6d/14c66d263189d84d584865bc7d8160be.jpg"
                className="card-img-top"
                alt="food"
                style={{ height: "240px", objectFit: "cover" }}
            />

            <div className="card-body">

                <h5 className="card-title">Card title</h5>

                <p className="card-text">
                    This is some imp text.
                </p>

                <div className="d-flex align-items-center">

                    <select className="m-2 bg-success rounded">
                        {Array.from(Array(5), (e, i) => {
                            return (
                                <option key={i + 1} value={i + 1}>
                                    {i + 1}
                                </option>
                            );
                        })}
                    </select>

                    <select className="m-2 bg-success rounded">
                        <option value="half">Half</option>
                        <option value="medium">Medium</option>
                        <option value="full">Full</option>
                    </select>

                    <div className="ms-2">
                        Total Price
                    </div>

                </div>

            </div>
        </div>
    )
}