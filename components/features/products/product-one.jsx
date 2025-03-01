import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Actions
import { actions as WishlistAction } from "../../../store/wishlist";
import { actions as CartAction } from "../../../store/cart";
import { actions as ModalAction } from "../../../store/modal";

// Import Custom Component
import ALink from '../../common/ALink';
import Qty from '../../partials/product/qty';

// Import Utils
import ProductCountdown from '../countdown';

function ProductOne(props) {
    const router = useRouter();
    const [qty, setQty] = useState(1);
    const { adClass = "", link = "default", product } = props;

    function onAddCartClick(e) {
        e.preventDefault();

        if (product.stock > 0) {
            if (product?.variants?.length === 0) {
                props.addToCart(product, qty, -1);
            } else {
                props.addToCart(product, qty, -1);
            }
        }
    }

    function changeQty(value) {
        setQty(value);
    }

    function isSale() {
        return product.price[0] !== product.price[1] && product?.variants?.length === 0 ?
            '-' + (100 * (product.price[1] - product.price[0]) / product.price[1]).toFixed(0) + '%'
            :
            product.variants?.find(variant => variant?.sale_price) ? "Sale" : false;
    }

    function isInWishlist() {
        return product && props.wishlist.findIndex(item => item.ref === product.ref) > -1;
    }

    function onWishlistClick(e) {
        e.preventDefault();
        if (!isInWishlist()) {
            let target = e.currentTarget;
            target.classList.add("load-more-overlay");
            target.classList.add("loading");

            setTimeout(() => {
                target.classList.remove('load-more-overlay');
                target.classList.remove('loading');
                props.addToWishList(product);
            }, 1000);
        } else {
            router.push('/pages/wishlist');
        }
    }

    function onQuickViewClick(e) {
        e.preventDefault();
        props.showQuickView(product.ref);
    }

    return (
        <div className={`product-default inner-quickview inner-icon quantity-input media-with-lazy ${adClass}`}>
            <figure>
                <ALink href={`/product/${link}/${product.ref}`}>
                    <div className="lazy-overlay"></div>

                    <LazyLoadImage
                        alt="product"
                        src={product.pictures[0].url}
                        threshold={500}
                        effect="black and white"
                        width="100%"
                        height="auto"
                    />
                    {
                        product.pictures.length >= 2 ?
                            <LazyLoadImage
                                alt="product"
                                src={product.pictures[1].url}
                                threshold={500}
                                effect="black and white"
                                wrapperClassName="product-image-hover"
                            />
                            : ""
                    }
                </ALink>

                <div className="label-group">
                    {product.is_hot ? <div className="product-label label-hot">HOT</div> : ''}

                    {isSale() ? <div className="product-label label-sale">{isSale()}</div> : ''}
                </div>

                <div className="btn-icon-group">
                    <a href="#" className={`btn-icon btn-icon-wish ${isInWishlist() ? 'added-wishlist' : ''}`} onClick={onWishlistClick} title={`${isInWishlist() === true ? 'Go to Wishlist' : 'Add to Wishlist'}`}><i className="icon-heart"></i></a>
                </div>

                {
                    product.until && product.until !== null &&
                    <ProductCountdown product={product} />
                }

                <a href="#" className="btn-quickview" title="Quick View" onClick={onQuickViewClick}>Quick View</a>
            </figure>

            <div className="product-details">
                <div className="category-list">
                    {
                        product.categories ?
                            product.categories.map((item, index) => (
                                <React.Fragment key={item.slug + '-' + index}>
                                    <ALink href={{ pathname: '/shop', query: { category: item.slug } }}>
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
                        <span className="ratings" style={{ width: 20 * product?.ratings + '%' }}></span>
                        <span className="tooltiptext tooltip-top">{product?.ratings?.toFixed(2)}</span>
                    </div>
                </div>

                <div className="price-box">
                    {
                        product.price == product.sale_price ?
                            <span className="product-price">{'FCFA ' + product.price.toFixed(2)}</span>
                            : product?.variants?.length > 0 ?
                                <span className="product-price">{'FCFA ' + product.price.toFixed(2)} &ndash; {'$' + product.sale_price.toFixed(2)}</span>
                                : <>
                                    <span className="old-price">{'FCFA ' + product.sale_price.toFixed(2)}</span>
                                    <span className="product-price">{'FCFA ' + product.price.toFixed(2)}</span>
                                </>
                    }
                </div>
                <div className="product-action">
                    {
                        product?.variants?.length > 0 ?
                            <ALink className="btn-icon btn-add-cart product-type-simple" href={`/product/default/${product?.slug}`}>
                                <i className="fa fa-arrow-right"></i>SELECT OPTIONS</ALink>
                            :
                            <>
                                <Qty max={product?.stock} value={qty} onChangeQty={changeQty} />

                                {/* <button className="btn-icon btn-add-cart product-type-simple" onClick={onAddCartClick}>
                                    <i className="icon-shopping-cart"></i>Ajout panier
                                </button> */}

                                <a className="btn-icon btn-add-cart product-type-simple"
                                    aria-label="Chat on WhatsApp" 
                                    target='_blank'
                                    onClick={()=> console.log("I am clicked")}
                                    href={"https://wa.me/+221779722668?text=Bonjour%20je%20m%27int%C3%A9resse%20%C3%A0%20ce%20produit.%20Est%20il%20disponible%20%3F\n" + encodeURIComponent(product.pictures[0].url)} >
                                        <i className="fab fa-whatsapp"></i>Contacter par whatsapp
                                </a>

                        </>
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        wishlist: state.wishlist.list ? state.wishlist.list : []
    }
}

export default connect(mapStateToProps, { ...WishlistAction, ...CartAction, ...ModalAction })(React.memo(ProductOne));
