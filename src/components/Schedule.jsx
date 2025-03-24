

export default function Schedule(props) {
    return (
      <div className="text-center p-12 py-10 max-w-md mx-auto bg-primary">
        <div className="text-xl font-semibold font-fancy text-emerald text-shadow-weak">
          {props.date}
        </div>
        <div className="flex flex-col items-center">
          <div className="text-3xl font-semibold font-fancy text-emerald text-shadow-weak">
            {props.event}
          </div>
          <div className="text-2xl font-semibold font-fancy text-emerald text-shadow-weak">
            {props.time}
          </div>
          <div className="text-xl font-semibold font-fancy  text-emerald text-shadow-weak">
            {props.location}
          </div>
          <div className="text-l font-semibold font-fancy  text-emerald text-shadow-weak">
            {props.address}
          </div>
          <p className="text-slate-500 text-emerald">{props.discription}</p>
          <div className="w-1/2 border-b border-emerald mt-5"></div>
        </div>
      </div>
    );
}

