import "./header.css";
import { Link } from "react-router-dom";
// import { Login } from "../../../pages/login/Login";
// import { SignUp } from "../../../pages/signup/SignUp";

function scrollToFeatures() {
    // Используем метод scrollTo для прокрутки на 100 пикселей от начала страницы
    window.scrollTo({
        top: 600,
        behavior: "smooth", // Делает прокрутку более плавной
    });
}

function scrollToCards() {
    // Используем метод scrollTo для прокрутки на 100 пикселей от начала страницы
    window.scrollTo({
        top: 1300,
        behavior: "smooth", // Делает прокрутку более плавной
    });
}

function scrollToContact() {
    var targetElement = document.getElementById("contact");
    targetElement.scrollIntoView({ behavior: "smooth" });
}

function Header() {
    return (
        <header>
            <div className="header">
                <div className="logo-header">
                    <Link to="/" className="link_header">
                        <img src="/src/img/logo.png" alt="logo" />
                        <div>daltter</div>
                    </Link>
                </div>
                <div className="links-header">
                    <button onClick={scrollToFeatures}>Features</button>
                    <button onClick={scrollToCards}>Pricing</button>
                    <button onClick={scrollToContact}>Contact Us</button>
                </div>
                <div className="buttons-header">
                    <Link to="/login" className="btn-login">
                        Login
                    </Link>
                    <div className="button-header-signup">
                        <Link to="/signup" className="btn-sign">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
