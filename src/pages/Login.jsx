import video from "../assets/video/video.mp4";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <section className="relative h-screen">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={video} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 heading-box center text-white">
          <h1>
            Welcome to <strong>BBT</strong>
          </h1>
          <p>India’s Premier Luxury Automobile Brand</p>
        </div>
      </section>

      <div className="login-bar">
        <div className="container text-center">
          {/* Primary CTA */}
          <button className="btn">
            Login / Signup
          </button>

          {/* Secondary CTA */}
          <Link
            to="/welcome"
            className="continue-btn mt-3 inline-block"
          >
            Explore as Guest →
          </Link>
        </div>
      </div>
    </>
  );
}
