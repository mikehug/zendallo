import React from 'react';
import Button from 'material-ui/Button';
import { Formik, Form, Field } from 'formik';
import RenderTextField from '../utils/RenderTextField';

export default class AddMember extends React.Component {
  handleSubmit = (values, props) => {
    props.setSubmitting(true);
    const { members } = this.props.team;
    members.push({ email: values.email });
    this.props.handleAddMember(this.props.team._id, members);
    props.resetForm();
  }

  handleValidate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (this.props.team.members && this.props.team.members.find(member => member.email === values.email)) {
      errors.email = 'Email already exists';
    }
    return errors;
  }

  render() {
    return (
      <div>
        <Formik
          initialValues={{ email: '' }}
          validate={this.handleValidate}
          onSubmit={this.handleSubmit}
          render={props => (
            <Form>
              <Field
                margin="dense"
                name="email"
                placeholder="Email"
                type="text"
                component={RenderTextField}
              />
              <Button type="submit" disabled={props.isSubmitting && props.isValid} color="primary">
                    Add
              </Button>
            </Form>
            )}
        />
      </div>
    );
  }
}
