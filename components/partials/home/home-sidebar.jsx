import SlideToggle from 'react-slide-toggle';
import withApollo from '../../../server/apollo';

import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';
import BlogWidget from '../home/blog';

function HomeSidebar ( props ) {
    const { blog, loading, data } = props;

    function closeSidebar () {
        document.querySelector( 'body' ).classList.contains( 'sidebar-opened' ) && document.querySelector( 'body' ).classList.remove( 'sidebar-opened' );
    }

    function sidebarToggle ( e ) {
        let body = document.querySelector( 'body' );
        e.preventDefault();
        if ( body.classList.contains( 'sidebar-opened' ) ) {
            body.classList.remove( 'sidebar-opened' );
        } else {
            body.classList.add( 'sidebar-opened' );
        }
    }

    return (
        <>
            <div className="sidebar-overlay" onClick={ closeSidebar }></div>
            <div className="sidebar-toggle custom-sidebar-toggle" onClick={ e => sidebarToggle( e ) }><i className="fas fa-sliders-h"></i></div>

            <aside className={ `sidebar-home col-lg-3  mobile-sidebar skeleton-body skel-shop-products ${ !loading ? 'loaded' : '' } ` }>
                <div className="side-menu-wrapper mb-3">
                    <h2 className="side-menu-title ls-n-25">Browse Categories</h2>

                    <ul className="side-menu px-3 mx-3">
                        <SlideToggle collapsed={ true }>
                            { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                <li>
                                    <ALink href="/shop">Fashion</ALink>
                                    <span className={ `side-menu-toggle ${ toggleState === 'COLLAPSED' ? 'collapsed' : '' }` } onClick={ ( e ) => { e.stopPropagation(), onToggle() } }></span>
                                    <ul className="overflow-hidden" ref={ setCollapsibleElement }>
                                        <li>
                                            <ALink href="#">Women Clothes</ALink>
                                        </li>
                                        <li>
                                            <ALink href="#">Men Clothes</ALink>
                                        </li>
                                        <li>
                                            <ALink href="#">Shoes</ALink>
                                        </li>
                                        <li>
                                            <ALink href="#">Accessories</ALink>
                                        </li>
                                    </ul>
                                </li>
                            ) }
                        </SlideToggle>
                        <SlideToggle collapsed={ true }>
                            { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                <li>
                                    <ALink href="/shop">Accessories </ALink>
                                    <span className={ `side-menu-toggle ${ toggleState === 'COLLAPSED' ? 'collapsed' : '' }` } onClick={ ( e ) => { e.stopPropagation(), onToggle() } }></span>
                                    <ul className="overflow-hidden" ref={ setCollapsibleElement }>
                                        <li>
                                            <a href="#">Watches</a>
                                        </li>
                                        <li>
                                            <a href="#">Caps</a>
                                        </li>
                                    </ul>
                                </li>
                            ) }
                        </SlideToggle>
                        <SlideToggle collapsed={ true }>
                            { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                <li>
                                    <ALink href="/shop">Electronics</ALink>
                                    <span className={ `side-menu-toggle ${ toggleState === 'COLLAPSED' ? 'collapsed' : '' }` } onClick={ ( e ) => { e.stopPropagation(), onToggle() } }></span>
                                    <ul className="overflow-hidden" ref={ setCollapsibleElement }>
                                        <li>
                                            <a href="#">Toys</a>
                                        </li>
                                        <li>
                                            <a href="#">Headphone</a>
                                        </li>
                                    </ul>
                                </li>
                            ) }
                        </SlideToggle>
                        <li>
                            <ALink href="/shop">Dress</ALink>
                        </li>
                    </ul>
                </div>

                <div className="widget widget-banners px-5 text-center">
                    <OwlCarousel adClass="owl-theme dots-small" options={ {
                        nav: false,
                        dots: true
                    } }>
                        <div className="banner d-flex flex-column align-items-center">
                            <h3
                                className="badge-sale bg-secondary d-flex flex-column align-items-center justify-content-center text-uppercase">
                                <em className="ls-0">Sale</em>Many Item</h3>
                            <h4 className="sale-text font1 text-uppercase">45&nbsp;<sup>%</sup><sub>off</sub>
                            </h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <ALink href="/shop" className="btn btn-primary btn-md font1">View Sale</ALink>
                        </div>
                        <div className="banner d-flex flex-column align-items-center">
                            <h3
                                className="badge-sale bg-secondary d-flex flex-column align-items-center justify-content-center text-uppercase">
                                <em className="ls-0">Sale</em>Many Item</h3>
                            <h4 className="sale-text font1 text-uppercase">45&nbsp;<sup>%</sup><sub>off</sub>
                            </h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <ALink href="/shop" className="btn btn-primary btn-md font1">View Sale</ALink>
                        </div>
                        <div className="banner d-flex flex-column align-items-center">
                            <h3
                                className="badge-sale bg-secondary d-flex flex-column align-items-center justify-content-center text-uppercase">
                                <em className="ls-0">Sale</em>Many Item</h3>
                            <h4 className="sale-text font1 text-uppercase">45&nbsp;<sup>%</sup><sub>off</sub>
                            </h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <ALink href="/shop" className="btn btn-primary btn-md font1">View Sale</ALink>
                        </div>
                    </OwlCarousel>
                </div>

                <div className="widget widget-newsletters bg-gray text-center">
                    <h3 className="widget-title text-uppercase m-b-3">Subscribe Newsletter</h3>
                    <p className="mb-2">Get all the latest information on Events, Sales and Offers. </p>
                    <form action="#">
                        <div className="form-group position-relative sicon-envolope-letter">
                            <input type="email" className="form-control" name="newsletter-email"
                                placeholder="Email address" />
                        </div>
                        <input type="submit" className="btn btn-primary btn-md" value="Subscribe" />
                    </form>
                </div>

                <div className="widget widget-testimonials">
                    <OwlCarousel adClass="owl-theme dots-left dots-small" options={ {
                        nav: false,
                        dots: true
                    } }>
                        <div className="testimonial">
                            <div className="testimonial-owner">
                                <figure>
                                    <img src="images/clients/client-1.jpg" alt="client" width="55" height="55" />
                                </figure>

                                <div>
                                    <h4 className="testimonial-title">john Smith</h4>
                                    <span>CEO &amp; Founder</span>
                                </div>
                            </div>

                            <blockquote className="ml-4 pr-0">
                                <p>Lorem ipsum dolor sit amet, consectetur elitad adipiscing Cras non placerat mi.</p>
                            </blockquote>
                        </div>

                        <div className="testimonial">
                            <div className="testimonial-owner">
                                <figure>
                                    <img src="images/clients/client-2.jpg" alt="client" width="55" height="55" />
                                </figure>

                                <div>
                                    <h4 className="testimonial-title">Dae Smith</h4>
                                    <span>CEO &amp; Founder</span>
                                </div>
                            </div>

                            <blockquote className="ml-4 pr-0">
                                <p>Lorem ipsum dolor sit amet, consectetur elitad adipiscing Cras non placerat
                                            mi.</p>
                            </blockquote>
                        </div>

                        <div className="testimonial">
                            <div className="testimonial-owner">
                                <figure>
                                    <img src="images/clients/client-3.jpg" alt="client" width="55" height="55" />
                                </figure>

                                <div>
                                    <h4 className="testimonial-title">John Doe</h4>
                                    <span>CEO &amp; Founder</span>
                                </div>
                            </div>

                            <blockquote className="ml-4 pr-0">
                                <p>Lorem ipsum dolor sit amet, consectetur elitad adipiscing Cras non placerat mi.</p>
                            </blockquote>
                        </div>
                    </OwlCarousel>
                </div>

                <div className="widget widget-posts post-date-in-media media-with-zoom mb-0 mb-lg-2 pb-lg-2 col-12">

                    <div className={ `blog-section row pt-0 pb-3 skeleton-body skel-shop-products ${ loading ? '' : 'loaded' }` }>
                        {
                            loading ?
                                <div className="skel-pro skel-pro-grid"></div>
                                :
                                blog ?
                                    blog.length ?
                                        <OwlCarousel adClass="owl-theme dots-left dots-small" options={ {
                                            nav: false,
                                            dots: true,
                                            margin: 20,
                                            loop: false
                                        } }>
                                            {

                                                blog.slice( 0, 3 ).map( ( blog, index ) => (
                                                    <div key={ "Blogkey" + index }>
                                                        <BlogWidget blog={ blog } />
                                                    </div>
                                                ) )
                                            }
                                        </OwlCarousel>
                                        :
                                        <div className="info-box with-icon"><p>No blogs were found matching your selection.</p></div>
                                    : ''
                        }
                    </div>
                </div>
            </aside >
        </>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( HomeSidebar );