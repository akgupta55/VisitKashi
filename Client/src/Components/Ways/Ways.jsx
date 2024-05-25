// import explore from "../../assets/explore"
import './Ways.css'
import picture1 from '../../assets/picture1.webp';
import picture2 from '../../assets/picture2.webp';
import picture3 from '../../assets/picture3.webp';
import picture5 from '../../assets/picture4.jpg';


const Ways = () => {
  return (
    <>
      <div className="ways-to-visit">
        <h1>See Kashi in a Variety of Ways</h1>
        <div className="wrapper">
        {/* {explore.map((item) => {
          return (
             <div key ={item.id} classNameName="card">
               <img src={item.image} alt="" />
               <h2>{item.name}</h2>
               <Link to={`/${item.name}`} classNameName="btn" > Explore </Link>
             </div>
          );
        })} */}
          <div className="card">
            <img src={picture1} />
            <div className="info">
              <h2>Culture & Heritage</h2>

              <a href="#" className="btn">
                Explore
              </a>
            </div>
          </div>

          <div className="card">
            <img src={picture3} />
            <div className="info">
              <h2>Subah-e-Banaras</h2>

              <a href="#" className="btn">
                Explore
              </a>
            </div>
          </div>
          
          <div className="card">
                <img src={picture2}/>
                <div className="info">
                    <h2>Nature & Adventure</h2>

                    <a href="#" className="btn">Explore</a>
                </div>
            </div>

            <div className="card">
                <img src={picture5}/>
                <div className="info">
                    <h2>Tent City</h2>

                    <a href="#" className="btn">
                    Explore
                    </a>
                </div>
            </div>
            
        </div>
      </div>
    </>
  );
};

export default Ways;
