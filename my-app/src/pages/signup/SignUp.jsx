import "./signup.css";
import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div className="container-login">
            <div className="header-login">
                    <div className="logo-header">
                        <Link to="/" className="link_header">
                            <img src="/src/img/logo.png" alt="logo" />
                            <div>daltter</div>
                        </Link>
                    </div>
                <Link to="/login" className="login-signup-btn">Log In</Link>
            </div>
            <div className="main-login">
                <div className="main-login-container">
                    <div className="login-container">
                        <img src="/src/img/icon.png" alt="logo" />
                        <input type="text" name="" className="input-main-sign" placeholder="Email Address"/>
                        <input type="text" name="" className="input-main2-sign" placeholder="Password"/>
                        <a href="#" className="signup-btn">Sign Up</a>
                        <Link to="/" className="forget-btn">Forget password?</Link>
                        <Link to="/" className="back-btn">Go back</Link>
                    </div>
                </div>
            </div>
            <div className="footer-signup">
                <div className="footer-container">
                    <div>Already have an account? <Link to="/login">Login</Link></div>
                </div>
            </div>
        </div>
    )
}

export {SignUp};