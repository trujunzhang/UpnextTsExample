import App, {Container} from 'next/app'
import * as React from 'react'
import {HomeWithRouterView} from "@src/components/lib/home/HomeWithRouterView";

export default class MyApp extends App {
    static async getInitialProps({Component, router, ctx}) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return {pageProps}
    }

    render() {
        const {Component, pageProps} = this.props
        console.log('pageProps, ', pageProps)

        return (
            <Container>
                <div>
                    <HomeWithRouterView/>
                    <Component {...pageProps} />
                </div>
            </Container>
        )
    }
}
