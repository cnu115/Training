import React from 'react';
import {connect} from "react-redux";
// import api from '../api/api'
// import CheckLogin from "../util/CheckLogin";
import ACTIONS from '../redux/action'

class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPasswordValid: false
        }
    }
    componentDidMount() {
        this.isLoginFun()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.isLogin !== prevProps.isLogin){
            this.isLoginFun()
        }
    }

    isLoginFun = () => {
        if(this.props.isLogin){
            return this.props.history.push('/');
        }
    }

    handelRegistration = (e) => {
        // debugger;
        const target = e.target
        e.preventDefault();
        const {email, password} = target.elements;
        const emailValue = email.value;
        const passwordValue = password.value;

        if(emailValue && passwordValue) {
            if(this.checkPassword(passwordValue)) {
                // api.registration(emailValue, passwordValue)
                //     .then(data => {
                //         console.log(data);
                //     })
                localStorage.setItem('email', emailValue);
                localStorage.setItem('password', passwordValue);
                let token = (Math.random() + 1).toString(36).substring(7);
                sessionStorage.setItem('token', token);
                // window.location.reload();
                this.props.authentication();
            }
        }else{
            // debugger;
            target.classList.add('was-validated');
            email.required = true
            password.required = true
            // alert('Please enter email or password')
        }
    }
    checkPassword = (str) => {
        // debugger;
        // console.log(str)
        let re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{4,}$/;
        console.log('password test',re.test(str))
        this.setState({
            isPasswordValid: re.test(str)
        })
        return re.test(str);
    }

    render() {
        // console.log(this.state.isPasswordValid)
        return (
            <div style={{"marginTop": "17px"}}>
                <div className="card col-6 offset-3">
                    <div className="card-header text-center">
                        Registration
                    </div>

                    <div className="card-body ">
                        {/*was-validated*/}
                        <form  className="needs-validation " onSubmit={(e) => this.handelRegistration(e)}>
                            <div className="row">
                                <div className="col-8 offset-2">
                                    <div className="form-group has-validation">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email" name="email" className="form-control" id="exampleInputEmail1"
                                               aria-describedby="emailHelp" placeholder="Enter email" />
                                        <div className="invalid-feedback">
                                            Email is required
                                        </div>
                                        <small id="emailHelp" className="form-text text-muted">We'll never share your
                                            email
                                            with
                                            anyone else.</small>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-8 offset-2">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input type="password" name="password" className="form-control" id="exampleInputPassword1"
                                               onChange={(e) =>  this.checkPassword(e.target.value)}
                                               placeholder="Password" />
                                        <div className="invalid-feedback">
                                            Password is required
                                        </div>
                                        {this.state.isPasswordValid === false && <small className="" style={{"color": "#dc3545"}}>
                                            min 4 letter password, with at least a symbol, upper and lower case letters and a number
                                        </small>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="row" style={{"marginTop": "17px"}}>
                                <div className="col-4 offset-5">
                                    <button type="submit" className="btn btn-outline-secondary">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => ({
    authentication: () => dispatch(ACTIONS.authentication())
});

const mapStateToProps = (state) => {
    console.log('redux state value', state)
    return state
}
export default connect(mapStateToProps, mapDispatchToProps)(Registration);