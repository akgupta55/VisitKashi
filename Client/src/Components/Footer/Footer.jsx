import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
          <div className="footer-content-left">
             <img className='logo' src={assets.logo} alt="" />
             <p>Experience the enchanting city of Varanasi like never before with our immersive website dedicated to showcasing its beauty and attractions. From the tranquil ghats along the Ganges River to the vibrant markets and historical landmarks, KashiWonders.com is your ultimate guide to this culturally rich destination.
</p>
             <div className="footer-social-icons">
               <img src={assets.facebook_icon} alt="" />
               <img src={assets.twitter_icon} alt="" />
               <img src={assets.linkedin_icon} alt="" /> 
             </div>
          </div>
          <div className="footer-content-right">
           <ul>
              <h2>Visit Kashi</h2>
              <li>Home</li>
              <li>Destination</li>
              <li>Hotels</li>
              <li>Things to do</li>
              <li>Events & Festivals</li>
              <li>Privacy policy</li>
           </ul>
          </div>
          <div className="footer-content-center">
            <h2>CONTACT US</h2>
            <ul>
                <li>+1-212-456-7890</li>
                <li>KashiWondersofficial@gmail.com</li>
            </ul>
          </div>
       </div>
     <hr />
     <p className="footer-copyright">Copyright 2024 @VisitKashi.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer