import "./Header.css";
import Navbar from "../Navbar/Navbar";
import Menubar from "../Menubar/Menubar";
// import Ways from "../Ways/Ways";
// import ThingsToDo from "../ThingsToDo/ThingsToDo";
// import Footer from "../Footer/Footer";
// import Carousel from "../Carousel/Carousel";


const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <Menubar />
      {/* <Ways />
      <ThingsToDo />
      <Footer/> */}
    </div>
  );
};

export default Header;
