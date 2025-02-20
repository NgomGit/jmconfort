import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';

export default function ProductThree(props) {
    const { adClass = "", link = "default", product } = props;

    return (
        <div className={`product-default media-with-lazy left-details product-widget mb-2 ${adClass}`}>
            <figure>
                <ALink href={`/product/${link}/${product.ref}`} >
                    <div className="lazy-overlay"></div>

                    <LazyLoadImage
                        alt="product"
                        src={product?.pictures[0].url}
                        threshold={500}
                        effect="black and white"
                        height={50}
                    />
                    {
                        product.pictures.length >= 2 ?
                            <LazyLoadImage
                                alt="product"
                                src={product.pictures[1].url}
                                threshold={500}
                                height={50}
                                effect="black and white"
                                wrapperClassName="product-image-hover"
                            />
                            : ""
                    }
                </ALink>
            </figure>

            <div className="product-details">
                <div className="category-list">
                    {
                        product.categories ?
                            product.categories.map((item, index) => (
                                <React.Fragment key={item.ref + '-' + index}>
                                    <ALink href={{ pathname: '/shop', query: { category: item.ref } }}>
                                        {item.name}
                                    </ALink>
                                    {index < product.categories.length - 1 ? ', ' : ""}
                                </React.Fragment>
                            )) : ""
                    }
                </div>

                <h3 className="product-title">
                    <ALink href={`/product/default/${product.ref}`}>{product.name}</ALink>
                </h3>

                <div className="ratings-container">
                    <div className="product-ratings">
                        <span className="ratings" style={{ width: 20 * product.ratings + '%' }}></span>
                        <span className="tooltiptext tooltip-top">{product.ratings?.toFixed(2)}</span>
                    </div>
                </div>

                <div className="price-box">
                    {
                        product.price == product.sale_price ?
                            <span className="product-price">{'' + product.price?.toFixed(2)}</span>
                            : product.variants?.length > 0 ?
                                <span className="product-price">{'' + product.price?.toFixed(2)} &ndash; {'' + product.sale_price?.toFixed(2)}</span>
                                : <>
                                    <span className="old-price">{'' + product.sale_price?.toFixed(2)}</span>
                                    <span className="product-price">{'' + product.price?.toFixed(2)}</span>
                                </>
                    }
                </div>
            </div>
        </div>
    )
}