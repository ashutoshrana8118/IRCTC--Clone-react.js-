import React from "react";
import "./TrainCard.css";

const TrainCard = ({ train }) => {
  if (!train) {
    return <div>No train data available</div>; // Fallback if train is undefined
  }
  return (
    <>
      <div className="trainCard">
        <h3>{train.name}</h3>
        <p>
          From: {train.from} To: {train.to}
        </p>
        <p>Departure Time:{train.departureTime} </p>
        <p> Arrival Time; {train.arrivalTime}</p>
        <p>Fare : {train.fare}</p>
        <button>Book Now</button>
      </div>
    </>
  );
};

export default TrainCard;
