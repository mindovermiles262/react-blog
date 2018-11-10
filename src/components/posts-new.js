import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
  renderField(field) {
    // destructure field parameter to use 'touched' instead of field.meta.touched
    const { meta: { touched, error } } = field;
    const className = `form-control ${ touched && error ? 'is-invalid' : '' }`

    return (
      <div className="form-group">
        <label>{ field.formLabel }</label>
        <input 
          className={className}
          type="text"
          {...field.input}
        />
        <div className="invalid-feedback">
          {touched ? error : '' }
        </div>
      </div>
    )
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/'); // Naviagates back to '/'
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          formLabel="Title"
          name="title"
          component={this.renderField}
        />
        <Field 
          formLabel="Author"
          name="author"
          component={this.renderField}
        />
        <Field 
          formLabel="Post Content"
          name="body"
          component={this.renderField}
        />
        <Field 
          formLabel="Categories"
          name="categories"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    )
  }
}

function validateFormFields(values) { // values => { title: 'asdf', categories: 'asdf', content: 'asdf' }
  // if errors object is empty, redux form is OK to submit
  const errors = {};

  if (!values.title) {
    errors.title = "* required field";
  }
  if (!values.author) {
    errors.author = "* required field";
  }
  if (!values.body) {
    errors.body = "* required field";
  }
  
  return errors;
}

export default reduxForm({
  validate: validateFormFields,
  form: 'PostsNewForm'
})(
  connect(null,{ createPost })(PostsNew)
);
