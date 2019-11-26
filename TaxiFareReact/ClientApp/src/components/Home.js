import React, { Component, Button } from 'react';
import '../home.css';
const axios = require('axios').default;

export class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            vendor : "CMT",
            vendors: [],
            rate: "0",
            rates: [],
            payType:"CRD",
            payTypes: [],
            numPassenger: "1",
            numPassengers: [],
            tripDis: "5"
        };

        fetch('api/SampleData/LoadData')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    vendors: data.vendors,
                    rates: data.rates,
                    payTypes: data.payTypes,
                    numPassengers: data.numPass
                });
            });
    }

    tripDisHandler = (event) => {
        this.setState({ tripDis: event.target.value });
    }

    getPrediction = () =>{
        axios.post('/api/SampleData/GetPrediction', {
            VendorId:       this.state.vendor,
            RateCode:       this.state.rate,
            PaymentType:    this.state.payType,
            PassengerCount: this.state.numPassenger,
            TripDistance:   this.state.tripDis
         })
         .then(function (response) {
            document.getElementById("result").innerHTML = "Predicted Fare Amount is: " + response.data;
            console.log(response);
         })
        .catch(function (error) {
             console.log(error);
        });
    }

  render() {
      return (
      <div>
            <div className="h1" style={{ margin: '10px' }} >NY Taxi Fare Prediction</div>
            <hr />
            <div>
                  <label><b>Vendor Id</b></label>
                  <select name="vendor" onChange={(e) => this.setState({ vendor: e.target.value })}>
                      {this.state.vendors.map((v) => {
                        return  <option key={v} value={v}>{v}</option>;
                      })}
                  </select>
                  <label><b>Rate Codes</b></label>
                  <select name="rateCodes" onChange={(e) => this.setState({ rate: e.target.value })}>
                      {this.state.rates.map((r) => {
                          return <option key={r} value={r}>{r}</option>;
                      })}
                  </select>
                  <label><b>Payment Types</b></label>
                  <select name="payTypes" onChange={(e) => this.setState({ payType: e.target.value })}>
                      {this.state.payTypes.map((p) => {
                          return <option key={p} value={p}>{p}</option>;
                      })}
                  </select>
                    <label><b>Number Passengers</b></label>
                    <select name="numberPassengers" onChange={(e) => this.setState({ numPassenger: e.target.value })}>
                        {this.state.numPassengers.map((p) => {
                            return <option key={p} value={p}>{p}</option>;
                        })}
                  </select>
                  <label><b>Trip Distance</b></label>
                  <input type="text" className="text-right" value={this.state.tripDis} onChange={this.tripDisHandler} placeholder="in Miles" id="tripDis" />
                  &nbsp;
                  <button type="button" id="btnSubmit" className="btn btn-sm btn-primary" onClick={this.getPrediction}>Submit</button>
              </div>
              <div className="clearfix" />
              <div id='result' className="h4" style={{ margin: '10px' }} />

       </div>
    );
  }
}
