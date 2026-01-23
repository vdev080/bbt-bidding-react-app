import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="container">
        <div className="flex-box space-between align-center">
          <div className="logo-box">
            <Link to="/">
                <img src="/img/logo.webp" alt="BBT Logo" />
            </Link>
          </div>

          <div
            className={`hamburger is-md ${menuOpen ? "is-active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </div>
        </div>
      </div>
    </header>
  );
}
