import React, {Component} from 'react';
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: [],
        }
        console.log('constructor')
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.userData();
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    // }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    userData = () => {
        fetch('https://reqres.in/api/users?page=2', {
            method: 'GET'
        })
            .then(response => response.json())
            .then(res => {
                console.log(res)
                this.setState({
                    userInfo: res.data
                })
            });
    }
    cardsData = () => {
        // if(this.state.userInfo.length > 0){
        return this.state.userInfo.map((item, index) => {
            // debugger;
            // console.log(item, index)
            return <div key={index} className="col-sm-3">
                <div className="card cardOwnStyle">
                    <img className="card-img-top" src={item.avatar} alt={`${item.first_name} ${item.last_name} `}/>
                    <div className="card-body">
                        <h5 className="card-title">{`${item.first_name} ${item.last_name} `}</h5>
                        <p className="card-text">
                            email: {item.email}
                        </p>
                        {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
                    </div>
                </div>
            </div>
        })
        // }
        // return <h1>Hi</h1>
    }

    render() {
        console.log('user info length ', this.state.userInfo.length)
        console.log('data ', this.state.userInfo)
        return (
            <div className="row">
                {this.cardsData()}
            </div>
        )
    }
}

export default Home;