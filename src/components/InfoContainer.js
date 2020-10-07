import React from 'react';
import { Paper } from '@material-ui/core';
import Loader from 'react-loader-spinner'
import '../styles/info-container.css';
import {convertTime} from "../utils/timeUtils";

const InfoContainer = props => {
    //todo, how to get rid of wrong casing from the start?
    const {
        AQI: aqi,
        Category: category,
        DateObserved: dateObserved,
        HourObserved: hourObserved,
        ReportingArea: reportingArea,
        StateCode: stateCode,
        isLoading,
        zipCodeEntered,
        noDataAvailable,
    } = props;

    const { Name: name, Number: number } = category || {}; // default to empty object until data comes in

    const Information = () => {
        if (noDataAvailable) {
            return (
                <div>
                    <h2>No data available for your ZIP code</h2>
                    <h3>Please try again with a different ZIP code close by in the same area</h3>
                </div>
            )
        }

        const convertedTime = convertTime(hourObserved);

        return (
            <div>
                <h2>The air quality index for {reportingArea}, {stateCode} is</h2>
                <h1>{aqi}</h1>
                <span className="date-time" style={{fontSize: "12px"}}>
                    On {dateObserved} at {convertedTime}
                </span>
                <p>This reading classifies as a level {number} ({name}). Hover over the cards below for more information.</p>
            </div>
        )
    }

    const DataReading = props => {
        const { zipCodeEntered } = props;
        return (
            <div className="contents">
                {
                    !zipCodeEntered ? <h2>Enter a ZIP code to get started</h2> : <Information />
                }
            </div>

        )
    }

    return (
      <div className="info-container">
          {isLoading ? <Loader
              type="Oval"
              height={200}
              width={200}
              /> :
          <Paper className="paper" elevation={10}>
               <DataReading  zipCodeEntered={zipCodeEntered}/>
          </Paper>}
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