import { Link, useLocation } from "react-router-dom";
import '../App.css';


  function Navbar() {
    const location = useLocation();
    return (
      <nav className="bg-transparent w-full px-4 py-2 absolute top-0 z-50">
        <div className="flex justify-between items-center">
          {/* Left side links */}
          <div className="flex space-x-4">
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
          {/* Center logo Icon */}
          <div className="text-center">
            <img src="/react.svg" alt="logo" className="h-10 w-10" />
          </div>
          {/* Right side links  */}
          <div className="flex space-x-4">
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