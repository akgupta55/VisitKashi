import { Link } from "react-router-dom";
import "./Menubar.css";

import { FaPaperPlane } from "react-icons/fa";

const Menubar = () => {
  return (
    <>
      <div className="menubar">
        <h1>Where to go?</h1>
        <div className="facilities">
          <div className="items">
            <FaPaperPlane />
            <p>
              <Link className="sign-btn" to="/destination">
                {" "}
                Destinations
              </Link>
              {/* Destinations */}
            </p>
          </div>
          <div className="items">
            <svg
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
              className="d Vb egaXP UmNoP"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.252 5.405c0-.47.38-.85.85-.85h15.624c.47 0 .85.38.85.85v6.649c.68.562 1.22 1.393 1.22 2.544v4.847h-1.5V17.77H3.704v1.674h-1.5V14.57c.025-.654.304-1.588 1.05-2.35V5.404zm2.635 5.587a6.6 6.6 0 01.836-.052h3.896c-.502-.482-1.31-.93-2.433-.93-1.09 0-1.83.466-2.3.982zm7.389-.052h4.468l.036.004a5.2 5.2 0 01.537.082 2.351 2.351 0 00-.222-.233c-.447-.41-1.18-.783-2.254-.783-1.078 0-1.75.273-2.18.584a2.396 2.396 0 00-.385.346zm5.8-1.282c-.726-.652-1.812-1.148-3.235-1.148-1.347 0-2.338.347-3.06.868-.342.247-.61.525-.821.802-.736-.861-2.005-1.67-3.774-1.67-1.629 0-2.733.712-3.434 1.503V6.055h14.324v3.603zM3.703 16.27h16.594v-1.673c0-.703-.355-1.188-.888-1.545-.56-.374-1.263-.561-1.74-.613H6.724c-1.118 0-1.81.317-2.237.678-.57.482-.765 1.123-.783 1.496v1.657z"
              ></path>
            </svg>
            <p>
              <Link className="sign-btn" to="/hotels">
                Hotels
              </Link>
            </p>
          </div>

          <div className="items">
            <svg
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
              className="d Vb egaXP UmNoP"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.578 4.891L16.25 2.22l1.06 1.06-2.671 2.672c-.679.679-1.055 1.462-1.12 2.199-.043.5.054 1.003.327 1.472L18.75 4.72l1.06 1.06-4.906 4.906c.473.281.974.387 1.466.354.718-.047 1.467-.394 2.096-1.023A869.223 869.223 0 0021.02 7.45l.226-.228h.001l1.066 1.055-.227.23a983.524 983.524 0 01-2.56 2.57c-.849.849-1.927 1.384-3.057 1.459a4.026 4.026 0 01-2.647-.768L12.591 13l7.72 7.72-1.061 1.06-5.97-5.97-3 3-1.75-1.75-4.72 4.72-1.06-1.06L7.47 16 3.077 11.61a4.75 4.75 0 010-6.718l.702-.702 7.75 7.75 1.232-1.232a3.971 3.971 0 01-.737-2.686c.1-1.147.67-2.246 1.553-3.13zm-1.359 9.86L3.808 6.338a3.25 3.25 0 00.33 4.21l6.142 6.14 1.94-1.939z"
              ></path>
            </svg>
            <p>
              <Link className="sign-btn" to="/restaurants">
                Restaurants{" "}
              </Link>
              {/* Restaurants */}
            </p>
          </div>

          <div className="items">
            <svg
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
              className="d Vb egaXP UmNoP"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.25 5.25h19.5v4.454l-.536.16a2.752 2.752 0 000 5.272l.536.16v4.454H2.25v-4.454l.536-.16a2.752 2.752 0 000-5.272l-.536-.16V5.25zm1.5 1.5v1.876a4.25 4.25 0 010 7.748v1.876h16.5v-1.876a4.25 4.25 0 010-7.748V6.75H3.75z"
              ></path>
              <path d="M12 15a1 1 0 110 2 1 1 0 010-2zM12 11.5a1 1 0 110 2 1 1 0 010-2zM12 8a1 1 0 110 2 1 1 0 010-2z"></path>
            </svg>
            <p>
              <Link className="sign-btn" to="/thingToDo">
                Things to do
              </Link>
            </p>
          </div>

          <div className="items">
            <svg
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
              className="d Vb egaXP UmNoP"
            >
              <path d="M3 21.2h-.75v.75H3v-.75zm0-12l-.416-.624-.334.223V9.2H3zm9-6l.416-.624L12 2.299l-.416.277L12 3.2zm9.01 6h.75v-.402l-.334-.222-.416.624zm0 12v.75h.75v-.75h-.75zm-17.26 0v-12h-1.5v12h1.5zM3.416 9.824l9-6-.832-1.248-9 6 .832 1.248zm8.168-6l9.01 6 .832-1.248-9.01-6-.832 1.248zM20.26 9.2v12h1.5v-12h-1.5zm.75 11.25H3v1.5h18.01v-1.5zM18 12.96h-6.99v1.5H18v-1.5zm-7.74.75c0 .69-.56 1.25-1.25 1.25v1.5a2.75 2.75 0 002.75-2.75h-1.5zm-1.25 1.25c-.69 0-1.25-.56-1.25-1.25h-1.5a2.75 2.75 0 002.75 2.75v-1.5zm-1.25-1.25c0-.69.56-1.25 1.25-1.25v-1.5a2.75 2.75 0 00-2.75 2.75h1.5zm1.25-1.25c.69 0 1.25.56 1.25 1.25h1.5a2.75 2.75 0 00-2.75-2.75v1.5zm5.24 1.25v3h1.5v-3h-1.5z"></path>
            </svg>
            <p>
              <Link className="sign-btn" to="/eventsFestivals">
                Events & Festivals
              </Link>
            </p>
          </div>
        </div>
        <div className="searchPlace">
          <input
            type="search"
            placeholder="🔍 Places to go, things to do, hotels...."
          />
          <button>Search</button>
        </div>
      </div>
    </>
  );
};

export default Menubar;
