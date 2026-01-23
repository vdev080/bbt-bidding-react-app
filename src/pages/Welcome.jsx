import { useState } from "react";
import Slider from "react-slick";
import MainLayout from "../layouts/MainLayout";

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <button
            type="button"
            className="slick-prev slick-arrow"
            onClick={onClick}
        >
            <img src="/img/sm-prev-arrow.png" alt="Previous" />
        </button>
    );
}

function NextArrow(props) {
    const { onClick } = props;
    return (
        <button
            type="button"
            className="slick-next slick-arrow"
            onClick={onClick}
        >
            <img src="/img/sm-arrow.png" alt="Next" />
        </button>
    );
}

export default function Welcome() {
    const [] = useState(false);

    // Recent Auctions Slider
    const recentAuctionSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
    };

    // Project Slider
    const projectSliderSettings = {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        variableWidth: true,
        speed: 300,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };


    return (
        <>

            <MainLayout>
                {/* EXPLORE SECTION */}
                <section className="explore-section com-padding">
                    <div className="container">
                        <div className="heading-box">
                            <h1>
                                What Would You Like
                                <br /> To <strong>Explore Today?</strong>
                            </h1>

                            <div className="Explore-list mt-3">
                                <div className="explore-item">
                                    <a href="javascript:void(0);">
                                        <div className="img-box gradient">
                                            <video autoPlay muted playsInline preload="auto" loop>
                                                <source src="/video/premvid01.mp4" type="video/mp4" />
                                            </video>
                                        </div>

                                        <div className="detail-box">
                                            <h3>Explore Pre Owned Luxury Cars</h3>
                                            <ul className="tick-box">
                                                <li>Buy Car</li>
                                                <li>Sell Car</li>
                                                <li>QA Compliant</li>
                                            </ul>
                                        </div>
                                    </a>
                                </div>

                                <div className="explore-item">
                                    <a href="javascript:void(0);">
                                        <div className="com-logo">
                                            <img src="/img/cars-co-in-logo.png" alt="" />
                                        </div>

                                        <div className="img-box gradient">
                                            <img src="/img/audi-Q3-img.webp" alt="" />
                                        </div>

                                        <div className="detail-box">
                                            <h3>Browse Affordable Luxury Cars</h3>
                                            <h6 className="mt-1">
                                                Sell your car without hassle with us.
                                            </h6>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* LUXURY BIDDING SECTION */}
                <section className="luxury-bidding-section com-padding grey-bg">
                    <div className="container">
                        <div className="heading-box">
                            <h2>
                                Own A Rare Luxury, A
                                <br /> Rare <strong>Legacy</strong>.
                            </h2>
                            <p className="mt-1">
                                Access rare collections with complete peace of mind—easy transfers,
                                verified and certified every step of the way.
                            </p>
                        </div>

                        <ul className="bidding-usp-list">
                            <li>
                                <img src="/img/bidding-icon-1.png" alt="" />
                                <div className="text-box">
                                    <h5>Discover Curated Auctions</h5>
                                    <h6>Browse verified luxury and exotic car auctions</h6>
                                </div>
                            </li>

                            <li>
                                <img src="/img/bidding-icon-2.png" alt="" />
                                <div className="text-box">
                                    <h5>Bid with Expert Support</h5>
                                    <h6>
                                        with valuation, bidding strategy and documentation
                                    </h6>
                                </div>
                            </li>

                            <li>
                                <img src="/img/bidding-icon-3.png" alt="" />
                                <div className="text-box">
                                    <h5>Win & Deliver with Confidence</h5>
                                    <h6>
                                        From payment to import, registration, & doorstep delivery
                                    </h6>
                                </div>
                            </li>
                        </ul>

                        {/* RECENT AUCTIONS SLIDER */}
                        <Slider {...recentAuctionSettings} className="recent-Auctions-slider">
                            <div className="recent-Auctions-item">
                                <div className="notice-box">Our Recent Auctions</div>
                                <div className="img-box gradient">
                                    <img src="/img/image-sachin.webp" alt="" />
                                </div>
                                <div className="detail-box">
                                    <h3>Sachin Tendulkar</h3>
                                    <h6 className="mt-1">
                                        Indian Cricketer - Maruti 800
                                    </h6>
                                </div>
                            </div>

                            <div className="recent-Auctions-item">
                                <div className="notice-box">Our Recent Auctions 2</div>
                                <div className="img-box gradient">
                                    <img src="/img/Shikhar-Dhawan.jpg" alt="" />
                                </div>
                                <div className="detail-box">
                                    <h3>Shikhar Dhawan</h3>
                                    <h6 className="mt-1">
                                        Indian Cricketer - BMW M8 Coupe
                                    </h6>
                                </div>
                            </div>

                            <div className="recent-Auctions-item">
                                <div className="notice-box">Our Recent Auctions 3</div>
                                <div className="img-box gradient">
                                    <img src="/img/dhoni.jpg" alt="" />
                                </div>
                                <div className="detail-box">
                                    <h3>MS Dhoni</h3>
                                    <h6 className="mt-1">
                                        Indian Cricketer - Nissan Jonga
                                    </h6>
                                </div>
                            </div>
                        </Slider>

                        <div className="button-box mt-2">
                            <a href="javascript:void(0);" className="black-full-btn">
                                <img src="/img/bidding-icon-4.png" alt="" /> Start Bidding
                            </a>
                        </div>
                    </div>
                </section>

                {/* PROJECTS SECTION */}
                <section className="bbt-projects-section com-padding">
                    <div className="container">
                        <div className="heading-box">
                            <h2>
                                The BBT <strong>Realty</strong>
                            </h2>
                            <p className="mt-1">
                                BBT Realty extends the trusted excellence of Big Boy Toyz into
                                modern living, premium commercial developments, and serene
                                wellness destinations.
                            </p>
                        </div>

                        <ul className="bidding-usp-list">
                            <li>
                                <img src="/img/bidding-icon-5.png" alt="" />
                                <div className="text-box">
                                    <h5>Buy your next property with ease</h5>
                                </div>
                            </li>
                            <li>
                                <img src="/img/bidding-icon-6.png" alt="" />
                                <div className="text-box">
                                    <h5>State of the art infrastructure</h5>
                                </div>
                            </li>
                            <li>
                                <img src="/img/bidding-icon-7.png" alt="" />
                                <div className="text-box">
                                    <h5>RERA and Government approved</h5>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="project-box">
                        <div className="container">
                            <h3>Our Projects</h3>
                        </div>

                        <Slider {...projectSliderSettings} className="project-slider-box">
                            <div className="project-item">
                                <div className="img-box gradient">
                                    <img src="/img/project-img-1.png" alt="" />
                                </div>
                                <div className="text">
                                    <h3>PAVILION</h3>
                                </div>
                            </div>

                            <div className="project-item">
                                <div className="img-box gradient">
                                    <img src="/img/project-img-2.png" alt="" />
                                </div>
                                <div className="text">
                                    <h3>BBT ONE</h3>
                                </div>
                            </div>
                            <div className="project-item">
                                <div className="img-box gradient">
                                    <img src="/img/project-img-2.png" alt="" />
                                </div>
                                <div className="text">
                                    <h3>BBT ONE</h3>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </section>
                {/* TRANSFORM SECTION */}
                <section className="transform-section grey-bg com-padding">
                    <div className="container">
                        <div className="heading-box">
                            <h2>
                                Transform Your Luxury <strong>Ride</strong>
                            </h2>
                            <p className="mt-1">
                                Enhance performance, comfort, & style with expert-led customization
                                and upgrades tailored to your vehicle.
                            </p>
                        </div>

                        <div className="transform-grid-box mt-2 grid-box-2">
                            <div className="transform-item">
                                <div className="img-box gradient">
                                    <video autoPlay muted playsInline preload="auto" loop>
                                        <source src="/video/modvid01.mp4" type="video/mp4" />
                                    </video>
                                </div>
                                <div className="text">
                                    <h4>Modify & Upgrade Your Ride</h4>
                                </div>
                            </div>

                            <div className="transform-item">
                                <div className="img-box gradient">
                                    <img src="/img/transform-img-2.jpg" alt="Expert Service Assistance" />
                                </div>
                                <div className="text">
                                    <h4>Expert Service Assistance</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ABOUT BBT SECTION */}
                <section className="about-bbt-section com-padding">
                    <div className="container">
                        <div className="heading-box">
                            <h2>
                                About BBT <strong>Group</strong>
                            </h2>
                            <p className="mt-1">
                                What began as a dream to redefine luxury car ownership became a
                                movement that inspired a generation. This isn’t just our timeline,
                                it’s the road we've driven with ambition, belief and an unshakable
                                love for machines.
                            </p>
                        </div>

                        <ul className="about-usp-list flex space-between mt-4">
                            <li>
                                <h5>7600+</h5>
                                <p>
                                    Happy <br /> Customers
                                </p>
                            </li>
                            <li>
                                <h5>151</h5>
                                <p>
                                    Quality <br /> Checkpoints
                                </p>
                            </li>
                            <li>
                                <h5>30</h5>
                                <p>
                                    Luxury Car <br /> Brands
                                </p>
                            </li>
                        </ul>

                        <div className="form-box mt-4">
                            <h3>Partner with Us</h3>

                            <form onSubmit={(e) => e.preventDefault()}>
                                <input type="text" placeholder="Your Name" />
                                <input type="text" placeholder="Phone Number" />
                                <input type="email" placeholder="Email" />
                                <textarea placeholder="Message"></textarea>

                                <button type="submit" className="submit-btn">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </MainLayout>
        </>
    );
}
