import React, { Component } from "react";
import Address from "./Address";
import ParentsDetails from "./ParentsDetails";
import Habits from "./Habits";
import axios from "axios";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      Age: "",
      userId: "",
      password: "",
      address: {
        laneNo: "",
        roadNO: "",
        colony: "",
        pinCode: "",
        country: "",
      },
      parentsDetails: {
        fatherName: "",
        motherName: "",
        guardianName: "",
      },
      habits: {
        smoking: false,
        alcohol: false,
      },
    };
  }

  submit = (e) => {
    console.log(e);
    e.preventDefault();
  };

  inputChangeHandler = (event, child) => {
    if (child) {
      this.setState({
        [child]: {
          ...this.state[child],
          [event.target.name]: event.target.value,
        },
      });
    } else {
      this.setState({ [event.target.name]: event.target.value });
    }
  };
  
  // componentDidMount() {
  //   axios
  //     .post("https://jsonplaceholder.typicode.com/todos/1")
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       alert("There's Some error");
  //     });
  // }

  render() {
    {
      console.log(this.state);
    }
    return (
      <div>
        <form onSubmit={this.submit} name="parentForm">
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.inputChangeHandler}
            placeholder="FirstName"
          />
          <br />
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.inputChangeHandler}
            placeholder="LastName"
          />
          <br />
          <input
            type="number"
            name="Age"
            value={this.state.Age}
            onChange={this.inputChangeHandler}
            placeholder="Age"
          />
          <br />
          <input
            type="text"
            name="userId"
            value={this.state.userId}
            onChange={this.inputChangeHandler}
            placeholder="UserId"
          />
          <br />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.inputChangeHandler}
            placeholder="Password"
          />
          <br />
          
        
        <Address
          {...this.state.address}
          inputChangeHandler={this.inputChangeHandler}
          
        />
        <ParentsDetails
          {...this.state.parentsDetails}
          inputChangeHandler={this.inputChangeHandler}
          
        />
        <Habits
          {...this.state.habits}
          inputChangeHandler={this.inputChangeHandler}
          />
          <input type="submit" name="submit" />
          </form>
      </div>
    );
  }
}

export default Form;
