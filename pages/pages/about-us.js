import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from "../../components/common/ALink";
import OwlCarousel from "../../components/features/owl-carousel";
import CardCustom from "../../components/features/accordion/card-custom";
import Accordion from "../../components/features/accordion/accordion";

export default function AboutUs() {
    return (
        <main className="main about-page">
            <div className="page-header page-header-bg">
                <div className="container">
                    <h1 className="text-left text-uppercase">
                        <span className="d-block">Our history</span>
						About Us
					</h1>
                </div>
            </div>

            <nav aria-label="breadcrumb" className="breadcrumb-nav">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <ALink href="/">
                                <i className="icon-home"></i>
                            </ALink>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">About Us</li>
                    </ol>
                </div>
            </nav>

            <div className="history-section">
                <div className="container">
                    <p className="text-center col-md-12 offset-xl-2 col-xl-8 offset-lg-1 col-lg-10">Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s
                    standard
                    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
                    to make a type specimen
                    book. It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially
						unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.</p>
                </div>

                <div className="history-row bg-gray mt-4">
                    <div className="history-row-bg"
                        style={{ backgroundImage: 'url(images/home/half-bg.jpg)' }}></div>
                    <div className="container">
                        <div className="row">
                            <div className="history-description col-lg-6 offset-lg-6 mt-3 pb-md-5 pb-4 mb-3">
                                <h2 className="subtitle">OUR History</h2>
                                <div id="accordion">
                                    <Accordion adClass="accordion-simple">
                                        <CardCustom adClass="history-item" title="2000" expanded={true}>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry. Lorem Ipsum has been the industry's
                                            standard dummy text ever since the 1500s, when an unknown printer
                                            took a galley of type and scrambled it to
													make .</p>
                                        </CardCustom>

                                        <CardCustom adClass="history-item" title="2005">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry. Lorem Ipsum has been the industry's
                                            standard dummy text ever since the 1500s, when an unknown printer
                                            took a galley of type and scrambled it to
													make .</p>
                                        </CardCustom>

                                        <CardCustom adClass="history-item" title="2010">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry. Lorem Ipsum has been the industry's
                                            standard dummy text ever since the 1500s, when an unknown printer
                                            took a galley of type and scrambled it to
													make .</p>
                                        </CardCustom>

                                        <CardCustom adClass="history-item" title="2015">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry. Lorem Ipsum has been the industry's
                                            standard dummy text ever since the 1500s, when an unknown printer
                                            took a galley of type and scrambled it to
													make .</p>
                                        </CardCustom>

                                        <CardCustom adClass="history-item" title="2021">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry. Lorem Ipsum has been the industry's
                                            standard dummy text ever since the 1500s, when an unknown printer
                                            took a galley of type and scrambled it to
													make .</p>
                                        </CardCustom>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="features-section">
                <div className="container">
                    <h2 className="subtitle">OUR FEATURES</h2>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="feature-box d-flex align-items-center">
                                <i className="icon-star"></i>

                                <div className="feature-box-content">
                                    <h3>Dedicated Service</h3>
                                    <p>Consult our specialists for help with an order, customization, or design advice
									</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="feature-box d-flex align-items-center">
                                <i className="icon-reply"></i>

                                <div className="feature-box-content">
                                    <h3>Free returns</h3>
                                    <p>We stand behind our goods and services and want you to be satisfied with them.
									</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="feature-box d-flex align-items-center">
                                <i className="icon-paper-plane"></i>

                                <div className="feature-box-content">
                                    <h3>international shipping</h3>
                                    <p>Currently over 50 countries qualify for express international shipping.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="team-section bg-gray pt-5 pb-5">
                <div className="container mb-1">
                    <h2 className="subtitle">Our Team</h2>

                    <OwlCarousel adClass="team-carousel dots-small images-center round-images" options={{
                        nav: false,
                        loop: false,
                        dots: true,
                        responsive: {
                            576: {
                                items: 2
                            },
                            768: {
                                items: 3
                            },
                            992: {
                                items: 4
                            }
                        }
                    }}>

                        <div className="member">
                            <LazyLoadImage
                                alt="member"
                                src="images/team/member-1.jpg"
                                effect="black and white"
                                width="100%"
                                height="auto"
                            />

                            <h3 className="member-title">JANE DOE</h3>
                            <div className="member-job">CEO & FOUNDER</div>
                        </div>

                        <div className="member">
                            <LazyLoadImage
                                alt="member"
                                src="images/team/member-2.jpg"
                                effect="black and white"
                                width="100%"
                                height="auto"
                            />
                            <h3 className="member-title">John DOE</h3>
                            <div className="member-job">Marketing</div>
                        </div>

                        <div className="member">
                            <LazyLoadImage
                                alt="member"
                                src="images/team/member-3.jpg"
                                effect="black and white"
                                width="100%"
                                height="auto"
                            />
                            <h3 className="member-title">George DOE</h3>
                            <div className="member-job">Designer</div>
                        </div>

                        <div className="member">
                            <LazyLoadImage
                                alt="member"
                                src="images/team/member-4.jpg"
                                effect="black and white"
                                width="100%"
                                height="auto"
                            />
                            <h3 className="member-title">JANE DOE</h3>
                            <div className="member-job">Developer</div>
                        </div>

                        <div className="member">
                            <LazyLoadImage
                                alt="member"
                                src="images/team/member-2.jpg"
                                effect="black and white"
                                width="100%"
                                height="auto"
                            />
                            <h3 className="member-title">John DOE</h3>
                            <div className="member-job">Marketing</div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </main>
    )
}