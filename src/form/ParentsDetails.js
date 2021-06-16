import { Grid, Input } from '@material-ui/core';
import React, { Component } from 'react';
import { Field } from 'redux-form';
import { renderTextField, renderSelectField, renderCheckbox, radioButton } from '../RenderFeilds/RenderFeildsAll';

class ParentsDetails extends Component {
    render() {
        const { fatherName, motherName, guardianName, inputChangeHandler } = this.props;
        return (
            <>
                <Grid item xs={6} sm={6} md={6} lg={6}>
                    <Field type="text" name="fatherName" component={renderTextField} placeholder="Father Name" label="Father Name" />
                </Grid>

                <Grid item xs={6} sm={6} md={6} lg={6}>
                    <Field type="text" name="motherName" component={renderTextField} placeholder="Mother Name" label="Mother Name" />
                </Grid>

                <Grid item xs={6} sm={6} md={6} lg={6}>
                    <Field type="text" name="guardianName" component={renderTextField} placeholder="Guardian Name" label="Guardian Name" />
                </Grid>
            </>
        );
    }
}

export default ParentsDetails;
