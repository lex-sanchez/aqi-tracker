const aqiInformation = [
    {
        aqiLevel: "Good",
        valuesOfIndex: "0 to 50",
        description: "Air quality is satisfactory, and air pollution poses little or no risk.",
        color: "#0F921E"
    },
    {
        aqiLevel: "Moderate",
        valuesOfIndex: "51 to 100",
        description: "Air quality is acceptable. However, there may be a risk for some people, particularly those who are unusually sensitive to air pollution.",
        color: "#FBFD00"
    },
    {
        aqiLevel: "Unhealthy for Sensitive groups",
        valuesOfIndex: "101 to 150",
        description: "Members of sensitive groups may experience health effects. The general public is less likely to be affected.",
        color: "#ea8825"
    },
    {
        aqiLevel: "Unhealthy",
        valuesOfIndex: "151 to 200",
        description: "Some members of the general public may experience health effects; members of sensitive groups may experience more serious health effects.",
        color: "#FF1A00"
    },
    {
        aqiLevel: "Very Unhealthy",
        valuesOfIndex: "201 to 300",
        description: "Health alert: The risk of health effects is increased for everyone.",
        color: "#c846d0"
    },
    {
        aqiLevel: "Hazardous",
        valuesOfIndex: "301 and higher",
        description: "Health warning of emergency conditions: everyone is more likely to be affected.",
        color: "#901600"
    },
];

export default aqiInformation;