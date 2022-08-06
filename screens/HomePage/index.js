import React, {Component} from 'react';
import sliderImg from "../../assets/images/slider-dec.png"
import FeaturedBlogs from "../BlogsPage";
import CategoryPage from "../CategoryPage";
import ScrollTop from "../../components/ScrollToTop";
import {Fab} from "@mui/material";
import {KeyboardArrowUp} from "@mui/icons-material";

class HomePage extends Component {
    render() {
        return (
            <div>
                <div
                    className="main-banner wow animated"
                    id="top"
                    data-wow-duration="1s"
                    data-wow-delay="0.5s"
                >
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
                <FeaturedBlogs/>
                <ScrollTop params={'#top'}>
                    <Fab size="small">
                        <KeyboardArrowUp/>
                    </Fab>
                </ScrollTop>
            </div>
        );
    }
}

export default HomePage;
