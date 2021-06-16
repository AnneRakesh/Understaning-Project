import React from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

export const renderTextField = ({ label, input, meta: { touched, invalid, error }, ...custom }) => (
    <TextField label={label} placeholder={label} error={touched && invalid} helperText={touched && error} {...input} {...custom} />
);

export const renderCheckbox = ({ input, label }) => (
    <div>
        <FormControlLabel control={<Checkbox checked={input.value ? true : false} onChange={input.onChange} />} label={label} />
    </div>
);

export const radioButton = ({ input, ...rest }) => (
    <FormControl>
        <RadioGroup row {...input} {...rest}>
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
    </FormControl>
);

export const renderFromHelper = ({ touched, error }) => {
    if (!(touched && error)) {
        return;
    } else {
        return <FormHelperText>{touched && error}</FormHelperText>;
    }
};

export const renderSelectField = ({ input, label, meta: { touched, error }, children, ...custom }) => (
    <FormControl error={touched && error}>
        <InputLabel htmlFor="color-native-simple">{label}</InputLabel>
        <Select
            native
            {...input}
            {...custom}
            inputProps={{
                name: input.name,
                id: 'color-native-simple',
            }}
        >
            {children}
        </Select>
        {renderFromHelper({ touched, error })}
    </FormControl>
);
