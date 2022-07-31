import React, {Component} from 'react';
import logo from "../assets/images/logo-v1.png"
import sliderImg from "../assets/images/slider-dec.png"
import aboutdec from "../assets/images/about-dec.png"
import serviceIcon1 from "../assets/images/service-icon-01.png"
import serviceIcon2 from "../assets/images/service-icon-02.png"
import serviceIcon3 from "../assets/images/service-icon-03.png"
import serviceIcon4 from "../assets/images/service-icon-04.png"
import servicesImage from "../assets/images/services-image.jpg"
import servicesImage2 from "../assets/images/services-image-02.jpg"
import servicesImage3 from "../assets/images/services-image-03.jpg"
import servicesImage4 from "../assets/images/services-image-04.jpg"
import protfolio1 from "../assets/images/portfolio-01.jpg"
import protfolio2 from "../assets/images/portfolio-02.jpg"
import protfolio3 from "../assets/images/portfolio-03.jpg"
import protfolio4 from "../assets/images/portfolio-04.jpg"
import FeaturedBlogs from "../components/FeaturedBlogs";

class HomePage extends Component {
    render() {
        return (
            <div>
                <div className="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-6 align-self-center">
                                        <div className="left-content show-up header-text wow fadeInLeft"
                                             data-wow-duration="1s" data-wow-delay="1s">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <h6>Digital Media Agency</h6>
                                                    <h2>We Boost Your Website Traffic</h2>
                                                    <p>This template is brought to you by TemplateMo website. Feel free
                                                        to use this for a commercial purpose. You are not allowed to
                                                        redistribute the template ZIP file on any other template
                                                        website. Thank you.</p>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="border-first-button scroll-to-section">
                                                        <a href="#">Free Quote</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="right-image wow fadeInRight" data-wow-duration="1s"
                                             data-wow-delay="0.5s">
                                            <img src={sliderImg.src} alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="about" className="about section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="about-left-image  wow fadeInLeft" data-wow-duration="1s"
                                             data-wow-delay="0.5s">
                                            <img src={aboutdec.src} alt=""/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 align-self-center  wow fadeInRight" data-wow-duration="1s"
                                         data-wow-delay="0.5s">
                                        <div className="about-right-content">
                                            <div className="section-heading">
                                                <h6>About Us</h6>
                                                <h4>Who is DigiMedia <em>Agency</em></h4>
                                                <div className="line-dec"/>
                                            </div>
                                            <p>We hope this DigiMedia template is useful for your work. You can use this
                                                template for any purpose. You may <a rel="nofollow"
                                                                                     href="http://paypal.me/templatemo"
                                                                                     target="_blank">contribute a little
                                                    amount</a> via PayPal to <a href="https://templatemo.com/contact"
                                                                                target="_blank">support
                                                    TemplateMo</a> in creating new templates regularly.</p>
                                            <div className="row">
                                                <div className="col-lg-4 col-sm-4">
                                                    <div className="skill-item first-skill-item wow fadeIn"
                                                         data-wow-duration="1s" data-wow-delay="0s">
                                                        <div className="progress" data-percentage="90">
                        <span className="progress-left">
                          <span className="progress-bar"/>
                        </span>
                                                            <span className="progress-right">
                          <span className="progress-bar"/>
                        </span>
                                                            <div className="progress-value">
                                                                <div>
                                                                    90%<br/>
                                                                    <span>Coding</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-sm-4">
                                                    <div className="skill-item second-skill-item wow fadeIn"
                                                         data-wow-duration="1s" data-wow-delay="0s">
                                                        <div className="progress" data-percentage="80">
                        <span className="progress-left">
                          <span className="progress-bar"/>
                        </span>
                                                            <span className="progress-right">
                          <span className="progress-bar"/>
                        </span>
                                                            <div className="progress-value">
                                                                <div>
                                                                    80%<br/>
                                                                    <span>Photoshop</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-sm-4">
                                                    <div className="skill-item third-skill-item wow fadeIn"
                                                         data-wow-duration="1s" data-wow-delay="0s">
                                                        <div className="progress" data-percentage="80">
                                                            <span className="progress-left">
                                                              <span className="progress-bar"/>
                                                            </span>
                                                            <span className="progress-right">
                                                              <span className="progress-bar"/>
                                                            </span>
                                                            <div className="progress-value">
                                                                <div>
                                                                    80%<br/>
                                                                    <span>Animation</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/*services*/}
                <div id="services" className="services section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-heading  wow fadeInDown" data-wow-duration="1s"
                                     data-wow-delay="0.5s">
                                    <h6>Our Services</h6>
                                    <h4>What Our Agency <em>Provides</em></h4>
                                    <div className="line-dec"/>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="naccs">
                                    <div className="grid">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="menu">
                                                    <div className="first-thumb active">
                                                        <div className="thumb">
                                                            <span className="icon"><img
                                                                src={serviceIcon1.src} alt=""/></span>
                                                            Apartments
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="thumb">
                                                            <span className="icon">
                                                                <img src={serviceIcon2.src} alt=""/></span>
                                                            Food &amp; Life
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="thumb">
                                                            <span className="icon">
                                                                <img src={serviceIcon3.src} alt=""/></span>
                                                            Cars
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="thumb">
                                                            <span className="icon">
                                                                <img src={serviceIcon4.src} alt=""/></span>
                                                            Shopping
                                                        </div>
                                                    </div>
                                                    <div className="last-thumb">
                                                        <div className="thumb">
                                                            <span className="icon">
                                                                <img src={serviceIcon1.src} alt=""/></span>
                                                            Traveling
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <ul className="nacc">
                                                    <li className="active">
                                                        <div>
                                                            <div className="thumb">
                                                                <div className="row">
                                                                    <div className="col-lg-6 align-self-center">
                                                                        <div className="left-text">
                                                                            <h4>SEO Analysis &amp; Daily Reports</h4>
                                                                            <p>Lorem ipsum dolor sit amet, consectetur
                                                                                adipiscing elit, sedr do eiusmod deis
                                                                                tempor incididunt ut labore et dolore
                                                                                kengan darwin doerski token.
                                                                                dover lipsum lorem and the others.</p>
                                                                            <div className="ticks-list"><span>
                                                                                <i className="fa fa-check"/> Optimized Template</span>
                                                                                <span><i className="fa fa-check"/> Data Info</span>
                                                                                <span><i className="fa fa-check"/> SEO Analysis</span>
                                                                                <span><i className="fa fa-check"/> Data Info</span>
                                                                                <span><i className="fa fa-check"/> SEO Analysis</span>
                                                                                <span><i className="fa fa-check"/> Optimized Template</span>
                                                                            </div>
                                                                            <p>Lorem ipsum dolor sit amet, consectetur
                                                                                adipiscing elit, sedr do eiusmod deis
                                                                                tempor incididunt.</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-6 align-self-center">
                                                                        <div className="right-image">
                                                                            <img src={servicesImage.src}
                                                                                 alt=""/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div>
                                                            <div className="thumb">
                                                                <div className="row">
                                                                    <div className="col-lg-6 align-self-center">
                                                                        <div className="left-text">
                                                                            <h4>Healthy Food &amp; Life</h4>
                                                                            <p>Lorem ipsum dolor sit amet, consectetur
                                                                                adipiscing elit, sedr do eiusmod deis
                                                                                tempor incididunt ut labore et dolore
                                                                                kengan darwin doerski token.
                                                                                dover lipsum lorem and the others.</p>
                                                                            <div className="ticks-list"><span>
                                                                                <i className="fa fa-check"/> Optimized Template</span>
                                                                                <span><i className="fa fa-check"/> Data Info</span>
                                                                                <span><i className="fa fa-check"/> SEO Analysis</span>
                                                                                <span><i className="fa fa-check"/> Data Info</span>
                                                                                <span><i className="fa fa-check"/> SEO Analysis</span>
                                                                                <span><i className="fa fa-check"/> Optimized Template</span>
                                                                            </div>
                                                                            <p>Lorem ipsum dolor sit amet, consectetur
                                                                                adipiscing elit, sedr do eiusmod deis
                                                                                tempor incididunt.</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-6 align-self-center">
                                                                        <div className="right-image">
                                                                            <img
                                                                                src={servicesImage2.src}
                                                                                alt=""/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div>
                                                            <div className="thumb">
                                                                <div className="row">
                                                                    <div className="col-lg-6 align-self-center">
                                                                        <div className="left-text">
                                                                            <h4>Car Re-search &amp; Transport</h4>
                                                                            <p>Lorem ipsum dolor sit amet, consectetur
                                                                                adipiscing elit, sedr do eiusmod deis
                                                                                tempor incididunt ut labore et dolore
                                                                                kengan darwin doerski token.
                                                                                dover lipsum lorem and the others.</p>
                                                                            <div className="ticks-list"><span>
                                                                                <i className="fa fa-check"/> Optimized Template</span>
                                                                                <span><i className="fa fa-check"/> Data Info</span>
                                                                                <span><i className="fa fa-check"/> SEO Analysis</span>
                                                                                <span><i className="fa fa-check"/> Data Info</span>
                                                                                <span><i className="fa fa-check"/> SEO Analysis</span>
                                                                                <span><i className="fa fa-check"/> Optimized Template</span>
                                                                            </div>
                                                                            <p>Lorem ipsum dolor sit amet, consectetur
                                                                                adipiscing elit, sedr do eiusmod deis
                                                                                tempor incididunt.</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-6 align-self-center">
                                                                        <div className="right-image">
                                                                            <img
                                                                                src={servicesImage3.src}
                                                                                alt=""/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div>
                                                            <div className="thumb">
                                                                <div className="row">
                                                                    <div className="col-lg-6 align-self-center">
                                                                        <div className="left-text">
                                                                            <h4>Online Shopping &amp; Tracking ID</h4>
                                                                            <p>Lorem ipsum dolor sit amet, consectetur
                                                                                adipiscing elit, sedr do eiusmod deis
                                                                                tempor incididunt ut labore et dolore
                                                                                kengan darwin doerski token.
                                                                                dover lipsum lorem and the others.</p>
                                                                            <div className="ticks-list"><span>
                                                                                <i className="fa fa-check"/> Optimized Template</span>
                                                                                <span><i className="fa fa-check"/> Data Info</span>
                                                                                <span><i className="fa fa-check"/> SEO Analysis</span>
                                                                                <span><i className="fa fa-check"/> Data Info</span>
                                                                                <span><i className="fa fa-check"/> SEO Analysis</span>
                                                                                <span><i className="fa fa-check"/> Optimized Template</span>
                                                                            </div>
                                                                            <p>Lorem ipsum dolor sit amet, consectetur
                                                                                adipiscing elit, sedr do eiusmod deis
                                                                                tempor incididunt.</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-6 align-self-center">
                                                                        <div className="right-image">
                                                                            <img
                                                                                src={servicesImage4.src}
                                                                                alt=""/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div>
                                                            <div className="thumb">
                                                                <div className="row">
                                                                    <div className="col-lg-6 align-self-center">
                                                                        <div className="left-text">
                                                                            <h4>Enjoy &amp; Travel</h4>
                                                                            <p>Lorem ipsum dolor sit amet, consectetur
                                                                                adipiscing elit, sedr do eiusmod deis
                                                                                tempor incididunt ut labore et dolore
                                                                                kengan darwin doerski token.
                                                                                dover lipsum lorem and the others.</p>
                                                                            <div className="ticks-list"><span>
                                                                                <i className="fa fa-check"/> Optimized Template</span>
                                                                                <span><i className="fa fa-check"/> Data Info</span>
                                                                                <span><i className="fa fa-check"/> SEO Analysis</span>
                                                                                <span><i className="fa fa-check"/> Data Info</span>
                                                                                <span><i className="fa fa-check"/> SEO Analysis</span>
                                                                                <span><i className="fa fa-check"/> Optimized Template</span>
                                                                            </div>
                                                                            <p>Lorem ipsum dolor sit amet, consectetur
                                                                                adipiscing elit, sedr do eiusmod deis
                                                                                tempor incididunt.</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-6 align-self-center">
                                                                        <div className="right-image">
                                                                            <img src={servicesImage.src}
                                                                                 alt=""/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="portfolio" className="our-portfolio section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="section-heading wow fadeInLeft" data-wow-duration="1s"
                                     data-wow-delay="0.3s">
                                    <h6>Our Portofolio</h6>
                                    <h4>See Our Recent <em>Projects</em></h4>
                                    <div className="line-dec"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid wow fadeIn" data-wow-duration="1s" data-wow-delay="0.7s">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="loop owl-carousel">
                                    <div className="item">
                                        <a href="#">
                                            <div className="portfolio-item">
                                                <div className="thumb">
                                                    <img src={protfolio1.src} alt=""/>
                                                </div>
                                                <div className="down-content">
                                                    <h4>Website Builder</h4>
                                                    <span>Marketing</span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="item">
                                        <a href="#">
                                            <div className="portfolio-item">
                                                <div className="thumb">
                                                    <img src={protfolio1.src} alt=""/>
                                                </div>
                                                <div className="down-content">
                                                    <h4>Website Builder</h4>
                                                    <span>Marketing</span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="item">
                                        <a href="#">
                                            <div className="portfolio-item">
                                                <div className="thumb">
                                                    <img src={protfolio2.src} alt=""/>
                                                </div>
                                                <div className="down-content">
                                                    <h4>Website Builder</h4>
                                                    <span>Marketing</span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="item">
                                        <a href="#">
                                            <div className="portfolio-item">
                                                <div className="thumb">
                                                    <img src={protfolio3.src} alt=""/>
                                                </div>
                                                <div className="down-content">
                                                    <h4>Website Builder</h4>
                                                    <span>Marketing</span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="item">
                                        <a href="#">
                                            <div className="portfolio-item">
                                                <div className="thumb">
                                                    <img src={protfolio4.src} alt=""/>
                                                </div>
                                                <div className="down-content">
                                                    <h4>Website Builder</h4>
                                                    <span>Marketing</span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <FeaturedBlogs/>
            </div>
        );
    }
}

export default HomePage;
