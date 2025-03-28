import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import TrainList from "../Components/TrainList";
import TrainCard from "../Components/TrainCard";

import "./Homepage.css";

function Homepage() {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="homepage">
        <Navbar />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="from">From</label>
            <input
              type="text"
              id="from"
              placeholder="Enter the Boarding Station"
              value={formData.from}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="to">To</label>
            <input
              type="text"
              id="to"
              placeholder="Enter the Last Station"
              value={formData.to}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              placeholder="Enter the Date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
          <button type="submit"> Search Trains</button>
          <TrainList />
        </form>
      </div>
    </>
  );
}

export default Homepage;
