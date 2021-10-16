import React, {Component} from 'react';
import './Home.css';
import SearchData from "./SearchData";
import Pagination from "../Components/Pagination";
import api from "../api/api";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: [],
            searchInfo: [],
            isSearch: false,
            page: 1,
            total_pages: 0,
        }
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.userData();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
        console.log('prevState ', prevState);
        console.log('state now ', this.state)
        if(prevState.page !== this.state.page) {
            this.userData();
        }
    }

    componentWillUnmount() {
        // console.log('componentWillUnmount')
    }

    userData = () => {
        api.usersList(this.state.page)
            // .then(response => response.json())
            .then(res => {
                // console.log(res)
                this.setState({
                    userInfo: res.data,
                    page: res.page,
                    total_pages: res.total_pages
                })
            });
    }

    searchFunc = (e) => {
        const searchValue = e.target.value;
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
    changePage = (page) => {
        this.setState({
            page: page
        })
    }
    render() {
        const {isSearch} = this.state;
        return (
            <div>
                <div className="example">
                    <input type="text" onChange={(event)=>this.searchFunc(event)} id="search" placeholder="Search.." name="search2" />
                </div>
                <div className="row" >
                    <Pagination changePage={this.changePage} total_pages={this.state.total_pages} />
                </div>
                <div className="row">
                    {!isSearch ? <SearchData data={this.state.userInfo}/> :
                        <SearchData data={this.state.searchInfo}/> }
                </div>
            </div>
        )
    }
}

export default Home;