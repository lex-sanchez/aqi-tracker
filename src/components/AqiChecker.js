import React from 'react';
import { Input, TextField, Button, withStyles } from '@material-ui/core';
import axios from '../utils/api';
import InfoContainer from "./InfoContainer";
import InfoCard from "./InfoCard";
import aqiInformation from "../utils/aqiInformation";
import '../styles/aqi-checker.scss';

const API_KEY = 'C469D269-9140-4F84-9F9D-7CED9718DAB5';
const API_BASE_URL = '/aq/observation/zipCode/current';

export class AqiChecker extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            zipCode: null,
            isLoading: false,
            zipCodeEntered: false,
            noDataAvailable: false,
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.getAqiData = this.getAqiData.bind(this);
    }

    async getAqiData(zipCode) {
        try {
            this.setState({ isLoading: true });
            const response = await axios.get(API_BASE_URL, {
                params: {
                    zipCode: zipCode,
                    format: "application/json",
                    distance: "10",
                    api_key: API_KEY
                },
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            });

            const { data } = response;
            console.log(response);
            const mostRecentData = data[0];

            if (data.length === 0) {
                this.setState({ noDataAvailable: true });
            } else {
                this.setState(prevState => Object.assign(prevState, mostRecentData));
            }
            this.setState({
                isLoading: false,
                zipCodeEntered: true,
            })
        } catch(e) {
            console.log(`error`, e);
        }
    }

    handleInputChange(e) {
        this.setState({
            zipCode: e.target.value
        })
    }

    render() {
        const props = {...this.state};
        console.log(props);
        return (
            <div className="aqi-checker">
                <InfoContainer {...props} />
                <div className="data-inputs">
                    <TextField
                        id="zip-code-field"
                        label="ZIP Code"
                        variant="outlined"
                        onChange={e => this.handleInputChange(e)}
                    />
                    <Button
                        style={{marginTop: "10px"}}
                        variant="outlined"
                        color="primary"
                        onClick={() => this.getAqiData(this.state.zipCode)}
                    >
                        Get Data
                    </Button>
                </div>
                <div className="info-cards">
                    {aqiInformation.map(info => {
                        return (
                                <InfoCard {...info} />
                        )
                    })}
                </div>
            </div>
        )
    }
}