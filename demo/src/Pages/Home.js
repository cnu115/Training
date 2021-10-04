// const Home = () => {
//     return(
//         <div>
//             <h1>Home page</h1>
//         </div>
//     )
// }

import React, {Component} from 'react';
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
        return(
            <div>
                Home page <br />

                <span>a value {this.state.a}</span> <br />

                <button onClick={this.add}>add</button>
            </div>
        )
    }
}
export default Home;