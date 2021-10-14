import React from 'react';
import api from '../api/api'

class Registration extends React.Component {
    handelRegistration = (e) => {
        // debugger;
        e.preventDefault();
        const {email, password} = e.target.elements;
        const emailValue = email.value;
        const passwordValue = password.value;
        if(emailValue && passwordValue) {
            api.registration(emailValue, passwordValue)
                .then(data => {
                console.log(data);
            })
        }else{
            alert('Please enter email or password')
        }
    }

    render() {
        return (
            <div style={{"marginTop": "17px"}}>
                <div className="card">
                    <div className="card-header">
                        Registration
                    </div>
                    <div className="card-body center">
                        <form onSubmit={(e) => this.handelRegistration(e)}>
                            <div className="row">
                                <div className="col-4">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email" name="email" className="form-control" id="exampleInputEmail1"
                                               aria-describedby="emailHelp" placeholder="Enter email"/>
                                        <small id="emailHelp" className="form-text text-muted">We'll never share your
                                            email
                                            with
                                            anyone else.</small>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input type="password" name="password" className="form-control" id="exampleInputPassword1"
                                               placeholder="Password"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row" style={{"marginTop": "17px"}}>
                                <div className="col-4">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}

export default Registration;