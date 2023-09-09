import React, { useEffect, useRef } from "react";
import "../styles/shelterCard.css";

const ShelterCard = ({ shelter }) => {


  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current && shelter.formatted_address) {
      const map = new google.maps.Map(mapRef.current, {
        zoom: 15,
        center: { lat: -34.397, lng: 150.644 }, // Default coords, these will change once geocoded
      });

      // Use Geocoding to convert address to lat/lng
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode(
        { address: shelter.formatted_address },
        (results, status) => {
          if (status === "OK") {
            map.setCenter(results[0].geometry.location);
            new google.maps.Marker({
              map: map,
              position: results[0].geometry.location,
            });
          }
        }
      );
    }
  }, [shelter]);
const googleMapsURL = `https://www.google.com/maps/place/?q=place_id:${shelter.place_id}`;

  return (
    <div className=" shelter-container">
      <div className=" shelter-card">
        <h3>{shelter.name}</h3>
        <p>
          <strong>Address:</strong> {shelter.formatted_address}
        </p>
        <a href={googleMapsURL} target="_blank" rel="noopener noreferrer">
          <div className="btn__maps">
            <button>View More</button>
            </div>
        </a>
      </div>
      
      <div
        ref={mapRef}
        style={{ width: "100%", height: "400px", paddingBottom: "20px" }}
      ></div>

    </div>
  );
};

export default ShelterCard;
