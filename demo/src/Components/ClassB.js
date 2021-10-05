import ClassC from "./ClassC";
import React from "react";

const ClassB = (props) => {
    console.log('class B', props)
    //destructuring
    // const {name, address} = props; // const name = props.name // const address = props.address
    // console.log('name', name, 'address ', address)
    let cn1 = props.name;
    cn1= 'cnu1'

    return(
        <div>
            <ClassC name={cn1} address={props.address} />
            <h1>Home child component</h1>
        </div>
    )
}


export default ClassB;