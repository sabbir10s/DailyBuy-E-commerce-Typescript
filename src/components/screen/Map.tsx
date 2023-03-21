import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "470px",
};

const center = {
  lat: 23.777176,
  lng: 90.399452,
};

function Map() {
  return <div>Map</div>;
}

export default React.memo(Map);

{
  /* <LoadScript>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <></>
      </GoogleMap>
    </LoadScript> */
}
