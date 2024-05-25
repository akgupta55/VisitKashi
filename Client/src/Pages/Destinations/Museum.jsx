<<<<<<< HEAD
import { slides } from "../../Data/museumImages.json";
import Carousel from "../Components/Carousel/Carousel";
import { Topdestination } from "../../Data/topDestination.json";
import Details from "../Components/Details/Details";
import { divine } from "../data/mseumData.json";
import TopDestination from "../Components/Destinations/TopDestinations/TopDestination";
import MuseumMap from "../Components/Map/MuseumMap";
=======
import React from "react";

import { slides } from "../../Data/museumImages.json";
import Carousel from "../../Components/Carousel/Carousel";
import { Topdestination } from "../../Data/topHistoricalPlaces.json";
import Details from "../../Components/Details/Details";
import { divine } from "../../Data/mseumData.json";
import TopDestination from "../../Components/Destination Container/TopDestinations/TopDestination";
import MuseumMap from "../../Components/Map/MuseumMap";
>>>>>>> b1b90d4b1b3008fcb7bb9444c2017e2f1d897f58
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
