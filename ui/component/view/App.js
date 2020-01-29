import React, { Component } from 'react'


export default class App extends Component {
    render() {
        return (
            <div>
                <header>Navbar</header>
                {this.props.children}
            </div>
        )
    }
}
