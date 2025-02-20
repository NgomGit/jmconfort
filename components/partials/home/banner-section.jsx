import { LazyLoadImage } from 'react-lazy-load-image-component';

import OwlCarousel from '../../features/owl-carousel';
import ALink from '../../common/ALink';

// Import Settigns
import { categorySlider } from '../../../utils/data/slider';


export default function BannerSection() {
    return (
        <div className="banners-section container mt-4">
            <OwlCarousel adClass="banners-slider dots-mt-1" options={categorySlider}>
                <div className="banner">
                    <figure>
                        <LazyLoadImage
                            alt="banner"
                            src="images/home/banners/tele_.png"
                            width="100%"
                            
                            height="auto"
                        />
                    </figure>
                    <div className="banner-content bg-dark text-center">
                        <h5 className="m-b-1">
                            <ALink href="/shop">Réduction de</ALink>
                        </h5>
                        <h4 className="text-white m-b-1">20.000 CFA</h4>
                        <h5 className="text-white mb-0">Pour nos téléviseurs</h5>
                    </div>
                </div>
                <div className="banner">
                    <figure className=''>
                        <LazyLoadImage
                            alt="banner"
                            src="images/home/banners/mixeur.png"
                            width="100%"
                            height="auto"
                        />
                    </figure>
                    <div className="banner-content bg-dark text-center">
                        <h5 className="m-b-1">
                            <ALink href="/shop">Réduction de</ALink>
                        </h5>
                        <h4 className="text-white m-b-1">30.000 CFA</h4>
                        <h5 className="text-white mb-0">Pour les mixeurs</h5>
                    </div>
                </div>
                <div className="banner">
                    <figure>
                        <LazyLoadImage
                            alt="banner"
                            src="images/home/banners/group.png"
                            width="100%"
                            height="auto"
                        />
                    </figure>
                    <div className="banner-content bg-dark text-center">
                        <h5 className="m-b-1">
                            <ALink href="/shop">Réduction de</ALink>
                        </h5>
                        <h4 className="text-white m-b-1">50.000 CFA</h4>
                        <h5 className="text-white mb-0">Pour les produits de plus de 300.000 CFA </h5>
                    </div>
                </div>
            </OwlCarousel>
        </div>
    );
} 