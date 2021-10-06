// const Home = () => {
//     return(
//         <div>
//             <h1>Home page</h1>
//         </div>
//     )
// }

import React, {Component} from 'react';
// import ClassB from "../Components/ClassB";
// import ClassC from "../Components/ClassC";

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            a:1,
            userInfo: [],
            arr: []
        }
        console.log('constructor')
    }
    add = () => {
        // alert('alert')
        this.setState({
            a: 4,
            arr: [2,3]
        })
    }
    componentDidMount() {
        console.log('componentDidMount');
        
        fetch('https://reqres.in/api/users?page=2', {
            method: 'GET'
        })
            .then(response => response.json())
            .then(res => {
                console.log(res)
                this.setState({
                    userInfo: res.data
                })
            })
            // .then(response => {
            //     // console.log(response)
            //    return  response.json()
            //     //     .then(data =>{
            //     //     console.log(data)
            //     //
            //     // });
            //
            // })

    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    // }
    //
    // componentWillUnmount() {
    //     console.log('componentWillUnmount')
    // }
    render() {
        // console.log(this.state)
        // const obj ={
        //     name1: 'Abhi',
        //     address1: 'hyd'
        // }
        console.log('user info length ', this.state.userInfo.length)
        console.log('data ',this.state.userInfo)
        return(
            <div>
                {/*<ClassB name='cnu' address={"hyd"}/>*/}
                {/*<ClassC name='cnu' address={"hyd"} addr={obj}/>*/}
                Home page <br />

                <span>a value {this.state.a}</span> <br />

                <button onClick={this.add}>add</button>
            </div>
        )
    }
}
export default Home;