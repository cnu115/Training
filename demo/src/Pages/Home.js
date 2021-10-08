import React, {Component} from 'react';
import './Home.css';
import SearchData from "./SearchData";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: [],
            searchInfo: [],
            isSearch: false
        }
        // this.handelChange = this.handelChange.bind(this);
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
    searchData = () => {
        return this.state.searchInfo.map((item, index) => {
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
    }

    searchFunc = (e) => {
        // debugger;
        const searchValue = e.target.value;
        // const searchValue = document.getElementById('search').value;
        // debugger;
        if(searchValue){
            const searchArray = [...this.state.userInfo];
            const searchData = searchArray.filter(searchItem => searchItem.first_name === searchValue || searchItem.email === searchValue)
            this.setState({
                isSearch: true,
                searchInfo: searchData
            })
        }else{
            this.setState({
                isSearch: false
            })
        }
    }

    render() {
        // console.log('user info length ', this.state.userInfo.length)
        // console.log('data ', this.state.userInfo)
        const {isSearch, searchInfo} = this.state;
        console.log('isSearch ', isSearch)
        console.log('searchInfo  ', searchInfo)
        return (
            <div>
                <div className="example">
                    <input type="text" onChange={(event)=>this.searchFunc(event)} id="search" placeholder="Search.." name="search2" />
                    {/*<input type="text" onChange={this.handelChange} placeholder="Search.." name="search2" />*/}
                    {/*<input type="text" onChange={this.handelChange.bind(this)} placeholder="Search.." name="search2" />*/}
                </div>
                <div className="row">
                    {/*{!isSearch && this.cardsData()}
                    {isSearch && this.searchData()}*/}
                    
                    {!isSearch ? <SearchData data={this.state.userInfo}/> :
                        <SearchData data={this.state.searchInfo}/> }
                </div>
            </div>
        )
    }
}

export default Home;