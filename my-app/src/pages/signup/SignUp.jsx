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
                <Link to="/login" className="login-signup-btn">Login</Link>
            </div>
            <div className="main-signup">
                <div className="main-signup-container">
                    <div className="signup-container">
                        <img src="/src/img/icon.png" alt="logo" />
                        <input type="text" className="input-main3-sign" placeholder="Full name"/>
                        <input type="text" className="input-main4-sign" placeholder="Email Address"/>
                        <input type="text" className="input-main-sign" placeholder="Password"/>
                        <input type="text" className="input-main2-sign" placeholder="Repeat password"/>
                        <div className="signup-btn-container"><a href="#" className="signup-btn">Sign Up</a></div>
                        <div className="attention-container">
                            <div className="attention-text">
                                <div>By clicking the button, you agree to our <a href="">Terms of Service </a>
                                and <a href="">Privacy Policy.</a></div>
                            </div>
                        </div>
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