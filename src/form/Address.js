import React, { Component } from "react";

class Address extends Component {
  

  render() {
    const {
      laneNo,
      roadNO,
      colony,
      pinCode,
      country,
      inputChangeHandler,
      
    } = this.props;

    return (
      <div>
        
          <input
            type="number"
            name="laneNo"
            value={laneNo}
            onChange={(e) => inputChangeHandler(e, "address")}
            placeholder="LaneNo"
          />
          <br />
          <input
            type="number"
            name="roadNO"
            value={roadNO}
            onChange={(e) => inputChangeHandler(e, "address")}
            placeholder="RoadNo"
          />
          <br />
          <input
            type="text"
            name="colony"
            value={colony}
            onChange={(e) => inputChangeHandler(e, "address")}
            placeholder="Colony"
          />
          <br />
          <input
            type="number"
            name="pinCode"
            value={pinCode}
            onChange={(e) => inputChangeHandler(e, "address")}
            placeholder="PinCode"
          />
          <br />
          <input
            type="text"
            name="country"
            value={country}
            onChange={(e) => inputChangeHandler(e, "address")}
            placeholder="Country"
          />{" "}
          <br />
    
      </div>
    );
  }
}

export default Address;
