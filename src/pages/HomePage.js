import React from 'react';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="row">
            <div className="col-7 p-5 mt-5">
                <h1 style={{ fontSize: '4rem', color: 'green' }}>
                    Style which makes your personality better and builds strong bonds as well.
                </h1>
                <Link to="/stores">
                <button className="btn btn-outline-success mx-2 my-4 p-2.5" type="submit">
                    Shop Now
                </button>
                </Link>
            </div>
            <div className="col-5 img">
                <img src="/images/ring.jfif" alt="Ring" />
            </div>
            <div className="row my-4 mt-4 px-5">
                <div className="testimonial-heading">
                    <h1>Luxury Products</h1>
                </div>
                <div className="col-4 product span testimonial-box-product">
                    <p className="font">Children</p>
                    <img src="/images/children.jfif" alt="Children's products" style={{ maxWidth: '100%' }} />
                    <Link to="/categories/kids">
                    <button className="add-to-cart">Explore</button>
                    </Link>
                </div>
                <div className="col-4 span product testimonial-box-product">
                    <p className="font">Men</p>
                    <img src="/images/gents.jfif" alt="Men's products" style={{ maxWidth: '100%' }} />
                    <Link to="/categories/men">
                    <button className="add-to-cart">Explore</button>
                    </Link>
                </div>
                <div className="col-4 product span testimonial-box-product">
                    <p className="font">Women</p>
                    <img src="/images/women.jfif" alt="Women's products" style={{ maxWidth: '100%' }} />
                    <Link to="/categories/women">
                    <button className="add-to-cart">Explore</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
