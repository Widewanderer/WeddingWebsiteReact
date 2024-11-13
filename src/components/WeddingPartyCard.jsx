import React from "react";

export default function WeddingPartyCard(props) {
  return (
    <div className="bg-primary rounded-lg  overflow-hidden p-6 max-w-sm flex-grow mx-auto md:mx-0">
      {/* Image section */}
      <img
        src={props.image}
        alt={props.imageAlt}
        className="w-full h-2/3 object-cover"
      />
      {/* Content section */}
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold text-emerald mb-2">{props.title}</h2>
        <h3 className="font-bold text-gray-900">Favorite Memory</h3>
        <p className="text-gray-600">{props.text}</p>
      </div>
    </div>
  );
}

