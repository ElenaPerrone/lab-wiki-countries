import React from "react";
import "./App.css";
// import countries from './countries.json'
import Navbar from "./components/Navbar";
import CountryList from "./components/CountryList";
import CountryInfo from "./pages/CountryInfo";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CountryList />
      <Switch>
        <Route path="/countryinfo" component={CountryInfo} />
      </Switch>
    </div>
  );
}

export default App;
