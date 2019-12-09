import React from 'react';
import ReactDOM from 'react-dom';
import { Vendor } from '../components/Vendor';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Vendor vendors={['one', 'two']} />, div);
});