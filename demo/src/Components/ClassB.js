import ClassC from "./ClassC";
import React from "react";
import PropTypes from 'prop-types';
const ClassB = (props) => {
    // console.log('class B', props)
    //destructuring
    // const {name, address} = props; // const name = props.name // const address = props.address
    // console.log('name', name, 'address ', address)
    let cn1 = props.name;
    cn1= 'cnu1'

    return(
        <div>
            <ClassC name={cn1} address={props.address} />
            <h1>Home child component {props.name}</h1>
        </div>
    )
}

ClassB.propTypes = {
    name: PropTypes.string,
    address: PropTypes.string
}
ClassB.defaultProps = {
    name: 'default'
}

export default ClassB;