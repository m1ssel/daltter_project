import "./Login.css";
import { Link } from "react-router-dom";

function Login_header(props) {
    return(
        <div className="header-login">
            <div className="logo-header">
                <Link to="/" className="link_header">
                    <img src="/src/img/logo.png" alt="logo" />
                    <div>{props.Title}</div>
                </Link>
            </div>
            <div className="header-container-btns">
                <Link to="/signup" className="signup-login-btn">{props.Btn}</Link>
            </div>
        </div>
    )
}

export default Login_header