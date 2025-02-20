
// Import Apollo Server and Query
import withApollo from '../server/apollo';
import {GET_HOME_DATA} from '../server/queries';
import React, { useState, useEffect, useRef, useCallback } from 'react';
// Import Custom Component
import NewsletterModal from "../components/features/modals/newsletter-modal";
import IntroSection from "../components/partials/home/intro-section";
import ServiceBox from "../components/partials/home/service-box";
import BannerSection from "../components/partials/home/banner-section";

import TabBox from "../components/partials/home/tab-box";
import FeatureBoxSection from "../components/partials/home/featurebox-section";
import PromoSection from "../components/partials/home/promo-section";

import BannerGroup from "../components/partials/home/banner-group";
import ProductWidgetContainer from "../components/partials/home/product-widget-container";
import HomeSidebar from "../components/partials/home/home-sidebar";
import { ApolloClient, InMemoryCache, useQuery, gql } from '@apollo/client';
import BrandSection from '../components/partials/home/brand-Section'
import ProductWidgets from "../components/partials/home/product-widget-container";
import BlogSection from '../components/partials/home/blog-section';
import { getFeaturedProducts, getLatestProducts } from '../lib/firebase/firestore';
// import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

function Home () {
    // let loading = true
   const [products, setProducts] = useState()
   const [loading, setLoading] = useState(true)
   const [features, setFeatures] = useState([])

    useEffect(()=>{
        getLatestProducts((results)=>{
            setProducts(results)
        })
    }, [])

    useEffect(()=>{
        getFeaturedProducts((results)=>{
            setFeatures(results)
            if(loading){
                setLoading(false)
            }
        })
    }, [])

    // const { data, loading, error } = useQuery(GET_HOME_DATA, { variables: { productsCount: 5 } } );
    // const featured = data && data.specialProducts.featured;
    // const bestSelling = data && data.specialProducts.bestSelling;
    // const topRated = data && data.specialProducts.topRated;
    // const latest = data && data.specialProducts.latest;
    // const newarrived = data && data.products.data;

    // if ( error ) {
    //     return <div>{ error.message }</div>
    // }

    return (
        <>
            <main className={ `skeleton-body skel-shop-products overflow-hidden ${ loading ? '' : 'loaded' }` }>

                <IntroSection />

                <ServiceBox />

                <BannerSection />

                <TabBox featured={ features } newarrived={ products } loading={ loading } />

                <FeatureBoxSection />

                <PromoSection />

                <div className="">

                    <BrandSection />

                    <hr className="mb-5" />

                    {/* <ProductWidgets latest={ products } bestSelling={ features } topRated={ products } loading={ loading } /> */}

                </div>

            </main>

            {/* <NewsletterModal /> */}
        </>
    )
}

export default withApollo( { ssr: typeof window === 'undefined' } )( Home );