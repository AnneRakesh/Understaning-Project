import React, { Component } from "react";

class ParentsDetails extends Component {
  
  render() {
    const { fatherName, motherName, guardianName, inputChangeHandler } =
      this.props;
    return (
      <div>
       
          <input
            type="text"
            name="fatherName"
            value={fatherName}
            onChange={(e) => inputChangeHandler(e, "parentsDetails")}
            Placeholder="FatherName"
          />{" "}
          <br />
          <input
            type="text"
            name="motherName"
            value={motherName}
            onChange={(e) => inputChangeHandler(e, "parentsDetails")}
            Placeholder="MotherName"
          />
          <br />
          <input
            type="text"
            name="guardianName"
            value={guardianName}
            onChange={(e) => inputChangeHandler(e, "parentsDetails")}
            Placeholder="GuardianName"
          />{" "}
          <br />
          
        
      </div>
    );
  }
}

export default ParentsDetails;
