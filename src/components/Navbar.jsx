import { Link, useLocation } from "react-router-dom";
import '../App.css';
import { useState } from "react";

// try using tailwind mixed blend Mode to make the text change based on the background 


function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#D3D3D325] w-full px-4 py-2 absolute top-0 z-50 drop-shadow-lg">
      {/* Hamburger Menu Button - Visible on small screens only. */}
      <div
        className="flex justify-between items-center sm:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <button className="text-3xl">
          {/* This could be a menu icon */}
          &#9776; {/* Unicode for hamburger menu icon */}
        </button>
        <div className="text-center">
          <img
            src="/otherPics/FS_EngagementLogo.svg"
            alt="logo"
            className="h-10 w-10"
          />
        </div>
      </div>

      {/* Links - Hidden on small screens unless menu is open */}
      <div
        className={`sm:flex justify-between items-center transition ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {/* Left side links */}
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/weddingparty" className="link">
            Wedding Party
          </Link>
          <Link to="/travel" className="link">
            Travel
          </Link>
        </div>

        {/* Center logo - Only visible on larger screens */}
        <div className="hidden sm:flex text-center absolute left-1/2">
          <img
            src="/otherPics/FS_EngagementLogo.svg"
            alt="logo"
            className="h-12 w-12"
          />
        </div>

        {/* Right side links */}
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <Link to="/rsvp" className="link">
            RSVP
          </Link>
          <a
            href="https://www.zola.com/wedding/slavatysonandfiona"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Registry
          </a>
          <Link to="/q&a" className="link">
            Q&A
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;