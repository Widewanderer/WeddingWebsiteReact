import React from "react";

export default function WeddingPartyCard(props) {
  return (
    <div className="bg-primary rounded-lg m-6 overflow-hidden  max-w-sm flex-grow mx-auto md:mx-0">
      {/* Name section */}
      <div className="px-6 text-center">
        <h2 className="text-3xl font-fancy text-emerald text-shadow-weak">
          {props.name}
        </h2>
        <p className="text-lg font-fancy font-bold">{props.title}</p>
      </div>
      {/* Image section */}
      <img
        className="w-full h-[500px] object-cover"
        src={props.image}
        alt={props.imageAlt}
      />
      {/* Memory section */}
      <div className="px-6 py-2 text-center">
        <h3 className="font-bold text-gray-900">Favorite Memory</h3>
        <p className="text-gray-600">{props.text}</p>
      </div>
    </div>
  );
}

