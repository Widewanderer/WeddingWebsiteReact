

export default function QA(props) {
  return (
    <div className="p-12 py-20 max-w-2xl mx-auto bg-primary flex items-center space-x-4 border-b border-emerald">
      <div className="shrink-0"></div>
      <div>
        <div className="text-xl font-medium text-emerald">
          {props.question}
        </div>
        <p className="text-slate-500 text-emerald">
          {props.answer}
        </p>
      </div>
    </div>
  );
}


