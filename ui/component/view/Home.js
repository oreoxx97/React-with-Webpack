import React, { Component } from 'react'
import App from './App'
import '../scss/home.scss'

export default class Home extends Component {

    constructor(props){
    super(props)
    this.GotoPages = this.GotoPages.bind(this)
    }






    GotoPages(){
        console.log("Go ... ")
        window.location = '/pages';
    }


    render() {
        return (
            <div>
                <App/>
                <h1>
                    Welcome to BabelCoder Wiki!
                   
                </h1>
                <div>
                    <button className="button-signUp" onClick={this.GotoPages}>Go to Pages</button>
                </div> 
                
            </div>
        )
    }
}
