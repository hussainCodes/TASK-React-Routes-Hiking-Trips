import React, { useState } from "react";
import tripsData from "../tripsData";
import SearchBar from "./SearchBar";
import TripItem from "./TripItem";
import Nav from "./Nav";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function TripsList() {
  const [query, setQuery] = useState("");
  const { difficulty } = useParams();
  const trips = tripsData
    .filter((trip) =>
      trip.name.toLowerCase().includes(query.toLowerCase()) &&
      difficulty == "all"
        ? true
        : trip.difficulty == difficulty
        ? true
        : false
    )
    .map((trip, index) => <TripItem trip={trip} key={index} />);

  return (
    <>
      <Nav />
      <section className="page-section portfolio" id="portfolio">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
            Explore Trips
          </h2>
          <br />
          <SearchBar setQuery={setQuery} />
          <center>
            <Link to={"/TripsList/easy"} className="btn btn-primary btn-xl">
              Easy
            </Link>
            <Link to={"/TripsList/moderate"} className="btn btn-primary btn-xl">
              Moderate
            </Link>
            <Link to={"/TripsList/hard"} className="btn btn-primary btn-xl">
              Hard
            </Link>
          </center>
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>

          <div className="row justify-content-center">{trips}</div>
        </div>
      </section>
    </>
  );
}

export default TripsList;
