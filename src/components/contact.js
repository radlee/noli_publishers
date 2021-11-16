import React from 'react';
import logo from '../assets/logo/default_blk_2.jpg';

const ContactPage = (props) => {
    return (
        <div className="container">

            <div className="b-example-divider"></div>

            <div className="col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={logo} className="d-block mx-lg-auto shadow img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                    <div className="col-lg-6 left-box">
                        <h1 className="contact-us">Connect with us!</h1>
                        <p className="hero-lead">We are currently a Team of individuals sharing the same vision.</p>

                        <ul class="contact-list">


                            <li>Address</li>
                            <li> Email :
                                <ul>
                                    <li>balalulama@gmail.com</li>
                                    <li>nngubelanga65@outlook.com</li>
                                </ul>
                            </li>

                            <li>Contact:
                                <ul>
                                    <li>068 127 8553</li>
                                    <li>066 295 8811</li>
                                </ul>
                            </li>


                            <li>Social Media:
                                <ul>
                                    <li>IG - GCExprnc</li>
                                    <li>Twitter - GCExprnc</li>
                                    <li>Facebook - GoCrazyExprnc</li>
                                </ul>
                            </li>
                   
                        </ul>
                    </div>
                </div>
            </div>

            <div className="b-example-divider"></div>

        </div>
    );
};

export default ContactPage;

