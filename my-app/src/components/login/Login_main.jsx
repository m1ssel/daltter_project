import "./Login.css";
import { Link } from "react-router-dom";

function Login_main(props) {
    return(
        <div className="main-login">
            <div className="main-login-container">
                <div className="login-container">
                    <img src="/src/img/icon.png" alt="logo" />
                    <input type="text" name="" className="input-main" placeholder="Email Address"/>
                    <input type="text" name="" className="input-main2" placeholder="Password"/>
                    <div className="login-btn-container"><a href="#" className="login-btn">{props.Login_btn}</a></div>
                    <Link to="/" className="forget-btn">{props.Login_text}</Link>
                    <Link to="/" className="back-btn">{props.Back_btn}</Link>
                </div>
            </div>
        </div>
        
    )
}

export default Login_main