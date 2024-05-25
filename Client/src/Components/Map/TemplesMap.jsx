import { BsDistributeVertical } from "react-icons/bs";
import "./TemplesMap.css"
function TemplesMap() {
    return (
      <div className="responsive-map">
        
        <h1 className="mapHeading"> Kashi Map </h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d115443.97924568456!2d82.96398546366156!3d25.283219127890217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1stemples%20in%20varanasi!5e0!3m2!1sen!2sin!4v1716129858383!5m2!1sen!2sin"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
}
export default TemplesMap;