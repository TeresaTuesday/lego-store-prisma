import React, {Component} from 'react'

import Router from './router'
import Nav from './components/nav'

export default class App extends Component {
    render(){
        return(
            <div>
                <Nav />
                <Router />
            </div>
        )
    }
}