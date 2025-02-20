import React from 'react';
import Reveal from 'react-awesome-reveal';

// Import Settigns
import { fadeInUpShorter } from '../../../utils/data/keyframes'

function FeatureBoxSection() {
    return (
        <div className="feature-boxes-container overflow-hidden">
            <Reveal keyframes={fadeInUpShorter} delay={100} duration={1000} triggerOnce>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="feature-box feature-box-simple text-center">
                                <div className="feature-box-icon">
                                    <i className="icon-earphones-alt"></i>
                                </div>

                                <div className="feature-box-content p-0">
                                    <h3 className="mb-0 pb-1">Service client</h3>
                                    <h5 className="mb-1 pb-1">Besoin d'aide?</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="feature-box feature-box-simple text-center">
                                <div className="feature-box-icon">
                                    <i className="icon-credit-card"></i>
                                </div>

                                <div className="feature-box-content p-0">
                                    <h3 className="mb-0 pb-1">Payment à la livraison</h3>
                                    <h5 className="mb-1 pb-1">Livraison rapide et sécurisée</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="feature-box feature-box-simple text-center">
                                <div className="feature-box-icon">
                                    <i className="icon-action-undo"></i>
                                </div>

                                <div className="feature-box-content p-0">
                                    <h3 className="mb-0 pb-1">Satisfait ou remboursé</h3>
                                    <h5 className="mb-1 pb-1">Retour produit gratuit</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>
        </div>
    );
}

export default React.memo(FeatureBoxSection);