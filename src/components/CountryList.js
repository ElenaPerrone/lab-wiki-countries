import React from "react";
import countries from "../countries.json";
import { Link, Route } from "react-router-dom";
import CountryInfo from "../pages/CountryInfo";
import "./Countrylist.css";

function CountryList() {
  let countriesArray = countries;
  return (
    <div className="list-container">
      <div style={{ height: "90vh",width: "30vw", overflowY: "scroll" }}>
        {countriesArray.map((aCountry, index) => (
          <div key={index} className="col-5">
            <div className="list-group">
              {/* <a className="list-group-item list-group-item-action" href=""> */}
              <Link to={`/countrylist/countryinfo/${aCountry.ccn3}`}>
                {aCountry.name.official}
              </Link>
              {/* </a> */}
            </div>
          </div>
        ))}
      </div>
      <div className="info-container">
        <Route path="/countrylist/countryinfo/:ccn3" component={CountryInfo} />
      </div>
    </div>
  );
}

export default CountryList;
