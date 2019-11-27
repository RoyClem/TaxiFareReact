import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';

export class Heading extends Component {

  render() {
      return (
        <Alert variant="info" transition=''>
              <Alert.Heading>{this.props.headingText}</Alert.Heading>
        </Alert>
    );
  }
}