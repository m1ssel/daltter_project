import './main.css';

function Main() {
    return (
        <div className="main">
             <div className='main-first'>
                <div className="hello-left">
                    <h1 className='daltter-main'> <span className='daltter-text'>daltter - </span><br/> is the future <br/> of marketing.</h1>
                    <p className='email-main'>Email advertising has never been so effective <br/> and affordable for everyone!</p>
                    <div className="btns-first">
                    <a href="#" className='try-for-free'>Try it now</a>
                    <a href="#" className='features'>Why us?</a>
                    </div>
                </div>
                <div className="hello-right">
                    <img src="/src/img/Hello-right.png" alt="image" />
                </div>
            </div>
            <div className="main-second">
                <div className="second-left">
                    <img src="/src/img/Second-leftservice-left.png" alt="image" />
                </div>
                <div className="second-right">
                    <h1 className='second-main'>Our <span>service</span> is fully <br/> automated</h1>
                    <p className='second-text'>All you need is just few clicks - and your clients <br/> will be in your hands.
                    Forget about tens different <br/> services for one ad.</p>
                    <div className="second-btn"><a href="#" className='second-try-button'>Try it now</a></div>
                </div>
            </div>
            <div className="main-third">
                <h1>We have several different <br/> plans to suit all customers:</h1>
            </div>
            <div className="main-fourth">
                <h1>Not sure if our service is right for you?</h1>
                <div className='leave-email'>
                    <p>Leave us your email and we <br/> will write to you:</p>
                    <div className='email-input'>
                        <input type="text" className='email-address' placeholder='Email Address'/>
                        <a href="#">></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main