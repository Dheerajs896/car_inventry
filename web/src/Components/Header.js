import React from "react";
import "../App.css";
// import { Router, Link } from "react-router-dom";
import { Route, Switch, Link } from "react-router-dom";
import AddManufacturers from "./AddManufacturers";
import viewManufacturers from "./ViewManufacturers";

const Header = () => {
  return (
    <div className="Header Container">
      <div className="sidebar">
        <h1>Car101</h1>
        <ul className="active">
          Manufacturers
          <li>
            <Link to="/AddManufacturers">Add Manufacturers</Link>
          </li>
          <li>
            <Link to="/ViewManufacturers">View Manufacturers</Link>
          </li>
        </ul>
        <ul>
          Model
          <li>Add Model</li>
          <li>View Model</li>
        </ul>
        <ul>
          Show Details
          <li>Add Model</li>
        </ul>
      </div>
      <Switch>
        <Route path="/AddManufacturers" exact component={AddManufacturers} />
        <Route path="/viewManufacturers" exact component={viewManufacturers} />
      </Switch>
    </div>
  );
};

export default Header;
