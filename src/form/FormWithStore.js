import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formInputActionCreator, formInputActionCreator_2 } from '../Store/Action/ActionCreator';
import Address from './Address';
import Habits from './Habits';
import ParentsDetails from './ParentsDetails';
import { Button, Container, Grid, Input } from '@material-ui/core'; 
// import { Field, reduxForm } from 'redux-form'

export class FormWithStore extends Component {
    inputChangeHandler = (event, child) => {
        if (child) {
            const payload = {
                name: event.target.name,
                value: event.target.value,
                child: child,
            };
            this.props.childFormOnchange(payload);
        } else {
            const payload = {
                name: event.target.name,
                value: event.target.value,
                child: child,
            };
            this.props.parentFormOnchange(payload);
        }
    };

    render() {
        const { firstName, lastName, Age, userId, password, address, parentsDetails, habits } = this.props;
        return (
            <Container maxWidth="sm">
                <form onSubmit={this.submit} autoComplete="off">
                    <Grid container>
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                            <Input type="text" name="firstName" value={firstName} onChange={this.inputChangeHandler} placeholder="FirstName" />
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                            <Input type="text" name="lastName" value={lastName} onChange={this.inputChangeHandler} placeholder="LastName" />
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                            <Input type="number" name="Age" value={Age} onChange={this.inputChangeHandler} placeholder="Age" />
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                            <Input type="text" name="userId" value={userId} onChange={this.inputChangeHandler} placeholder="UserId" />
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                            <Input type="password" name="password" value={password} onChange={this.inputChangeHandler} placeholder="Password" />
                        </Grid>

                        <Address {...address} inputChangeHandler={this.inputChangeHandler} />

                        <ParentsDetails {...parentsDetails} inputChangeHandler={this.inputChangeHandler} />

                        <Habits {...habits} inputChangeHandler={this.inputChangeHandler} />

                        {/* <input type="submit" name="submit" /> */}
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                            <Button variant="outlined" size="large" color="primary" type="submit" name="submit">
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        );
    }
}

// FormWithStore = reduxForm({
//     // a unique name for the form
//     form: ''
//   })(ContactForm)

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {
        parentFormOnchange: (payload) => dispatch(formInputActionCreator(payload)),
        childFormOnchange: (payload) => dispatch(formInputActionCreator_2(payload)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormWithStore);
