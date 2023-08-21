import React, { useState } from "react";
import "../styles/services.css";
import ShelterCard from "./shelterCard";
import Petition from "./petition";

const Services = () => {
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
        fields: ["name", "geometry", "formatted_address", "place_id",],
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
    
    <div id="services"className=" services__container">
      <section id="services">
      
        <div className="search__container">
          <div className="input__search">
            <h2>Find a shelter near you</h2>
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
          {/* Display the shelters here */}
          <div>
            {shelters.map((shelter, index) => (
              <ShelterCard key={index} shelter={shelter} />
            ))}
          </div>
        </div>
      </section>
      
      <div className="petition__header">
        <h2 style={{ color: "#fff" }}>Support Our Mission</h2>
      </div>
      <div className="petition__container">
        <div className="petition__parent">
          <div class="shadow div1__p">
            <p>
              Animal shelters are a beacon of hope for countless abandoned and
              distressed animals. They offer safety, care, and a chance at a new
              life. But they can't do it alone. These shelters need our support
              to continue their essential work. By backing our mission, you're
              giving every animal an opportunity for a loving home. Join us in
              making a difference. Every animal deserves kindness and care.
            </p>
          </div>

          <div class="div2 shadow div2__p">
            Signatures
            <br />
            <br />
            <br />
            Abbaas Mohamud, Maple Grove
            {signatures.map((signature, idx) => (
              <div key={idx}>
                {" "}
                {signature.fullName}, {signature.hometown}
              </div>
            ))}
          </div>
        </div>
        <div className="div3__p">
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/businessman-signing-using-digital-signature-5455209-4568782.png"></img>
        </div>
        <div className="div4__p">
          <Petition signatures={signatures} setSignatures={setSignatures} />
        </div>
      </div>
    </div>
  );
};

export default Services;
