import React, { Component } from 'react';

export class Result extends Component {
    constructor(props) {
        super(props);

        if (!this.props.result)
            return null;
    }
    render() {
        return (
            <React.Fragment>
                <div id='result' className="h4" style={{ margin: '10px' }}  />
            </React.Fragment>
        );
    }
}