import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="newsletter">
          <h2>Subscribe Our Newsletter</h2>
          <div className="form">
            <input className="form-control" placeholder="Email here" />
            <button className="btn btn-success">Submit</button>
          </div>
        </div>
        <div className="container footer-menu">
          <div className="f-menu">
            <a href="/terms-of-use">Terms of use</a>
            <a href="/privacy-policy">Privacy policy</a>
            <a href="/cookies">Cookies</a>
            <a href="/help">Help</a>
            <a href="/faqs">FQAs</a>
          </div>
        </div>
        <div className="container copyright">
          <div className="row">
            <div className="col-md-6 full-height-center">
              <div>
                <p style={{ color: "white" }}>Admin & Developer</p>
                <h1 style={{ color: "white" }}>SE. Adnan Khalil</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
