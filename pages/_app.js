import App, {Container} from "next/app";
import React from "react";
import Header from "../components/Header";

export default class MyApp extends App { //not extneds Component

    // Each next js has "getInitialProps" method.
    // it will execute before rendering.
    // it makes data flow before we rendering using if!
    static async getInitialProps({Component, router, ctx}) {
        let pageProps = {};
        if( Component.getInitialProps ) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return {pageProps};
    }

    render(){
        const {Component, pageProps} = this.props;
        return (
            <Container>
                <Header/>
                <Component {...pageProps} />
            </Container>
        );
    }

}