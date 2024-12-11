
export default function Hero(props) {
  return (
    <div
      className="relative w-full min-h-[60vh]  bg-cover bg-center"
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className="absolute top-[50%] md:top-[78%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-8xl font-hero font-bold text-center text-shadow-strong">
        {props.title}
      </div>
    </div>
  );
}


// export default function Hero(props) {
//   return (
//     <div className="relative w-full shadow-lg">
//       <img
//         src={props.image}
//         alt="Home page engagement Photo"
//         className="w-full h-auto object-cover"
//       />
//       <div className="absolute top-[50%] md:top-[78%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold text-center">
//         {props.title}
//       </div>
//     </div>
//   );
// }
