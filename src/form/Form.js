import React, { Component } from "react";
import Address from "./Address";
import ParentsDetails from "./ParentsDetails";
import Habits from "./Habits";
// eslint-disable-next-line no-unused-vars
import axios from "axios";
import {  Container, Grid, Input } from "@material-ui/core";

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

    return (

      <Container maxWidth="sm" >

        <form onSubmit={this.submit} name="parentForm">
          <Grid item xs={6} sm={6} md={6} lg={6}>
          <Input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.inputChangeHandler}
            placeholder="FirstName"
          />
          </Grid>
          
          
          <Grid item xs={6} sm={6} md={6} lg={6}>
          <Input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.inputChangeHandler}
            placeholder="LastName"
          />
          </Grid>
          
          <Grid item xs={6} sm={6} md={6}lg={6}>
          <Input
            type="number"
            name="Age"
            value={this.state.Age}
            onChange={this.inputChangeHandler}
            placeholder="Age"
          />
          </Grid>

          <Grid item xs={6} sm={6} md={6}lg={6}>
          <Input
            type="text"
            name="userId"
            value={this.state.userId}
            onChange={this.inputChangeHandler}
            placeholder="UserId"
          />
          </Grid>

          <Grid item xs={6} sm={6} md={6}lg={6}>
          <Input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.inputChangeHandler}
            placeholder="Password"
          />
          </Grid>

          <Grid item xs={6} sm={6} md={6}lg={6}>
        <Address
          {...this.state.address}
          inputChangeHandler={this.inputChangeHandler}
          
        />
        </Grid>

          <Grid item xs={6} sm={6} md={6}lg={6}>
        <ParentsDetails
          {...this.state.parentsDetails}
          inputChangeHandler={this.inputChangeHandler}
        />
        
        </Grid>
        
          <Grid item xs={6} sm={6} md={6}lg={6}>
        <Habits
          {...this.state.habits}
          inputChangeHandler={this.inputChangeHandler}
          />
          </Grid>

          <Grid item xs={6} sm={6} md={6} lg={6}>
          
          {/* <Button variant="outlined" color="secondary" type="submit" name="submit">Submit</Button> */}
          
          </Grid>
         
          
          </form>
          </Container>
    );
  }
}

export default Form;
