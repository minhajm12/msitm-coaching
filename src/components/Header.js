import React from 'react'
import { useEffect } from 'react';

import HeaderLogo from './../assets/img/logo/msitm-logo-header.svg';
import menubar from './../assets/img/svg/menu-bars.svg';

function Header() {



    useEffect(() => {
        const headerHeight = document.querySelector('.header-main').offsetHeight;
        document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
        console.log(headerHeight);
    }, []);



    return (

        <div className='header-main' id='header-main'>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid d-flex">
                    <a href="" className='header-logo' data-aos="fade-left" data-aos-duration="1000">
                        <img src={HeaderLogo} alt="" />
                    </a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        {/* <span class="navbar-toggler-icon"></span> */}
                        <img src={menubar} alt=""  className='img-fluid'/>
                    </button>

                    <div class="offcanvas offcanvas-start d-lg-none d-md-block" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                        <div class="offcanvas-header">
                            <a href="">
                                <img src={HeaderLogo} alt="" />
                            </a>
                            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                            <a class="nav-link" href="#">Programs</a>
                            <a class="nav-link" href="#">Hire From MSITM</a>
                            <a class="nav-link" href="#">Mentoring</a>
                            <a class="nav-link" href="#">Blog</a>
                            <a class="main-btn" href="#">Free Consultation</a>
                        </div>
                    </div>

                    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500" class="nav-link active" aria-current="page" href="#">Home</a>
                            <a data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400" class="nav-link" href="#">Programs</a>
                            <a data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300" class="nav-link" href="#">Hire From MSITM</a>
                            <a data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200" class="nav-link" href="#">Mentoring</a>
                            <a data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100" class="nav-link" href="#">Blog</a>
                            <a data-aos="fade-right" data-aos-duration="1000" data-aos-delay="00" class="main-btn" href="#">Free Consultation</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Header
