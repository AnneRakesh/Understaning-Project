import React, { Component } from "react";
import { connect } from "react-redux";
import { formInputActionCreater, formInputActionCreater_2 } from "../Store/Action/ActionCreater";
import { FORM_CHILD_INPUT_HANDLER, FORM_INPUT_HANDLER } from "../Store/Action/ActionTypes";
import Address from "./Address";
import Habits from "./Habits";
import ParentsDetails from "./ParentsDetails";

export class FormWithStore extends Component {

     inputChangeHandler = (event, child) => {
        if (child) {
            const payload={
                name: event.target.name,
                value: event.target.value,
                child: child
            };
            this.props.childFormOnchange(payload);
        } else {
            const payload={
                name: event.target.name,
                value: event.target.value,
                child: child
            };
            this.props.parentFormOnchange(payload);
        }
      };

  render() {
    const { firstName, lastName, Age, userId, password, address, parentsDetails, habits } = this.props;
    return (
      <div>
        <div>
          <form onSubmit={this.submit} name="parentForm">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={this.inputChangeHandler}
              placeholder="FirstName"
            />
            <br />
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={this.inputChangeHandler}
              placeholder="LastName"
            />
            <br />
            <input
              type="number"
              name="Age"
              value={Age}
              onChange={this.inputChangeHandler}
              placeholder="Age"
            />
            <br />
            <input
              type="text"
              name="userId"
              value={userId}
              onChange={this.inputChangeHandler}
              placeholder="UserId"
            />
            <br />
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.inputChangeHandler}
              placeholder="Password"
            />
            <br />
            <Address
              {...address}
             inputChangeHandler={this.inputChangeHandler}
            />
            <ParentsDetails
              {...parentsDetails}
             inputChangeHandler={this.inputChangeHandler}
            />
            <Habits
              {...habits}
              inputChangeHandler={this.inputChangeHandler}
            />
            <input type="submit" name="submit" />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {
        parentFormOnchange:(payload) => dispatch(formInputActionCreater(payload)),
        childFormOnchange:(payload) => dispatch(formInputActionCreater_2(payload)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FormWithStore);
