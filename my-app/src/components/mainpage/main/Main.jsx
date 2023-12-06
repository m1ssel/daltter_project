/* eslint-disable react/jsx-no-target-blank */
import "./main.css";
import Cards from "../cards/Сards";

function Hello() {
    return (
        <div className="main-first">
            <div className="hello-left">
                <h1 className="daltter-main">
                    {" "}
                    <span className="daltter-text">daltter - </span>
                    <br /> is the future <br /> of marketing.
                </h1>
                <p className="email-main">
                    Email advertising has never been so <br /> effective and
                    affordable for everyone!
                </p>
                <div className="btns-first">
                    <div className="transparent-btn-try">
                        <a
                            href="https://youtu.be/LDU_Txk06tM?t=74#"
                            className="try-for-free"
                            target="_blank"
                        >
                            Try it now
                        </a>
                    </div>
                    <a
                        href="https://youtu.be/LDU_Txk06tM?t=74"
                        className="features"
                        target="_blank"
                    >
                        Why us?
                    </a>
                </div>
            </div>
            <div className="hello-right">
                <img src="/src/img/Hello-right.png" alt="image" />
            </div>
        </div>
    );
}
function Service() {
    return (
        <div className="main-second">
            <div className="second-left">
                <img src="/src/img/Second-leftservice-left.png" alt="image" />
            </div>
            <div className="second-right">
                <h1 className="second-main">
                    <div className="second-subtext">
                        Our <span> service </span> is{" "}
                    </div>{" "}
                    fully automated
                </h1>
                <p className="second-text">
                    All you need is just few clicks - and your clients will be
                    in your hands. Forget about tens different services for one
                    ad.
                </p>
                <div className="second-btn">
                    <a
                        href="https://youtu.be/LDU_Txk06tM?t=74"
                        target="_blank"
                        className="second-try-button"
                    >
                        Try it now
                    </a>
                </div>
            </div>
        </div>
    );
}

function Contact() {
    return (
        <div className="main-fourth" id="contact">
            <h1>Not sure if our service is right for you?</h1>
            <div className="leave-email">
                <p>
                    Leave us your email and we <br /> will write to you:
                </p>
                <div className="email-input">
                    <input
                        type="text"
                        className="email-address"
                        placeholder="Email Address"
                    />
                    <a
                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
                        target="_blank"
                    >
                        &gt;
                    </a>
                </div>
            </div>
        </div>
    );
}

function Card() {
    return (
        <div className="main-third">
            <h1>We have several different plans to suit all customers:</h1>
            <div className="card-container">
                <Cards
                    Title="Standart"
                    Price="$20.00"
                    Discount="SAVE 75%"
                    Mainprice="5.00"
                    Img="/src/img/false.png"
                    Class="text-x"
                    Ads="/100 ads"
                    type="1"
                />
                <Cards
                    Title="Professional"
                    Price="$45.00"
                    Discount="SAVE 67%"
                    Mainprice="15.00"
                    Img="/src/img/true.png"
                    Class=""
                    Ads="/100 ads"
                    type="1"
                />
                <Cards
                    Title="Personal*"
                    Price="$??.??"
                    Discount="SAVE ??%"
                    Mainprice="???"
                    Img="/src/img/true.png"
                    Ads="/???"
                    Class=""
                    type="2"
                />
            </div>
        </div>
    );
}

function Main() {
    return (
        <div className="main">
            <Hello />

            <Service />

            <Card />

            <Contact />
        </div>
    );
}

export default Main;
