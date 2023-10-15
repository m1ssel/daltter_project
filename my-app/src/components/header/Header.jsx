import './header.css';
import { Routes, Route, Link } from "react-router-dom";
import { Login } from "../../pages/login/Login";
import { SignUp } from "../../pages/signup/SignUp";

function Header() {
    return (
        <>
            <header>
                <div className='header'>
                    <div className="logo-header">
                        <Link to="/" className="link_header">
                            <img src="/src/img/logo.png" alt="logo" />
                            <div>daltter</div>
                        </Link>
                    </div>
                    <div className="links-header">
                        <a href="#">Features</a>
                        <a href="#">Pricing</a>
                        <a href="#">Contact Us</a>
                    </div>
                    <div className="buttons-header">
                        <Link to="/login" className='btn-login'>Login</Link>
                        <Link to="/signup" className='btn-sign'>Sign Up</Link>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header