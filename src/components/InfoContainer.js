import React, {useEffect} from 'react';
import { Paper } from '@material-ui/core';
import '../styles/info-container.css';

const InfoContainer = props => {
    //todo, how to get rid of wrong casing from the start?
    const {
        AQI: aqi,
        Category: category,
        DateObserved: dateObserved,
        HourObserved: hourObserved,
        ReportingArea: reportingArea,
        StateCode: stateCode,
        zipCode,
    } = props;

    const { Name: name, Number: number } = category || {}; // default to empty object until data comes in

    const DataReading = () => {
        return (
            <div className="contents">
                {/*<h2>The air quality index for {reportingArea}, {stateCode} is</h2>*/}
                {/*<h1>{aqi}</h1>*/}
                {/*<p>This reading classifies as a level {number} ({name}). Hover over the cards below for more information.</p>*/}
                <h2>The air quality index for {reportingArea}, {stateCode} is</h2>
                <h1>69</h1>
                <p>This reading classifies as a level {number} ({name}). Hover over the cards below for more information.</p>
            </div>

        )
    }

    return (
      <div className="info-container">
          <Paper className="paper" elevation={3}>
              {/*<div className="contents">*/}
              {/*    <h2>The air quality index for {reportingArea}, {stateCode} is</h2>*/}
              {/*    <h1>{aqi}</h1>*/}
              {/*    <p>This reading classifies as a level {number} ({name}). Hover over the cards below for more information.</p>*/}
              {/*</div>*/}
              <DataReading />
          </Paper>
      </div>
  )
};

// AQI: 71
// Category:
//     Name: "Moderate"
//     Number: 2
// __proto__: Object
// DateObserved: "2020-09-28 "
// HourObserved: 16
// Latitude: 37.55
// LocalTimeZone: "PST"
// Longitude: -122.03
// ParameterName: "O3"
// ReportingArea: "Fremont"
// StateCode: "CA"

export default InfoContainer;