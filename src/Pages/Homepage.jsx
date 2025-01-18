import React from "react";
import Navbar from "../Components/Navbar";
import "./Homepage.css";

function Homepage(){
    return(
        <>
        
        <div className="Homepage">
        <Navbar/>
        <h2> Book Your Train Ticket</h2>
        <form>
            <div className="form-input">
                <label>From</label>
                <input type="text" id="from"placeholder="Enter the Boarding Station"/>

            </div>
            <div className="form-input">
                <label>To</label>
                <input type="text" id="to" placeholder="Enter the Last Station"/>
            </div>
            <div className="form-input">
                <label>Date</label>
                <input type="date" id="Date" placeholder="Enter the Date"/>
            </div>
            <button type="submit"> Search Trains</button>
        </form>

        </div>
        </>
    )
}

export default Homepage;