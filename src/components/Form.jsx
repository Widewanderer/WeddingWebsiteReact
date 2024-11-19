
import React, { useState } from "react";

export default function RSVPForm() {
  const [formData, setFormData] = useState({
    name: "",
    adults: 0,
    children: 0,
    dietaryRestrictions: "",
    locationPreference: "", // New field for location preference
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // You can add functionality to send data to a server or handle it as needed
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">RSVP</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Input */}
        <div>
          <label
            className="block text-gray-700 font-medium mb-1"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            required
          />
        </div>

        {/* Number of Adults */}
        <div>
          <label
            className="block text-gray-700 font-medium mb-1"
            htmlFor="adults"
          >
            Number of Adults Attending
          </label>
          <input
            type="number"
            id="adults"
            name="adults"
            value={formData.adults}
            onChange={handleChange}
            min="0"
            placeholder="Enter number of adults"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
          />
        </div>

        {/* Number of Children */}
        <div>
          <label
            className="block text-gray-700 font-medium mb-1"
            htmlFor="children"
          >
            Number of Children Attending
          </label>
          <input
            type="number"
            id="children"
            name="children"
            value={formData.children}
            onChange={handleChange}
            min="0"
            placeholder="Enter number of children"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
          />
        </div>

        {/* Dietary Restrictions */}
        <div>
          <label
            className="block text-gray-700 font-medium mb-1"
            htmlFor="dietaryRestrictions"
          >
            Dietary Restrictions
          </label>
          <textarea
            id="dietaryRestrictions"
            name="dietaryRestrictions"
            value={formData.dietaryRestrictions}
            onChange={handleChange}
            placeholder="Enter dietary restrictions, if any"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            rows="3"
          ></textarea>
        </div>

        {/* Location Preference */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Location 
          </label>
          <div className="flex items-center space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="locationPreference"
                value="South Carolina"
                checked={formData.locationPreference === "South Carolina"}
                onChange={handleChange}
                className="form-radio text-emerald-500"
              />
              <span className="ml-2">South Carolina</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="locationPreference"
                value="Manitoba"
                checked={formData.locationPreference === "Manitoba"}
                onChange={handleChange}
                className="form-radio text-emerald-500"
              />
              <span className="ml-2">Manitoba</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="locationPreference"
                value="Both"
                checked={formData.locationPreference === "Both"}
                onChange={handleChange}
                className="form-radio text-emerald-500"
              />
              <span className="ml-2">Both</span>
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-emerald-500 text-white px-6 py-2 rounded-md hover:bg-emerald-600 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
