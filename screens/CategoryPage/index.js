import React, {Component} from 'react';
import serviceIcon1 from "../../assets/images/service-icon-01.png";
import serviceIcon2 from "../../assets/images/service-icon-02.png";
import serviceIcon3 from "../../assets/images/service-icon-03.png";

class CategoryPage extends Component {
    render() {
        return (
            <div className="category_container">
                <div className="services section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div
                                    className="section-heading wow fadeInDown"
                                    data-wow-duration="1s"
                                    data-wow-delay="0.5s"
                                >
                                    <h6>Our Categorys</h6>
                                    <h4>Choosing Your <em>Categorie</em></h4>
                                    <div className="line-dec"/>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="naccs">
                                    <div className="grid">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="menu">
                                                    <div className={'thumb active'}>
                                                        <div className="thumb-content">
                                                            <span className="icon">
                                                                <img src={serviceIcon1.src} alt=""/></span>
                                                            Tech News
                                                        </div>
                                                    </div>
                                                    <div className={'thumb'}>
                                                        <div className="thumb-content">
                                                            <span className="icon">
                                                                <img src={serviceIcon2.src} alt=""/></span>
                                                            Gadgets
                                                        </div>
                                                    </div>
                                                    <div className={'thumb'}>
                                                        <div className="thumb-content">
                                                            <span className="icon">
                                                                <img src={serviceIcon3.src} alt=""/></span>
                                                            Cars
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
        );
    }
}

export default CategoryPage;
