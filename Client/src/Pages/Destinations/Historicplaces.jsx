<<<<<<< HEAD
import { slides } from "../../Data/historicImages.json";
import Carousel from "../Components/Carousel/Carousel";
import { Topdestination } from "../../Data/topDestination.json";
import Details from "../Components/Details/Details";
import { divine } from "../../Data/historialData.json";
import TopDestination from "../DestinationsComponents/TopDestinations/TopDestination";
import HistoricalMap from "../Map/HistoricalMap";
=======
import React from 'react'

import { slides } from "../../Data/historicImages.json"
import Carousel from "../../Components/Carousel/Carousel";
import { Topdestination } from "../../Data/topHistoricalPlaces.json";
import Details from "../../Components/Details/Details";
import { divine } from "../../Data/historialData.json";
import TopDestination from "../../Components/Destination Container/TopDestinations/TopDestination";
import HistoricalMap from '../../Components/Map/HistoricalMap';
>>>>>>> b1b90d4b1b3008fcb7bb9444c2017e2f1d897f58

function Historicplaces() {
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
        <h1 className="ghatHeading">Exploring Kashi's Historical Treasures</h1>
        <div>
          <Details divineInfo={divine}></Details>
        </div>
      </div>

      <div>
        <HistoricalMap />
      </div>
    </div>
  );
}

export default Historicplaces;
