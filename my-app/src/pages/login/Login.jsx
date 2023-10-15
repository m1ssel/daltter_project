import "./login.css";
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="container-login">
            <div className="header-login">
                    <div className="logo-header">
                        <Link to="/" className="link_header">
                            <img src="/src/img/logo.png" alt="logo" />
                            <div>daltter</div>
                        </Link>
                    </div>
                    <div className="header-container-btns">
                        <Link to="/signup" className="signup-login-btn">Sign Up</Link>
                     </div>
            </div>
            <div className="main-login">
                <div className="main-login-container">
                    <div className="login-container">
                        <img src="/src/img/icon.png" alt="logo" />
                        <input type="text" name="" className="input-main" placeholder="Email Address"/>
                        <input type="text" name="" className="input-main2" placeholder="Password"/>
                        <div className="login-btn-container"><a href="#" className="login-btn">Login</a></div>
                        <Link to="/" className="forget-btn">Forgot password?</Link>
                        <Link to="/" className="back-btn">Go back</Link>
                    </div>
                </div>
            </div>
            <div className="footer-login">
                <div className="footer-container">
                    <div>Already have an account? <Link to="/signup">Sign Up</Link></div>
                </div>
            </div>
        </div>
    )
}

export {Login};