import { connect } from 'react-redux';
import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from "../../components/common/ALink";

import { actions as WishlistAction } from "../../store/wishlist";
import { actions as CartAction } from "../../store/cart";
import { actions as ModalAction } from "../../store/modal";

function Wishlist(props) {
    const { wishlist, addToCart, removeFromWishlist, showQuickView } = props;
    const [flag, setFlag] = useState(0);

    const onMoveFromToWishlit = (e, item) => {
        setFlag(2);
        e.preventDefault();
        addToCart(item);
        removeFromWishlist(item);
    }

    const removeProduct = (e, item) => {
        setFlag(1);
        e.preventDefault();
        removeFromWishlist(item);
    }

    const onQuickViewClick = (e, product) => {
        e.preventDefault();
        console.log("product ", product)
        showQuickView(product.ref);
    }

    return (
        <main className="main">
            <div className="page-header" style={{ backgroundImage: 'url(images/home/banners/banner-web.jpg)', backgroundPosition: '30% 0%'}}>
                <div className="container d-flex flex-column align-items-center" >
                    <nav aria-label="breadcrumb" className="breadcrumb-nav">
                        <div className="container">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><ALink href="/">Accueuil</ALink></li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Favoris
                                </li>
                            </ol>
                        </div>
                    </nav>

                    <h1>Favoris</h1>
                </div>
            </div>

            <div className="container">
                <div className="success-alert">
                    {
                        flag === 1 ? <p>Produit retiré avec succés.</p> : ''
                    }
                    {
                        flag === 2 ? <p>Produit ajouté au panier avec succés.</p> : ''
                    }
                </div>
                <div className="wishlist-title">
                    <h2>Mes favoris</h2>
                </div>
                {
                    wishlist.length === 0 ?
                        <div className="wishlist-table-container">
                            <div className="table table-wishlist mb-0">
                                <div className="wishlist-empty-page text-center">
                                    <i className="far fa-heart"></i>
                                    <p>Pas de produit dans vos favoris</p>
                                    <ALink href="/shop" className="btn btn-dark btn-add-cart product-type-simple btn-shop font1 w-auto">
                                       Voir produits </ALink>
                                </div>
                            </div>
                        </div>
                        :
                        <div className="wishlist-table-container">
                            <table className="table table-wishlist mb-0">
                                <thead>
                                    <tr>
                                        <th className="thumbnail-col"></th>
                                        <th className="product-col">Produit</th>
                                        <th className="price-col">Prix</th>
                                        <th className="status-col">Stock Status</th>
                                        <th className="action-col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        wishlist.map((item, index) => (
                                            <tr key={"wishlist-item" + index} className="product-row">
                                                <td className="media-with-lazy">
                                                    <figure className="product-image-container">
                                                        <ALink href={`/product/default/${item.ref}`} className="product-image">
                                                            <LazyLoadImage
                                                                alt="product"
                                                                src={item.pictures[0].url}
                                                                threshold={500}
                                                                width="80"
                                                                height="80"
                                                            />
                                                        </ALink>
                                                        <a href="#" className="btn-remove icon-cancel" title="Remove Product" onClick={(e) => removeProduct(e, item)}></a>
                                                    </figure>
                                                </td>
                                                <td>
                                                    <h5 className="product-title">
                                                        <ALink href={`/product/default/${item.ref}`}>{item.name}</ALink>
                                                    </h5>
                                                </td>
                                                <td>
                                                    <div className="price-box">
                                                        {
                                                            item.price == item.sale_price ?
                                                                <span className="product-price">{'FCFA ' + item.price.toFixed(2)}</span>
                                                                : item.variants?.length > 0 ?
                                                                    <span className="product-price">{'FCFA ' + item.price.toFixed(2)} &ndash; {'FCFA ' + item.sale_price.toFixed(2)}</span>
                                                                    : <>
                                                                        <span className="old-price">{'FCFA ' + item.sale_price.toFixed(2)}</span>
                                                                        <span className="new-price">{'FCFA ' + item.price.toFixed(2)}</span>
                                                                    </>
                                                        }
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="stock-status">{item.is_out_of_stock ? 'Out of stock' : 'In stock'}</span>
                                                </td>
                                                <td className="action">
                                                    <a href="ajax/product-quick-view" className="btn btn-quickview mt-1 mt-md-0"
                                                        title="Quick View" onClick={(e) => { onQuickViewClick(e, item); }}>Quick View</a>
                                                    {
                                                        item.variants?.length > 0 ?
                                                            <ALink className="btn btn-dark btn-add-cart product-type-simple btn-shop" href={`/product/default/${item.ref}`}>select options</ALink>
                                                            : 
                                                            
                                                            <a className="btn-icon btn-add-cart product-type-simple"
                                                                aria-label="Chat on WhatsApp" 
                                                                target='_blank'
                                                                onClick={()=> console.log("I am clicked")}
                                                                href={"https://wa.me/+221779722668?text=Bonjour%20je%20m%27int%C3%A9resse%20%C3%A0%20ce%20produit.%20Est%20il%20disponible%20%3F\n" + encodeURIComponent(item?.pictures[0].url)} >
                                                                <i class="fab fa-whatsapp"></i> Contacter par whatsapp
                                                            </a>
                                                            
                                                    //         <button className="btn btn-dark btn-add-cart product-type-simple btn-shop" onClick={(e) => { onMoveFromToWishlit(e, item) }}>
                                                                
                                                    //         </button>
                                                    }
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                }
            </div>
        </main>
    )
}

const mapStateToProps = (state) => {
    return {
        wishlist: state.wishlist.list ? state.wishlist.list : []
    }
}

export default connect(mapStateToProps, { ...WishlistAction, ...CartAction, ...ModalAction })(Wishlist);