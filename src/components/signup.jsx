import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import * as actions from "../actions";
import * as validations from "../validations";

const FIELDS = {
  email: "email",
  password: "password",
  secondPassword: "secondPassword"
};
class Signup extends Component {
  handleSubmit = formValues => {
    this.props.signupUser(formValues, this.props.history);
  };

  renderInputComponent = field => {
    return (
      <div className="row justify-content-md-center">
        <fieldset className="col-md-4 form-group">
          <label className="bmd-label-floating">{field.label}</label>
          <input {...field.input} type={field.type} className="form-control" />
          {field.meta.touched &&
            field.meta.error &&
            <span className="error">{field.meta.error}</span>}
        </fieldset>
      </div>
    );
  };

  render() {
    const { handleSubmit, fields: {} } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleSubmit)}>
        <div className="row justify-content-md-center">
          <h1>Inscription</h1>
        </div>
        <Field
          name={FIELDS.email}
          component={this.renderInputComponent}
          type="text"
          label="email"
        />
        <Field
          name={FIELDS.password}
          component={this.renderInputComponent}
          type="password"
          label="Mot de passe"
        />
        <Field
          name={FIELDS.secondPassword}
          component={this.renderInputComponent}
          type="password"
          label="Mot de passe (répétez)"
        />
        <div className="row justify-content-md-center">
          <button type="submit" className="btn btn-primary btn-raised">
            Inscription
          </button>
        </div>
      </form>
    );
  }
}

function validate(formValues) {
  const errors = {};
  errors.email = validations.validateEmail(formValues.email);
  errors.password = validations.validateNotEmpty(formValues.password);
  errors.secondPassword = validations.validateEqual(
    formValues.password,
    formValues.secondPassword
  );
  return errors;
}

const signupForm = reduxForm({
  form: "SignupForm",
  fields: Object.keys(FIELDS),
  validate
})(Signup);

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, actions)(signupForm);
