import "./Signup_comp.css";
import { Link } from "react-router-dom";


function Signup_main(props) {
    return (
        <div className="main-signup">
            <div className="main-signup-container">
                <div className="signup-container">
                    <img src="/src/img/icon.png" alt="logo" />
                    <input type="text" className="input-main3-sign" placeholder="Full name"/>
                    <input type="text" className="input-main4-sign" placeholder="Email Address"/>
                    <input type="text" className="input-main-sign" placeholder="Password"/>
                    <input type="text" className="input-main2-sign" placeholder="Repeat password"/>
                    <div className="signup-btn-container"><a href="#" className="signup-btn">{props.Signup_btn}</a></div>
                    <div className="attention-container">
                        <div className="attention-text">
                            <div>By clicking the button, you agree to our <a href="">Terms of Service </a>and <a href="">Privacy Policy.</a></div>
                        </div>
                    </div>
                    <Link to="/" className="back-btn">{props.Back_btn}</Link>
                </div>
            </div>
        </div>
    )
}

export default Signup_main