import React from 'react';
import { useQuery } from '@apollo/react-hooks';

// Import Apollo Server and Query
import withApollo from '../../../../server/apollo';
import { GET_SPECIAL_PRODUCTS } from '../../../../server/queries';

// Import Custom Component
import ProductThree from '../../../features/products/product-three';

function ProductWidgetContainer ( props ) {
    const { adClass = "" } = props;
    const { data, loading, error } = useQuery( GET_SPECIAL_PRODUCTS, { variables: { featured: true, bestSelling: true, latest: true, topRated: true, count: 3 } } );
    const featured = data && data.specialProducts.featured;
    const bestSelling = data && data.specialProducts.bestSelling;
    const latest = data && data.specialProducts.latest;
    const topRated = data && data.specialProducts.topRated;

    if ( error ) {
        return <div>{ error.message }</div>
    }

    return (
        <div className={ `product-widgets-container pb-2 skeleton-body skel-shop-products ${ loading ? '' : 'loaded' } ${ adClass }` }>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6 pb-5 pb-lg-0">
                        {
                            loading ?
                                [ 0, 1, 2 ].map( ( item, index ) =>
                                    <div className="skel-product-col skel-pro mb-2" key={ "ProductThree" + index }></div>
                                )
                                :

                                <>
                                    <h4 className="section-sub-title">Featured Products</h4>
                                    {
                                        featured.slice( 0, 3 ).map( ( product, index ) => (
                                            <ProductThree product={ product } key={ `ProductThree`, index } />
                                        ) )
                                    }
                                </>

                        }
                    </div>

                    <div className="col-lg-3 col-sm-6 pb-5 pb-lg-0">
                        {
                            loading ?
                                [ 0, 1, 2 ].map( ( item, index ) =>
                                    <div className="skel-product-col skel-pro mb-2" key={ "ProductThree" + index }></div>
                                )
                                :

                                <>
                                    <h4 className="section-sub-title">Best Selling Products</h4>
                                    {
                                        bestSelling.slice( 0, 3 ).map( ( product, index ) => (
                                            <ProductThree product={ product } key={ `ProductThree`, index } />
                                        ) )
                                    }
                                </>

                        }
                    </div>

                    <div className="col-lg-3 col-sm-6 pb-5 pb-sm-0">
                        {
                            loading ?
                                [ 0, 1, 2 ].map( ( item, index ) =>
                                    <div className="skel-product-col skel-pro mb-2" key={ "ProductThree" + index }></div>
                                )
                                :

                                <>
                                    <h4 className="section-sub-title">Latest Products</h4>

                                    {
                                        latest.slice( 0, 3 ).map( ( product, index ) => (
                                            <ProductThree product={ product } key={ `ProductThree`, index } />
                                        ) )
                                    }
                                </>
                        }
                    </div>

                    <div className="col-lg-3 col-sm-6 pb-0">
                        {
                            loading ?
                                [ 0, 1, 2 ].map( ( item, index ) =>
                                    <div className="skel-product-col skel-pro mb-2" key={ "ProductThree" + index }></div>
                                )
                                :

                                <>
                                    <h4 className="section-sub-title">Top Rated Products</h4>

                                    {
                                        topRated.slice( 0, 3 ).map( ( product, index ) => (
                                            <ProductThree product={ product } key={ `ProductThree`, index } />
                                        ) )
                                    }
                                </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( ProductWidgetContainer );