import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./Map.scss";
const MyMap = () => {
  const [center, setCenter] = useState({
    lat: 41.02099997025553,
    lng: 29.068276379245162,
  });
  const [zoom, setZoom] = useState(18);

  const marker = {
    lat: 41.02099997025553,
    lng: 29.068276379245162,
  };

  return (
    <div data-aos="zoom-in" data-aos-duration="1000">
      <div className="map-container">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCIot8DnOSZqCRAmph2VWP5WrPvDvk24Ps" }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <div
            lat={marker.lat}
            lng={marker.lng}
            style={{
              position: "relative",
              transform: "translate(-50%, -50%)",
              width: "40px",
              height: "40px",
            }}
          >
            <FaMapMarkerAlt size={24} color="#db4437" />
            <div className="LocationName">Neher Prodüksiyon</div>
          </div>
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default MyMap;
