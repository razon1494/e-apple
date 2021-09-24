import React from 'react';
import './Feature.css'
const Feature=(props) => {
    const {feature} = props


    return (
        <div>
            <small>{feature.description}: {feature.value}</small>

        </div>
    );
};

export default Feature;