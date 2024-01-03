/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import blog1 from '../assets/images/blog/blog-1.jpg';
import blog2 from '../assets/images/blog/blog-2.jpg';
import blog3 from '../assets/images/blog/blog-3.jpg';
import blog4 from '../assets/images/blog/blog-4.jpg';
import a6 from '../assets/images/about/a6.jpg';
import video from '../assets/images/about/1.mp4';
import orders from '../assets/images/icons/icon1.png';
import orders1 from '../assets/images/icons/icon2.png';
import orders2 from '../assets/images/icons/icon3.png';
import orders3 from '../assets/images/icons/icon4.png';
import orders4 from '../assets/images/icons/icon5.png';
import mobileImage from '../assets/images/mobileimage.jpg';
import mobile from '../assets/images/logo/mobile.png';

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check the screen width on component mount and when it's resized
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Call the handleResize function initially
    handleResize();

    // Add an event listener to handle screen resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <section className="about-wrapper p-5 d-flex justify-content-center align-items-center">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="shop-details text-center align-items-center">
                <h1 className="text-white">#Know Us</h1>
                <p className="text-white fs-3">Get to know us more</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isMobile ? (
        <section className="about-us p-5">
          <div className="row">
            <div className="col-md-6">
              <img src={a6} alt="" className="img-fluid p-5" />
            </div>
            <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
              <h1>
                <b>Who are we?</b>
              </h1>
              <br />
              <p className="card-text mb-3">
                EpicAttire is more than an online clothing store; it's a vision brought to life. We envision a world where every wardrobe is a collection of epic tales, where fashion isn't just a trend but a testament to the wearer's spirit. <br /> Our goal is to curate a selection that transcends time, blending classic elegance with contemporary flair, ensuring that each piece you choose from EpicAttire becomes a timeless part of your personal narrative.
              </p>
              <p className="card-text">
                EpicAttire is not just about selling clothes; it's about creating an experience. We meticulously handpick every item in our collection, ensuring that it aligns with our commitment to quality, style, and uniqueness. From casual essentials to statement pieces, our range is designed to cater to diverse tastes and preferences.
              </p>
            </div>
          </div>
        </section>
      ) : (
        <>
          <section className="about-us p-5">
            <div className="row">
              <div className="col-md-6">
                <img src={a6} alt="" className="img-fluid p-5" />
              </div>
              <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                <h1>
                  <b>Who are we?</b>
                </h1>
                <br />
                <p className="card-text mb-3">
                  EpicAttire is more than an online clothing store; it's a vision brought to life. We envision a world where every wardrobe is a collection of epic tales, where fashion isn't just a trend but a testament to the wearer's spirit. <br /> Our goal is to curate a selection that transcends time, blending classic elegance with contemporary flair, ensuring that each piece you choose from EpicAttire becomes a timeless part of your personal narrative.
                </p>
                <p className="card-text">
                  EpicAttire is not just about selling clothes; it's about creating an experience. We meticulously handpick every item in our collection, ensuring that it aligns with our commitment to quality, style, and uniqueness. From casual essentials to statement pieces, our range is designed to cater to diverse tastes and preferences.
                </p>
              </div>
            </div>
          </section>

          <section className="about-app p-5">
            <h2 className="fs-1 text-center mb-4">Download our <Link to="/">App</Link></h2>
            <div className="col-12 p-5 col-md-8 mx-auto">
              {/* Render the video for larger screens */}
              <video loop muted autoPlay src={video} className="w-100"></video>
            </div>
          </section>
        </>
      )}

      <section className="abouts p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 d-flex flex-column align-items-center">
              <h1 className="mb-3">What our customers say...</h1>
              <p className="mb-4">Our customers never miss a bit on providing feedback</p>
            </div>
            <div className="col-12 col-md-6 p-3">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={blog1} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Marvel Clein</h5>
                    <p className="card-text mb-3">EpicAttire truly lives up to its name! The attention to detail in their clothing is remarkable. I recently purchased a pair of jeans, and the fit is perfect. What sets EpicAttire apart is the personalized touch - the packaging felt like I was receiving a gift. It's clear they care about their customers' experience. I'll definitely be a repeat customer!</p>
                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 p-3">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={blog2} alt="" className='img-fluid rounded-start' />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Melisa Ivy</h5>
                    <p className="card-text mb-3">I've shopped with EpicAttire multiple times, and each experience has been fantastic. The clothing is on-trend, and the quality is top-notch. I appreciate the transparency in sizing and the detailed product descriptions. Returns are hassle-free.EpicAttire has become my one-stop-shop for updating my wardrobe with stylish essentials.</p>
                    <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 p-3">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={blog3} alt="" className='img-fluid rounded-start' />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Tristian Ann</h5>
                    <p className="card-text mb-3">I've been a loyal customer of EpicAttire for the past year, and I can't get enough of their curated collections. The range of options is impressive, and the website is user-friendly. The only reason I didn't give it five stars is that I'd love to see even more size inclusivity in the future. Nevertheless, EpicAttire is my top choice for stylish and quality clothing.</p>
                    <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 p-3">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={blog4} alt="" className='img-fluid rounded-start' />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Phillip Omosh</h5>
                    <p className="card-text mb-3">EpicAttire exceeded my expectations! The quality of the clothes is outstanding, and the styles are so unique. I recently purchased a dress for a special occasion, and I received countless compliments. The ordering process was seamless, and the shipping was faster than I anticipated. EpicAttire is now my go-to for chic and trendy fashion</p>
                    <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 p-3">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={blog2} alt="" className='img-fluid rounded-start' />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Melisa Ivy</h5>
                    <p className="card-text mb-3">EpicAttire truly lives up to its name! The attention to detail in their clothing is remarkable. I recently purchased a pair of jeans, and the fit is perfect. What sets EpicAttire apart is the personalized touch - the packaging felt like I was receiving a gift. It's clear they care about their customers' experience. I'll definitely be a repeat customer!</p>
                    <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 p-3">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={blog1} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Marvel Clein</h5>
                    <p className="card-text mb-3">I've shopped with EpicAttire multiple times, and each experience has been fantastic. The clothing is on-trend, and the quality is top-notch. I appreciate the transparency in sizing and the detailed product descriptions. Returns are hassle-free.EpicAttire has become my one-stop-shop for updating my wardrobe with stylish essentials.</p>
                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="col-12 p-3">
            <Marquee className='p-2 slide'>
              <div>
                <img src={orders} alt="" className='img-fluid' />
                <p className="card-text mb-2">Fast Orders</p>
              </div>
              <div>
                <img src={orders1} alt="" className='img-fluid' />
                <p className="card-text mb-2">Quick Shipping</p>

              </div>
              <div>
                <img src={orders2} alt="" className='img-fluid' />
                <p className="card-text mb-2">High Saves</p>
              </div>
              <div>
                <img src={orders3} alt="" className='img-fluid' />
                <p className="card-text">24/7 Support</p>
              </div>
              <div>
                <img src={orders4} alt="" className='img-fluid' />
                <p className="card-text">Online Orders</p>
              </div>
            </Marquee>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;




    {/* <section className="about-wrapper p-5 d-flex justify-content-center align-items-center">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="shop-details text-center align-items-center">
              <h1 className="text-white">#Know Us</h1>
              <p className='text-white fs-3'>Get to know us more</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="about-us p-5">
      <div className="row">
        <div className="col-md-6">
          <img src={a6} alt="" className='img-fluid p-5' />
        </div>
        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
          <h1><b>Who are we?</b></h1>
          <br/>
          <p className="card-text mb-3">EpicAttire is more than an online clothing store , it's a vision brought to life. We envision a world where every wardrobe is a collection of epic tales, where fashion isn't just a trend but a testament to the wearer's spirit. <br /> Our goal is to curate a selection that transcends time, blending classic elegance with contemporary flair,ensuring that each piece you choose from EpicAttire becomes a timeless part of your personal narrative.</p>
          <p className="card-text"> EpicAttire is not just about selling clothes ,it's about creating an experience. We meticulously handpick every item in our collection, ensuring that it aligns with our commitment to quality, style, and uniqueness. From casual essentials to statement pieces, our range is designed to cater to diverse tastes and preferences. </p>
        </div>
      </div>
    </section>

    <section className="about-app p-5">
      <h2 className='fs-1 text-center mb-4' >Download our <Link>App</Link></h2>
      <div className="col-12 p-5 col-md-8 mx-auto">
        {isMobile ? (
          // Render a mobile-friendly video or image here
          <div className='mb-3'>
           <img src={mobile} alt="Mobile Image"  width="200px" height="300px" />
           <Link to='https://play.google.com/store/games?hl=en_US&gl=US' target='_blank'>
          <img src={playstore} alt="" />
           </Link>
          </div>
        
        ) : (
          // Render the video for larger screens
          <video loop muted autoPlay src={video} className='w-100'></video>
        )}
      </div>
    </section>

    <section className="abouts p-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 d-flex flex-column align-items-center">
            <h1 className='mb-3'>What our customers say...</h1>
            <p className='mb-4'>Our customers never miss a bit on providing feedback</p>
          </div>
          <div className="col-12 col-md-6 p-3">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={blog1} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Marvel Clein</h5>
                    <p className="card-text mb-3">EpicAttire truly lives up to its name! The attention to detail in their clothing is remarkable. I recently purchased a pair of jeans, and the fit is perfect. What sets EpicAttire apart is the personalized touch - the packaging felt like I was receiving a gift. It's clear they care about their customers' experience. I'll definitely be a repeat customer!</p>
                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 p-3">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={blog2} alt="" className='img-fluid rounded-start' />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Melisa Ivy</h5>
                    <p className="card-text mb-3">I've shopped with EpicAttire multiple times, and each experience has been fantastic. The clothing is on-trend, and the quality is top-notch. I appreciate the transparency in sizing and the detailed product descriptions. Returns are hassle-free.EpicAttire has become my one-stop-shop for updating my wardrobe with stylish essentials.</p>
                    <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 p-3">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={blog3} alt="" className='img-fluid rounded-start' />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Tristian Ann</h5>
                    <p className="card-text mb-3">I've been a loyal customer of EpicAttire for the past year, and I can't get enough of their curated collections. The range of options is impressive, and the website is user-friendly. The only reason I didn't give it five stars is that I'd love to see even more size inclusivity in the future. Nevertheless, EpicAttire is my top choice for stylish and quality clothing.</p>
                    <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 p-3">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={blog4} alt="" className='img-fluid rounded-start' />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Phillip Omosh</h5>
                    <p className="card-text mb-3">EpicAttire exceeded my expectations! The quality of the clothes is outstanding, and the styles are so unique. I recently purchased a dress for a special occasion, and I received countless compliments. The ordering process was seamless, and the shipping was faster than I anticipated. EpicAttire is now my go-to for chic and trendy fashion</p>
                    <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 p-3">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={blog2} alt="" className='img-fluid rounded-start' />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Melisa Ivy</h5>
                    <p className="card-text mb-3">EpicAttire truly lives up to its name! The attention to detail in their clothing is remarkable. I recently purchased a pair of jeans, and the fit is perfect. What sets EpicAttire apart is the personalized touch - the packaging felt like I was receiving a gift. It's clear they care about their customers' experience. I'll definitely be a repeat customer!</p>
                    <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 p-3">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={blog1} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Marvel Clein</h5>
                    <p className="card-text mb-3">I've shopped with EpicAttire multiple times, and each experience has been fantastic. The clothing is on-trend, and the quality is top-notch. I appreciate the transparency in sizing and the detailed product descriptions. Returns are hassle-free.EpicAttire has become my one-stop-shop for updating my wardrobe with stylish essentials.</p>
                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="col-12 p-3">
            <Marquee className='p-2 slide'>
              <div>
                <img src={orders} alt="" className='img-fluid' />
                <p className="card-text mb-2">Fast Orders</p>
              </div>
              <div>
                <img src={orders1} alt="" className='img-fluid' />
                <p className="card-text mb-2">Quick Shipping</p>

              </div>
              <div>
                <img src={orders2} alt="" className='img-fluid' />
                <p className="card-text mb-2">High Saves</p>
              </div>
              <div>
                <img src={orders3} alt="" className='img-fluid' />
                <p className="card-text">24/7 Support</p>
              </div>
              <div>
                <img src={orders4} alt="" className='img-fluid' />
                <p className="card-text">Online Orders</p>
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  </>;
}

export default about */}