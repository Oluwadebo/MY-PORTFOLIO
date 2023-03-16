import React from 'react'
import { Link } from "react-router-dom";
import download from './asset/download.png'
import logo from './asset/logo1.png'
import debo from './asset/debo.png'
import homefourimg from './asset/homefourimg.jpg'

const Home = () => {
    return (
        <>
            <div className="">
                <nav className="navbar navbar-expand-lg bg-light fixed-top coles">
                    <div className="container-fluid">
                        <a className="navbar-brand">
                            <img src={logo} alt="stack-delta" className="logo" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                            <span className="navbar-text">
                                <div className="row">
                                    <div className="col-12">
                                        <h4>
                                            <a href="#Home" className='cart stye d-block d-md-inline py-2 py-md-0'>Home</a>
                                        </h4>
                                        <h4>
                                            <a href="#About" className='cart stye d-block d-md-inline py-2 py-md-0'>About Us</a>
                                        </h4>
                                        <h4>
                                            <a href="#Services" className='cart stye d-block d-md-inline py-2 py-md-0'>Services</a>
                                        </h4>
                                        <h4>
                                            <a href="#Experiences" className='cart stye d-block d-md-inline py-2 py-md-0'>Experiences</a>
                                        </h4>
                                        <h4>
                                            <a href="#" className='cart stye d-block d-md-inline py-2 py-md-0'>Contact</a>
                                        </h4>
                                    </div>
                                </div>
                            </span>
                        </div>
                    </div>
                </nav>
                <div className="banner-four-area" id='Home'>
                    <div className="container-fluid container">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6 sty my-md-0 mt-5">
                                <div className="banner-four-content text-white">
                                    <h1>Hello, I'm Debo.</h1>
                                    <p>I am a professional Website Developer having several experience in building responsive websites that is mobile friendly.</p>
                                    <div className="banner-btn">
                                        <button type="submit" className="default-btn btn-bg-two border-radius-50">Hire Me</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 pe-0">
                                <div className="choose-img-two mx-md-0 mx-1 mt-md-0 mt-5">
                                    <img src={homefourimg} alt="About Images" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" id='About'>
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="clients-slider-img">
                                <img src={debo} alt="Images" />
                                <div className="clients-slider-circle"></div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content-3 mx-2">
                                <div className="section-title">
                                    <span className="sp-color2 mt-4">About me</span>
                                    <p>I am a Fullstack Website Developer by profession, With a passion for designing and building high-quality, user-friendly websites, From custom coding and responsive design to  e-commerce integration, I have the skills and expertise to bring your online presence to life. Browse my portfolio today to see examples of my work and learn more about how I can help you achieve your digital goals.</p>
                                    <div className="banner-btn mt-5">
                                        <button type="submit" className="default-btn btn-bg-two space">Download CV</button>
                                        <button type="submit" className="default-btn btn-bg-two mt-md-0 mt-3">Contact Me</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blog-area mt-5" id='Services'>
                    <div className="container">
                        <div className="section-title text-center">
                            <span className="sp-color2">Services</span>
                        </div>
                        <div className="row pt-3">
                            <div className="col-lg-4 col-md-6">
                                <div className="blog-card">
                                    <div className="blog-img">
                                        <img src={logo} alt="Blog Images" />
                                    </div>
                                    <div className="content">
                                        <center>
                                            <h3 className="lin">STACK-DELTA</h3>
                                            <div className="banner-btn">
                                                <button type="submit" className="default-btn btn-bg-two"><a href=""> Live Demo</a></button>
                                            </div>
                                        </center>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="blog-card">
                                    <div className="blog-img">
                                        <img src={logo} alt="Blog Images" />
                                    </div>
                                    <div className="content">
                                        <center>
                                            <h3 className="lin">STACK-DELTA</h3>
                                            <div className="banner-btn">
                                                <button type="submit" className="default-btn btn-bg-two"><a href=""> Live Demo</a></button>
                                            </div>
                                        </center>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="blog-card">
                                    <div className="blog-img">
                                        <img src={logo} alt="Blog Images" />
                                    </div>
                                    <div className="content">
                                        <center>
                                            <h3 className="lin">STACK-DELTA</h3>
                                            <div className="banner-btn">
                                                <button type="submit" className="default-btn btn-bg-two"><a href=""> Live Demo</a></button>
                                            </div>
                                        </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" id='Experiences'>
                    <div className="section-title text-center">
                        <span className="sp-color2">Experiences</span>
                    </div>
                    <div className="row py-3">
                        <div className="col-12">
                            <div className="icon3 p-4">
                                <div className="name">
                                    HTML <br /> <div className="nav nav1"></div>
                                </div>
                                <div className="name">
                                    CSS <br /> <div className="nav nav2"></div>
                                </div>
                                <div className="name">
                                    BOOTSTRAP <br /> <div className="nav nav3"></div>
                                </div>
                                <div className="name">
                                    JAVASCRIPT<br /> <div className="nav nav4"></div>
                                </div>
                                <div className="name">
                                    NODE JS <br /> <div className="nav nav5"></div>
                                </div>
                                <div className="name">
                                    REACT <br /> <div className="nav nav6"></div>
                                </div>
                                <div className="name">
                                    FIREBASE <br /> <div className="nav nav7"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home