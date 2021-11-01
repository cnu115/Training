import React, {useEffect} from "react";
import {connect} from 'react-redux';
import Actions from '../redux/action';
import './counter.css';

const Counter = (props) => {
    console.log(props)

    useEffect(() => {
        if (!props.isLogin) {
            return props.history.push('/login');
        }
    }, [props.isLogin]);

    useEffect(() => {
        // debugger;
        props.getPhotos()
    },[])
    // console.log(Actions.increaseCounter(123))
   const getPhotosFromRedux = () => {
       // debugger;
       const {photos} = props;
        if(photos.length > 0){
            return photos.map((data, i) => {
                return (<div className="card" style={{"width": "18rem"}}>
                    <img className="card-img-top" src={data.thumbnailUrl} alt="Card image cap"/>
                    <div className="card-body">
                        <p className="card-text">{data.title}</p>
                    </div>
                </div>)
            })
        }
    }
    return (

        <div className="padding">
            {props.isLoading &&
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            }
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
                    <button type="button" onClick={() => props.increaseCounter(123)} className="btn btn-primary">Increase
                        counter
                    </button>
                </div>
                <div className="col-sm-6">
                    <button type="button" disabled={props.counter === 0 ? 'disabled' : ''}
                            onClick={() => props.decreaseCounter()} className="btn btn-info">Decrease counter
                    </button>
                </div>
            </div>
            {getPhotosFromRedux()}
        </div>

    )
}

const mapStateToProps = (state) => {
    // console.log(state)
    return state
}
const mapDispatchToProps = dispatch => ({
    increaseCounter: (data) => dispatch(Actions.increaseCounter(data)),
    decreaseCounter: () => dispatch(Actions.decreaseCounter()),
    getPhotos: () => dispatch(Actions.getPhotos()),
    // increaseCounter: () => dispatch({ type: "ADDITION"})
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);