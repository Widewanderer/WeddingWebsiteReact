import React, { useState } from "react";
import firebaseConfig from "../../firebaseConfig.js";

export default function RSVPForm() {
  const [formData, setFormData] = useState({
    name: "",
    adults: 0,
    children: 0,
    dietaryRestrictions: "",
    alcohol: "",
    locationPreference: "",
  });

  const [isError, setIsError] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // try to change .then message below to setFormMessage with a message of succes if SetisError remains false.

  const handleSubmit = (e) => {
    e.preventDefault();
    const firebaseUrl = firebaseConfig.databaseURL + "/rsvp.json";
    fetch(firebaseUrl, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.ok){
          setIsError(false);
          setFormMessage("Success! Your RSVP has been submitted.");
          console.log(response);
        } else {
          setIsError(true);
        setFormMessage('There was an error submitting your RSVP. '+ response.statusText);
        }
       
  });
};

  return (
    <div className="max-w-sm mx-auto p-6 bg-primary-100 rounded-lg">
      <h2 className="text-2xl font-fancy font-bold text-emerald text-center mb-4 text-shadow-weak">
        Please submit your information below
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Input */}
        <div>
          <label
            className="block font-fancy text-gray-700 font-medium mb-1"
            htmlFor="name"
          >
            First and Last Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-emerald focus:outline-none"
            required
          />
        </div>

        {/* Number of Adults */}
        <div>
          <label
            className="block text-gray-700 font-fancy font-medium mb-1"
            htmlFor="adults"
          >
            Adults Attending
          </label>
          <input
            type="number"
            id="adults"
            name="adults"
            value={formData.adults}
            onChange={handleChange}
            min="0"
            placeholder="Enter number of adults"
            className="w-1/4 border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-emerald focus:outline-none"
          />
        </div>

        {/* Number of Children */}
        <div>
          <label
            className="block text-gray-700 font-fancy font-medium mb-1"
            htmlFor="children"
          >
            Children Attending
          </label>
          <input
            type="number"
            id="children"
            name="children"
            value={formData.children}
            onChange={handleChange}
            min="0"
            placeholder="Enter number of children"
            className="w-1/4 border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-emerald focus:outline-none"
          />
        </div>

        {/* Dietary Restrictions */}
        <div>
          <label
            className="block text-gray-700 font-fancy font-medium mb-1"
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
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-emerald focus:outline-none"
            rows="3"
          ></textarea>
        </div>

        {/* Acohal */}
        <div>
          <label className="block font-fancy text-gray-700 font-medium mb-1">
            Alcohol
          </label>
          <div className="flex items-center space-x-4">
            <label className="inline-flex items-center font-fancy">
              <input
                type="radio"
                name="alcohol"
                value="Yes"
                checked={formData.alcohol === "Yes"}
                onChange={handleChange}
                className="form-radio"
              />
              <span className="ml-2">Yes Please</span>
            </label>
            <label className="inline-flex items-center font-fancy">
              <input
                type="radio"
                name="alcohol"
                value="No"
                checked={formData.alcohol === "No"}
                onChange={handleChange}
                className="form-radio"
              />
              <span className="ml-2">No Thank You</span>
            </label>
          </div>
        </div>
        {/* Location Preference */}
        <div>
          <label className="block text-gray-700 font-fancy font-medium mb-1">
            Location
          </label>
          <div className="flex items-center space-x-4">
            <label className="inline-flex items-center font-fancy">
              <input
                type="radio"
                name="locationPreference"
                value="South Carolina"
                checked={formData.locationPreference === "South Carolina"}
                onChange={handleChange}
                className="form-radio"
              />
              <span className="ml-2">South Carolina</span>
            </label>
            <label className="inline-flex items-center font-fancy">
              <input
                type="radio"
                name="locationPreference"
                value="Manitoba"
                checked={formData.locationPreference === "Manitoba"}
                onChange={handleChange}
                className="form-radio"
              />
              <span className="ml-2">Manitoba</span>
            </label>
            <label className="inline-flex items-center font-fancy">
              <input
                type="radio"
                name="locationPreference"
                value="Both"
                checked={formData.locationPreference === "Both"}
                onChange={handleChange}
                className="form-radio text-emerald"
              />
              <span className="ml-2">Both</span>
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-EPGreen text-primary  px-6 py-2 rounded-md hover:bg-emerald transition duration-500"
          >
            Submit
          </button>
        </div>
      </form>
      {/* Submition Message (Conditional) */}
      {formMessage && (
        <div
        className={`mt-4 p-4 rounded-md text-center ${
            isError ? "bg-red-200 text-red-800" : "bg-green-200 text-green-800"
          }`}
          >
            {formMessage}
          </div>
      )}
    </div>
  );
}
