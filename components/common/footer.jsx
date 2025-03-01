import React from 'react';

import ALink from "./ALink";

function Footer () {
    return (
        <footer className="footer bg-dark position-relative">
            <div className="footer-middle">
                <div className="container position-static">
                    <div className="row">
                        <div className="col-lg-3 col-md-4">
                            <div className="widget">
                                <h4 className="widget-title font-weight-bold">Contact</h4>
                                <ul className="contact-info">
                                    <li>
                                        <span className="contact-info-label">Adresse:</span>Foire Cices, Dakar, Sénégal
									</li>
                                    <li>
                                        <span className="contact-info-label">Téléphone:</span>
                                        <a href="tel:">+221 77 972 26 68
										</a>
                                    </li>
                                    <li>
                                        <span className="contact-info-label">Email:</span>
                                        <a href="mailto:mail@example.com">jmconfort2025@gmail.com</a>
                                    </li>
                                    <li>
                                        <span className="contact-info-label">Horaires:</span>
										Lundi - Dimanche / 8h:00  - 20h:00 
									</li>
                                </ul>
                                <div className="social-icons">
                                    <ALink href="#" className="social-icon social-facebook icon-facebook"
                                        title="Facebook"></ALink>
                                    <ALink href="#" className="social-icon social-twitter icon-twitter"
                                        title="Twitter"></ALink>
                                    <ALink href="#" className="social-icon social-instagram icon-instagram"
                                        title="Instagram"></ALink>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-9 col-md-8">
                            <div className="widget widget-newsletter">
                                <h4 className="widget-title">Souscrire a nos annonces</h4>
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-12 mb-1">
                                        <p className="mb-0">Obtenez toutes les dernières informations sur les événements, les ventes et les offres. Inscrivez-vous à la newsletter aujourd'hui.</p>
                                    </div>

                                    <div className="col-lg-6 col-md-12 mb-1">
                                        <form action="#" className="d-flex mb-0 w-100">
                                            <input type="email" className="form-control mb-0" placeholder="Email address"
                                                required />

                                            <input type="submit" className="btn btn-primary shadow-none" value="Subscribe" />
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="row widget-middle">
                                <div className="col-sm-5">
                                    <div className="widget">
                                        <h4 className="widget-title">Liens utils</h4>

                                        <div className="links link-parts row mb-0">
                                            <ul className="link-part col-lg-6 col-md-12">
                                                <li>
                                                    <ALink href="/pages/about-us">Apropos</ALink>
                                                </li>
                                                <li>
                                                    <ALink href="/pages/contact-us">Contacter nous</ALink>
                                                </li>
                                                <li>
                                                    <ALink href="/pages/account">Mon compte</ALink>
                                                </li>
                                            </ul>
                                            {/* <ul className="link-part col-lg-6 col-md-12">
                                                <li>
                                                    <ALink href="#">Order history</ALink>
                                                </li>
                                                <li>
                                                    <ALink href="#">Advanced search</ALink>
                                                </li>
                                                <li>
                                                    <ALink href="/pages/login">Login</ALink>
                                                </li>
                                            </ul> */}
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="col-sm-7">
                                    <div className="widget">
                                        <h4 className="widget-title">Apropos</h4>

                                        <div className="links link-parts row mb-0">
                                            <ul className="link-part col-lg-6 col-md-12">
                                                <li>
                                                    <ALink href="#">Super Fast React Template</ALink>
                                                </li>
                                                <li>
                                                    <ALink href="#">1st Fully working Ajax Theme</ALink>
                                                </li>
                                                <li>
                                                    <ALink href="#">36 Unique Shop Layouts</ALink>
                                                </li>
                                            </ul>
                                            <ul className="link-part col-lg-6 col-md-12">
                                                <li>
                                                    <ALink href="#">Powerful Admin Panel</ALink>
                                                </li>
                                                <li>
                                                    <ALink href="#">Mobile & Retina Optimized</ALink>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="footer-bottom d-sm-flex align-items-center">
                    <div className="footer-left">
                        <span className="footer-copyright">© Copyright 2021. All Rights Reserved.</span>
                    </div>

                    <div className="footer-right ml-auto mt-1 mt-sm-0">
                        <div className="payment-icons mr-0">
                            <span className="payment-icon visa" style={ { backgroundImage: `url("images/payments/payment-visa.svg")` } }></span>
                            <span className="payment-icon paypal" style={ { backgroundImage: `url("images/payments/payment-paypal.svg")` } }></span>
                            <span className="payment-icon stripe" style={ { backgroundImage: `url("images/payments/payment-stripe.png")` } }></span>
                            <span className="payment-icon verisign" style={ { backgroundImage: `url("images/payments/payment-verisign.svg")` } }></span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default React.memo( Footer );