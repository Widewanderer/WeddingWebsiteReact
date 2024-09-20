import { Link, useLocation } from "react-router-dom";

  const navbarStyle = {
    position: 'relative',
    zIndex: 10,
  };
  

function Navbar() {
    const location = useLocation();
    return (
      <nav className="navbar" style={navbarStyle}>
        <h1>Test Nav</h1>
        {/* <div className="links">
          <Link to="/">Home</Link>
          <Link to="/about">Wedding Party</Link>
          <Link to="/projects">Travel</Link>
          <Link to="/contact">RSVP</Link>
          <a
            href="https://www.zola.com/wedding/slavatysonandfiona"
            target="_blank"
            rel="noopener noreferrer"
          >
            Registry
          </a>
          <Link to="/Q&A">Q&A</Link>
        </div> */}
      </nav>
    );
 }

 export default Navbar;