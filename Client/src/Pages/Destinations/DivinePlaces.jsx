import React from "react";
import "./DivinePlaces.css";
import { slides } from "../../Data/divineImages.json";
import Carousel from "../../Components/Carousel/Carousel";
import { Topdestination } from "../../Data/topDivinePlaces.json";

import TopDestination from "../../Components/Destination Container/TopDestinations/TopDestination";

import { divine } from "../../Data/divinePlacesData.json";
import Details from "../../Components/Details/Details";
import TemplesMap from "../../Components/Map/TemplesMap";
function DivinePlaces() {
  return (
    <div>
      <div>
        <Carousel data={slides} />
      </div>

      <div>
        <h1 className="DivinePlacesHeading">Popular Travel Spots</h1>
        <TopDestination placeList={Topdestination}></TopDestination>
      </div>

      <div>
        <h1 className="DivinePlacesHeading">Exploring Kashi's Sacred Sites</h1>
        <div>
          <Details divineInfo={divine}></Details>
        </div>
      </div>
      <div>
        <TemplesMap />
      </div>
    </div>
  );
}

export default DivinePlaces;
