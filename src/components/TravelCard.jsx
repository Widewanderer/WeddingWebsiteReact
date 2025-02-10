

export default function TravelCard(props) {
    return (
      <div className="text-center p-12 py-10 max-w-md mx-auto bg-primary">
        <div
          className="text-2xl font-bold font-fancy text-emerald text-shadow-weak"
        >
          {props.name}
        </div>
        <p className="text-slate-700 text-emerald">{props.description}</p>
        {props.link && (
        <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-emerald underline mt-2 inline-block">
         {props.name} Website
        </a>
        )}
        <p className="text-slate-600 text-emerald">{props.address}</p>
      </div>
    );
}