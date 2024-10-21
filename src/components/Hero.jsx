
export default function Hero(props) {
  return (
    <div className="relative w-full shadow-lg">
      <img
        src={props.image}
        alt="Home page engagement Photo"
        className="w-full h-auto object-cover"
      />
      <div className="absolute top-[78%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold text-center">
        {props.title}
      </div>
    </div>
  );
}
