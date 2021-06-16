import { Checkbox, Grid, Input } from '@material-ui/core';
import React, { Component } from 'react';
import { Field } from 'redux-form';
import { renderTextField, renderSelectField, renderCheckbox, radioButton } from '../RenderFeilds/RenderFeildsAll';
import validate from '../RenderFeilds/Validations';

class Habits extends Component {
    render() {
        const { smoking, alcohol, inputChangeHandler } = this.props;
        return (
            <Grid container spacing={3}>
                <Grid item xs={6} sm={6} md={6} lg={6}>
                    <Field type="checkbox" name="smoking" component={renderCheckbox} placeholder="Alcohol" label="Alcohol" />
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6}>
                    <Field type="checkbox" name="alcohol" component={renderCheckbox} placeholder="Smoking" label="Smoking" />
                </Grid>
            </Grid>
        );
    }
}

export default Habits;
