import React from 'react';
import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ProductThree from '../../features/products/product-three';

// Import Keyframes
import { fadeInLeftShorter } from '../../../utils/data/keyframes'

export default function ProductWidgetContainer(props) {
    const { latest, bestSelling, topRated, loading } = props;

    return (
        <div className="product-widgets row pt-1">
            <div className="col-lg-4 col-sm-6 pb-5">
                {
                    loading ?
                        [0, 1, 2].map((item, index) =>
                            <div className="skel-product-col skel-pro mb-2" key={"ProductThree" + index}></div>
                        )
                        :
                        <Reveal keyframes={fadeInLeftShorter} delay={200} duration={1000} triggerOnce>
                            <div>
                                <h4 className="section-sub-title text-uppercase">Top Rated Products</h4>
                                {
                                    topRated && topRated.slice(0, 3).map((product, index) => (
                                        <ProductThree product={product} key={`ProductThree`, index} />
                                    ))
                                }
                            </div>
                        </Reveal>
                }
            </div>

            <div className="col-lg-4 col-sm-6 pb-5">
                {
                    loading ?
                        [0, 1, 2].map((item, index) =>
                            <div className="skel-product-col skel-pro mb-2" key={"ProductThree" + index}></div>
                        )
                        :
                        <Reveal keyframes={fadeInLeftShorter} delay={500} duration={1000} triggerOnce>
                            <div>
                                <h4 className="section-sub-title text-uppercase">Best Selling Products</h4>
                                {
                                    bestSelling && bestSelling.slice(0, 3).map((product, index) => (
                                        <ProductThree product={product} key={`ProductThree`, index} />
                                    ))
                                }
                            </div>
                        </Reveal>
                }
            </div>

            <div className="col-lg-4 col-sm-6 pb-5">
                {
                    loading ?
                        [0, 1, 2].map((item, index) =>
                            <div className="skel-product-col skel-pro mb-2" key={"ProductThree" + index}></div>
                        )
                        :
                        <Reveal keyframes={fadeInLeftShorter} delay={800} duration={1000} triggerOnce>
                            <div>
                                <h4 className="section-sub-title text-uppercase">Latest Products</h4>

                                {
                                    latest && latest.slice(0, 3).map((product, index) => (
                                        <ProductThree product={product} key={`ProductThree`, index} />
                                    ))
                                }
                            </div>
                        </Reveal>
                }
            </div>
        </div>
    )
}