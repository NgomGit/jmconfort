import { useEffect } from "react";
import Helmet from "react-helmet";
import { Provider, useStore } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

import { wrapper } from "../store/index.js";
import Layout from '../components/layout';

import { actions as DemoAction } from "../store/demo";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

import "../public/sass/style.scss";
import { getProductsDoc, getProductsSnapshot, } from "../lib/firebase/firestore.js";

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
});

const App = ({ Component, pageProps }) => {
    const store = useStore();

    useEffect(() => {
        // const unsubscribe = getProductsSnapshot(data => {
        //       console.log("Data received ", data)
        // });

        // return () => {
        //         unsubscribe();
        // };

        // getProductsDoc()
}, []);

    useEffect(() => {
        if (store.getState().demo.current !== 14) {
            store.dispatch(DemoAction.refreshStore(14));
        }
    }, [])

    return (
        <Provider store={store}>
            <ApolloProvider client={client}>
                <PersistGate
                    persistor={store.__persistor}
                    loading={<div className="loading-overlay">
                        <div className="bounce-loader">
                            <div className="bounce1"></div>
                            <div className="bounce2"></div>
                            <div className="bounce3"></div>
                        </div>
                    </div>}>
                    <Helmet>
                        <meta charSet="UTF-8" />
                        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

                        <title>JM Confort</title>

                        <meta name="keywords" content="React Template" />
                        <meta name="description" content="JM Confort" />
                        {/* <meta name="author" content="SW-THEMES" /> */}
                    </Helmet>

                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </PersistGate>
            </ApolloProvider>
        </Provider >
    )
};

App.getInitialProps = async ({ Component, ctx }) => {
    let pageProps = {};
    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
};

export default wrapper.withRedux(App);
