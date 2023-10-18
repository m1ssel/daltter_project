import "./Signup_comp.css";
import { Link } from "react-router-dom";


function Signup_footer(props) {
    return (
        <div className="footer-signup">
            <div className="footer-container">
                <div>{props.Footer_text} <Link to="/login">Login</Link></div>
            </div>
        </div>
    )
}

export default Signup_footer
