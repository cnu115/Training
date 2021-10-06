import React from 'react';

class ClassC extends React.Component {

    constructor(props) {
        super(props);
        // console.log('constructor')
        // console.log('class C ', props)
        // const {name, address, addr} = props; // const name = props.name // const address = props.address
        // console.log('name', name, 'address ', address, 'addr', addr)
        // const {name1, address1 } = addr;
        // const name1 = addr.name1;
        // const address1 = addr.address1

        // console.log('name1', name1)
    }


    render() {
        console.log('render', this.props)
        return (
            <div>
                <h1>Home child class comp</h1>
            </div>
        )
    }
}

export default ClassC;