import React from 'react';

function About() {
  return (
    <div>
    

      {/* Testimonials Section */}
      <section id="testimonials mx-5">
        <div className="testimonial-heading">
          
          <h1>About Us</h1>
          <span>Comments</span>
        </div>
        <div className="testimonial-box-container">
          {/* Testimonial 1 */}
          <div className="testimonial-box">
            <div className="box-top">
              <div className="profile">
                <div className="profile-img">
                <img src={`${process.env.PUBLIC_URL}/images/review.jpg`} alt="J.K Rowling" />
                </div>
                <div className="name-user">
                  <strong>Touseeq Ijaz</strong>
                  <span>@touseeqijazweb</span>
                </div>
              </div>
              <div className="reviews">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
            </div>
            <div className="client-comment">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="testimonial-box">
            <div className="box-top">
              <div className="profile">
                <div className="profile-img">
                <img src={`${process.env.PUBLIC_URL}/images/review.jpg`} alt="J.K Rowling" />
                </div>
                <div className="name-user">
                  <strong>J.K Rowling</strong>
                  <span>@jkrowling</span>
                </div>
              </div>
              <div className="reviews">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
            <div className="client-comment">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="testimonial-box">
            <div className="box-top">
              <div className="profile">
                <div className="profile-img">
                <img src={`${process.env.PUBLIC_URL}/images/review.jpg`} alt="J.K Rowling" />
                </div>
                <div className="name-user">
                  <strong>Harry Potter</strong>
                  <span>@DanielRedclief</span>
                </div>
              </div>
              <div className="reviews">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
            </div>
            <div className="client-comment">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            </div>
          </div>

          {/* Testimonial 4 */}
          <div className="testimonial-box">
            <div className="box-top">
              <div className="profile">
                <div className="profile-img">
                <img src={`${process.env.PUBLIC_URL}/images/review.jpg`} alt="J.K Rowling" />
                </div>
                <div className="name-user">
                  <strong>Oliva</strong>
                  <span>@Olivaadward</span>
                </div>
              </div>
              <div className="reviews">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
            </div>
            <div className="client-comment">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
