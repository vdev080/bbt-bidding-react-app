import video from "../assets/video/video.mp4";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <section className="full-video-slider-section h-screen">
        <div className="video-item">
          <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline > <source src={video} type="video/mp4" /> </video>
        </div>

        <div className="heading-box center">
          <h1>
            Welcome to <strong>BBT</strong>
          </h1>
          <p>India’s Premier Luxury Automobile Brand</p>
        </div>
      </section>

      <div className="login-bar">
        <div className="container">
          <div className="login-btn">
            <a href="javascript:void(0);" className="btn">
              Login/Signup
            </a>
          </div>

          <Link to="/welcome" className="continue-btn mt-2">
            Continue as Guest
          </Link>
        </div>
      </div>
    </>
  );
}

