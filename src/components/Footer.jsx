
export default function Footer() {
  return (
    <footer className="bg-EPGreen text-slate-900 p-10 flex justify-between items-center text-black">
      {/* Text aligned to the left */}
      <p>&copy; 2024 Slava & Fiona</p>

      {/* Empty div to push the image to the center */}
      <div className="flex-grow"></div>

      {/* Image centered */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <img src="/react.svg" alt="logo" className="h-10 w-10" />
      </div>
    </footer>
  );
}