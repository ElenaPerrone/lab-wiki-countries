import React from "react";
import countries from "../countries.json";

function BorderCountries(props) {
  let bCountries = [];
  props.countriesArr.forEach(country => {
    let chosen = countries.find(name => name.cca3 === country);
    bCountries.push(chosen);
  });

  return <ul>
      {bCountries.map(b => (
          <li key={b.cca3}>{b.name.common}</li>
      ))}
  </ul>
}

export default BorderCountries;
