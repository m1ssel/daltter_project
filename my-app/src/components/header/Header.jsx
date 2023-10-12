import './header.css';

function Header() {
    return (
        <header>
            <div className='header'>
                <div className="logo-header">
                    <img src="/src/img/logo.png" alt="logo" />
                    <a href="#">daltter</a>
                </div>
                <div className="links-header">
                    <a href="#">Features</a>
                    <a href="#">Pricing</a>
                    <a href="#">Contact Us</a>
                </div>
                <div className="buttons-header">
                    <a href="#" className='btn-login'>Login</a>
                    <a href="#" className='btn-sign'>Sign Up</a>
                </div>
            </div>
        </header>
    );
}

export default Header