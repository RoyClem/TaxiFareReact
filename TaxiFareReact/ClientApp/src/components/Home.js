import React, { Component } from 'react';
import Button               from 'react-bootstrap/Button';
import { Heading }          from './Heading';
import { Vendor }           from './Vendor';
import { RateCodes }        from './RateCodes';
import { PaymentTypes }     from './PaymentTypes';
import { NumPassengers }    from './NumPassengers';
import { TripDistance }     from './TripDistance';
import { Result }           from './Result';
import '../site.css';

const axios = require('axios').default;

export class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            vendor: "CMT",
            vendors: [],
            rate: "",
            rates: [],
            payType:"CRD",
            payTypes: [],
            numPassenger: "1",
            numPassengers: [],
            tripDis: "5",
            result: ""
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

        //axios.get('api/SampleData/LoadData')
        //    .then(response => {
        //        this.setState({
        //            vendors: response.data.vendors,
        //            rates: response.data.rates,
        //            payTypes: response.data.payTypes,
        //            numPassengers: response.data.numPass
        //        });
        //    });
    }

    // handlers passed to sub-components
    handleChangeVendor          = e => this.setState({ vendor: e.target.value });
    handleChangeRate            = e => this.setState({ rate: e.target.value });
    handleChangePayType         = e => this.setState({ payType: e.target.value });
    handleChangeNumPassenger    = e => this.setState({ numPassenger: e.target.value });
    handleChangeTripDis         = e => this.setState({ tripDis: e.target.value });

    tripDisHandler = (event) => {
        this.setState({ tripDis: event.target.value });
    }

    getPrediction = () => {
        var self = this;
        axios.post('/api/SampleData/GetPrediction', {
            VendorId:       this.state.vendor,
            RateCode:       this.state.rate,
            PaymentType:    this.state.payType,
            PassengerCount: this.state.numPassenger,
            TripDistance:   this.state.tripDis
         })
        .then(function (response) {
            self.setState({ result: response.data });
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
                <Heading headingText='NY Taxi Fare Prediction'/>
            <div>
                <Vendor        vendors={this.state.vendors}             onChangeValue={this.handleChangeVendor} />
                <RateCodes     rates={this.state.rates}                 onChangeValue={this.handleChangeRate} />
                <PaymentTypes  payTypes={this.state.payTypes}           onChangeValue={this.handleChangePayType} />
                <NumPassengers numPassengers={this.state.numPassengers} onChangeValue={this.handleChangeNumPassenger} />
                <TripDistance  tripDis={this.state.tripDis}             onChangeValue={this.handleChangeTripDis} />
                <Button style={{ marginLeft: '10px' }}  variant='primary' size='sm' onClick={this.getPrediction} >Submit</Button>
              </div>
              <Result result={this.state.result}  />
       </div>
    );
  }
}
