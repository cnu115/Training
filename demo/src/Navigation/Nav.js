import {Link} from "react-router-dom";
// import CheckLogin from "../util/CheckLogin";
import {connect} from "react-redux";
import ACTIONS from "../redux/action";

const Nav = (props) => {
    props.authentication();
    const isLogin = props.isLogin;
    console.log(isLogin)
    const logOut = () => {
        sessionStorage.clear();
        window.location.reload()
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    {/*<Link to="/">Demo</Link>*/}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {isLogin && <>
                                <li>
                                    <Link to="/" className="nav-link" aria-current="page">Home</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/todo">Todo</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/redux-counter">Redux</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/Faq">FAQ</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/Help">Help</Link>
                                </li>
                            </>
                            }
                        </ul>
                        {!isLogin &&
                        <form className="d-flex">
                            <Link to={'/login'} className="btn btn-outline-success m-1">Login</Link>
                            <Link to={'/registration'} className="btn btn-outline-warning m-1">Registration</Link>
                        </form>
                        }
                        {isLogin &&
                        <form className="d-flex">
                            <button type="button" onClick={logOut} className="btn btn-outline-success m-1">Logout</button>
                        </form>
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}
const mapStateToProps = (state) => {
    console.log('redux state value', state)
    return state
}
const mapDispatchToProps = (dispatch) => ({
    authentication: () => dispatch(ACTIONS.authentication())
});
export default connect(mapStateToProps, mapDispatchToProps)(Nav)
