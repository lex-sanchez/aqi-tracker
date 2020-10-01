import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";

const InfoCard = (props) => {
    const { aqiLevel, valuesOfIndex, description, color } = props;
    const styles = {
        backgroundColor: color,
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    };

  return (
          <Flippy
              flipDirection="horizontal"
              flipOnHover={true} // default false
              style={{ width: '150px', height: '200px' }}
          >
              <FrontSide
                  style={styles}
              >
                  <div>
                      <h2>{aqiLevel}</h2>
                      <h3>{valuesOfIndex}</h3>
                  </div>
              </FrontSide>
              <BackSide
                  style={styles}>
                  <p>{description}</p>
              </BackSide>
          </Flippy>
  )
};

export default InfoCard;