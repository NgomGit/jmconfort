import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';

function IntroSection() {
    return (
        <OwlCarousel adClass="home-slider text-uppercase nav-big bg-gray" options={{
            nav: true,
            loop: false,
            navText: ['<i class="icon-left-open-big">', '<i class="icon-right-open-big">']
        }}>
            <div className="home-slide home-slide1 banner">
                <figure className="w-50 w-sm-100">
                    <LazyLoadImage
                        className="slide-bg"
                        width="100%"
                        height="auto"
                        alt="banner"
                        src="images/home/slider/slide-1.png"
                        effect="black and white"
                    />
                </figure>
                <div className="container">
                    <div className="banner-layer banner-layer-middle banner-layer-right">
                        <h4 className="text-capitalize m-b-3"> Philips Fer a vapeur DST7011/26</h4>
                        <h2 className="m-b-2">Choisir les Séries 7000 </h2>
                        <h3 className="m-b-2">30% Off</h3>
                        <h5 className="d-inline-block pt-2 mb-1 pb-1 ls-n-20 align-middle">Apartir de
								<b className="coupon-sale-text bg-secondary text-white d-inline-block align-sub">
									<em className="align-middle">20.000 </em>FCFA</b>
                        </h5>
                        <ALink href="/shop" className="btn btn-dark">Acheter maintenant</ALink>
                    </div>
                </div>
            </div>

            <div className="home-slide home-slide1 banner">

                <figure className="w-50 w-sm-10">
                    <LazyLoadImage
                        className="slide-bg"
                        alt="banner"
                        src="images/home/slider/slide-2.png"
                        effect="black and white"
                        width="100%"
                        height="auto"
                    />
                </figure>

                <div className="container">
                    <div className="banner-layer banner-layer-middle banner-layer-right">
                        <h4 className="mb-0">Reduction</h4>
                        <h3 className="m-b-2">20% off</h3>
                        <h3 className="m-b-3 heading-border">Cuisine</h3>
                        <h2 className="m-b-4">Mixeurs en promotion</h2>
                        <ALink href="/shop" className="btn btn-block btn-dark">Voir produits</ALink>
                    </div>
                </div>

               
            </div>
        </OwlCarousel>
    );
}

export default React.memo(IntroSection);