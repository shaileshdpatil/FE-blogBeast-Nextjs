import React, {Component} from 'react';
import blogPost1 from "../../assets/images/blog-post-01.jpg";
import authorPost from "../../assets/images/author-post.jpg";
import blogPost2 from "../../assets/images/blog-post-02.jpg";
import blogPost3 from "../../assets/images/blog-post-03.jpg";
import blogPost4 from "../../assets/images/blog-post-04.jpg";

class FeaturedBlogs extends Component {
    render() {
        return (
            <div className="featured_blog">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 offset-lg-4 wow fadeInDown"
                             data-wow-duration="1s"
                             data-wow-delay="0.3s"
                        >
                            <div className="section-heading">
                                {/*<h6>Recent News</h6>*/}
                                <h4>Check Our Blog <em>Posts</em></h4>
                                <div className="line-dec"/>
                            </div>
                        </div>
                        <div className="col-lg-6 show-up wow fadeInUp"
                            data-wow-duration="1s"
                            data-wow-delay="0.3s"
                        >
                            <div className="blog-post">
                                <div className="thumb">
                                    <a href="#"><img src={blogPost1.src} alt=""/></a>
                                </div>
                                <div className="down-content">
                                    <span className="category">Read More</span>
                                    <span className="date">03 August 2021</span>
                                    <a href="#"><h4>Lorem Ipsum Dolor Sit Amet, Consectetur Adelore
                                        Eiusmod Tempor Incididunt</h4></a>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers itii
                                        eiumod deis tempor incididunt ut labore.</p>
                                    <div className={'created_by'}>
                                        <span className="author"><img src={authorPost.src} alt=""/>By: Andrea Mentuzi</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp"
                            data-wow-duration="1s"
                            data-wow-delay="0.3s"
                        >
                            <div className="blog-posts">
                                <div className="row">
                                    <div className={'col-lg-12'}>
                                        <div className="post-item">
                                            <div className="thumb">
                                                <a href="#"><img src={blogPost2.src} alt=""/></a>
                                            </div>
                                            <div className="right-content">
                                                <span className="category">Read More</span>
                                                <span className="date">24 September 2021</span>
                                                <a href="#"><h4>Lorem Ipsum Dolor Sit Amei Eiusmod Tempor</h4></a>
                                                <p>Lorem ipsum dolor sit amet, cocteturi adipiscing eliterski.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="post-item">
                                            <div className="thumb">
                                                <a href="#"><img src={blogPost3.src} alt=""/></a>
                                            </div>
                                            <div className="right-content">
                                                <span className="category">Read More</span>
                                                <span className="date">24 September 2021</span>
                                                <a href="#"><h4>Lorem Ipsum Dolor Sit Amei Eiusmod Tempor</h4></a>
                                                <p>Lorem ipsum dolor sit amet, cocteturi adipiscing eliterski.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="post-item last-post-item">
                                            <div className="thumb">
                                                <a href="#"><img src={blogPost4.src} alt=""/></a>
                                            </div>
                                            <div className="right-content">
                                                <span className="category">Read More</span>
                                                <span className="date">24 September 2021</span>
                                                <a href="#"><h4>Lorem Ipsum Dolor Sit Amei Eiusmod Tempor</h4></a>
                                                <p>Lorem ipsum dolor sit amet, cocteturi adipiscing eliterski.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FeaturedBlogs;
