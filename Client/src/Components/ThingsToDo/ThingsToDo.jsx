import "./ThingsToDo.css";
// import explore from "../../assets/explore"
import sarnath from '../../assets/sarnath.jpg'
import morningboat from '../../assets/morningboat.jpg'
import gangaArti from '../../assets/gangaArti.jpg'
import kashiVishwanath from '../../assets/kashiVishwanath.jpg'


const ThingsToDo = () => {
  return (
    <>
      <div className="things-to-do">
        <h1>What To Experience</h1>
        <div class="wrapper">
        
        {/* {explore.map((item) => {
          return (
             <div key ={item.id} className="card">
               <img src={item.image} alt="" />
               <h2>{item.name}</h2>
               <Link to={`/${item.name}`} className="btn" > Explore </Link>
             </div>
          );
        })}  */}

          <div class="card">
            <img src={gangaArti} />
             <div class="info">
              <h2>Culture & Heritage</h2>
              <a href="#" class="btn">
                Explore
              </a>
            </div>
          </div>

          <div class="card">
            <img src={morningboat} />
             <div class="info">
              <h2>Culture & Heritage</h2>
              <a href="#" class="btn">
                Explore
              </a>
            </div>
          </div>

          <div class="card">
            <img src={kashiVishwanath} />
             <div class="info">
              <h2>Culture & Heritage</h2>
              <a href="#" class="btn">
                Explore
              </a>
            </div>
          </div>

          <div class="card">
            <img src={sarnath} />
             <div class="info">
              <h2>Culture & Heritage</h2>
              <a href="#" class="btn">
                Explore
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default ThingsToDo;
