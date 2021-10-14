import React from 'react';
import api from '../api/api';
class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {}
        }
    }

    componentDidMount() {
        console.log(this.props)
        const {id} = this.props.match.params;
        this.getUser(id);
    }

    getUser = (id) => {
        api.usersList(id)
            .then(results => {
                console.log('api data ', results);
                this.setState({
                    userInfo: results
                }, () => {
                    console.log('call back function state', this.state)
                })
            })
        console.log('state ', this.state)
    }
    goBack = () =>{
        this.props.history.goBack();
    }
    render() {
        const {userInfo} = this.state;
        return (
            <div style={{"marginTop": "16px"}}>
                <button onClick={this.goBack} type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-arrow-left-square" viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                              d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                    </svg>
                </button>
                {userInfo && userInfo.data &&
                    <div className="card text-center" style={{"marginTop": "16px"}}>
                        <div className="card-header">
                            {`${userInfo.data.first_name} ${userInfo.data.last_name}`}
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">
                                <img src={userInfo.data.avatar} alt={'image'}/>
                            </h5>
                            <p className="card-text">email: {userInfo.data.email}</p>
                        </div>
                        <div className="card-footer text-muted">
                            <a target="_blank" href={userInfo.support.url}>{userInfo.support.text}</a>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default User;