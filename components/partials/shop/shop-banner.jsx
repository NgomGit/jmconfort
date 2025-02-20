import React from 'react';
import { useEffect } from 'react';

// Import Custom Component
import ALink from '../../common/ALink';

// Import Utils
import { setParallax } from '../../../utils/index';

function PromoSection(props) {
    const { hasgap } = props;

    useEffect(() => {
        window.addEventListener('scroll', setParallax);

        return (() => {
            window.removeEventListener('scroll', setParallax);
        })
    }, [])

    return (
        <div className={`promo-section bg-gray ${hasgap ? 'mb-1' : ''}`} style={{ backgroundImage: 'url(images/home/banners/promo-bg.jpg)', backgroundPosition: '30% 60%'}}>
            <div className="promo-banner banner container text-uppercase">
                <div className="banner-content row align-items-center text-center">
                    <div className="col-md-5 col-lg-4 ml-xl-auto text-md-right">
                        <h2 className="mb-md-0">Offres 
								<br />Spéciales</h2>
                    </div>
                    <div className="col-md-3 pb-4 pb-md-0">
                        <ALink href="/shop" className="btn btn-primary ls-10">Voir produits</ALink>
                    </div>
                    <div className="col-md-4 mr-xl-auto text-md-left">
                        <h4 className="mb-1 coupon-sale-text p-0 d-block ls-10 text-transform-none">
                            <b className="bg-dark text-white font1">Réduction</b>
                        </h4>
                        <h5 className="mb-2 coupon-sale-text ls-10 p-0">
                            <i className="ls-0">UP TO</i>
                            <b className="text-white bg-secondary">FCFA 30.000</b> OFF</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default React.memo(PromoSection);