import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Auth.css';
import imgFile from '../../Images/helo_logo.png';
// import Nav from '../../FunctionalComps/Nav/Nav';
import { updateUserInfo } from '../../../ducks/reducer';

class Auth extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        // this.handleLogin = this.handleLogin.bind( this );
        // this.handleRegister = this.handleRegister.bind( this ); 
    }
    componentDidMount() {
        axios.get('/api/startup')
            .then((passback) => {
                // console.log(`Did Component Mount? `, passback);
            })
    }

    handleUserNameChange(e) {
        this.setState({ username: e })
        // console.log(this.state.username);
    }
    handlePasswordChange(e) {
        this.setState({ password: e })
        // console.log(this.state.password)
    }

    handleLogin = () => {
        console.log('Login Clicked', this.state.username, this.state.password)
        const sendPackage = {
            username: this.state.username,
            password: this.state.password
        }

        this.componentDidMount();
        axios.post('/api/login', sendPackage).then((passbackInfo) => {
            // console.log(`Login success`, passbackInfo)
            if (passbackInfo.data.length === 0) {
                console.log('Forbidden', passbackInfo.data.length)
            } else{
                // console.log('There is data', passbackInfo.data)
                this.props.updateUserInfo(passbackInfo.data[0]);
            }
            // console.log(passbackInfo.data)
            // (<Link to='/dashboard' />)
        })

        // this.setState({
        //     username:'',
        //     password: ''
        // })
    }

    handleRegister = () => {
        console.log('Register Clicked')
        const sendPackage = {
            username: this.state.username,
            password: this.state.password
        }
        axios.post('/api/register', sendPackage).then((passbackInfo) => {
            console.log(`Register success`, passbackInfo)
        })
        // this.setState({
        //     username:'',
        //     password: ''
        // })
    }

    render() {
        return (
            <div className='AuthMainOuter'>
                {/* <Nav /> */}

                <div className='AuthMain'>
                    <div className='boxCont'>
                        <div className='picHolder'><img src={imgFile} alt='' /></div>
                        <h1>Helo</h1>
                        <div className='fl'>
                            <p>Username </p><input type='text' onChange={(e) => this.handleUserNameChange(e.target.value)} value={this.state.username} />
                        </div>
                        <div className='fl'>
                            <p>Password </p><input type='text' onChange={(e) => this.handlePasswordChange(e.target.value)} value={this.state.password} />
                        </div>

                        <div className='fl'>
                            <Link to='/dashboard'><button onClick={this.handleLogin }>Login</button></Link>
                            <Link to='/dashboard'><button onClick={this.handleRegister }>Register</button></Link>
                            {/* <button onClick={this.handleLogin}>Login</button> */}
                            {/* <button onClick={this.handleRegister}>Register</button> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(){
    return {
        // username: '',
        // profile: ,
        // userId: state.userId
    }
}

function mapDispatchToProps(){
    return {
        updateUserInfo
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(Auth);