import video from "../assets/video/video.mp4";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <section className="full-video-slider-section h-screen"> 
        <div className="video-item"> 
          <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline > 
            <source src={video} type="video/mp4" /> </video> 
        </div> 
        <div className="heading-box center"> 
          <h1> Welcome to <strong>BBT</strong> </h1> 
          <p>India’s Premier Luxury Automobile Brand</p> 
        </div>
        <div className="login-bar">
          <div className="container text-center">
            <button className="btn">
              Login / Signup
            </button>
            <Link
              to="/welcome"
              className="continue-btn mt-3 inline-block"
            >
              Explore as Guest
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
