import { Grid, Input } from '@material-ui/core';
import React, { Component } from 'react';
import { Field } from 'redux-form';
import { renderTextField, renderSelectField, renderCheckbox, radioButton } from '../RenderFeilds/RenderFeildsAll';

class Address extends Component {
    render() {
        const { laneNo, roadNO, colony, pinCode, country, inputChangeHandler } = this.props;

        return (
            <>
                <Grid item xs={6} sm={6} md={6} lg={6}>
                    <Field type="number" name="laneNo" component={renderTextField} placeholder="LaneNo" label="LaneNo" />
                </Grid>

                <Grid item xs={6} sm={6} md={6} lg={6}>
                    <Field type="number" name="roadNO" component={renderTextField} placeholder="RoadNo" label="RoadNo" />
                </Grid>

                <Grid item xs={6} sm={6} md={6} lg={6}>
                    <Field type="text" name="colony" component={renderTextField} placeholder="Colony" label="Colony" />
                </Grid>

                <Grid item xs={6} sm={6} md={6} lg={6}>
                    <Field type="text" name="country" component={renderTextField} placeholder="Country" label="Country" />
                </Grid>
            </>
        );
    }
}

export default Address;
