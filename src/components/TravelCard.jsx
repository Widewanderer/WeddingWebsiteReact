

export default function TravelCard(props) {
    return(
        <div className="text-center p-12 py-10 max-w-md mx-auto bg-primary">
            <div className="text-2xl font-semibold text-emerald">
                {props.name}
            </div>
            <p className="text-slate-700 text-emerald">
                {props.description}
            </p>
            <p className="text-slate-600 text-emerald">
                {props.address}
            </p>
        </div>
    )
}