
export default function Footer() {
  return (
    <footer className="bg-EPGreen text-slate-900 p-10 flex justify-between items-center text-black">
      {/* Text aligned to the left */}
      <p>&copy; 2024 Slava & Fiona</p>
      {/* Empty div to push the image to the center */}
      <div className="flex-grow"></div>
      {/* Image centered */}
      <div className="absolute left-1/2 transform -translate-x-1/2 ">
        <img
          src="/otherPics/FS_EngagementLogo.svg"
          alt="logo"
          className="h-24 w-24 hidden md:block"
        />
      </div>
      {/* Link to GitHub */}
      <div>
        <a href="https://github.com/Widewanderer/WeddingWebsiteReact">
          <i className="fab fa-github text-3xl"></i>
          GitHub
        </a>
      </div>
    </footer>
  );
}