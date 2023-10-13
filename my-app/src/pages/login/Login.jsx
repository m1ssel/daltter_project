import "./login.css";
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="container-login">
            <div className="header-login">
                <div className="logo-header">
                    <img src="/src/img/logo.png" alt="logo" />
                    <div>daltter</div>
                </div>
                <Link to="/signup" className="signup-login-btn">Sign up</Link>
            </div>
            <div className="main-login">
                <div className="main-login-container">
                    <img src="/src/img/icon.png" alt="logo" />
                    <input type="text" name="" className="input-main" placeholder="Email Address"/>
                    <input type="text" name="" className="input-main2" placeholder="Password"/>
                    <a href="#" className="login-btn"><span>Login</span></a>
                    <a href="#" className="forget-btn">Forget password?</a>
                    <Link to="/" className="back-btn">Go back</Link>
                </div>
            </div>
            <div className="footer-login">
                <div>
                    Don't have an account? <Link to="/signup">Sign Up</Link> 
                </div>
            </div>
        </div>
    )
}

export {Login};