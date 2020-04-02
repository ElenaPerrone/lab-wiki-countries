import React from "react";
import countries from "../countries.json";

function CountryInfo(props) {
  let theCountry = countries.find(
    country => country.ccn3 === props.match.params.ccn3
  );
  console.log("CountryInfo -> theCountry");
  return (
    <div>
      <div className="col-7">
        <h1>{theCountry.name.official}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: "30%" }}>Capital</td>
              <td>{theCountry.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {theCountry.area}
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {theCountry.borders.map(borderCountry => (
                    <li key={borderCountry}>{borderCountry}</li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CountryInfo;
