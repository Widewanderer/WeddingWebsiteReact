import React from "react";

export default function WeddingPartyCard(props) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Image section */}
      <img
        src={props.image}
        alt={props.imageAlt}
        className="w-full h-48 object-cover"
      />

      {/* Content section */}
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold text-emerald mb-2">{props.title}</h2>
        <p className="text-gray-600">{props.text}</p>
      </div>
    </div>
  );
}
