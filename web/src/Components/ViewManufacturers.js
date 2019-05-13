import React, { Component } from "react";
import "../App.css";
import axios from "axios";
class ViewManufacturers extends Component {
  constructor() {
    super();
    this.state = {
      manufacturerData: []
    };
  }
  componentWillMount() {
    axios.get("router/manufacturer").then(res => {
      if (res.data.status === "true") {
        const dataa = res.data;
        this.setState({ manufacturerData: dataa });
        console.log(dataa);
      } else {
        alert(res.data.msg);
      }
    });
  }

  render() {
    return (
      <div className="maindiv">
        <h1>View Manufacturers Details</h1>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Sr No.</th>
                <th>Manufacturers Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.manufacturerData.map(row => (
                <tr key={row._id}>
                  <td>{row._id}</td>
                  <td>{row.name}</td>
                  <td />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ViewManufacturers;
