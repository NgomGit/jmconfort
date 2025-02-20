// Import Custom Component
import ProductOne from '../../features/products/product-one';
import OwlCarousel from '../../features/owl-carousel';

export default function FeaturedCollection(props) {
    const { product, loading } = props;
    return (
        <>
            {
                loading ?
                    <OwlCarousel adClass="tab-products-carousel owl-carousel owl-theme quantity-inputs show-nav-hover nav-outer nav-image-center"
                        options={{
                            loop: false,
                            items: 2,
                            margin: 20,
                            responsive: {
                                768: {
                                    items: 3
                                },
                                992: {
                                    items: 4
                                }
                            }
                        }}>
                        {
                            [0, 1, 2, 3, 4].map((item, index) =>
                                <div className="skel-pro skel-pro-grid" key={"product-one" + index}></div>
                            )
                        }
                    </OwlCarousel>
                    :
                    <OwlCarousel adClass="tab-products-carousel owl-carousel owl-theme quantity-inputs show-nav-hover nav-outer nav-image-center" options={{
                        loop: false,
                        items: 2,
                        margin: 20,
                        responsive: {
                            768: {
                                items: 3
                            },
                            992: {
                                items: 4
                            }
                        }
                    }}>
                        {
                            product?.map((item, index) => (
                                <ProductOne
                                    product={item} featured={true} key={"product-one" + index}
                                />
                            ))
                        }
                    </OwlCarousel>
            }
        </>

    );
}