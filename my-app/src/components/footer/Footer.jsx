import './footer.css';

function Footer() {
    return (
        <div className='footer'>
            <div className="logo-footer">
                <img src="/src/img/logo-black.png" alt="logo"/>
                <p>daltter</p>
            </div>
            <div className='footer-links'>
                <a href="#">Register</a>
                <div className='line'></div>
                <a href="#">Terms of service</a>
                <div className='line'></div>
                <a href="#">Privacy policy</a>
                <div className='line'></div>
                <a href="#">Login</a>
            </div>
        </div>
    );
}

export default Footer