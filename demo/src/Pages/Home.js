// const Home = () => {
//     return(
//         <div>
//             <h1>Home page</h1>
//         </div>
//     )
// }

import React, {Component} from 'react';
import ClassB from "../Components/ClassB";
import ClassC from "../Components/ClassC";

class Home extends Component{
    state = {
        a:1,
        arr: []
    }
    add = () => {
        // alert('alert')
        this.setState({
            a: 4,
            arr: [2,3]
        })
    }
    render() {
        // console.log(this.state)
        // const obj ={
        //     name1: 'Abhi',
        //     address1: 'hyd'
        // }
        return(
            <div>
                <ClassB name='cnu' address={"hyd"}/>
                {/*<ClassC name='cnu' address={"hyd"} addr={obj}/>*/}
                Home page <br />

                <span>a value {this.state.a}</span> <br />

                <button onClick={this.add}>add</button>
            </div>
        )
    }
}
export default Home;