import React from "react";
import "./DetailCard.css"
function DetailCard({
    id,
  title,
  src,
  infor,
  time,
  famousFor,
  builtIn,
  Detailslocation,
  builtBy,
  heading1,
  heading2,
  heading3

}) {
    return (
      <div className="detailCards">
        <div className="detailsFlex ">
          <div className="divineTitle">{id}</div>
          <div className="divineTitle">{title}</div>
        </div>{" "}
        <div className="divineImage">
          <img src={src} />
        </div>
        <div className="TempleInfo">{infor}</div>
        <div className="detailsFlex">
          <div>Location: </div>
          <div className=" HeadingDetails">{Detailslocation}</div>
        </div>
        <div className="detailsFlex">
          <div>Timings:</div>
          <div className=" HeadingDetails">{time}</div>
        </div>
        <div className="detailsFlex">
          <div>{heading1}</div>
          <div className=" HeadingDetails">{famousFor}</div>
        </div>
        <div className="detailsFlex">
          <div>{heading2}</div>
          <div className=" HeadingDetails">{builtIn}</div>
        </div>
        <div className="detailsFlex">
          <div>{heading3}</div>
          <div className=" HeadingDetails">{builtBy}</div>
        </div>
      </div>
    );
}
export default DetailCard