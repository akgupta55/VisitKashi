import "./Ghat.css";
import { slides } from "../../Data/ghatsImages.json";
import Carousel from "../../Components/Carousel/Carousel";
import { Topdestination } from "../../Data/topGhats.json";
<<<<<<< HEAD
import Details from "../Components/Details/Details";
import { divine } from "../../Data/ghatsData.json";
import TopDestination from "../DestinationsComponents/TopDestinations/TopDestination";
import GhatsMap from "../Map/GhatsMap";
=======
import Details from "../../Components/Details/Details";
import { divine } from "../../Data/ghatsData.json";
import TopDestination from "../../Components/Destination Container/TopDestinations/TopDestination";
import GhatsMap from "../../Components/Map/GhatsMap";
>>>>>>> b1b90d4b1b3008fcb7bb9444c2017e2f1d897f58
function Ghats() {
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
        <h1 className="ghatHeading">Exploring Kashi&apos;s Ghats</h1>
        <div>
          <Details divineInfo={divine}></Details>
        </div>
      </div>

      <div>
        <GhatsMap />
      </div>
    </div>
  );
}

export default Ghats;
