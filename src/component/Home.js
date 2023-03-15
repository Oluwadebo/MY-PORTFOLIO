import React from 'react'
import { Link } from "react-router-dom";
import download from './asset/download.png'
import homefourimg from './asset/homefourimg.jpg'

const Home = () => {
    return (
        <>
            <div className="">
                <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top coles">
                    <div class="container-fluid">
                        <a className="navbar-brand">
                            <img src={download} alt="stack-delta" className="logo" />
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarText">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                            <span class="navbar-text">
                                <div className="row">
                                    <div className="col-12">
                                        <h4>
                                            <a href="#" className='cart stye d-block d-md-inline py-2 py-md-0'>Home</a>
                                        </h4>
                                        <h4>
                                            <a href="#" className='cart stye d-block d-md-inline py-2 py-md-0'>About Us</a>
                                        </h4>
                                        <h4>
                                            <a href="#" className='cart stye d-block d-md-inline py-2 py-md-0'>Services</a>
                                        </h4>
                                        <h4>
                                            <a href="#" className='cart stye d-block d-md-inline py-2 py-md-0'>Experiences</a>
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
                <div className="banner-four-area">
                    <div className="container-fluid container">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6 sty my-md-0 mt-5">
                                <div className="banner-four-content text-white">
                                    <h1>Hello, I'm Debo.</h1>
                                    <p>A talented and experienced web developer With a passion for designing and building high-quality, user-friendly websites that meets your unique needs.</p>
                                    {/* <p>A talented and experienced web developer? Look no further than my portfolio! With a passion for designing and building high-quality, user-friendly websites, I am confident that I can create a website that meets your unique needs and exceeds your expectations. From custom coding and responsive design to content management systems and e-commerce integration, I have the skills and expertise to bring your online presence to life. Browse my portfolio today to see examples of my work and learn more about how I can help you achieve your digital goals.</p> */}
                                    <div className="banner-btn">
                                        <button type="submit" className="default-btn btn-bg-two border-radius-50">Hire Me</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 pe-0">
                                <div className="choose-img-two mx-md-0 mx-1 mt-md-5 mt-5">
                                    <img src={homefourimg} alt="About Images" />
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