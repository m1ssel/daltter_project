import "./Login.css";
import { Link } from "react-router-dom";

function Login_footer(props) {
    return(
        <div className="footer-login">
            <div className="footer-container">
                <div>{props.Footer_text} <Link to="/signup">{props.Footer_btn}</Link></div>
            </div>
        </div> 
    )
}

export default Login_footer