import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';

// Import Apollo Server and Query
import withApollo from '../../../server/apollo';
import { GET_PRODUCT } from '../../../server/queries';

// Import Custom Component
import ALink from '../../../components/common/ALink';
import ProductMediaOne from '../../../components/partials/product/media/product-media-one';
import ProductDetailOne from '../../../components/partials/product/details/product-detail-one';
import SingleTabThree from '../../../components/partials/product/tabs/single-tab-three';
import RelatedProducts from '../../../components/partials/product/widgets/related-products';
import ProductWidgetContainer from '../../../components/partials/product/widgets/product-widget-container';
import ProductSidebarOne from '../../../components/partials/product/sidebars/sidebar-one';

function ProductDefault() {
    if (!useRouter().query.slug) return (
        <div className="loading-overlay">
            <div className="bounce-loader">
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
            </div>
        </div>
    );
    const slug = useRouter().query.slug;
    const { data, loading, error } = useQuery(GET_PRODUCT, { variables: { slug } });
    const product = data && data.product.data;
    const related = data && data.product.related;

    if (error) {
        return useRouter().push('/pages/404');
    }

    return (
        <main className="main">
            <nav aria-label="breadcrumb" className="breadcrumb-nav">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><ALink href="/"><i className="icon-home"></i></ALink></li>
                        <li className="breadcrumb-item"><ALink href="/shop">Shop</ALink></li>
                        <li className="breadcrumb-item">
                            {
                                product && product.categories.map((item, index) => (
                                    <React.Fragment key={`category-${index}`}>
                                        <ALink href={{ pathname: "/shop", query: { category: item.slug } }}>{item.name}</ALink>
                                        {index < product.categories.length - 1 ? ',' : ''}
                                    </React.Fragment>
                                ))
                            }
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">{product && product.name}</li>
                    </ol>
                </div>
            </nav>

            <div className="container">
                <div className="row">
                    <ProductSidebarOne />

                    <div className={`col-lg-9 main-content pb-2 skeleton-body skel-shop-products ${loading ? '' : 'loaded'}`}>
                        <div className="product-single-container product-single-default product-left-sidebar">
                            <div className="row">
                                <ProductMediaOne product={product} adClass="col-lg-7 col-md-6" />
                                <ProductDetailOne
                                    adClass="col-lg-5 col-md-6"
                                    product={product}
                                    prev={product && data.product.prev}
                                    next={product && data.product.next}
                                />
                            </div>
                        </div>

                        <SingleTabThree product={product} loading={loading} />
                    </div>
                </div>
                <RelatedProducts adClass="mb-1" products={related} loading={loading} />

            </div>

            <ProductWidgetContainer />
        </main >
    )
}

export default withApollo({ ssr: typeof window === 'undefined' })(ProductDefault);