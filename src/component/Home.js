import React from 'react'
import { Link } from "react-router-dom";
import download from './asset/download.png'
import logo from './asset/logo1.png'
import Capture from './asset/Capture.PNG'
import Capture1 from './asset/Capture1.PNG'
import Capture2 from './asset/Capture2.PNG'
import debo from './asset/debo.png'
import homefourimg from './asset/homefourimg.jpg'
import * as yup from "yup";
import { useFormik } from "formik";
import { useState, useEffect } from 'react';

const Home = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        fetch(`https://opengraph.io/api/1.1/site/http%3A%2F%2Fecommerce-kappa-virid.vercel.app?app_id=a031077d-a808-4e57-9f01-0e8e73a99c10`)
            .then(response => response.json())
            .then(data => {
                setTitle(data.hybridGraph.title);
            });
        fetch(`https://opengraph.io/api/1.1/site/http%3A%2F%2Ftrweath-app.netlify.app?app_id=a031077d-a808-4e57-9f01-0e8e73a99c10`)
            .then(response => response.json())
            .then(data => {
                setDescription(data.hybridGraph.title);
            });
        fetch(`https://opengraph.io/api/1.1/site/http%3A%2F%2Fstack-delta.vercel.app?app_id=a031077d-a808-4e57-9f01-0e8e73a99c10`)
            .then(response => response.json())
            .then(data => {
                setImageUrl(data.hybridGraph.title);
            });
    }, []);

    let number = new RegExp(`(?=.*[0-9])`);
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            number: "",
            msgsubject: "",
            message: "",
        },
        onSubmit: (values) => {

        },
        validationSchema: yup.object({
            name: yup
                .string()
                .required("Please Enter Your Name")
                .min(3, "must be Your Name"),
            number: yup
                .string()
                .required("Please Enter Your number")
                .matches(number, "Must be a number")
                .min(10, "must be Your number"),
            email: yup
                .string()
                .required("Please Enter Your Email")
                .email("must be a valid email"),
            msgsubject: yup
                .string()
                .required("Please Enter Your Subject")
                .min(3, "must be Your Subject"),
            message: yup
                .string()
                .required("Write your message"),
        }),
    })
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
                                            <a href="#Contact" className='cart stye d-block d-md-inline py-2 py-md-0'>Contact</a>
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
                                        <img src={Capture1} alt="Images" />
                                    </div>
                                    <div className="content">
                                        <center>
                                            <h3 className="lin">{imageUrl}</h3>
                                            <div className="banner-btn">
                                                <button type="submit" className="default-btn btn-bg-two"><a href="https://stack-delta.vercel.app"> Live Demo</a></button>
                                            </div>
                                        </center>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="blog-card">
                                    <div className="blog-img">
                                        <img src={Capture} alt="Images" />
                                    </div>
                                    <div className="content">
                                        <center>
                                            <h3 className="lin">{description}</h3>
                                            <div className="banner-btn">
                                                <button type="submit" className="default-btn btn-bg-two"><a href="https://trweath-app.netlify.app"> Live Demo</a></button>
                                            </div>
                                        </center>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="blog-card">
                                    <div className="blog-img">
                                        <img src={Capture2} alt="Images" />
                                    </div>
                                    <div className="content">
                                        <center>
                                            <h3 className="lin">{title}</h3>
                                            <div className="banner-btn">
                                                <button type="submit" className="default-btn btn-bg-two"><a href="https://ecommerce-kappa-virid.vercel.app"> Live Demo</a></button>
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
                <div className="contact-form-area py-5" id='Contact'>
                    <div className="container">
                        <div className="section-title text-center">
                            <h2 className="sp-color2">CONTACT</h2>
                        </div>
                        <div className="row pt-4">
                            <div className="col-lg-4">
                                <div className="contact-info mx-2">
                                    <span>Contact Info</span>
                                    <h2>Let's Connect With Us</h2>
                                    <p>Get in touch, for a quick walk through of our services and know us better. </p>
                                    <ul>
                                        <li>
                                            <div className="content">
                                                <i className="fa fa-phone"></i>
                                                <h3>Phone Number</h3>
                                                <a href="tel:09058922870">09058922870</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="content">
                                                <i className="fa fa-map"></i>
                                                <h3>Address</h3>
                                                <span>40, Jomowoye street, Ondo State, Nigeria.</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="content">
                                                <i class="fa fa-message"></i>
                                                <h3>Contact Info</h3>
                                                <a href="mailto:ogunweoluwadebo1@gmail.com">ogunweoluwadebo1@gmail.com</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="contact-form">
                                    <form action="" onSubmit={formik.handleSubmit}>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label>Your Name</label>
                                                    <input type="text" name="name" id="name" className={
                                                        formik.errors.name && formik.touched.name
                                                            ? "form-control is-invalid"
                                                            : "form-control"
                                                    }
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur} placeholder="Name" />
                                                    {formik.touched.name && (
                                                        <div style={{ color: "red" }} className="div my-2">
                                                            {formik.errors.name}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label>Your Email</label>
                                                    <input type="email" name="email" id="email" className={
                                                        formik.errors.email && formik.touched.email
                                                            ? "form-control is-invalid"
                                                            : "form-control"
                                                    }
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        placeholder="Email" />
                                                    {formik.touched.email && (
                                                        <div style={{ color: "red" }} className="div my-2">
                                                            {formik.errors.email}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label>Phone Number</label>
                                                    <input type="text" name="number" maxLength={11} className={
                                                        formik.errors.number && formik.touched.number
                                                            ? "form-control is-invalid"
                                                            : "form-control"
                                                    }
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur} placeholder="Phone Number" />
                                                    {formik.touched.number && (
                                                        <div style={{ color: "red" }} className="div my-2">
                                                            {formik.errors.number}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label>Your Subject</label>
                                                    <input type="text" name="msgsubject" className={
                                                        formik.errors.msgsubject && formik.touched.msgsubject
                                                            ? "form-control is-invalid"
                                                            : "form-control"
                                                    }
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur} placeholder="Your Subject" />
                                                    {formik.touched.msgsubject && (
                                                        <div style={{ color: "red" }} className="div my-2">
                                                            {formik.errors.msgsubject}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <label>Your Message</label>
                                                    <textarea name="message" className={
                                                        formik.errors.message && formik.touched.message
                                                            ? "form-control is-invalid"
                                                            : "form-control"
                                                    }
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur} cols="30" rows="4" placeholder="Your Message"></textarea>
                                                    {formik.touched.message && (
                                                        <div style={{ color: "red" }} className="div my-2">
                                                            {formik.errors.message}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 text-center mt-3">
                                                <button type="submit" className="default-btn btn-bg-two border-radius-50">Send Message</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer class="footer">
                    <div class="container">
                        {/* <h3>Contact Info</h3> */}
                        <div className="row text-center">
                            <div className="col-12 col-md-4">
                                <h4 className='footer-nav'>
                                    <i class="fa fa-linkedin pe-3"></i>
                                    <a href="#">LinkedIn</a>
                                </h4>
                            </div>
                            <div className="col-12 col-md-4">
                                <h4 className='footer-nav'>
                                    <i class="fa fa-github pe-3"></i>
                                    <a href="https://github.com/Oluwadebo">GitHub</a>
                                </h4>
                            </div>
                            <div className="col-12 col-md-4">
                                <h4 className='footer-nav'>
                                    <i class="fa fa-whatsapp pe-3"></i>
                                    <a href="https://wa.me/2349044796430">What'sApp</a>
                                </h4>
                            </div>
                        </div>
                        <hr />
                        <div className="text-center">
                            &copy; 2022 Ogunwe Debo
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Home