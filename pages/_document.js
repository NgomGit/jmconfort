import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    static async getInitialProps ( ctx ) {
        const initialProps = await Document.getInitialProps( ctx )
        return { ...initialProps }
    }

    render () {
        return (
            <Html lang="en">
                <Head>
                    <base href="" />
                    { process.env.NODE_ENV === "production" ? <title>JM Confort</title> : "" }
                    <link rel="icon" href="favicon.png" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:200,300,400,500,600,700,800%7CPoppins:200,300,400,500,600,700,800%7COswald:300,400,600,700" />
                    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
                    <link rel="stylesheet" type="text/css" href="/vendor/bootstrap.min.css" />
                    <link rel="stylesheet" type="text/css" href="/vendor/fontawesome-free/css/all.min.css" />
                    <link rel="stylesheet" type="text/css" href="/vendor/simple-line-icons/css/simple-line-icons.min.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}