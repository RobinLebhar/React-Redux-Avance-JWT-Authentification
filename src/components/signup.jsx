import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import * as actions from '../actions'
import * as validations from "../validations"

const FIELDS = { email: 'email', password: 'password', secondPassword: 'secondPassword' }
class Signup extends Component {

    handleSubmit = (credential) => {
        this.props.signupUser(credential, this.props.history)
    }

    renderField = (field) => {
        return (
            <div className="row justify-content-md-center">
                <fieldset className="col-md-4 form-group">
                    <label className="bmd-label-floating">{field.label}</label>
                    <input {...field.input} type={field.type} className="form-control" />
                    {field.meta.touched && field.meta.error && <span className="error">{field.meta.error}</span>}
                </fieldset>
            </div>
        )
    }

    render() {

        return (
            <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                <div className="row justify-content-md-center">
                    <h1>Inscription</h1>
                </div>
                <Field
                    name={FIELDS.email}
                    component={this.renderField}
                    type='text'
                    label='Email'

                />
                <Field
                    name={FIELDS.password}
                    component={this.renderField}
                    type='password'
                    label='Mot de passe'
                />
                <Field
                    name={FIELDS.secondPassword}
                    component={this.renderField}
                    type='password'
                    label='Mot de passe (répétez)'
                />

                <div className="row justify-content-md-center">
                    <button type="submit" className="btn btn-primary btn-raised" >Inscription</button>
                </div>
            </form>
        )
    }
}

function validate(formProps) {
    const errors = {};
    errors.email = validations.validateEmail(formProps.email);
    errors.password = validations.validateNotEmpty(formProps.password)
    errors.secondPassword = validations.validateEqual(formProps.password, formProps.secondPassword)
    return errors;
}
const SignupForm = reduxForm({
    form: 'SignupForm',
    fields: Object.keys(FIELDS),
    validate
})(Signup);


export default connect(null, actions)(SignupForm)
