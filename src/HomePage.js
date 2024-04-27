// import React from 'react';
// import React, { useState } from 'react';
import React, { useEffect } from 'react';
import Typed from 'typed.js';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '@fancyapps/fancybox/dist/jquery.fancybox.min.css';
import '@fancyapps/fancybox';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


import Header from './components/Header';
import Footer from './components/Footer';



import playBtnImg from './assets/img/svg/play-btn.svg';
import bannerImg1 from './assets/img/banner/banner-img-1.jpg';
import bannerImg2 from './assets/img/banner/banner-img-2.jpg';
import bannerImg3 from './assets/img/banner/banner-img-3.jpg';
import bannerImg4 from './assets/img/banner/banner-img-4.jpg';
import bannerTextImg from './assets/img/banner-text-img.jpg';
import abtImg1 from './assets/img/abt-img/abt-img-1.jpg';
import abtImg2 from './assets/img/abt-img/abt-img-2.jpg';
import mentorshipImg1 from './assets/img/mentorship-img/mentorship-img-1.jpg';
import mentorshipImg2 from './assets/img/mentorship-img/mentorship-img-2.jpg';
import mentorshipImgAlt1 from './assets/img/mentorship-img/mentorship-img-alt-1.jpg';
import mentorshipImgAlt2 from './assets/img/mentorship-img/mentorship-img-alt-2.jpg';
import mentorship_Icn_1 from './assets/img/svg/mentorship-icn-1.svg';
import mentorship_Icn_2 from './assets/img/svg/mentorship-icn-2.svg';
import mentorship_Icn_3 from './assets/img/svg/mentorship-icn-3.svg';
import mentorship_Icn_4 from './assets/img/svg/mentorship-icn-4.svg';
import apart_icon_1 from './assets/img/svg/apart-points/apart-point-1.svg';
import apart_icon_2 from './assets/img/svg/apart-points/apart-point-2.svg';
import apart_icon_3 from './assets/img/svg/apart-points/apart-point-3.svg';
import apart_icon_4 from './assets/img/svg/apart-points/apart-point-4.svg';
import apart_icon_5 from './assets/img/svg/apart-points/apart-point-5.svg';
import apart_icon_6 from './assets/img/svg/apart-points/apart-point-6.svg';
import apart_icon_7 from './assets/img/svg/apart-points/apart-point-7.svg';
import apart_icon_8 from './assets/img/svg/apart-points/apart-point-8.svg';
import flexibleLearnImg from './assets/img/flexible-learning.jpg';
import flexibleRotateArrow from './assets/img/svg/flxible-rotate-arrow.svg';
import flexibleRotateCircle from './assets/img/svg/flxible-rotate-circle.svg';
import facultyImg from './assets/img/facualty-img.png';
import expertmentorImg from './assets/img/expert-mentor-img.png';
import testimonialThumb1 from './assets/img/testimonial/testimonial-tumb-1.jpg';
import testimonialThumb2 from './assets/img/testimonial/testimonial-tumb-2.jpg';
import testimonialThumb3 from './assets/img/testimonial/testimonial-tumb-3.jpg';
import testimonialThumb4 from './assets/img/testimonial/testimonial-tumb-4.jpg';
import testimonialPlayBtn from './assets/img/svg/play-btn-testimonial.svg';
// import overlayClose from './assets/img/svg/close-btn.svg';
import WritenTesti1 from './assets/img/testimonial/written-test-1.jpg';
import WritenTesti2 from './assets/img/testimonial/written-test-2.jpg';
import WritenTesti3 from './assets/img/testimonial/written-test-3.jpg';
import placementSecImg from './assets/img/placement-sec-img.jpg';
import placementIcn1 from './assets/img/svg/placement-icn-1.svg';
import placementIcn2 from './assets/img/svg/placement-icn-2.svg';
import placementIcn3 from './assets/img/svg/placement-icn-3.svg';
import placementIcn4 from './assets/img/svg/placement-icn-4.svg';
import placedStudent1 from './assets/img/placement/placed-student-1.jpg';
import placedStudent2 from './assets/img/placement/placed-student-2.jpg';
import placedStudent3 from './assets/img/placement/placed-student-3.jpg';
import placedStudent4 from './assets/img/placement/placed-student-4.jpg';
import placedStudent5 from './assets/img/placement/placed-student-5.jpg';
import companies1 from './assets/img/companies/company-1.jpg';
import companies2 from './assets/img/companies/company-2.jpg';
import companies3 from './assets/img/companies/company-3.jpg';
import companies4 from './assets/img/companies/company-4.jpg';
import companies5 from './assets/img/companies/company-5.jpg';
import companies6 from './assets/img/companies/company-6.jpg';
import companies7 from './assets/img/companies/company-7.jpg';
import companies8 from './assets/img/companies/company-8.jpg';
import onlineTraining from './assets/img/online-training.jpg';
import classroomTraining from './assets/img/classroom-training.jpg';
import getStartedIcn1 from './assets/img/svg/get-started-icn-1.svg';
import getStartedIcn2 from './assets/img/svg/get-started-icn-2.svg';
import getStartedIcn3 from './assets/img/svg/get-started-icn-3.svg';
import courseImg1 from './assets/img/course/course-img-1.jpg';
import courseImg2 from './assets/img/course/course-img-2.jpg';
import courseImg3 from './assets/img/course/course-img-3.jpg';
import timeIcn from './assets/img/svg/time.svg';
// import navPrev from './assets/img/svg/nav-prev.svg';
// import navNext from './assets/img/svg/nav-next.svg';
import scndCta from './assets/img/scnd-cta-img.jpg';
import optImg1 from './assets/img/opt/opt-img-1.jpg';
import optImg2 from './assets/img/opt/opt-img-2.jpg';
import optImg3 from './assets/img/opt/opt-img-3.jpg';
import optImg4 from './assets/img/opt/opt-img-4.jpg';
import optImg5 from './assets/img/opt/opt-img-5.jpg';
import optBenefitsImg from './assets/img/opt/opt-benefits-img.jpg';
import optBenefitsImgAlt from './assets/img/opt/opt-benefits-img-alt.jpg';
import optIcn1 from './assets/img/svg/opt-icn-1.svg';
import optIcn2 from './assets/img/svg/opt-icn-2.svg';
import optIcn3 from './assets/img/svg/opt-icn-3.svg';
import optIcn4 from './assets/img/svg/opt-icn-4.svg';
import optIcn5 from './assets/img/svg/opt-icn-5.svg';
import optIcn6 from './assets/img/svg/opt-icn-6.svg';








function HomePage() {

    // const options = {
    //     loop: true,
    //     items: 1, // Set to 1 to display only one item at a time
    //     margin: 20,
    //     nav: true,
    // };
    // const owlRef = useRef(null);

    // const handleDrag = () => {
    //     if (owlRef.current) {
    //         owlRef.current.trigger('stop.owl.autoplay');
    //     }
    // };






    useEffect(() => {
        AOS.init(); // Initialize AOS
      }, []);





    // TYPED JS SCRIPT
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                'Master cutting-edge technology and become a sought-after tech professional?',
                'Develop the leadership skills to inspire and guide teams to success?',
                'Gain the management acumen to navigate complex projects and organizations?'
            ],
            typeSpeed: 30,
            backSpeed: 10,
            backDelay: 2500,
            loop: true
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);







    // VIDEO OVERLAY
    // const [showOverlay, setShowOverlay] = useState(false);
    // const [videoSrc, setVideoSrc] = useState('');

    // const handleVideoClick = (src) => {
    //     setVideoSrc(src);
    //     setShowOverlay(true);
    // };

    // const handleVideoClose = () => {
    //     setShowOverlay(false);
    // };

    // const handleOverlayClick = (event) => {
    //     // Check if the click is outside of the video overlay
    //     if (!event.target.closest('.video-main') && !event.target.closest('.video-overlay')) {
    //         handleVideoClose();
    //     }
    // };
    // console.log(videoSrc);


    return (
        <div>

            <div className='main-banner-sec'>
                <Header />
                <div className="banner-main">
                    <div className="container-fluid">

                        <OwlCarousel
                            className='owl-theme'
                            items={1}
                            loop
                            autoplay
                            autoplayTimeout={5000}
                            margin={80}
                            dots
                            animateIn="animate__slideInRight"
                            animateOut="animate__zoomOut">

                            <div className="item">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 left">
                                        <h1>Land Your Dream Job <br />In Todays's <span className='grade-text'>High Demand</span><br /> Tech Fields<img src={bannerTextImg} alt="" className='img-fluid ms-3' /></h1>
                                        <p>Specialized courses & programs designed by experts to bridge the gap and make you a competitive candidate.</p>
                                        <div className="banner-btns">
                                            <a href="" className='main-btn'>Expore Our Programs</a>
                                            <a href="" className="video-btn">
                                                <img src={playBtnImg} alt="" className='img-fluid' />
                                                Book A Live Class
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 right">
                                        <div className="banner-img-div">
                                            <img src={bannerImg1} alt="" className='img-fluid' />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 left">
                                        <h1>Explore Our Tech, Management & Leadership Programs<img src={bannerTextImg} alt="" className='img-fluid ms-3' /></h1>
                                        <p>We offer a comprehensive suite of programs designed to equip you with the critical skills and knowledge needed for success in tech careers</p>
                                        <div className="banner-btns">
                                            <a href="" className='main-btn'>Discover Your Ideal Program</a>
                                            {/* <a href="" className="video-btn">
                                                <img src={playBtnImg} alt="" className='img-fluid' />
                                                Book A Live Class
                                            </a> */}
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 right">
                                        <div className="banner-img-div">
                                            <img src={bannerImg2} alt="" className='img-fluid' />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 left">
                                        <h1>Personalized <br />Mentorship & Your Guide to <span className='grade-text'> Tech Success</span></h1>
                                        <p>Gain expert guidance, build confidence, and achieve your career goals with our one-on-one mentorship program</p>
                                        <div className="banner-btns">
                                            <a href="" className='main-btn'>More About Mentorship</a>
                                            {/* <a href="" className="video-btn">
                                                <img src={playBtnImg} alt="" className='img-fluid' />
                                                Book A Live Class
                                            </a> */}
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 right">
                                        <div className="banner-img-div">
                                            <img src={bannerImg3} alt="" className='img-fluid' />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 left">
                                        <h1>Launch Your <img src={bannerTextImg} alt="" className='img-fluid ms-3' /><br />Tech Career with <br /><span className='grade-text'>STEM OPT Support</span><br /></h1>
                                        <p>Get the training, experience, and guidance you need to land your dream job after graduation.</p>
                                        <div className="banner-btns">
                                            <a href="" className='main-btn'>Explore STEM OPT Program</a>
                                            {/* <a href="" className="video-btn">
                                                <img src={playBtnImg} alt="" className='img-fluid' />
                                                Book A Live Class
                                            </a> */}
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 right">
                                        <div className="banner-img-div">
                                            <img src={bannerImg4} alt="" className='img-fluid' />
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </OwlCarousel>

                    </div>
                </div>
            </div>

            <div className="main-about_sec">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 left">
                            <div className="img-div">
                                <div className='img-div1'>
                                    <img src={abtImg1} alt="" className='img-fluid' />
                                </div>
                                <div className='img-div2'>
                                    <img src={abtImg2} alt="" className='img-fluid' />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 right">
                            <h2 className="scnd-head">Struggling to translate your academic knowledge into a real-world job?</h2>
                            <p className="main-para">Do you feel your degree didn't fully prepare you for a job? You're not alone. Many graduates lack the hands-on experience and practical skills employers crave. That's where MSITM Coach comes in. We bridge the gap between theoretical knowledge and real-world application, equipping you with the critical skills and confidence to land your dream job.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="typed-sec">
                <div className="typed-main-div">
                    <div className="container">
                        <h2 className='scnd-head'><span className='grade-text'>Are You Ready to</span> <span ref={el} /></h2>
                        <p className="main-para">If so, you've come to the right place. Your dream career starts here. In today's dynamic world, success demands a mastery of technology, adept management skills, and inspiring leadership qualities. At MSITM Coach, we offer a unique blend of technology, management, and leadership programs designed to empower you to achieve your full potential.</p>
                    </div>
                </div>
            </div>

            <div className="programs-sec">
                <div className="container">
                    <div className="top-sec">
                        <h2 className="main-head">Our <span className="grade-text">Programes</span></h2>
                        <p className="main-para">Our programs cater to a variety of career aspirations.</p>
                    </div>
                    <div className="programs-main">

                        <div className="programes-items">
                            <div className="svg-div">
                                <svg width="56" height="58" viewBox="0 0 56 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M50.2123 23.0484L55.3592 24.0631V27.6485H45.4934C45.1834 18.2674 37.4551 10.7312 27.9999 10.7312C18.5448 10.7312 10.8166 18.2674 10.5064 27.6485H0.640625V24.0631L5.7875 23.0484C5.97981 23.0105 6.14035 22.8791 6.21535 22.6981L8.68309 16.7488C8.75832 16.5676 8.73781 16.3607 8.62848 16.1979L5.70465 11.8379L11.6035 5.93902L15.9636 8.86285C16.1267 8.97219 16.3336 8.99258 16.5145 8.91746L22.4638 6.44961C22.6447 6.37449 22.7762 6.21395 22.814 6.02176L23.8289 0.875H32.1712L33.1859 6.02176C33.2238 6.21406 33.3553 6.37461 33.5362 6.44961L39.4855 8.91746C39.6664 8.99258 39.8734 8.97219 40.0364 8.86285L44.3964 5.93891L50.2953 11.8379L47.3715 16.1979C47.2622 16.3609 47.2418 16.5676 47.3169 16.7488L49.7846 22.6981C49.8597 22.8791 50.0203 23.0105 50.2125 23.0484H50.2123ZM27.9998 15.9854C21.442 15.9854 16.0714 21.1651 15.765 27.6484H17.988V25.7134C17.988 25.3897 18.2503 25.1274 18.5739 25.1274C18.8976 25.1274 19.1599 25.3897 19.1599 25.7134V27.6484H21.13V25.7134C21.13 25.3897 21.3923 25.1274 21.716 25.1274C22.0397 25.1274 22.3019 25.3897 22.3019 25.7134V27.6484H24.2721V24.0705L22.3026 22.1009C22.1927 21.991 22.1309 21.8421 22.1309 21.6867V19.2889C22.1309 18.9652 22.3932 18.703 22.7169 18.703C23.0405 18.703 23.3028 18.9652 23.3028 19.2889V21.444L25.2723 23.4136C25.3822 23.5235 25.4439 23.6724 25.4439 23.8278V27.6485H27.4141V22.3739C27.4141 22.2185 27.4759 22.0694 27.5858 21.9596L29.7269 19.8185C29.9555 19.5896 30.3268 19.5896 30.5554 19.8185C30.7843 20.0472 30.7843 20.4182 30.5554 20.647L28.5859 22.6166V27.6484H30.556V23.8277C30.556 23.6723 30.6178 23.5232 30.7277 23.4134L32.6973 21.4439V19.2888C32.6973 18.9651 32.9595 18.7029 33.2832 18.7029C33.6069 18.7029 33.8691 18.9651 33.8691 19.2888V21.6866C33.8691 21.842 33.8074 21.991 33.6975 22.1008L31.7279 24.0704V27.6482H33.698V25.7132C33.698 25.3896 33.9603 25.1273 34.284 25.1273C34.6077 25.1273 34.8699 25.3896 34.8699 25.7132V27.6482H36.8401V25.7132C36.8401 25.3896 37.1023 25.1273 37.426 25.1273C37.7497 25.1273 38.012 25.3896 38.012 25.7132V27.6482H40.2351C39.9287 21.165 34.558 15.9853 28 15.9853L27.9998 15.9854ZM16.4281 34.5791V30.2175C16.4281 29.8919 16.1657 29.6295 15.8435 29.6295C15.6807 29.6295 15.5312 29.696 15.4249 29.8055L11.4386 33.7918H4.81344C4.57461 33.136 3.94777 32.6657 3.20727 32.6657C2.26391 32.6657 1.49656 33.4331 1.49656 34.3764C1.49656 35.3198 2.26391 36.0906 3.20727 36.0906C3.94707 36.0906 4.57356 35.6211 4.81273 34.9645H11.6813C11.8307 34.9645 11.9837 34.908 12.0965 34.7918L15.2589 31.6293V34.3366L8.89098 40.7013H7.3107C7.07129 40.0457 6.44504 39.5785 5.70535 39.5785C4.76188 39.5785 3.99453 40.3426 3.99453 41.2892C3.99453 42.2359 4.76188 42.9999 5.70535 42.9999C6.44574 42.9999 7.07258 42.5297 7.31141 41.8739H9.13356C9.29633 41.8739 9.44586 41.8074 9.55215 41.6979L16.2589 34.9911C16.3719 34.8781 16.4282 34.7286 16.4282 34.5792L16.4281 34.5791ZM21.7166 29.6295C21.391 29.6295 21.1285 29.892 21.1285 30.2175V39.5054L19.1055 41.6247C18.9958 41.741 18.9427 41.8838 18.9427 42.03V49.7369C18.2747 49.9767 17.7966 50.6132 17.7966 51.3644C17.7966 52.3211 18.5707 53.0952 19.5274 53.0952C20.4841 53.0952 21.2614 52.3211 21.2614 51.3644C21.2614 50.6144 20.7828 49.9786 20.1154 49.738V42.2625L22.1086 40.1697C22.2282 40.0634 22.3012 39.9073 22.3012 39.7379V30.2175C22.3012 29.8919 22.0388 29.6295 21.7166 29.6295ZM31.1407 29.6295C30.8184 29.6295 30.556 29.892 30.556 30.2175V39.4954L28.5397 41.5118C28.4267 41.6247 28.367 41.7743 28.367 41.9237V52.8601C28.2464 52.8418 28.1239 52.8294 27.9983 52.8294C27.8738 52.8294 27.7524 52.8417 27.6329 52.8597V41.9237C27.6329 41.7743 27.5731 41.6247 27.4602 41.5118L25.4438 39.4954V30.2175C25.4438 29.8919 25.1814 29.6295 24.8592 29.6295C24.5336 29.6295 24.2713 29.892 24.2713 30.2175V39.7379C24.2713 39.9007 24.3377 40.0468 24.4473 40.1531L26.4603 42.1661V53.3775C25.9114 53.8251 25.5601 54.5067 25.5601 55.2709C25.5601 56.6162 26.653 57.7091 27.9983 57.7091C29.3436 57.7091 30.4398 56.6162 30.4398 55.2709C30.4398 54.5069 30.0887 53.8256 29.5395 53.3779V42.1661L31.5526 40.1531C31.6623 40.0468 31.7286 39.9005 31.7286 39.7379V30.2175C31.7286 29.8919 31.4662 29.6295 31.1407 29.6295ZM27.9982 38.8643C28.3237 38.8643 28.5861 38.6019 28.5861 38.2763V30.2175C28.5861 29.8919 28.3237 29.6295 27.9982 29.6295C27.6759 29.6295 27.4135 29.892 27.4135 30.2175V38.2763C27.4135 38.6019 27.6759 38.8643 27.9982 38.8643ZM43.9132 45.8716V41.9768C43.9264 41.8073 43.8699 41.638 43.7437 41.5116L38.0102 35.7781V30.2173C38.0102 29.8918 37.7478 29.6294 37.4256 29.6294C37.1033 29.6294 36.8409 29.8919 36.8409 30.2173V36.0206C36.8409 36.1834 36.9072 36.3329 37.0136 36.4392L42.7471 42.1693V45.8707C42.0895 46.1094 41.6177 46.7386 41.6177 47.4775C41.6177 48.4243 42.385 49.1882 43.3285 49.1882C44.272 49.1882 45.0393 48.4242 45.0393 47.4775C45.0393 46.7393 44.5705 46.1105 43.9133 45.8714L43.9132 45.8716ZM37.0535 49.7356V42.0598C37.0634 41.9038 37.0102 41.7475 36.894 41.6247L34.871 39.5054V30.2175C34.871 29.8919 34.6086 29.6295 34.2829 29.6295C33.9607 29.6295 33.6983 29.892 33.6983 30.2175V39.7379C33.6983 39.9073 33.7714 40.0634 33.8909 40.1697L35.8873 42.2625V49.7367C35.2182 49.9763 34.738 50.613 34.738 51.3643C34.738 52.321 35.5153 53.095 36.472 53.095C37.4287 53.095 38.2026 52.321 38.2026 51.3643C38.2026 50.612 37.7231 49.9743 37.0532 49.7356H37.0535ZM13.2557 45.8721V42.1661L18.986 36.4393C19.0923 36.333 19.1587 36.1835 19.1587 36.0207V30.2175C19.1587 29.8919 18.8963 29.6295 18.5741 29.6295C18.2518 29.6295 17.9894 29.892 17.9894 30.2175V35.7782L12.2559 41.5118C12.1429 41.6247 12.0832 41.7743 12.0832 41.9237V45.8729C11.4277 46.113 10.9604 46.7408 10.9604 47.4779C10.9604 48.4247 11.7245 49.1886 12.6712 49.1886C13.618 49.1886 14.382 48.4245 14.382 47.4779C14.382 46.7401 13.9118 46.1118 13.2559 45.8722L13.2557 45.8721ZM52.7925 32.6656C52.052 32.6656 51.4231 33.1359 51.1835 33.7917H44.5609L40.5746 29.8054C40.4683 29.6957 40.3188 29.6294 40.156 29.6294C39.8338 29.6294 39.5714 29.8919 39.5714 30.2173V34.5789C39.5714 34.7284 39.6277 34.8779 39.7407 34.9909L46.4475 41.6976C46.5538 41.8073 46.7033 41.8736 46.8661 41.8736H48.6882C48.927 42.5294 49.5538 42.9997 50.2943 42.9997C51.2377 42.9997 52.0051 42.2323 52.0051 41.289C52.0051 40.3456 51.2377 39.5783 50.2943 39.5783C49.5546 39.5783 48.9283 40.0456 48.6889 40.7011H47.1086L40.7407 34.3364V31.6291L43.9031 34.7915C44.0161 34.9078 44.1689 34.9643 44.3183 34.9643H51.1839C51.4241 35.6209 52.0525 36.0903 52.7923 36.0903C53.7357 36.0903 54.5031 35.323 54.5031 34.3762C54.5031 33.4295 53.7357 32.6655 52.7923 32.6655L52.7925 32.6656Z" fill="white" />
                                </svg>

                            </div>
                            <h3>Technnology</h3>
                            <p className="main-para">Deepen your technical expertise with programs in areas like...</p>
                        </div>
                        <div className="programes-items">
                            <div className="svg-div">
                                <svg width="56" height="58" viewBox="0 0 53 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M52.5475 26.873C52.5475 22.1621 51.2912 17.566 48.9088 13.5383C47.8471 14.0738 46.6482 14.3762 45.3803 14.3762C41.0396 14.3762 37.5076 10.8441 37.5076 6.50352C37.5076 5.4207 37.7279 4.38945 38.1252 3.44844C34.4889 1.61445 30.4236 0.646484 26.3221 0.646484C22.2205 0.646484 18.1553 1.61445 14.5189 3.44844C14.9162 4.38828 15.1365 5.4207 15.1365 6.50352C15.1365 10.8453 11.6045 14.3762 7.26387 14.3762C5.9959 14.3762 4.79824 14.0727 3.73535 13.5383C1.35293 17.566 0.0966797 22.1621 0.0966797 26.873C0.0966797 31.5852 1.35293 36.1813 3.73535 40.2078C4.79824 39.6734 5.9959 39.3699 7.26387 39.3699C11.6045 39.3699 15.1365 42.902 15.1365 47.2426C15.1365 48.3254 14.9162 49.3578 14.5189 50.2977C18.1553 52.1305 22.2217 53.0984 26.3221 53.0984C30.4236 53.0984 34.4889 52.1305 38.1252 50.2977C37.7279 49.3578 37.5076 48.3254 37.5076 47.2426C37.5076 42.902 41.0396 39.3699 45.3803 39.3699C46.6482 39.3699 47.8471 39.6734 48.9088 40.2078C51.2912 36.1801 52.5475 31.5852 52.5475 26.873ZM9.27715 44.1875H10.4936V50.2977H9.27715V44.1875ZM6.65566 46.4176H7.8709V50.2977H6.65566V46.4176ZM5.24941 48.6477V50.2977H4.03418V48.6477H5.24941ZM7.8709 43.4844C7.8709 43.0965 8.18613 42.7812 8.57402 42.7812H11.1967C11.5846 42.7812 11.8998 43.0965 11.8998 43.4844V51.0008C11.8998 51.3887 11.5846 51.7039 11.1967 51.7039H3.33105C2.94316 51.7039 2.62793 51.3887 2.62793 51.0008V47.9445C2.62793 47.5566 2.94316 47.2414 3.33105 47.2414H5.24941V45.7145C5.24941 45.3266 5.56465 45.0113 5.95254 45.0113H7.8709V43.4844ZM13.7303 47.2426C13.7303 50.8086 10.8287 53.709 7.26387 53.709C3.69785 53.709 0.797461 50.8086 0.797461 47.2426C0.797461 43.6766 3.69785 40.7762 7.26387 40.7762C10.8287 40.7762 13.7303 43.6766 13.7303 47.2426ZM45.3803 42.0441C45.7693 42.0441 46.0834 42.3594 46.0834 42.7473V43.5957C46.8346 43.7891 47.4545 44.3047 47.7182 44.9996C47.8553 45.3629 47.6725 45.7684 47.3092 45.9066C46.9459 46.0438 46.5404 45.8609 46.4033 45.4977C46.2732 45.1555 45.8701 44.9164 45.4236 44.9164C44.8705 44.9164 44.4041 45.2832 44.4041 45.718C44.4041 45.9336 44.4896 46.1938 44.7299 46.2758L45.6088 46.577C45.6193 46.5816 45.6299 46.5852 45.6404 46.5898L46.7174 47.0176C47.3725 47.2789 47.7639 47.9328 47.7639 48.7672C47.7639 49.748 47.0572 50.5801 46.0834 50.8672V51.7379C46.0834 52.1258 45.7693 52.441 45.3803 52.441C44.9924 52.441 44.6772 52.1258 44.6772 51.7379V50.8895C43.926 50.6961 43.3061 50.1805 43.0436 49.4855C42.9053 49.1223 43.0893 48.7168 43.4514 48.5785C43.8147 48.4414 44.2213 48.6242 44.3584 48.9875C44.4885 49.3297 44.8904 49.5688 45.3369 49.5688C45.89 49.5688 46.3576 49.202 46.3576 48.7672C46.3576 48.5855 46.3072 48.3687 46.1971 48.3242L45.1365 47.9023L44.274 47.6059C43.4982 47.341 42.9979 46.5992 42.9979 45.718C42.9979 44.7371 43.7045 43.9051 44.6772 43.618V42.7473C44.6772 42.3594 44.9924 42.0441 45.3803 42.0441ZM45.3803 40.7762C48.9463 40.7762 51.8467 43.6766 51.8467 47.2426C51.8467 50.8086 48.9463 53.709 45.3803 53.709C41.8154 53.709 38.9139 50.8086 38.9139 47.2426C38.9139 43.6766 41.8154 40.7762 45.3803 40.7762ZM27.5619 31.6473C31.1713 31.6473 34.2639 34.2523 34.9084 37.768C32.4721 39.6969 29.4779 40.7445 26.3221 40.7445C23.1662 40.7445 20.1732 39.6969 17.7357 37.768C18.3803 34.2523 21.4729 31.6473 25.0822 31.6473H27.5619ZM30.8643 25.1902C30.8643 27.6945 28.8264 29.7324 26.3221 29.7324C23.8178 29.7324 21.7799 27.6945 21.7799 25.1902C21.7799 22.6848 23.8178 20.6469 26.3221 20.6469C28.8264 20.6469 30.8643 22.6848 30.8643 25.1902ZM48.0697 3.03359L49.1092 2.675C49.4279 2.56484 49.7795 2.69609 49.9482 2.98789L50.7088 4.30625C50.8775 4.59805 50.8154 4.96836 50.5611 5.18867L49.7303 5.91055C49.7572 6.10742 49.7701 6.30547 49.7701 6.50352C49.7701 6.70273 49.7572 6.90078 49.7303 7.09766L50.5611 7.81953C50.8154 8.03984 50.8775 8.41016 50.7088 8.70195L49.9482 10.0203C49.7795 10.3121 49.4279 10.4434 49.1092 10.3332L48.0697 9.97461C47.7545 10.2184 47.4088 10.4188 47.0408 10.5688L46.8322 11.6492C46.7678 11.9797 46.4783 12.2187 46.142 12.2187H44.6197C44.2822 12.2187 43.9928 11.9797 43.9295 11.6492L43.7197 10.5699C43.3529 10.4199 43.0061 10.2195 42.692 9.97578L41.6514 10.3344C41.3338 10.4445 40.9822 10.3133 40.8135 10.0215L40.0518 8.70312C39.8842 8.41133 39.9463 8.04102 40.2006 7.8207L41.0314 7.09883C41.0045 6.90313 40.9904 6.70391 40.9904 6.50469C40.9904 6.30664 41.0045 6.10742 41.0314 5.91172L40.2006 5.18984C39.9463 4.96953 39.8842 4.59922 40.0518 4.30742L40.8135 2.98906C40.9822 2.69727 41.3338 2.56602 41.6514 2.67617L42.692 3.03477C43.0061 2.79219 43.3529 2.5918 43.7197 2.44062L43.9295 1.36016C43.9928 1.02969 44.2822 0.791797 44.6197 0.791797H46.142C46.4783 0.791797 46.7678 1.03086 46.8322 1.36016L47.0408 2.44062C47.4076 2.59062 47.7545 2.78984 48.0697 3.03359ZM45.3803 12.9699C41.8154 12.9699 38.9139 10.0684 38.9139 6.50352C38.9139 2.93867 41.8154 0.0371094 45.3803 0.0371094C48.9463 0.0371094 51.8467 2.93867 51.8467 6.50352C51.8467 10.0695 48.9475 12.9699 45.3803 12.9699ZM46.1783 6.50352C46.1783 6.94414 45.8209 7.30156 45.3803 7.30156C44.9408 7.30156 44.5834 6.94414 44.5834 6.50352C44.5834 6.06406 44.9408 5.70664 45.3803 5.70664C45.8209 5.70664 46.1783 6.06406 46.1783 6.50352ZM45.3803 4.30039C46.5955 4.30039 47.5846 5.28945 47.5846 6.50352C47.5846 7.71875 46.5955 8.70781 45.3803 8.70781C44.165 8.70781 43.1771 7.71875 43.1771 6.50352C43.1771 5.28828 44.165 4.30039 45.3803 4.30039ZM42.4787 5.80625C42.5396 5.55195 42.4541 5.28359 42.2561 5.11133L41.56 4.50664L41.7416 4.19258L42.6135 4.49375C42.8619 4.5793 43.1373 4.51953 43.3271 4.33906C43.6682 4.01562 44.0854 3.77539 44.533 3.6418C44.785 3.5668 44.9736 3.35938 45.024 3.10156L45.1998 2.19688H45.5619L45.7377 3.10156C45.7869 3.35938 45.9768 3.56797 46.2287 3.6418C46.6764 3.77422 47.0936 4.01562 47.4346 4.33906C47.6244 4.51953 47.8998 4.5793 48.1471 4.49375L49.0201 4.19258L49.2006 4.50664L48.5045 5.11133C48.3064 5.28359 48.2209 5.55078 48.2818 5.80625C48.3369 6.03359 48.3639 6.26797 48.3639 6.50352C48.3639 6.73906 48.3369 6.97344 48.2818 7.20078C48.2209 7.45625 48.3064 7.72344 48.5045 7.8957L49.2006 8.50039L49.0201 8.81445L48.1471 8.51328C47.8998 8.42773 47.6244 8.4875 47.4346 8.66797C47.0936 8.99141 46.6764 9.23281 46.2287 9.36523C45.9768 9.43906 45.7869 9.64766 45.7377 9.90547L45.5619 10.8113H45.1998L45.024 9.90547C44.9736 9.64766 44.785 9.43906 44.533 9.36523C44.0854 9.23281 43.6682 8.99141 43.3271 8.66797C43.1361 8.4875 42.8619 8.42773 42.6135 8.51328L41.7416 8.81445L41.56 8.50039L42.2561 7.8957C42.4541 7.72344 42.5396 7.45625 42.4787 7.20078C42.4248 6.97344 42.3967 6.73906 42.3967 6.50352C42.3967 6.26797 42.4248 6.03359 42.4787 5.80625ZM7.26387 12.9699C3.69785 12.9699 0.797461 10.0684 0.797461 6.50352C0.797461 2.93867 3.69902 0.0371094 7.26387 0.0371094C10.8287 0.0371094 13.7303 2.93867 13.7303 6.50352C13.7303 10.0695 10.8287 12.9699 7.26387 12.9699ZM6.56074 6.50352V2.78398C6.56074 2.39492 6.87481 2.08086 7.26387 2.08086C7.65176 2.08086 7.96699 2.39609 7.96699 2.78398V5.80039H9.45293C9.84082 5.80039 10.1561 6.11563 10.1561 6.50352C10.1561 6.89258 9.84082 7.20664 9.45293 7.20664H7.26387C6.87481 7.20664 6.56074 6.89258 6.56074 6.50352ZM15.5197 16.0707C21.4764 10.1141 31.1678 10.1141 37.1244 16.0707C43.0811 22.0273 43.0811 31.7187 37.1244 37.6754C34.2393 40.5617 30.4025 42.1508 26.3221 42.1508C22.2416 42.1508 18.4049 40.5617 15.5197 37.6754C9.56309 31.7187 9.56309 22.0273 15.5197 16.0707Z" fill="white" />
                                </svg>
                            </div>
                            <h3>Management</h3>
                            <p className="main-para">Develop your leadership skills and gain the knowledge to navigate complex organizations with confidence.</p>
                        </div>
                        <div className="programes-items">
                            <div className="svg-div">
                                <svg width="56" height="58" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7606 20.0851L15.8125 15.1343C15.6029 15.3807 15.3742 15.6103 15.1286 15.8208L20.0789 20.767C20.2984 20.532 20.5257 20.3046 20.7609 20.0851H20.7606ZM29.9688 9.34992V16.3343C30.074 16.332 30.1795 16.3308 30.2852 16.3308C30.5034 16.3308 30.7205 16.3357 30.9364 16.3457V9.32438C30.6155 9.36617 30.2912 9.37458 29.9686 9.34945L29.9688 9.34992ZM44.867 15.2604L39.9297 20.1977C40.1629 20.4207 40.3883 20.6516 40.606 20.8903L45.574 15.9297C45.3231 15.7232 45.0871 15.4994 44.8675 15.2599L44.867 15.2604ZM51.237 29.8103H44.2371C44.2425 29.9701 44.2453 30.1306 44.2454 30.2917C44.2454 30.4528 44.2427 30.6132 44.2371 30.7731H51.237C51.2153 30.4525 51.2153 30.1308 51.237 29.8103ZM16.3252 30.2913C16.3252 30.1303 16.3279 29.9698 16.3334 29.8099H9.33426C9.35523 30.1305 9.35523 30.4521 9.33426 30.7727H16.3334C16.3279 30.6129 16.3252 30.4524 16.3252 30.2913ZM20.1913 39.9349L15.2556 44.8706C15.4858 45.0967 15.7068 45.3311 15.9169 45.5822L20.8857 40.6134C20.6464 40.3954 20.4148 40.1693 20.191 39.9352L20.1913 39.9349ZM29.9688 44.2484V51.2327C30.2917 51.2146 30.6156 51.2258 30.9365 51.2662V44.2366C30.7207 44.2465 30.5036 44.2514 30.2853 44.2515C30.1795 44.2515 30.074 44.2503 29.9689 44.248L29.9688 44.2484ZM39.8043 40.5032L44.7582 45.4485C44.9733 45.2098 45.2016 44.9834 45.4422 44.7704L40.4922 39.815C40.2709 40.0521 40.0416 40.2812 39.8043 40.5026V40.5032ZM14.8027 51.5092C14.2355 52.0767 13.5128 52.4632 12.7259 52.6199C11.9391 52.7766 11.1234 52.6964 10.3821 52.3895C9.64084 52.0825 9.00723 51.5626 8.56144 50.8956C8.11565 50.2285 7.8777 49.4442 7.8777 48.6419C7.8777 47.8396 8.11565 47.0553 8.56144 46.3882C9.00723 45.7211 9.64084 45.2013 10.3821 44.8943C11.1234 44.5874 11.9391 44.5072 12.7259 44.6639C13.5128 44.8206 14.2355 45.2071 14.8027 45.7746C15.5601 46.5367 15.9852 47.5675 15.9852 48.6419C15.9852 49.7163 15.5601 50.7471 14.8027 51.5092ZM45.7679 45.7746C46.3349 45.208 47.0571 44.8222 47.8434 44.6661C48.6296 44.5099 49.4445 44.5903 50.185 44.8972C50.9255 45.2041 51.5584 45.7236 52.0037 46.3902C52.449 47.0567 52.6866 47.8403 52.6866 48.6419C52.6866 49.4435 52.449 50.2271 52.0037 50.8936C51.5584 51.5601 50.9255 52.0797 50.185 52.3866C49.4445 52.6935 48.6296 52.7739 47.8434 52.6177C47.0571 52.4616 46.3349 52.0758 45.7679 51.5092C45.0082 50.7483 44.5815 49.7171 44.5815 48.6419C44.5815 47.5667 45.0082 46.5355 45.7679 45.7746ZM56.2327 26.2351C57.0349 26.2343 57.8194 26.4714 58.4868 26.9163C59.1543 27.3613 59.6749 27.9943 59.9826 28.7351C60.2904 29.4759 60.3716 30.2914 60.2159 31.0784C60.0602 31.8653 59.6746 32.5885 59.108 33.1563C58.5413 33.7242 57.819 34.1112 57.0324 34.2685C56.2457 34.4259 55.4301 34.3464 54.6886 34.0402C53.9471 33.7339 53.3131 33.2147 52.8667 32.5482C52.4204 31.8816 52.1817 31.0976 52.1808 30.2954C52.1816 29.2203 52.6084 28.1892 53.3679 27.4282C54.1274 26.6671 55.1575 26.2381 56.2327 26.2351ZM45.7679 9.08156C46.1438 8.70473 46.5904 8.40576 47.0821 8.20177C47.5737 7.99778 48.1008 7.89277 48.6331 7.89277C49.1654 7.89277 49.6925 7.99778 50.1841 8.20177C50.6758 8.40576 51.1224 8.70473 51.4983 9.08156C52.0655 9.64834 52.4519 10.3706 52.6085 11.157C52.7651 11.9434 52.685 12.7585 52.3783 13.4994C52.0716 14.2403 51.5521 14.8735 50.8854 15.319C50.2187 15.7646 49.4349 16.0024 48.6331 16.0024C47.8313 16.0024 47.0474 15.7646 46.3808 15.319C45.7141 14.8735 45.1946 14.2403 44.8878 13.4994C44.5811 12.7585 44.501 11.9434 44.6577 11.157C44.8143 10.3706 45.2007 9.64834 45.7679 9.08156ZM14.8027 14.8161C14.0416 15.573 13.0114 15.9971 11.938 15.9954C10.8647 15.9937 9.83583 15.5664 9.07712 14.8071C8.31842 14.0479 7.89182 13.0187 7.8909 11.9454C7.88999 10.872 8.31482 9.84211 9.07223 9.08156C9.83417 8.32549 10.8641 7.90123 11.9375 7.90123C13.0109 7.90123 14.0408 8.32549 14.8027 9.08156C15.5626 9.84232 15.9894 10.8736 15.9894 11.9488C15.9894 13.0241 15.5626 14.0554 14.8027 14.8161ZM34.3371 56.2392C34.3372 57.0407 34.0996 57.8243 33.6544 58.4907C33.2092 59.1572 32.5763 59.6767 31.8358 59.9835C31.0953 60.2902 30.2805 60.3705 29.4944 60.2142C28.7083 60.0579 27.9862 59.6719 27.4194 59.1052C26.8526 58.5384 26.4667 57.8163 26.3103 57.0302C26.154 56.2441 26.2342 55.4293 26.541 54.6888C26.8477 53.9483 27.3672 53.3154 28.0337 52.8701C28.7001 52.4249 29.4836 52.1873 30.2852 52.1873C31.3595 52.1883 32.3895 52.6155 33.1492 53.3752C33.9088 54.1349 34.336 55.1649 34.337 56.2392H34.3371ZM38.1429 40.6009C37.3674 41.1896 36.53 41.6921 35.6457 42.0995V36.2979C35.6457 36.1694 35.5946 36.0462 35.5038 35.9554C35.413 35.8646 35.2898 35.8136 35.1613 35.8136C35.0329 35.8136 34.9097 35.8646 34.8189 35.9554C34.728 36.0462 34.677 36.1694 34.677 36.2979V42.4929C31.8378 43.5087 28.7343 43.5087 25.8951 42.4929V36.2979C25.8961 36.2338 25.8843 36.1701 25.8605 36.1106C25.8366 36.051 25.8012 35.9968 25.7562 35.9511C25.7112 35.9054 25.6575 35.8691 25.5984 35.8444C25.5392 35.8196 25.4758 35.8068 25.4116 35.8068C25.3475 35.8068 25.284 35.8196 25.2249 35.8444C25.1657 35.8691 25.1121 35.9054 25.0671 35.9511C25.0221 35.9968 24.9866 36.051 24.9628 36.1106C24.9389 36.1701 24.9272 36.2338 24.9282 36.2979V42.0995C24.0427 41.6927 23.2045 41.1902 22.4284 40.6009V34.7156C22.4795 33.4348 23.2673 32.4135 24.4376 32.1204L29.3182 30.8647C29.629 30.7804 29.949 30.7354 30.271 30.7308C30.276 30.7308 30.2802 30.7391 30.2853 30.7391C30.2903 30.7391 30.2944 30.7308 30.3003 30.7308C30.6219 30.7354 30.9418 30.7804 31.2522 30.8647L36.1346 32.1204C37.3049 32.4134 38.091 33.4348 38.1429 34.7156V40.6009ZM27.3686 24.8203C27.3559 23.8325 27.6507 23.012 28.2191 22.4428C28.7647 21.9125 29.4985 21.6204 30.2593 21.6307H30.3187C31.0763 21.6256 31.8059 21.9171 32.3514 22.4428C32.9199 23.012 33.2145 23.8325 33.202 24.8203C33.1894 25.825 32.9407 29.1234 30.2853 29.7512C27.6298 29.1234 27.3811 25.8254 27.3686 24.8203ZM26.2325 4.3432C26.234 3.54208 26.473 2.7594 26.9193 2.09406C27.3655 1.42871 27.9989 0.910548 28.7395 0.605047C29.4801 0.299546 30.2946 0.220412 31.0801 0.377643C31.8657 0.534874 32.587 0.921414 33.1529 1.48843C33.7189 2.05544 34.1041 2.77747 34.2598 3.56331C34.4156 4.34915 34.3349 5.16352 34.028 5.90353C33.7211 6.64354 33.2018 7.27598 32.5356 7.72095C31.8694 8.16592 31.0863 8.40345 30.2852 8.40352C29.2093 8.4024 28.178 7.97402 27.418 7.21259C26.6579 6.45116 26.2315 5.41903 26.2323 4.3432H26.2325ZM30.2852 17.3277C32.8897 17.3256 35.4345 18.1085 37.5874 19.5743C39.7404 21.0401 41.4016 23.1208 42.3544 25.5448C43.3072 27.9688 43.5073 30.6238 42.9286 33.1632C42.35 35.7027 41.0194 38.0088 39.1105 39.7808V34.7073C39.1104 34.7016 39.1096 34.696 39.1081 34.6905C39.0461 32.9743 37.9729 31.593 36.3755 31.1828L31.9527 30.0526C33.5267 28.914 34.1461 26.7626 34.1696 24.8371C34.1863 23.5814 33.7936 22.5182 33.037 21.7646C32.2964 21.0555 31.3105 20.6596 30.2852 20.6596C29.2598 20.6596 28.274 21.0555 27.5334 21.7646C26.7774 22.5182 26.3849 23.5811 26.4014 24.8371C26.4241 26.7626 27.0453 28.914 28.6184 30.0526L24.1956 31.1828C22.5991 31.5929 21.5237 32.9743 21.4622 34.6905C21.4614 34.6989 21.4614 34.7073 21.4614 34.7073V39.7805C19.5523 38.0087 18.2215 35.7026 17.6426 33.1632C17.0638 30.6237 17.2637 27.9687 18.2164 25.5446C19.1691 23.1205 20.8303 21.0398 22.9833 19.574C25.1362 18.1081 27.681 17.3252 30.2856 17.3273L30.2852 17.3277ZM4.33727 26.2351C5.13947 26.2343 5.9239 26.4714 6.59136 26.9165C7.25881 27.3615 7.77931 27.9944 8.08704 28.7353C8.39477 29.4761 8.47591 30.2916 8.3202 31.0785C8.16448 31.8655 7.77891 32.5886 7.21224 33.1564C6.64556 33.7242 5.92324 34.1113 5.1366 34.2686C4.34997 34.4259 3.53435 34.3464 2.79289 34.0401C2.05143 33.7339 1.41743 33.2147 0.971059 32.5481C0.524687 31.8816 0.285991 31.0976 0.285156 30.2954C0.286082 29.2203 0.713003 28.1894 1.47244 27.4284C2.23187 26.6673 3.26192 26.2383 4.33703 26.2351H4.33727Z" fill="white" />
                                </svg>
                            </div>
                            <h3>Leadership</h3>
                            <p className="main-para">Learn how to inspire, motivate, and empower others to achieve extraordinary results.</p>
                        </div>

                    </div>
                    <h6 className='text-center'>Whether you're a seasoned professional looking to advance your career or a recent graduate seeking to enter the workforce with a strong foundation, we have a program for you.</h6>
                </div>
            </div>

            <div className="mentorship-prgrm-sec">
                <div className="container">
                    <div className="mentorship-main">
                        <div className="top-sec">
                            <h2 className="main-head">Our Powerful Mentorship Program <br className='d-lg-block d-md-none d-none' /><span className="grade-text">Your Bridge to Success</span></h2>
                            <p className="main-para">At MSITM Coach, we believe in the transformative power of mentorship. Our personalized mentorship program pairs you with an experienced tech professional who will become your trusted guide on your career journey.</p>
                        </div>
                        <div className="bottom-sec">
                            <div className="row inner-top">
                                <div className="col-lg-4 col-md-12 left">
                                    <div className="img-div">
                                        <img src={mentorshipImg1} alt="" className='img-fluid d-lg-block d-md-none d-none' />
                                        <img src={mentorshipImgAlt1} alt="" className='img-fluid d-lg-none d-md-block d-block' />
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-12 right">
                                    <h3>How Our Mentorship Program Works</h3>
                                    <div className="items-div">

                                        <div className="points">
                                            <div className="icon-div">
                                                <img src={mentorship_Icn_1} alt="" />
                                            </div>
                                            <h5>Matching You with the Perfect Mentor</h5>
                                            <p className='main-para'>We carefully consider your career goals, technical background, and learning style to pair you with a mentor who best aligns with your needs.</p>
                                        </div>
                                        <div className="points">
                                            <div className="icon-div">
                                                <img src={mentorship_Icn_2} alt="" />
                                            </div>
                                            <h5>Dedicated Mentorship Sessions</h5>
                                            <p className='main-para'>Benefit from regular, personalized sessions with your mentor. These sessions can cover resume and interview preparation, career planning, navigating technical challenges, and overcoming industry hurdles.</p>
                                        </div>
                                        <div className="points">
                                            <div className="icon-div">
                                                <img src={mentorship_Icn_3} alt="" />
                                            </div>
                                            <h5>Expert Insights and Support</h5>
                                            <p className='main-para'>Gain valuable industry knowledge and insights from someone who has walked the path you're on. Your mentor will offer personalized advice, answer your questions, and provide ongoing support throughout your program.</p>
                                        </div>
                                        <div className="points">
                                            <div className="icon-div">
                                                <img src={mentorship_Icn_4} alt="" />
                                            </div>
                                            <h5>Building Lasting Relationships</h5>
                                            <p className='main-para'>Our mentorship program fosters long-term connections. Your mentor can become a valuable resource even after your program ends, offering guidance and recommendations throughout your career.</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="row inner-bottom">
                                <div className="col-lg-4 col-md-12 left">
                                    <div className="img-div">
                                        <img src={mentorshipImg2} alt="" className='img-fluid d-lg-block d-md-none d-none' />
                                        <img src={mentorshipImgAlt2} alt="" className='img-fluid d-lg-none d-md-block d-block' />
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-12 right">
                                    <h3>How Our Mentorship Program Works</h3>
                                    <div className="items-div">

                                        <div className="points">
                                            <div className="icon-div">
                                                <img src={mentorship_Icn_1} alt="" />
                                            </div>
                                            <h5>Gain Confidence and Clarity</h5>
                                            <p className='main-para'>Receive personalized support and feedback, boosting your confidence as you transition into your dream tech career.</p>
                                        </div>
                                        <div className="points">
                                            <div className="icon-div">
                                                <img src={mentorship_Icn_2} alt="" />
                                            </div>
                                            <h5>Develop Essential Skills</h5>
                                            <p className='main-para'>Learn valuable skills beyond textbooks, like communication, problem-solving, and navigating workplace dynamics.</p>
                                        </div>
                                        <div className="points">
                                            <div className="icon-div">
                                                <img src={mentorship_Icn_3} alt="" />
                                            </div>
                                            <h5>Expand Your Network</h5>
                                            <p className='main-para'>Connect with a seasoned professional who can introduce you to new opportunities and broaden your professional network.</p>
                                        </div>
                                        <div className="points">
                                            <div className="icon-div">
                                                <img src={mentorship_Icn_4} alt="" />
                                            </div>
                                            <h5>Fast-Track Your Success</h5>
                                            <p className='main-para'>Benefit from your mentor's experience and insights, accelerating your career growth and maximizing your potential.</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cta-sec">
                            <h2 className='main-head'>Want to Learn More About <br />Mentorship?</h2>
                            <a href="" className='main-btn'>Get A Free Consultation</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="set-us-apart-sec">
                <div className="container">
                    <h2 className="main-head text-center">Here's What <span className="grade-text">Sets Us Apart</span></h2>
                    <div className="main-div">

                        <div className="items">
                            <div className="icon-div">
                                <img src={apart_icon_1} alt="" />
                            </div>
                            <h6>Triple Threat Focus</h6>
                            <p>Dive deep into three crucial areas – technology, management, and leadership. Gain the technical expertise, business acumen, and leadership skills to succeed in any tech role.</p>
                        </div>
                        <div className="items">
                            <div className="icon-div">
                                <img src={apart_icon_2} alt="" />
                            </div>
                            <h6>Industry-aligned curriculum</h6>
                            <p>Taught by experts with real-world experience, our programs are constantly updated to reflect the latest trends and technologies.</p>
                        </div>
                        <div className="items">
                            <div className="icon-div">
                                <img src={apart_icon_3} alt="" />
                            </div>
                            <h6>Expert Mentorship</h6>
                            <p>Learn from seasoned professionals who've walked your path. Our dedicated mentors will guide, challenge, and support you throughout your journey.</p>
                        </div>
                        <div className="items">
                            <div className="icon-div">
                                <img src={apart_icon_4} alt="" />
                            </div>
                            <h6>100% Practical Based Learning</h6>
                            <p>All of our training programs emphasize practical learning. Our trainers incorporate real-world industry scenarios into each course to ensure hands-on experience for participants.</p>
                        </div>
                        <div className="items">
                            <div className="icon-div">
                                <img src={apart_icon_5} alt="" />
                            </div>
                            <h6>Hands-on learning</h6>
                            <p>Gain practical skills through interactive workshops, case studies, and simulations, putting theory into practice.</p>
                        </div>
                        <div className="items">
                            <div className="icon-div">
                                <img src={apart_icon_6} alt="" />
                            </div>
                            <h6>Personalized support</h6>
                            <p>Benefit from individual mentoring and career guidance from our dedicated team.</p>
                        </div>
                        <div className="items">
                            <div className="icon-div">
                                <img src={apart_icon_7} alt="" />
                            </div>
                            <h6>Support beyond the classroom</h6>
                            <p>Our dedicated support team is available 24/7 (by appointment) to answer your questions, offer technical assistance, and address any concerns you may have.</p>
                        </div>
                        <div className="items">
                            <div className="icon-div">
                                <img src={apart_icon_8} alt="" />
                            </div>
                            <h6>Affordable Fees</h6>
                            <p>Our fee structure is unmatched in the training institute landscape. We offer the lowest possible fees, your financial comfort is important to us!</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className="flexible-learning">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 left">
                            <div className="img-div">
                                <img src={flexibleLearnImg} alt="" className='img-fluid img-main' />
                            </div>
                            <a href="">
                                <div className="circle-div">
                                    <div className="circle">
                                        <img src={flexibleRotateCircle} alt="" className='img-fluid rotate-img' />
                                        <img src={flexibleRotateArrow} alt="" className='img-fluid arrow' />
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-6 col-md-12 right">
                            <h2 className="main-head">Your Success, Your Way: Flexible Learning <span className="grade-text">Designed for You</span></h2>
                            <p className='main-para'>Life gets busy. Don't let your education suffer. At MSITM Coach, we understand that everyone learns differently and has unique needs. That's why we offer a flexible program designed for you:</p>
                            <div className="main-points">

                                <div className="points">
                                    <p className="num">01</p>
                                    <h5>Missed a session? No problem!</h5>
                                    <p className="points-para">Catch up later with recorded lectures and dedicated teaching assistants ready to answer your questions.</p>
                                </div>
                                <div className="points">
                                    <p className="num">02</p>
                                    <h5>Work, family, or other commitments?</h5>
                                    <p className="points-para">Take a break when needed and rejoin the next batch seamlessly. Network with fellow learners and keep each other motivated.</p>
                                </div>
                                <div className="points">
                                    <p className="num">03</p>
                                    <h5>Work schedule colliding with class timings?</h5>
                                    <p className="points-para">Collaborate with your classmates to choose your ideal class timing.</p>
                                </div>
                                <div className="points">
                                    <p className="num">04</p>
                                    <h5>Need to brush up on a concept?</h5>
                                    <p className="points-para">Access course materials, assignments, and notes for life, and recordings for up to 6 months after finishing your course.</p>
                                </div>
                                <div className="points">
                                    <p className="num">05</p>
                                    <h5>Stuck on a question?</h5>
                                    <p className="points-para">Our friendly teaching assistants are available to answer your questions via text or video chat.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="facualty-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 left">
                            <div className="img-div">
                                <img src={facultyImg} alt="" className='img-fluid' />
                            </div>
                            <div className="content">
                                <h3>Meet Your <span className="grade-text">Teaching Army</span></h3>
                                <p className="main-para">Learn from the best. Our instructors bring real-world experience and personalized guidance to help you excel.</p>
                                <a href='#' className="main-btn">Know More</a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 right">
                            <div className="img-div">
                                <img src={expertmentorImg} alt="" className='img-fluid' />
                            </div>
                            <div className="content">
                                <h3>Expert Mentors Guide <span className="grade-text">Your Path</span></h3>
                                <p className="main-para">Gain insights, practice interviews, and chart your career trajectory with our dedicated team of mentors.</p>
                                <a href='#' className="main-btn">Know More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="testimonials-sec">
                <div className="top-sec">
                    <div className="container">
                        <h2 className="main-head">Hear What Our <br /><span className="grade-text">Students Have To Say</span></h2>
                    </div>
                </div>

                <div className="video-container" >
                    <div className="video-sec">

                        {/* <Slider
                            infinite={true}
                            autoplay={true}
                            autoplaySpeed={0}
                            speed={4000}
                            cssEase="linear"
                            slidesToShow={4}
                            slidesToScroll={1}
                            pauseOnHover={false}
                            draggable={false}
                            responsive={[
                                {
                                    breakpoint: 1540,
                                    settings: {
                                        slidesToShow: 4,
                                        slidesToScroll: 1,
                                        infinite: true,
                                        // dots: true,
                                    },
                                },
                                {
                                    breakpoint: 1024,
                                    settings: {
                                        slidesToShow: 3,
                                        slidesToScroll: 1,
                                        infinite: true,
                                        // dots: true,
                                    },
                                },
                                {
                                    breakpoint: 900,
                                    settings: {
                                        slidesToShow: 2,
                                        slidesToScroll: 1,
                                    },
                                },
                                {
                                    breakpoint: 480,
                                    settings: {
                                        slidesToShow: 1,
                                        slidesToScroll: 1,
                                        speed: 8000,
                                    },
                                },
                            ]}
                        > */}
                        <OwlCarousel
                            className='owl-theme'
                            items={3}
                            loop
                            autoplay
                            autoplayTimeout={2500}
                            speed={5000}
                            dots={false}
                            // margin={20}
                            responsive={{ // Responsive settings
                                0: {
                                    items: 1
                                },
                                768: {
                                    items: 2
                                },
                                1024: {
                                    items: 3
                                },
                                1536: {
                                    items: 4
                                }
                            }}
                        >
                            <div className="video-main">
                                <a href="https://www.youtube.com/watch?v=njX2bu-_Vw4" data-fancybox="gallery">
                                    <img src={testimonialThumb1} alt="Video Thumbnail" className='video-tumbnail' />
                                    <img src={testimonialPlayBtn} alt="" className='play-btn' />
                                </a>
                            </div>
                            <div className="video-main">
                                <a href="https://www.youtube.com/watch?v=njX2bu-_Vw4" data-fancybox="gallery">
                                    <img src={testimonialThumb2} alt="Video Thumbnail" className='video-tumbnail' />
                                    <img src={testimonialPlayBtn} alt="" className='play-btn' />
                                </a>
                            </div>
                            <div className="video-main">
                                <a href="https://www.youtube.com/watch?v=njX2bu-_Vw4" data-fancybox="gallery">
                                    <img src={testimonialThumb3} alt="Video Thumbnail" className='video-tumbnail' />
                                    <img src={testimonialPlayBtn} alt="" className='play-btn' />
                                </a>
                            </div>
                            <div className="video-main">
                                <a href="https://www.youtube.com/watch?v=njX2bu-_Vw4" data-fancybox="gallery">
                                    <img src={testimonialThumb4} alt="Video Thumbnail" className='video-tumbnail' />
                                    <img src={testimonialPlayBtn} alt="" className='play-btn' />
                                </a>
                            </div>
                        </OwlCarousel>

                    </div>



                </div>

                <div className="written-testi-sec">
                    <div className="container">
                        <div className="testi-items">

                            <OwlCarousel
                                className='owl-theme'
                                items={3}
                                loop
                                autoplay
                                autoplayTimeout={5000}
                                dots
                                // margin={20}
                                responsive={{ // Responsive settings
                                    0: {
                                        items: 1
                                    },
                                    768: {
                                        items: 1
                                    },
                                    1024: {
                                        items: 2
                                    },
                                    1536: {
                                        items: 3
                                    }
                                }}
                            >

                                <div className="items">
                                    <div className="left col-lg-4 col-md-6 col-12">
                                        <img src={WritenTesti1} alt="" className='img-fluid' />
                                    </div>
                                    <div className="right col-lg-8 col-md-6 col-12">
                                        <h6>Jenny Wilson</h6>
                                        <p className="university">Massachusetts Institute of Technology, USA</p>
                                        <p className="main-para">Throughout your job search, we provide tailored advice and support to help you land your dream role. Throughout your job search, we provide tailored advice and support </p>
                                    </div>
                                </div>
                                <div className="items">
                                    <div className="left col-lg-4 col-md-6 col-12">
                                        <img src={WritenTesti2} alt="" className='img-fluid' />
                                    </div>
                                    <div className="right col-lg-8 col-md-6 col-12">
                                        <h6>Marvin McKinney</h6>
                                        <p className="university">University of Taubate, Brasilien</p>
                                        <p className="main-para">Throughout your job search, we provide tailored advice and support to help you land your dream role. Throughout your job search, we provide tailored advice and support </p>
                                    </div>
                                </div>
                                <div className="items">
                                    <div className="left col-lg-4 col-md-6 col-12">
                                        <img src={WritenTesti3} alt="" className='img-fluid' />
                                    </div>
                                    <div className="right col-lg-8 col-md-6 col-12">
                                        <h6>Kathryn Murphy</h6>
                                        <p className="university">Universidade de Sao Paulo, Brasilien</p>
                                        <p className="main-para">Throughout your job search, we provide tailored advice and support to help you land your dream role. Throughout your job search, we provide tailored advice and support </p>
                                    </div>
                                </div>
                                <div className="items">
                                    <div className="left col-lg-4 col-md-6 col-12">
                                        <img src={WritenTesti3} alt="" className='img-fluid' />
                                    </div>
                                    <div className="right col-lg-8 col-md-6 col-12">
                                        <h6>Kathryn Murphy</h6>
                                        <p className="university">Universidade de Sao Paulo, Brasilien</p>
                                        <p className="main-para">Throughout your job search, we provide tailored advice and support to help you land your dream role. Throughout your job search, we provide tailored advice and support </p>
                                    </div>
                                </div>
                            </OwlCarousel>

                        </div>
                    </div>
                </div>

            </div>

            <div className="placement-section">
                <div className="placement-main">
                    <div className="row">
                        <div className="col-lg-4 col-12 left">
                            <div className="top-sec">
                                <h2 className="main-head">From Preparation to Placement</h2>
                                <p className="main-para">We go beyond just preparing you for the job; we prepare you for the entire journey to landing it. Here's how we support your career success</p>
                                <a href="#" className="main-btn">Get A Free Consultation</a>
                            </div>
                            <div className="img-div">
                                <img src={placementSecImg} alt="" className='img-fluid' />
                            </div>
                        </div>
                        <div className="col-lg-8 col-12 right">

                            <div className="placement-points">
                                <img src={placementIcn1} alt="" className='img-fluid' />
                                <h6>Dedicated recruitment team</h6>
                                <p className="main-para">Our team actively connects you with diverse job opportunities from over 100+ employer partners.</p>
                            </div>
                            <div className="placement-points">
                                <img src={placementIcn2} alt="" className='img-fluid' />
                                <h6>Expert interview preperation</h6>
                                <p className="main-para">Hone your skills with realistic mock interviews conducted by industry professionals. Gain valuable feedback and build confidence for your real interviews.</p>
                            </div>
                            <div className="placement-points">
                                <img src={placementIcn3} alt="" className='img-fluid' />
                                <h6>Resume & LinkedIn optimization</h6>
                                <p className="main-para">Our experts help you craft a compelling resume and LinkedIn profile that gets you noticed by recruiters.</p>
                            </div>
                            <div className="placement-points">
                                <img src={placementIcn4} alt="" className='img-fluid' />
                                <h6>Personalized guidance</h6>
                                <p className="main-para">Throughout your job search, we provide tailored advice and support to help you land your dream role.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="recent-placements">
                <div className="container">
                    <h2 className="main-head text-center">Recent <span className="grade-text">Placements</span></h2>
                    <div className="bottom-slider">

                        <Slider
                            infinite={true}
                            autoplay={true}
                            autoplaySpeed={0}
                            speed={4000}
                            cssEase="linear"
                            slidesToShow={5}
                            slidesToScroll={1}
                            pauseOnHover={false}
                            draggable={false}
                            responsive={[
                                {
                                    breakpoint: 1024,
                                    settings: {
                                        slidesToShow: 5,
                                        slidesToScroll: 1,
                                        infinite: true,
                                        dots: true,
                                    },
                                },
                                {
                                    breakpoint: 900,
                                    settings: {
                                        slidesToShow: 3,
                                        slidesToScroll: 1,
                                    },
                                },
                                {
                                    breakpoint: 480,
                                    settings: {
                                        slidesToShow: 2,
                                        slidesToScroll: 1,
                                        speed: 8000,
                                    },
                                },
                            ]}
                        >

                            <div className="placed-students-items">
                                <div className="img-div">
                                    <img src={placedStudent1} alt="" className="img-fluid" />
                                </div>
                                <div className="student-details">
                                    <div className="details-main">
                                        <h6>jude Bellingham</h6>
                                        <p className="university">Oxford University</p>
                                        <p className="designation">Full Stack Developer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="placed-students-items">
                                <div className="img-div">
                                    <img src={placedStudent2} alt="" className="img-fluid" />
                                </div>
                                <div className="student-details">
                                    <div className="details-main">
                                        <h6>jude Bellingham</h6>
                                        <p className="university">Oxford University</p>
                                        <p className="designation">Full Stack Developer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="placed-students-items">
                                <div className="img-div">
                                    <img src={placedStudent3} alt="" className="img-fluid" />
                                </div>
                                <div className="student-details">
                                    <div className="details-main">
                                        <h6>jude Bellingham</h6>
                                        <p className="university">Oxford University</p>
                                        <p className="designation">Full Stack Developer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="placed-students-items">
                                <div className="img-div">
                                    <img src={placedStudent4} alt="" className="img-fluid" />
                                </div>
                                <div className="student-details">
                                    <div className="details-main">
                                        <h6>jude Bellingham</h6>
                                        <p className="university">Oxford University</p>
                                        <p className="designation">Full Stack Developer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="placed-students-items">
                                <div className="img-div">
                                    <img src={placedStudent5} alt="" className="img-fluid" />
                                </div>
                                <div className="student-details">
                                    <div className="details-main">
                                        <h6>jude Bellingham</h6>
                                        <p className="university">Oxford University</p>
                                        <p className="designation">Full Stack Developer</p>
                                    </div>
                                </div>
                            </div>

                        </Slider>
                    </div>
                </div>
            </div>

            <div className="alumni-sec">
                <h2 className="main-head text-center">Our Alumni  <span className="grade-text">Work’s At</span></h2>

                <div className="companies-sec">
                    <OwlCarousel
                        className='owl-theme'
                        items={8}
                        loop
                        autoplay
                        autoplayTimeout={5000}
                        dots={false}
                        margin={20}
                        responsive={{ // Responsive settings
                            0: {
                                items: 2
                            },
                            768: {
                                items: 4
                            },
                            1024: {
                                items: 8
                            }
                        }}
                    >

                        <div className="compani-items">
                            <img src={companies1} alt="" className="img-fluid" />
                        </div>
                        <div className="compani-items">
                            <img src={companies2} alt="" className="img-fluid" />
                        </div>
                        <div className="compani-items">
                            <img src={companies3} alt="" className="img-fluid" />
                        </div>
                        <div className="compani-items">
                            <img src={companies4} alt="" className="img-fluid" />
                        </div>
                        <div className="compani-items">
                            <img src={companies5} alt="" className="img-fluid" />
                        </div>
                        <div className="compani-items">
                            <img src={companies6} alt="" className="img-fluid" />
                        </div>
                        <div className="compani-items">
                            <img src={companies7} alt="" className="img-fluid" />
                        </div>
                        <div className="compani-items">
                            <img src={companies8} alt="" className="img-fluid" />
                        </div>
                    </OwlCarousel>
                </div>
            </div>

            <div className="training-options-sec">
                <div className="container">
                    <h2 className="main-head text-center">Our <span className="grade-text">Training options</span></h2>

                    <div className="row mt-5">
                        <div className="col-lg-6 col-md-12 left">
                            <div className="main-div">
                                <div className="img-div">
                                    <img src={onlineTraining} alt="" className='img-fluid' />
                                    <div className="title">
                                        <h5>Online Training</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 right">
                            <div className="main-div">
                                <div className="img-div">
                                    <img src={classroomTraining} alt="" className='img-fluid' />
                                    <div className="title">
                                        <h5>Classroom Training</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="get-started-sec">
                <div className="container">
                    <div className="get-started-main">
                        <h2 className="main-head text-center">Need some help <span className="grade-text">getting started?</span></h2>
                        <div className="get-main-div">
                            <div className="items">
                                <div className="img-div">
                                    <img src={getStartedIcn1} alt="" />
                                </div>
                                <h6>Effortless Registration</h6>
                                <p className="main-para">Create an account in a flash – no need for lengthy forms or endless verification emails.</p>
                            </div>
                            <div className="items">
                                <div className="img-div">
                                    <img src={getStartedIcn2} alt="" />
                                </div>
                                <h6>Quick Skills Check</h6>
                                <p className="main-para">Take our streamlined assessment to identify your strengths and find the perfect program for your goals.</p>
                            </div>
                            <div className="items">
                                <div className="img-div">
                                    <img src={getStartedIcn3} alt="" />
                                </div>
                                <h6>Jumpstart Your Journey</h6>
                                <p className="main-para">Choose flexible payment options and be ready to learn in no time.</p>
                            </div>
                        </div>
                        <a href='' className="main-btn text-center">Start Your Assessment</a>
                    </div>
                </div>
            </div>

            <div className="course-section">
                <div className="container">
                    <div className="top-sec">
                        <h2 className="main-head text-center">Decide to continue only if you're satisfied. No commitments, <span className="grade-text text-center">just pure inspiration!</span></h2>
                        <p className="main-para text-center mt-3">Life gets busy. Don't let your education suffer. At MSITM Coach, we understand that everyone learns differently and has unique needs. That's why we offer a flexible program designed for you:</p>
                    </div>
                    <div className="bottom-sec">

                        <OwlCarousel
                            className='owl-theme'
                            items={3}
                            loop
                            autoplay
                            autoplayTimeout={5000}
                            navs
                            dots={false}
                            navClass={['owl-prev', 'owl-next']}
                            navContainerClass='nav-container'
                            // navText={[
                            //     <img src={navPrev}/>,
                            //     <img src={navNext}/>
                            //   ]}
                            // margin={20}
                            responsive={{ // Responsive settings
                                0: {
                                    items: 1
                                },
                                768: {
                                    items: 2
                                },
                                1024: {
                                    items: 3
                                }
                            }}
                        >

                            <div className="course-items">
                                <div className="img-div">
                                    <img src={courseImg1} alt="" className='img-fluid' />
                                    <div className="new-crse-tag">
                                        <p>New Course</p>
                                    </div>
                                </div>
                                <div className="details">
                                    <h5 className='title'>Introduction to Python for Software Engineers</h5>
                                    <p className="para-main">Get your feet wet with the fundamentals of Python, a key component of Software Engineering</p>
                                    <div className="bottom-div">
                                        <a href="" className="crse-btn">Enroll Now</a>
                                        <div className="time">
                                            <img src={timeIcn} alt="" className='img-fluid' />
                                            <p>30 min</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="course-items">
                                <div className="img-div">
                                    <img src={courseImg2} alt="" className='img-fluid' />
                                    <div className="new-crse-tag">
                                        <p>New Course</p>
                                    </div>
                                </div>
                                <div className="details">
                                    <h5 className='title'>Introduction to Python for Software Engineers</h5>
                                    <p className="para-main">Get your feet wet with the fundamentals of Python, a key component of Software Engineering</p>
                                    <div className="bottom-div">
                                        <a href="" className="crse-btn">Enroll Now</a>
                                        <div className="time">
                                            <img src={timeIcn} alt="" className='img-fluid' />
                                            <p>30 min</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="course-items">
                                <div className="img-div">
                                    <img src={courseImg3} alt="" className='img-fluid' />
                                    <div className="new-crse-tag">
                                        <p>New Course</p>
                                    </div>
                                </div>
                                <div className="details">
                                    <h5 className='title'>Introduction to Python for Software Engineers</h5>
                                    <p className="para-main">Get your feet wet with the fundamentals of Python, a key component of Software Engineering</p>
                                    <div className="bottom-div">
                                        <a href="" className="crse-btn">Enroll Now</a>
                                        <div className="time">
                                            <img src={timeIcn} alt="" className='img-fluid' />
                                            <p>30 min</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </OwlCarousel>
                        <div className="nav-container"></div>

                    </div>
                </div>
            </div>

            <div className="scnd-cta-sec">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-12 left">
                            <div className="img-div">
                                <img src={scndCta} alt="" className='img-fluid' />
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 right">
                            <div className="cta-item">
                                <h2>Don't let life hold you back. Take control of your education with our flexible program</h2>
                                <a href='' className="main-btn">Apply Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="opt-section">
                <div className="container">

                    <div className="top-sec">
                        <h2 className="main-head">Launch Your Tech Career <br />with <span className="grade-text">MSITM Coach OPT Support</span></h2>
                        <h6>Are you an international student with a STEM degree from a US university?</h6>
                        <p className="main-para">At MSITM Coach, we understand that transitioning from an MSITM graduate to a successful tech professional requires practical experience and job readiness. That's why we offer comprehensive support for students seeking Optional Practical Training (OPT).</p>
                    </div>

                    <div className="opt-program-sec">
                        <h3 className='text-center'>Our OPT Program</h3>
                        <div className="grid-section">

                            <div className="opt-items opt-item-1">
                                <div className="img-div">
                                    <img src={optImg1} alt="" className="img-fluid" />
                                </div>
                                <div className="details">
                                    <h6>Eligibility Evaluation</h6>
                                    <p className="main-para">We'll assess your immigration status, degree relevance, and program alignment to ensure your eligibility for OPT.</p>
                                </div>
                            </div>
                            <div className="opt-items opt-item-2">
                                <div className="img-div">
                                    <img src={optImg2} alt="" className="img-fluid" />
                                </div>
                                <div className="details">
                                    <h6>Specialized Training</h6>
                                    <p className="main-para">Receive in-depth training on essential skills and technologies aligned with your desired career path.  Our training is practical, project-based, and designed to equip you for real-world job scenarios.</p>
                                </div>
                            </div>
                            <div className="opt-items opt-item-3">
                                <div className="img-div">
                                    <img src={optImg3} alt="" className="img-fluid" />
                                </div>
                                <div className="details">
                                    <h6>Live Project Experience</h6>
                                    <p className="main-para">Gain invaluable hands-on experience by working on real client projects under the guidance of experienced mentors. This experience will strengthen your resume and showcase your skills to potential employers.</p>
                                </div>
                            </div>
                            <div className="opt-items opt-item-4">
                                <div className="img-div">
                                    <img src={optImg4} alt="" className="img-fluid" />
                                </div>
                                <div className="details">
                                    <h6>OPT Application Support</h6>
                                    <p className="main-para">We'll guide you through the entire OPT application process, ensuring your application is complete and submitted on time.</p>
                                </div>
                            </div>
                            <div className="opt-items opt-item-5">
                                <div className="img-div">
                                    <img src={optImg5} alt="" className="img-fluid" />
                                </div>
                                <div className="details">
                                    <h6>Job Placement Assistance</h6>
                                    <p className="main-para">Our dedicated career services team will provide personalized resume and interview coaching, connect you with relevant job opportunities, and guide you through the interview process to secure your dream job.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="benefits-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12 left">
                            <h3>Benefits of MSITM Coach's <br />STEM OPT Program</h3>
                            <div className="icn-section">

                                <div className="items">
                                    <img src={optIcn1} alt="" className='img-fluid' />
                                    <h5>Expert Guidance</h5>
                                    <p className="main-para">Benefit from the expertise of our coaches and mentors who understand the unique challenges faced by STEM OPT students.</p>
                                </div>
                                <div className="items">
                                    <img src={optIcn2} alt="" className='img-fluid' />
                                    <h5>Customized Training</h5>
                                    <p className="main-para">Develop the skills and knowledge employers crave through our personalized training programs..</p>
                                </div>
                                <div className="items">
                                    <img src={optIcn3} alt="" className='img-fluid' />
                                    <h5>Real-World Experience</h5>
                                    <p className="main-para">Showcase your skills and build a strong portfolio with practical experience on real-world projects.</p>
                                </div>
                                <div className="items">
                                    <img src={optIcn4} alt="" className='img-fluid' />
                                    <h5>Streamlined OPT Process</h5>
                                    <p className="main-para">Navigate the OPT application process confidently with our guidance and support.</p>
                                </div>
                                <div className="items">
                                    <img src={optIcn5} alt="" className='img-fluid' />
                                    <h5>Job Placement Assistance</h5>
                                    <p className="main-para"> Increase your chances of landing your dream job with our career coaching and industry network.</p>
                                </div>
                                <div className="items">
                                    <img src={optIcn6} alt="" className='img-fluid' />
                                    <h5>Expert Guidance</h5>
                                    <p className="main-para">Benefit from the expertise of our coaches and mentors who understand the unique challenges faced by STEM OPT students.</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-6 col-12 right">
                            <div className="img-div">
                                <img src={optBenefitsImg} alt="" className='img-fluid d-lg-block d-md-none d-none' />
                                <img src={optBenefitsImgAlt} alt="" className='img-fluid d-lg-none d-md-block d-block' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default HomePage
