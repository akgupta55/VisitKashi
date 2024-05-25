import React from "react";
import DetailCard from "../DetailCard/DetailCard";
import "./Details.css";

function Details({ divineInfo }) {
  return (
    <>
      <div className="divineInfo">
        {divineInfo.map((info) => {
          return (
            <DetailCard
              key={info.id}
              id={info.id}
              title={info.title}
              src={info.image}
              infor={info.info}
              Detailslocation={info.Address}
              time={info.Timings}
              famousFor={info.Famous_For}
              builtIn={info.Built_In}
              builtBy={info.Built_By}
              heading1={info.heading1}
              heading2={info.heading2}
              heading3={info.heading3}
            ></DetailCard>
          );
        })}
      </div>
    </>
  );
}

export default Details;
