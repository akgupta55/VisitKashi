import React from 'react'

function MuseumMap() {
  return (
    <div className="responsive-map">
      <h1 className="mapHeading">Kashi Map</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d28860.607877576163!2d83.0090497822954!3d25.284845353086002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smuseum%20in%20Varanasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1716459458334!5m2!1sen!2sin"
        width="600"
        height="550"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default MuseumMap

