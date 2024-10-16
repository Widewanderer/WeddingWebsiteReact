// export default function Schedule(props) {
//   return (
//     <div className="text-center p-12 py-10 max-w-md mx-auto bg-primary flex items-center space-x-4 border-b border-emerald">
//       <div className="shrink-0"></div>
//       <div>
//         <div className="text-3xl font-medium text-emerald">{props.event}</div>
//         <p className="text-slate-500 text-emerald">{props.discription}</p>
//       </div>
//     </div>
//   );
// }

export default function Schedule(props) {
    return (
      <div className="text-center p-12 py-10 max-w-md mx-auto bg-primary">
        <div className="flex flex-col items-center">
          <div className="text-2xl font-semibold text-emerald">{props.event}</div>
          <p className="text-slate-500 text-emerald">{props.discription}</p>
          <div className="w-1/2 border-b border-emerald mt-5"></div> 
        </div>
      </div>
    );
}

