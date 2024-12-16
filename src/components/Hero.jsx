
export default function Hero(props) {
  return (
    <div
      className="relative w-full min-h-[60vh]  bg-cover bg-center"
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className="absolute bottom-[5%] w-full text-white text-5xl md:text-8xl font-hero font-bold text-center text-shadow-strong">
        {props.title}
      </div>
    </div>
  );
}



