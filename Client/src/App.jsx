import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Registration/Login";
import Register from "./Pages/Registration/Register";
import AboutUs from "./Pages/AboutUs/AboutUs";
import VaranasiMap from "./Components/Map/VaranasiMap";
import Destinations from "./Pages/Destinations/Destinations";
import { header } from "./Data/header.json";
import DivinePlaces from "./Pages/Destinations/DivinePlaces";
import Ghats from "./Pages/Destinations/Ghats";
import Adventure from "./Pages/Destinations/Adventure";
import Museum from "./Pages/Destinations/Museum";
import Historicplaces from "./Pages/Destinations/Historicplaces";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/map" element={<VaranasiMap />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/destination"
          element={<Destinations headerOne={header[0]} />}
        />
        <Route path="/divinePlaces" element={<DivinePlaces />} />
        <Route path="/ghats" element={<Ghats />} />
        <Route path="/museum" element={<Museum />} />
        <Route path="/historicalPlaces" element={<Historicplaces />} />
        <Route path="/adventure" element={<Adventure />} />
      </Routes>
    </>
  );
}

export default App;
