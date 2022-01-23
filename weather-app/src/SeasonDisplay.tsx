import React from "react";
import {FC} from 'react';
import { Geolocation } from "./interface/geoLocation.interface";


class SeasonDisplay extends React.Component<Geolocation>{
    render(): React.ReactNode {
        return <div>{this.props.latitude}</div>
    }
}

export default SeasonDisplay;
