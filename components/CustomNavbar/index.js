import React, {useEffect} from 'react';
import logo from "../../assets/images/logo-v1.png";
import Link from "next/link";
import {useRouter} from "next/router";

const CustomNavbar = () => {
    const router = useRouter();

    useEffect(() => {
        const className = document.querySelector('.header-area').classList;
        window.addEventListener("scroll", () => {
            if (className) {
                if (window.scrollY > 100) {
                    if (!className.contains('background-header')) {
                        className.toggle('background-header');
                    }
                } else if (window.scrollY < 150) {
                    if (className.contains('background-header')) {
                        className.toggle('background-header');
                    }
                }
            }
        });
    }, []);
    return (
        <div className={'header_container'}>
            <div className="pre-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-sm-8 col-7">
                            <ul className="info">
                                <li><a href="#"><i className="fa fa-envelope"/>digimedia@company.com</a></li>
                                <li><a href="#"><i className="fa fa-phone"/>010-020-0340</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-sm-4 col-5">
                            <ul className="social-media">
                                <li><a href="#"><i className="fa fa-facebook"/></a></li>
                                <li><a href="#"><i className="fa fa-behance"/></a></li>
                                <li><a href="#"><i className="fa fa-twitter"/></a></li>
                                <li><a href="#"><i className="fa fa-dribbble"/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s"
                    data-wow-delay="0s">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                <a className="logo">
                                    <img src={logo.src} alt="logo"/>
                                </a>
                                <ul className="nav">
                                    <li className="scroll-to-section">
                                        <Link href="/" className="active">Home</Link>
                                    </li>
                                    <li className="scroll-to-section">
                                        <Link href="/blogs">About</Link>
                                    </li>
                                    <li className="scroll-to-section"><a href="#">Services</a></li>
                                    <li className="scroll-to-section"><a href="#">Projects</a></li>
                                    <li className="scroll-to-section"><a href="#">Blog</a></li>
                                    <li className="scroll-to-section"><a href="#">Contact</a></li>
                                    <li className="scroll-to-section">
                                        <div className="border-first-button"><a href="#">Free Quote</a></div>
                                    </li>
                                </ul>
                                <a className='menu-trigger'>
                                    <span>Menu</span>
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default CustomNavbar;
