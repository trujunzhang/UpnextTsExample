import * as React from 'react'


interface IHomeWithRouterViewProps {

}

interface IHomeWithRouterViewState {

}

import {SingletonRouter, withRouter} from 'next/router'

interface IHomeWithRouterViewWithRouterProps {
    router: SingletonRouter
}

type HomeWithRouterViewPropsWithRouter = IHomeWithRouterViewProps & IHomeWithRouterViewWithRouterProps

@(withRouter as any)
export class HomeWithRouterView extends React.Component<IHomeWithRouterViewProps, IHomeWithRouterViewState> {

    constructor(props: IHomeWithRouterViewProps) {
        super(props)
        this.state = {}
    }

    render() {
        const {
            router
        } = this.props as HomeWithRouterViewPropsWithRouter

        const {asPath} = router
        return (
            <div className="main-content-wrap main-content-wrap--full">
                <div className="top-shelf top-shelf-grey"/>
                <div id="super-container" className="content-container">
                    <div className="container">
                        <div className="clearfix layout-block layout-a scroll-map-container search-results-block">
                            {'current path: ' + asPath}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

