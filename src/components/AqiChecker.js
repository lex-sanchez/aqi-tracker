import React from 'react';
import axios from '../utils/api';
import InfoContainer from "./InfoContainer";
import '../styles/aqi-checker.css';

const API_KEY = 'C469D269-9140-4F84-9F9D-7CED9718DAB5';
const API_BASE_URL = '/aq/observation/zipCode/current';

export class AqiChecker extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            zipCode: null,

        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.getAqiData = this.getAqiData.bind(this);
    }

    async getAqiData(zipCode) {
        console.log('getting data');

        try {
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

            const mostRecentData = data[0];

            this.setState(prevState => Object.assign(prevState, mostRecentData));
            console.log(mostRecentData);

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
        return (
            <div className="aqi-checker">
                <div className="data-inputs">
                    <label>
                        ZIP code:
                        <input type="text" name="name" onChange={e => this.handleInputChange(e)}/>
                    </label>
                    <button onClick={() => this.getAqiData(this.state.zipCode)}>Get data</button>
                </div>
                <InfoContainer {...props}/>
            </div>
        )
    }
}