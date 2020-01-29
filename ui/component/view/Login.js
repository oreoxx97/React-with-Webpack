import React, { Component } from 'react'
import ImageLogin from './ImageLogin';
import InputLogin from './InputLogin';
import '../scss/home.scss'


export default class login extends Component {
   
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="big">
                <div className="grid-form">
                    <ImageLogin/>
                    <InputLogin/>
                </div>
            </div>
        )
    }
}
