import React, {Component} from 'react';
import sliderImg from "../../assets/images/landingImage.jpg"
import FeaturedBlogs from "../BlogsPage";
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
                                                    <h6>Get ready for update</h6>
                                                    <h2>Stay updated with news and techology.</h2>
                                                    <p>
                                                        Welcome to the new world so here this is our site here we get
                                                        updates of latest news and technology really excited to getting
                                                        started.
                                                    </p>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="border-first-button scroll-to-section">
                                                        <a href="#">Continue</a>
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
