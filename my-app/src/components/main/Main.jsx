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
                <div className="card-container">
                    <div className="card1">
                        <h2>Standart</h2>
                        <div className='card1-container'>
                            <div className="plans-container">
                                <div className="price">
                                    <div className="price-addit">
                                        <p className='price-number'>$20.00</p>
                                        <p className='price-percent'>SAVE 75%</p>
                                    </div>
                                    <div className="price-main">
                                        <span className='text-1'>$<span className='text-2'>5.00</span>/100 ads</span>
                                    </div>
                                </div>
                                <div className="preferences">
                                    <div className='third-text'>
                                        <img src="/src/img/true.png" alt="v" />
                                        <p>Without queues</p>
                                    </div>
                                    <div className='third-text'>
                                        <img src="/src/img/true.png" alt="v" />
                                        <p>Detailed statistics</p>
                                    </div>
                                    <div className='third-text'>
                                        <img src="/src/img/true.png" alt="v" />
                                        <p>Guarantee</p>
                                    </div>
                                    <div className='third-text'>
                                        <img src="/src/img/false.png" alt="x" className='text-x'/>
                                        <p>Customization</p>
                                    </div>
                                    <div className='third-text'>
                                        <img src="/src/img/false.png" alt="x" className='text-x'/>
                                        <p>Clients-filters</p>
                                    </div>
                                </div>
                                <div className="third-btn-try">
                                    <a href="#">Try it now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card1">
                        <h2>Professional</h2>
                        <div className='card1-container'>
                            <div className="plans-container">
                                <div className="price">
                                    <div className="price-addit">
                                        <p className='price-number'>$45.00</p>
                                        <p className='price-percent'>SAVE 67%</p>
                                    </div>
                                    <div className="price-main">
                                        <span className='text-1'>$<span className='text-2'>15.00</span>/100 ads</span>
                                    </div>
                                </div>
                                <div className="preferences">
                                    <div className='third-text'>
                                        <img src="/src/img/true.png" alt="v" />
                                        <p>Without queues</p>
                                    </div>
                                    <div className='third-text'>
                                        <img src="/src/img/true.png" alt="v" />
                                        <p>Detailed statistics</p>
                                    </div>
                                    <div className='third-text'>
                                        <img src="/src/img/true.png" alt="v" />
                                        <p>Guarantee</p>
                                    </div>
                                    <div className='third-text'>
                                        <img src="/src/img/false.png" alt="x" className='text-x'/>
                                        <p>Customization</p>
                                    </div>
                                    <div className='third-text'>
                                        <img src="/src/img/false.png" alt="x" className='text-x'/>
                                        <p>Clients-filters</p>
                                    </div>
                                </div>
                                <div className="third-btn-try">
                                    <a href="#">Try it now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card1">
                        <h2>Personal*</h2>
                        <div className='card1-container'>
                            <div className="plans-container">
                                <div className="price">
                                    <div className="price-addit">
                                        <p className='price-number'>$??.??</p>
                                        <p className='price-percent'>SAVE ??%</p>
                                    </div>
                                    <div className="price-main">
                                        <span className='text-1'>$<span className='text-2'>???</span>/???</span>
                                    </div>
                                </div>
                                <div className="preferences">
                                    <div className='third-card-text'>
                                        *Personal plan created for big companies and special clients,
                                        who want different conditions or bigger amounts of ads
                                    </div>
                                </div>
                                <div className="third-btn-contact">
                                    <a href="#">Contact us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-fourth">
                <h1>Not sure if our service is right for you?</h1>
                <div className='leave-email'>
                    <p>Leave us your email and we <br/> will write to you:</p>
                    <div className='email-input'>
                        <input type="text" className='email-address' placeholder='Email Address'/>
                        <a href="#">x</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main