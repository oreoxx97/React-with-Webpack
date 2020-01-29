import React, { Component } from 'react'
import '../scss/home.scss';

export default class InputLogin extends Component {
    emptyUser = {
        username: '',
        password: ''
    }

    emptyToken ={
        access_token: '',
        token_type: '',
        refresh_token: '',
        expires_in: 0,
        scope: '',
        error: ''
    }


    constructor(props) {
        super(props);
        this.state = {
            user: this.emptyUser,
            status : true
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.userProfile = this.userProfile.bind(this)
    }

    componentWillMount(){
        this.setState({status : !this.state.status})
    }

  async  handleSubmit(e) {
        // window.location = '/home'
        console.log(this.state.user)

        await fetch('http://localhost:9000/api/login', {
            method:'POST',
            headers:{
                'Content-Type': 'application/json;charset=UTF-8', 
            },
            body: JSON.stringify(this.state.user),
        }).then(response => response.json()
        ).then(data => {
            if(data.status == undefined){
               this.emptyToken = data
            console.log(this.emptyToken)
            this.setState({status:!this.state.status}) 
            }
        }).catch((error) =>{
            console.log("Error" + error)
        })
    }

    handleChange(e) {
        var name = e.target.name
        var value = e.target.value
        var item = this.state.user
        item[name] = value
        this.setState({ user: item })
    }


    userProfile(){
        console.log(this.state.status)
        window.location ='/home'
    }

    render() {
        if(this.state.status){
            this.userProfile()
        }
        return (
            <div className="input-form">
            <form className="form-input" >
                <div className="text-input">

                    <div className="text-username">
                        <input
                            className="text-username-input"
                            type="text"
                            placeholder="Username*"
                            name="username" onChange={this.handleChange}>

                        </input>
                    </div>
                    <div className="text-username">
                        <input
                            className="text-username-input"
                            type="password"
                            placeholder="Password*"
                            name="password" onChange={this.handleChange}>
                        </input>
                    </div>
                    <div className="button-form">
                        <button
                            className="button-signIn"
                            type="button"
                            onClick={this.handleSubmit}>
                            <span className="MuiButton-label">Login</span>
                        </button><br />
                    </div>
                    <div className="button-form">
                        <button
                            className="button-signUp"
                            type="button">
                            <span className="MuiButton-label">Register</span>
                        </button>
                    </div>
                    <div className="wrapper">
                        <div id="formContent">
                            <a className="underlineHover" href="#">Forgot Password?</a></div></div>
                </div>
            </form>
        </div>
        )
    }
}
