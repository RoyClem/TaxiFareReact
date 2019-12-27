import React from 'react';
import Alert from 'react-bootstrap/Alert';

export function Heading(props)  {
    return (
        <Alert variant="info" transition=''>
                <Alert.Heading>{props.headingText}</Alert.Heading>
        </Alert>
    );
}
