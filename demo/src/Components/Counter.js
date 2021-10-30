import React, {useEffect} from "react";
import {connect} from 'react-redux';
import Actions from '../redux/action';
import './counter.css';

const Counter = (props) => {
    console.log(props)

    // useEffect(() => {
    //     // debugger;
    //     if (props && props.isLogin) {
    //         if (!props.isLogin) {
    //             return this.props.history.push('/login');
    //         }
    //     }
    // }, [props.isLogin])
    console.log(Actions.increaseCounter())
    return (

        <div className="padding">
            <div className="row text-center">
                {/*<div className="col-sm-5">*/}
                {/*    Counter : {props.counter}*/}
                {/*</div>*/}
                <div className="col-sm-12">
                    <div className="counter">
                        <i className="fa fa-lightbulb-o fa-2x"/>
                        <h2 className="timer count-title count-number" data-to="11900" data-speed="1500"/>
                        <p className="count-text ">{props.counter}</p>
                    </div>
                </div>
            </div>

            <div className="row text-center">
                <div className="col-sm-6">
                    <button type="button" onClick={() => props.increaseCounter()} className="btn btn-primary">Increase
                        counter
                    </button>
                </div>
                <div className="col-sm-6">
                    <button type="button" disabled={props.counter === 0 ? 'disabled' : ''}
                            onClick={() => props.decreaseCounter()} className="btn btn-info">Decrease counter
                    </button>
                </div>
            </div>
        </div>

    )
}

const mapStateToProps = (state) => {
    // console.log(state)
    return state
}
const mapDispatchToProps = dispatch => ({
    increaseCounter: () => dispatch(Actions.increaseCounter()),
    decreaseCounter: () => dispatch(Actions.decreaseCounter())
    // increaseCounter: () => dispatch({ type: "ADDITION"})
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);