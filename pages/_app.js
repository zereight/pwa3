import App, {Container} from "next/app";
import React from "react";
import withApollo from "../lib/withApollo";
import { ApolloProvider } from "react-apollo";



class MyApp extends App { //not extneds Component

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
        const {Component, pageProps, apollo} = this.props;
        return (
            <ApolloProvider client={apollo}>
                <Container>
                    <Component {...pageProps} />
                </Container>
            </ApolloProvider>
        );
    }

}

export default withApollo(MyApp);