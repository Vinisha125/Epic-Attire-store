/* eslint-disable no-unused-vars */
import React from 'react'
import b1 from '../assets/images/blog/b1.jpg'
import b6 from '../assets/images/blog/b6.jpg'
import b2 from '../assets/images/blog/b2.jpg'
import b3 from '../assets/images/blog/b3.jpg'
import b4 from '../assets/images/blog/b4.jpg'
import b5 from '../assets/images/blog/b5.jpg'
import b7 from '../assets/images/blog/b7.jpg'

const blog = () => {
  return <>
  <section className="blog-wrapper p-5">
    <div className="container-xxl">
      <div className="row">
      <div className="col-12">
          <div className="shop-details text-center align-items-center">
            <h1 className="text-white">#Read More</h1>
            <p className='text-white fs-3'>Get to know what our trusted customers say...</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="blogs p-5">
    <div className="container-xxl container">
      <div className="row">
        <div className="d-flex flex-column align-items-center">
          <h1 className='mb-3'>Explore more in our library</h1>
          <p className='mb-4'>Why we have trending Outfits Everywhere</p>
        </div>
        <div className="col-12 p-5">
          <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={b1} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <br/><br/>
                <h5 className="card-title">Marvel Clein</h5>
                <p className="card-text">EpicAttire truly lives up to its name! The attention to detail in their clothing is remarkable. I recently purchased a pair of jeans, and the fit is perfect. What sets EpicAttire apart is the personalized touch - the packaging felt like I was receiving a gift. It's clear they care about their customers' experience. I'll definitely be a repeat customer!</p>
                <br/>
                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
              </div>
              </div>
           
             </div>
          </div>
        </div>
        <div className="col-12 p-5">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={b2} alt="" className='img-fluid rounded-start' />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">Melisa Ivy</h5>
                      <p className="card-text">I've shopped with EpicAttire multiple times, and each experience has been fantastic. The clothing is on-trend, and the quality is top-notch. I appreciate the transparency in sizing and the detailed product descriptions. Returns are hassle-free.EpicAttire has become my one-stop-shop for updating my wardrobe with stylish essentials.</p>
                      <br/>
                      <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 p-5">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={b3} alt="" className='img-fluid rounded-start' />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <br/><br/>
                      <h5 className="card-title">Tristian Ann</h5>
                      <p className="card-text">I've been a loyal customer of EpicAttire for the past year, and I can't get enough of their curated collections. The range of options is impressive, and the website is user-friendly. The only reason I didn't give it five stars is that I'd love to see even more size inclusivity in the future. Nevertheless, EpicAttire is my top choice for stylish and quality clothing.</p>
                      <br/>
                      <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 p-5">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={b4} alt="" className='img-fluid rounded-start' />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <br/><br/>
                      <h5 className="card-title">Phillip Omosh</h5>
                      <p className="card-text">EpicAttire exceeded my expectations! The quality of the clothes is outstanding, and the styles are so unique. I recently purchased a dress for a special occasion, and I received countless compliments. The ordering process was seamless, and the shipping was faster than I anticipated. EpicAttire is now my go-to for chic and trendy fashion</p>
                      <br/>
                      <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 p-5">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={b2} alt="" className='img-fluid rounded-start' />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      
                      <h5 className="card-title">Melisa Ivy</h5>
                      <p className="card-text">I've shopped with EpicAttire multiple times, and each experience has been fantastic. The clothing is on-trend, and the quality is top-notch. I appreciate the transparency in sizing and the detailed product descriptions. Returns are hassle-free.EpicAttire has become my one-stop-shop for updating my wardrobe with stylish essentials.</p>
                      <br/>
                      <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </div>
  </section>
  </>;
}

export default blog