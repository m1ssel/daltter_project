import "./Signup_comp.css";
import { Link } from "react-router-dom";



function Signup_header(props) {
    return (
        <div className="header-login">
            <div className="logo-header">
                <Link to="/" className="link_header">
                    <img src="/src/img/logo.png" alt="logo" />
                    <div>{props.Signup_title}</div>
                </Link>
            </div>
            <Link to="/login" className="login-signup-btn">{props.Signup_login_btn}</Link>
        </div>
    )
}

export default Signup_header
