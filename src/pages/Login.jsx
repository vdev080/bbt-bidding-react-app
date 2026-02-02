import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetch("http://localhost/react-bbt-wp/wp-json/wp/v2/pages?slug=login")
      .then((res) => res.json())
      .then((data) => {
        if (data?.length) {
          setContent(data[0].acf);
        }
      })
      .catch((err) => console.error("WP API Error:", err));
  }, []);

  // 🔹 Prevent render until data loads
  if (!content) return null;

  return (
    <section className="full-video-slider-section h-screen">
      <div className="video-item">
        <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            {content.background_video && (
              <source src={content.background_video} type="video/mp4" />
            )}
        </video>

      </div>

      <div className="heading-box center">
        <h1>
          {content.heading}
        </h1>
        <p>{content.sub_heading}</p>
      </div>

      <div className="login-bar">
        <div className="container text-center">
          <button className="btn">
            {content.login_button_text}
          </button>

          <Link
            to="/welcome"
            className="continue-btn mt-3 inline-block"
          >
            {content.guest_button_text}
          </Link>
        </div>
      </div>
    </section>
  );
}
