import React from 'react'

import footerLogo from './../assets/img/logo/msitm-logo-footer.svg';
import playStore from './../assets/img/svg/footer/play-store.svg';
import appleStore from './../assets/img/svg/footer/apple-store.svg';
import locationIcn from './../assets/img/svg/footer/location.svg';
import phoneIcn from './../assets/img/svg/footer/phone.svg';
import mailIcn from './../assets/img/svg/footer/email.svg';
import fbIcn from './../assets/img/svg/footer/facebook.svg';
import youtubeIcn from './../assets/img/svg/footer/youtube.svg';
import twitterIcn from './../assets/img/svg/footer/twitter.svg';
import instaIcn from './../assets/img/svg/footer/instagram.svg';

function footer() {
  return (
    <div className='footer-sec'>
      <div className="footer-cta-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 left">
              <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Don't let your STEM degree<br /> go to waste!</h2>
              <a href="" className="main-btn" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">Apply Now</a>
            </div>
            <div className="col-lg-6 col-12 right"></div>
          </div>
        </div>
      </div>
      <div className="footer-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12 logo-div" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">
              <div className="logo-img-div">
                <img src={footerLogo} alt="" className='img-fluid' />
              </div>
              <div className="newsletter-div">
                <h6>Join Our Newsletter</h6>
                <p className="main-para">Be update with our news and updates</p>
                <form action="">
                  <input type="email" className='newsletter' placeholder='Enter Email Address' />
                  <button>Submit</button>
                </form>
              </div>
              <div className="download-app">
                <h6>Download Our App Now</h6>
                <div className="app-sec">
                  <a href="">
                    <img src={playStore} alt="" className='img-fluid' />
                  </a>
                  <a href="">
                    <img src={appleStore} alt="" className='img-fluid' />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 footer-nav ps-md-5" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400">
              <h4>Usefull Links</h4>
              <ul>
                <li>
                  <a href="">
                    Home
                  </a>
                </li>
                <li>
                  <a href="">
                    Programe
                  </a>
                </li>
                <li>
                  <a href="">
                    MSITM Mentoring
                  </a>
                </li>
                <li>
                  <a href="">
                    Mentoring
                  </a>
                </li>
                <li>
                  <a href="">
                    News & Updates
                  </a>
                </li>
                <li>
                  <a href="">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 col-12 footer-nav mt-lg-0 mt-md-5 " data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600">
              <h4>Usefull Links</h4>
              <ul>
                <li>
                  <a href="">
                    Technology
                  </a>
                </li>
                <li>
                  <a href="">
                    Management
                  </a>
                </li>
                <li>
                  <a href="">
                    Leadership
                  </a>
                </li>
                <li>
                  <a href="">
                    Mentorship
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-12 contact-details mt-lg-0 mt-md-5 ps-md-5" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="800">
              <div className="contact">
                <h4>Contact Details</h4>
                <div className="items">
                  <a href="">
                    <img src={locationIcn} alt="" className='img-fluid location' />
                    <p>Lorem Ipsum is simply dummy text of the printing and</p>
                  </a>
                  <a href="">
                    <img src={phoneIcn} alt="" className='img-fluid' />
                    <p>+(570) 1231 456 748</p>
                  </a>
                  <a href="">
                    <img src={mailIcn} alt="" className='img-fluid' />
                    <p>info@msitmcoach.com</p>
                  </a>
                </div>
              </div>
              <div className="social-icns mt-md-5">
                <div className="items">
                  <h4>Follow Us On</h4>
                  <div className="icons">
                    <a href="">
                      <img src={fbIcn} alt="" className='img-fluid' />
                    </a>
                    <a href="">
                      <img src={youtubeIcn} alt="" className='img-fluid' />
                    </a>
                    <a href="">
                      <img src={twitterIcn} alt="" className='img-fluid' />
                    </a>
                    <a href="">
                      <img src={instaIcn} alt="" className='img-fluid' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p className='main-para text-center'>© 2024 MSITMCoaching. All Right Reserved.</p>
      </div>
    </div>
  )
}

export default footer
