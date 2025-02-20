import OwlCarousel from '../../features/owl-carousel';

import { infoBoxSlider } from '../../../utils/data/slider'

export default function ServiceBox () {
    return (
        <div className="info-boxes-container bg-gray">
            <div className="container py-3">
                <OwlCarousel adClass="info-boxes-slider owl-theme py-3" options={ infoBoxSlider }>
                    <div className="info-box info-box-icon-left">
                        <i className="icon-shipping"></i>

                        <div className="info-box-content">
                            <h4 className="pb-1">Livraison à domicile</h4>
                            <p>Livraison à domicile partout au Sénégal</p>
                        </div>
                    </div>
                    <div className="info-box info-box-icon-left">
                        <i className="icon-money"></i>

                        <div className="info-box-content">
                            <h4 className="pb-1">Satisfait ou remboursé</h4>
                            <p>100% de votre argent remboursé</p>
                        </div>
                    </div>
                    <div className="info-box info-box-icon-left">
                        <i className="icon-support"></i>

                        <div className="info-box-content">
                            <h4 className="pb-1">Disponible 24/7</h4>
                            <p>Contacter nous via Whatsapp ou les réseaux sociaux.</p>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    )
}