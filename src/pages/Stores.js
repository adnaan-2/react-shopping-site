import React from "react";

function Stores(){
    return(
        <div className="section mx-5 my-5">
            <div className="testimonial-heading">
                    <h1>Our Stores</h1>
                </div>
        <div className="row">
            <div className="col mx-2 span testimonial-box-product">
                <h1>Islamabad</h1>
                <img src="/images/isb.jfif" alt="Ring" style={{ maxWidth: '100%' }}/></div>
            <div className="col mx-2 span testimonial-box-product">
            <h1>Lahore</h1>
            <img src="/images/lah.jfif" alt="Ring" style={{ maxWidth: '100%' }}/>
            </div>
            <div className="col mx-2 span testimonial-box-product">
            <h1>Multan</h1>
            <img src="/images/mul.jfif" alt="Ring" style={{ maxWidth: '100%' }}/>
            </div>

        </div>
        <div className="row my-3">
            <div className="col mx-2 span testimonial-box-product">
            <h1>Quetta</h1>
            <img src="/images/lah.jfif" alt="Ring" style={{ maxWidth: '100%' }}/>
            </div>
            <div className="col mx-2 span testimonial-box-product">
            <h1>Hyderabad</h1>
            <img src="/images/hyd.jfif" alt="Ring" style={{ maxWidth: '100%' }}/>
            </div>
            <div className="col mx-2 span testimonial-box-product">
            <h1>Karachi</h1>
            <img src="/images/kar.jfif" alt="Ring" style={{ maxWidth: '100%' }}/>
            </div>
        </div>
        </div>
    );
}

export default Stores;