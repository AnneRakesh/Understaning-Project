import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { formInputActionCreator, formInputActionCreator_2 } from '../Store/Action/ActionCreator';
import Address from './Address';
import Habits from './Habits';
import ParentsDetails from './ParentsDetails';
import { Button, Container, Grid, Input } from '@material-ui/core';
import { Field, reduxForm } from 'redux-form';
import { renderTextField, renderSelectField, renderCheckbox, radioButton } from '../RenderFeilds/RenderFeildsAll';
import validate from '../RenderFeilds/Validations';
import './ReduxForm.css';
import { Posts } from '../services/Posts';

export class FormWithreduxForm extends Component {
    postService = new Posts();

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            isFormOpen: false,
            formData: {
                title: '',
                body: '',
                userId: 1,
            },
        };
    }
    submit = (e) => {
        console.log(e);
        e.preventDefault();
    };

    componentDidMount() {
        this.postService.getAllPost('/posts').then((res) => {
            this.setState({ posts: res });
        });
    }

    savePost = (value) => {
        this.postService.createPost('/posts', this.state.formData).then((res) => {
            alert('new Post created');
        });
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

    render() {
        return (
            <Container maxWidth="sm">
                <Button
                    style={{ float: 'right' }}
                    variant="outlined"
                    size="large"
                    color="primary"
                    name="create new post"
                    onClick={() => {
                        this.setState({ isFormOpen: !this.state.isFormOpen });
                    }}
                >
                    create new post
                </Button>
                {this.state.isFormOpen ? (
                    <form autoComplete="off">
                        <Grid container>
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <Field type="text" name="title" placeholder="title" component={renderTextField} label="Title" onChange={(e) => this.inputChangeHandler(e, 'formData')} />
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <Field type="text" name="body" placeholder="body" component={renderTextField} label="Body" onChange={(e) => this.inputChangeHandler(e, 'formData')} />
                            </Grid>

                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <Button style={{ float: 'right' }} variant="outlined" size="small" color="primary" name="save" onClick={this.savePost}>
                                    save
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                ) : (
                    <></>
                )}

                {console.group(this.state)}
                {this.state.posts.map((post) => {
                    return <li key={post.id}>{post.title}</li>;
                })}
                {/* <form onSubmit={this.submit} autoComplete="on">
                    <Grid container>
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                            <Field type="text" name="firstName" placeholder="FirstName" component={renderTextField} label="First Name" />
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                            <Field type="text" name="lastName" placeholder="LastName" component={renderTextField} label="Last Name" />
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                            <Field type="radio" name="gender" component={radioButton} label="Gender" placeholder="Gender" />
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                            <Field type="email" name="email" placeholder="E-mail" component={renderTextField} label="E-mail" />
                        </Grid>

                        <Grid item xs={6} sm={6} md={6} lg={6}>
                            <Field type="number" name="Age" placeholder="Age" component={renderTextField} label="Age" />
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                            <Field type="password" name="password" placeholder="Password" component={renderTextField} label="Password" />
                        </Grid>

                        <ParentsDetails />

                        <Address />

                        <Habits />
                        <Grid item xs={6} sm={6} md={6} lg={12}>
                            <Button variant="outlined" size="large" color="primary" type="submit" name="submit">
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form> */}
            </Container>
        );
    }
}

FormWithreduxForm = reduxForm({
    // a unique name for the form
    form: 'PersonalDetails',
    validate,
})(FormWithreduxForm);

export default FormWithreduxForm;

// const mapStateToProps = (state) => {
//     return state;
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         parentFormOnchange: (payload) => dispatch(formInputActionCreator(payload)),
//         childFormOnchange: (payload) => dispatch(formInputActionCreator_2(payload)),
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(FormWithStore);
