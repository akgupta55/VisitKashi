import React from "react";

import { slides } from "../../Data/museumImages.json";
import Carousel from "../../Components/Carousel/Carousel";
import { Topdestination } from "../../Data/topHistoricalPlaces.json";
import Details from "../../Components/Details/Details";
import { divine } from "../../Data/mseumData.json";
import TopDestination from "../../Components/Destination Container/TopDestinations/TopDestination";
import MuseumMap from "../../Components/Map/MuseumMap";
function Museum() {
  return (
    <div>
      <div>
        <Carousel data={slides} />
      </div>

      <div>
        <h1 className="ghatHeading">Destination Highlights</h1>
        <TopDestination placeList={Topdestination}></TopDestination>
      </div>

      <div>
        <h1 className="ghatHeading">Exploring Kashi's Museums</h1>
        <div>
          <Details divineInfo={divine}></Details>
        </div>
      </div>

      <div>
        <MuseumMap />
      </div>
    </div>
  );
}

export default Museum;
