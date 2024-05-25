import Header from "../../Components/Header/Header";
import Carousel from "../../Components/Carousel/Carousel";
import Ways from "../../Components/Ways/Ways";
import ThingsToDo from "../../Components/ThingsToDo/ThingsToDo";
import Events from "../../Components/Events/Events";
import WhatTo from "../../Components/WhatTo/WhatTo";
// import ThingsTo from "../../Components/ThingsTo/ThingsTo";
import Footer from "../../Components/Footer/Footer";
import { slides } from "../../Data/carouselData.json";
import { events } from "../../Data/events.json";
import { things } from "../../Data/thingsData.json";
import More from "../../Components/More/More";
import chunarFort from "../../assets/chunarFort.jpeg"; //'../src/assets/chunarFort.jpeg';
import chandra from "../../assets/chandra.jpeg";
import devdari from "../../assets/devdari.jpeg";
import ramNagarfort from "../../assets/ramNagarfort.jpeg";
import vindhyachal from "../../assets/vindhyachal.jpeg";
import vindhamWaterfall from "../../assets/vindhamWaterfall.jpeg";
import vijyagrah from "../../assets/vijyagrah.jpeg";

const Home = () => {
  const destinations = [
    {
      image: ramNagarfort,
      name: "Ramnagar Fort",
      description: "A picturesque beach perfect for a relaxing getaway.",
      cost: 500,
      distance: 200,
    },
    {
      image: devdari,
      name: "Devdari Waterfall",
      description: "A picturesque beach perfect for a relaxing getaway.",
      cost: 500,
      distance: 200,
    },
    {
      image: vindhyachal,
      name: "Vindhyachal Temple",
      description: "A picturesque beach perfect for a relaxing getaway.",
      cost: 500,
      distance: 200,
    },
    {
      image: chunarFort,
      name: "Chunar Fort",
      description: "A picturesque beach perfect for a relaxing getaway.",
      cost: 500,
      distance: 200,
    },
    {
      image: vijyagrah,
      name: "Vijaygarh Fort",
      description: "A picturesque beach perfect for a relaxing getaway.",
      cost: 500,
      distance: 200,
    },
    {
      image: chandra,
      name: "Chandra Prabha Wildlife Sanctuary",
      description: "A picturesque beach perfect for a relaxing getaway.",
      cost: 500,
      distance: 200,
    },
    {
      image: vindhamWaterfall,
      name: "Vindham Waterfalls",
      description: "A picturesque beach perfect for a relaxing getaway.",
      cost: 500,
      distance: 90,
    },
  ];
  return (
    <div>
      <Header />
      <Carousel data={slides} />
      <Ways />
      <ThingsToDo />
      <WhatTo />
      <Events info={events} />
      {/* <ThingsTo thingsInfo={things} /> */}
      <More destinations={destinations} />
      <Footer />
    </div>
  );
};

export default Home;
