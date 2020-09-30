import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";

const InfoCard = () => {
  return (
      <div className="info-card">
          <Flippy
              flipDirection="horizontal"
              flipOnHover={true} // default false
          >
              <FrontSide
                  style={{
                      backgroundColor: '#41669d',
                  }}
              >
                  <h1>Test</h1>
              </FrontSide>
              <BackSide
                  style={{ backgroundColor: '#175852'}}>
                  <h1>Test</h1>
              </BackSide>
          </Flippy>
      </div>
  )
};

export default InfoCard;