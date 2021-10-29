import React from "react";
import {connect} from 'react-redux';
import Actions from '../redux/action';
const Counter = (props) => {
    console.log(props)
    return(
        // <div className="page-content page-container" id="page-content">
            <div className="padding">
                <div className="row d-flex justify-content-center">
                    <div className="col-sm-12">
                Counter : {props.counter}
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-sm-6">
                        <button type="button" onClick={() => props.increaseCounter()} className="btn btn-primary">Increase counter</button>
                    </div>
                    <div className="col-sm-6">
                        <button type="button" className="btn btn-secondary">Decrease counter</button>
                    </div>
                </div>
            </div>
        // </div>
    )
}

const mapStateToProps = (state) => {
    // console.log(state)
    return state
}
const mapDispatchToProps = dispatch => ({
    increaseCounter: () => dispatch(Actions.increaseCounter())
    // increaseCounter: () => dispatch({ type: "ADDITION"})
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);