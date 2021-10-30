import React from 'react';
import api from '../api/api'
import CheckLogin from "../util/CheckLogin";
import {Link} from "react-router-dom";


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'token': '',
            'errorMessage': ''
        }
    }

    componentDidMount() {
        const isLogin = CheckLogin();
        if (isLogin) {
            return this.props.history.push('/');
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // debugger;
        if (prevState.token !== this.state.token) {
            sessionStorage.setItem('token', this.state.token);
            window.location.reload();
        }
    }

    handelLogin = (e) => {
        // debugger;
        const target = e.target
        e.preventDefault();
        const {email, password} = target.elements;
        const emailValue = email.value;
        const passwordValue = password.value;

        if (emailValue && passwordValue) {
            // api.login(emailValue, passwordValue)
            //     .then(data => {
            //         const {token, error} = data;
            //         if(error){
            //             this.setState({
            //                 errorMessage: error
            //             })
            //         }
            //         if(token) {
            //             this.setState({
            //                 'token': token
            //             }, () => {
            //                 console.log(this.state)
            //             })
            //         }
            //     })
            const emailValueSess = localStorage.getItem('email');
            const passwordValueSess = localStorage.getItem('password');
            // debugger;
            if (emailValueSess === emailValue && passwordValueSess === passwordValue) {
                let token = (Math.random() + 1).toString(36).substring(7);
                console.log("token ", token);
                this.setState({
                    'token': token
                })
            } else {
                this.setState({
                    errorMessage: 'Invalid email or password'
                })
            }
        } else {
            // debugger;
            target.classList.add('was-validated');
            email.required = true
            password.required = true
            // alert('Please enter email or password')
        }
    }

    render() {
        return (
            <div style={{"marginTop": "17px"}}>
                <div className="card col-6 offset-3">
                    <div className="card-header text-center">
                        Login
                    </div>
                    <div className="card-body ">
                        {/*was-validated*/}
                        {this.state.errorMessage !== '' &&
                        <div className="alert alert-danger" role="alert">
                            {`${this.state.errorMessage}`}
                            <Link to='/registration'> register here</Link>
                        </div>
                        }
                        <form className="needs-validation " onSubmit={(e) => this.handelLogin(e)}>
                            <div className="row">
                                <div className="col-8 offset-2">
                                    <div className="form-group has-validation">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email" name="email" className="form-control"
                                               id="exampleInputEmail1"
                                               aria-describedby="emailHelp" placeholder="Enter email"/>
                                        <div className="invalid-feedback">
                                            Email is required
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-8 offset-2">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input type="password" name="password" className="form-control"
                                               id="exampleInputPassword1"
                                               placeholder="Password"/>
                                        <div className="invalid-feedback">
                                            Password is required
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row" style={{"marginTop": "17px"}}>
                                <div className="col-4 offset-5">
                                    <button type="submit" className="btn btn-outline-secondary">Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}

export default Login;