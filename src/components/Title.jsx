
export default function Title(props){
    return(
        <div className="text-center p-12 py-8 max-w-md mx-auto bg-primary">
            <div className="flex-col items-center space-y-2">
                <div className="text-5xl font medium text-emerald font-bold">
                    {props.title}
                </div>
                <p className="text-slate-500 text-emerald">
                    {props.subtitle}
                </p>
                <div className="w-full border-b border-emerald py-1">
            </div>

        </div>
    </div>
    );
}