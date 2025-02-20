import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';

export default function BannerGroup() {
    return (
        <div className="banners-group">
            <div className="row m-b-3">
                <div className="col-md-6 w-md-44 mb-2">
                    <div className="banner banner4 banner-md-vw-large" style={{ backgroundColor: '#383b44' }}>
                        <figure>
                            <LazyLoadImage
                                alt="banner"
                                src="images/home/banners/banner-4.jpg"
                                effect="black and white"
                                width="100%"
                                height="auto"
                            />

                        </figure>
                        <div className="banner-layer banner-layer-middle banner-layer-space">
                            <h3 className="m-b-2 ls-n-20 text-uppercase">Flash Sale</h3>
                            <h5 className="m-b-2 ls-n-20 text-uppercase">Cool Sunglasses</h5>
                            <h4 className="m-b-3 ls-n-20 text-white">
                                <span>Only</span>&nbsp;
                                <sup>$</sup>199&nbsp;
												<sup>99</sup>
                            </h4>
                            <ALink href="/shop" className="btn btn-md btn-light ls-10">View Sale</ALink>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 w-md-55 mb-2">
                    <div className="banner banner5 banner-md-vw-large"
                        style={{ backgroundImage: 'url(images/home/banners/banner-5.jpg)' }}>
                        <div className="banner-layer">
                            <h3 className="text-primary">Exclusive Shoes</h3>
                            <h4 className="text-primary">50% OFF</h4>
                            <ALink href="/shop" className="btn btn-md btn-dark ls-10">View Sale</ALink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}