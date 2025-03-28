import React, { useEffect, useState } from "react";
import TrainCard from "./TrainCard";
/*import TrainData from "../data/TrainData.json"; */

const TrainList = () => {
  const [trains, setTrains] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  /* console.log("TrainList");*/

  useEffect(() => {
    fetch("/TrainData.json")
      .then((response) => {
        console.log("response.json");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setTrains(data || TrainData); // Use fetched data, fallback to TrainData if empty
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error:", error); // Log the error for debugging
        setTrains(TrainData); // Fallback to local data on error
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading trains...</div>;
  }

  if (error) {
    return <div>Error fetching trains: {error.message}</div>;
  }

  return (
    <div>
      {trains.length > 0 ? (
        trains.map((train) => <TrainCard key={train.id} train={train} />)
      ) : (
        <div>No trains available</div>
      )}
    </div>
  );
};

export default TrainList;
