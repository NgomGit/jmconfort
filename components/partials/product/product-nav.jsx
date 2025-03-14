import ALink from "../../common/ALink";

export default function ProductNav ( props ) {
    const { next, prev, adClass = '' } = props;

    return (
        <div className={ `product-nav ${ adClass }` }>
            <div className={ `product-prev ${ !prev ? 'disabled' : '' }` }>
                { prev ?
                    <ALink href={ prev ? { query: { slug: prev.slug } } : '#' }>
                        <span className="product-link"></span>

                        <span className="product-popup">
                            <span className="box-content">
                                <img
                                    src={ prev.pictures[ 0 ].url }
                                    alt="product"
                                    width={ prev.pictures[ 0 ].width }
                                    height={ prev.pictures[ 0 ].height }
                                />

                                <span>{ prev.name }</span>
                            </span>
                        </span>
                    </ALink>
                    : <a href="#"><span className="product-link"></span></a>
                }
            </div>
            <div className={ `product-next ${ !next ? 'disabled' : '' }` }>
                { next ?
                    <ALink href={ { query: { slug: next.slug } } }>
                        <span className="product-link"></span>

                        <span className="product-popup">
                            <span className="box-content">
                                <img
                                    src={ next.pictures[ 0 ].url }
                                    alt="product"
                                    width={ next.pictures[ 0 ].width }
                                    height={ next.pictures[ 0 ].height }
                                />

                                <span>{ next.name }</span>
                            </span>
                        </span>
                    </ALink>
                    : <a href="#"><span className="product-link"></span></a>
                }
            </div>
        </div>
    )
}