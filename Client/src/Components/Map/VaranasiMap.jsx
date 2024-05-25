import "./VaranasiMap.css"
function VaranasiMap() {
    return (
      <>
        <div className="responsive-map">
          <h1 className="mapHeading">Kashi Map</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d66759.06575728745!2d82.99096423781751!3d25.328087751441917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db76febcf4d%3A0x68131710853ff0b5!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1716126874729!5m2!1sen!2sin"
            width="600"
            height="550"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </>
    );
}
export default VaranasiMap;