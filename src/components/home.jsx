import "../styles/home.css";
import "../styles/services.css";
import ShelterCard from "./shelterCard";
import React, { useState } from "react";



export const Home = () => {
    const [signatures, setSignatures] = useState([]);

    const [stateValue, setStateValue] = useState(""); // For the state input value
    const [cityValue, setCityValue] = useState(""); // For the city input value
    const [shelters, setShelters] = useState([]); // To store the returned shelter data

    const handleSearch = () => {
      fetchShelters(stateValue, cityValue);
    };

    const fetchShelters = (state, city) => {
      const query = `${city} ${state} animal shelter`;
      const dummyElement = document.createElement("div"); // Temporarily create an element for PlacesService
      const service = new google.maps.places.PlacesService(dummyElement);

      service.findPlaceFromQuery(
        {
          query,
          fields: ["name", "geometry", "formatted_address", "place_id"],
        },
        function (results, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            setShelters(results); // Assuming you're in a React component context
          } else {
            console.error("Error fetching results:", status);
          }
        }
      );
    };
  return (
    <>
      <div className="main-hero">
        <img src="https://getwallpapers.com/wallpaper/full/e/1/c/151855.jpg"></img>
        <div className="search__container">
          <div className="input__search">
            <h2 style={{color: ""}}>Find a shelter near you</h2>
            <input
              type="text"
              placeholder="Enter city"
              value={cityValue}
              onChange={(e) => setCityValue(e.target.value)}
            />
            <br />

            <input
              type="text"
              placeholder="Enter state"
              value={stateValue}
              onChange={(e) => setStateValue(e.target.value)}
            />
            <button className="btn__search" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="shelters">
        {shelters.map((shelter, index) => (
          <ShelterCard key={index} shelter={shelter} />
        ))}
      </div>
    </>
  );
};

export default Home;
