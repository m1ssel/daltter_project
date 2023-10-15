import './cards.css';

function Cards(props) {
    return (
        <div className="card-container">
            <div className="card1">
                <h2>{props.Title}</h2>
                <div className='card1-container'>
                    <div className="plans-container">
                        <div className="price">
                            <div className="price-addit">
                                <p className='price-number'>{props.Price}</p>
                                <p className='price-percent'>{props.Discount}</p>
                            </div>
                            <div className="price-main">
                                <span className='text-1'>$<span className='text-2'>{props.Mainprice}</span>/100 ads</span>
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
                                <img src={props.Img} alt="x" className={props.Class}/>
                                <p>Customization</p>
                            </div>
                            <div className='third-text'>
                                <img src={props.Img} alt="x" className={props.Class}/>
                                <p>Clients-filters</p>
                            </div>
                        </div>
                        <div className="third-btn-try">
                            <a href="#">Try it now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;