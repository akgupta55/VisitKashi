import React from 'react'

function GhatsMap() {
  return (
    <div className="responsive-map">
      <h1 className="mapHeading">Kashi Map</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d28855.371918887406!2d83.00011551647256!3d25.306841706888232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sghats%20of%20varanasi!5e0!3m2!1sen!2sin!4v1716395642690!5m2!1sen!2sin"
        width="600"
              height="550"
    
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  );
}

export default GhatsMap