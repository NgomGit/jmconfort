// Import Custom Component
import ALink from "./ALink";
import CartMenu from "./partials/cart-menu";
import MainMenu from "./partials/main-menu";
import SearchForm from "./partials/search-form";
import LoginModal from "../features/modals/login-modal";

export default function Header ( { adClass = '' } ) {
    function openMobileMenu ( e ) {
        e.preventDefault();
        document.querySelector( "body" ).classList.toggle( "mmenu-active" );
        e.currentTarget.classList.toggle( "active" );
    }

    return (
        <header className={ `header ${ adClass }` }>
            {/* <div className="header-top">
                <div className="container">
                    <div className="header-left header-dropdowns">
                        <div className="header-dropdown lang-menu">
                            <ALink href="#"><i className="flag-us flag"></i>ENG</ALink>
                            <div className="header-menu">
                                <ul>
                                    <li><ALink href="#"><i className="flag-us flag mr-2"></i>ENG</ALink>
                                    </li>
                                    <li><ALink href="#"><i className="flag-fr flag mr-2"></i>FRA</ALink></li>
                                </ul>
                            </div>
                        </div>
                        <div className="header-dropdown">
                            <ALink href="#" className="pl-0">USD</ALink>
                            <div className="header-menu">
                                <ul>
                                    <li><ALink href="#">EUR</ALink></li>
                                    <li><ALink href="#">USD</ALink></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="header-right">
                        <p className="top-message text-uppercase d-none d-sm-block">Free returns. Standard shipping orders $99+</p>

                        <span className="separator"></span>

                        <div className="header-dropdown dropdown-expanded mx-2 px-1">
                            <ALink href="#">Links</ALink>
                            <ul className="header-menu line-height-1">
                                <li><ALink href="/pages/account">Mon compte</ALink></li>
                                <li><ALink href="/pages/contact-us">Contact Us</ALink></li>
                                <li><ALink href="/pages/blog">Blog</ALink></li>
                                <li><ALink href="/pages/wishlist">Wishlist</ALink></li>
                                <li><ALink href="/pages/cart">Cart</ALink></li>
                                <LoginModal />
                            </ul>
                        </div>

                        <span className="separator"></span>

                        <div className="social-icons d-flex">
                            <ALink href="#" className="social-icon social-facebook icon-facebook" ></ALink>
                            <ALink href="#" className="social-icon social-twitter icon-twitter" ></ALink>
                            <ALink href="#" className="social-icon social-instagram icon-instagram"></ALink>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="header-middle sticky-header mobile-sticky">
                <div className="container">
                    <div className="header-left w-lg-max ml-auto ml-lg-0">
                        <SearchForm />
                    </div>

                    <div className="header-center order-first order-lg-0 ml-0 ml-lg-auto ">
                        <button className="mobile-menu-toggler" type="button" onClick={ openMobileMenu }>
                            <i className="fa fa-bars"></i>
                        </button>

                        <ALink href="/" className="logo">
                            {/* <img src="images/logo-black.png" className="black-logo" width="202" height="80" alt="Porto Logo" /> */}
                            <span className="black-logo font-weight-bold text-dark font2">JM Confort</span>
                        </ALink>
                    </div>

                    <div className="header-right w-lg-max ml-0 ml-lg-auto">
                        <div className="header-contact d-none d-lg-flex align-items-center ml-auto mr-4">
                            <i className="icon-phone-2"></i>
                            <h6 className="line-height-1 pr-2">Contacter nous
								<a href="tel:+221781080363" className="d-block text-dark font1">+221 77 335 52 90</a>
                            </h6>
                        </div>

                        <ALink href="/pages/account" className="header-icon login-link pl-1">
                            <i className="icon-user-2"></i>
                        </ALink>

                        <ALink href="/pages/wishlist" className="header-icon btn-wishlist pl-1 pr-2" title="wishlist"><i
                            className="icon-wishlist-2"></i></ALink>
                        <CartMenu />

                    </div>
                </div>
            </div>

            <div className="header-bottom sticky-header desktop-sticky d-lg-block d-none">
                <div className="container">
                    <div className="header-left">
                        <ALink href="/" className="logo">
                            {/* <img src="images/logo-black.png" className="white-logo sticky-logo" alt="Porto Logo"
                                width="110" height="46" /> */}
                                  <h5 className="line-height-10">JM Confort</h5>
                        </ALink>
                    </div>

                    <MainMenu />
                    
                    <div className="header-right">
                        <SearchForm />

                        <ALink href="/pages/account" className="header-icon account-icon">
                            <i className="icon-user-2"></i>
                        </ALink>

                        <ALink href="/pages/wishlist" className="header-icon" title="wishlist"><i
                            className="icon-wishlist-2"></i></ALink>

                        <CartMenu sticky={ true } />
                    </div>
                </div>
            </div>
        </header>
    )
}