import { Link, useLocation } from "react-router-dom";

  const navbarStyle = {
    position: 'relative',
    zIndex: 10,
  };
  
  // use sticky or absolulte possitioning to keep the navbar at the top of the page and make transparent 


  function Navbar() {
    const location = useLocation();
    return (
      <nav className="bg-transparent w-full px-4 py-2 sticky top-0 z-50">
        <div className="flex justify-between items-center">
          {/* Left side links */}
          <div className="flex space-x-4">
            <Link to="/">Home</Link>
            <Link to="/weddingparty">Wedding Party</Link>
            <Link to="/travel">Travel</Link>
          </div>
          {/* Center logo Icon */}
          <div className="text-center">
            <img src="/path-to-my-icon" alt="logo" className="h-10 w-10" />
          </div>
          {/* Right side links  */}
          <div className="flex space-x-4">
            <Link to="/rsvp">RSVP</Link>
            <a
              href="https://www.zola.com/wedding/slavatysonandfiona"
              target="_blank"
              rel="noopener noreferrer"
            >
              Registry
            </a>
            <Link to="/q&a">Q&A</Link>
          </div>
        </div>
      </nav>
    );
  }


// function Navbar() {
//     const location = useLocation();
//     return (
//       <nav className="navbar" style={navbarStyle}>
//         <h1>Test Nav</h1>
//         <div className="links">
//           <Link to="/">Home</Link>
//           <Link to="/weddingparty">Wedding Party</Link>
//           <Link to="/travel">Travel</Link>
//           <Link to="/rsvp">RSVP</Link>
//           <a
//             href="https://www.zola.com/wedding/slavatysonandfiona"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Registry
//           </a>
//           <Link to="/q&a">Q&A</Link>
//         </div>
//       </nav>
//     );
//  }

 export default Navbar;