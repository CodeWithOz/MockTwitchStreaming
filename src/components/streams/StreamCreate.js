import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends Component {
  renderInput({ input }) {
    return <input {...input} />;
  }

  render() {
    return (
      <form>
        <Field name="title" component={this.renderInput} />
        <Field name="description" component={this.renderInput} />
      </form>
    );
  }
}

const WrappedFormComponent = reduxForm({
  form: 'StreamCreate'
})(StreamCreate);

export default props => <WrappedFormComponent {...props} />;
