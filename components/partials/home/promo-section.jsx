import React from 'react';
import { useEffect } from 'react';

// Import Custom Component
import ALink from '../../common/ALink';

// Import Utils
import { setParallax } from '../../../utils/index';

function PromoSection() {
    useEffect(() => {
        window.addEventListener('scroll', setParallax);

        return (() => {
            window.removeEventListener('scroll', setParallax);
        })
    }, [])

    return (
        <div className="promo-section bg-gray parallax overflow-hidden" style={{ backgroundImage: "url(images/home/banners/web_banner.png)" }}>
            <div className="promo-banner banner container text-uppercase">
                <div className="banner-content row align-items-center text-center">
                    <div className="col-md-4 ml-xl-auto text-md-right left-text">
                        <h2 className="mb-md-0"> Offres electroniques
								<br />Spéciales</h2>
                    </div>
                    <div className="col-md-3 pb-4 pb-md-0">
                        <ALink href="/shop" className="btn btn-primary ls-10">Voir produits</ALink>
                    </div>
                    <div className="col-md-4 mr-xl-auto text-md-left right-text">
                        <h4 className="mb-1 coupon-sale-text p-0 d-block text-transform-none">
                            <b className="bg-dark text-white font1">Réduction exclusive</b>
                        </h4>
                        <h5 className="mb-2 coupon-sale-text ls-10 p-0">
                            <i className="ls-0">UP TO</i>
                            <b className="text-white bg-secondary">20.000 CFA</b> OFF</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default React.memo(PromoSection);