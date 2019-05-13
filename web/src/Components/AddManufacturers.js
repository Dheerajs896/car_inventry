import React, { Component } from "react";
import "../App.css";
import axios from "axios";

class AddManufacturers extends Component {
  constructor() {
    super();
    this.state = {
      loader: false,
      mName: ""
    };
  }

  eventhandler = event => {
    var name = event.target.name;
    var value = event.target.value;
    this.setState({ [name]: value });
  };
  submitHandler = event => {
    event.preventDefault();
    const mdata = {
      name: this.state.mName
    };
    axios.post("router/manufacturer", mdata).then(res => {
      if (res.data.status === "true") {
        alert(res.data.msg);
        document.getElementById("mForm").reset();
      } else {
        alert(res.data.msg);
      }
    });
  };
  render() {
    return (
      <div className="maindiv">
        <div className="container">
          <div className="row">
            <div className="col col-md-4" />
            <div className="col col-md-4">
              <form
                className="mainform"
                onSubmit={this.submitHandler}
                id="mForm"
              >
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="addManufacturr"
                    placeholder="Enter Manufacturer Details"
                    name="mName"
                    onChange={this.eventhandler}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
            <div className="col col-md-4" />
          </div>
        </div>
      </div>
    );
  }
}

export default AddManufacturers;
