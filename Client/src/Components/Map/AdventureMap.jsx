function AdventureMap() {
  return (
    <div className="responsive-map">
      <h1 className="mapHeading">Kashi Map</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d28860.606516425665!2d83.00904981160541!3d25.28485107362638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sadventure%20places%20near%20varanasi!5e0!3m2!1sen!2sin!4v1716457412195!5m2!1sen!2sin"
        width="600"
        height="550"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default AdventureMap;
