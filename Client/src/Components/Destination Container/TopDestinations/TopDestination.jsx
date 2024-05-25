import React from 'react'
import DestinationCard from './DestinationCard';
import "./TopDestination.css"

function TopDestination({placeList}) {
  return (
      <div className="topDestination">
          {placeList.map((list) => {
              return <DestinationCard key={list.id} src={list.src} title={list.title} rate={list.rate} people={list.people} type={list.type} location={list.location} price={list.price}></DestinationCard>;
              
          })}
    </div>
  )
}

export default TopDestination