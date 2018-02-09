import React from 'react';
import { Formik, Form, Field } from 'formik';
import Button from 'material-ui/Button';
import RenderTextField from '../utils/RenderTextField';

const handleValidate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Name required';
  }
  return errors;
};

const JoinSession = ({ id, handleSubmit }) => (
  <div>
    <Formik
      initialValues={{ name: '' }}
      validate={handleValidate}
      onSubmit={handleSubmit}
      id={id}
      render={props => (
        <Form>
          <Field
            autoFocus
            margin="dense"
            name="name"
            placeholder="Participant name"
            variant="text"
            component={RenderTextField}
          />
          <Button type="submit" disabled={props.isSubmitting && props.isValid} color="primary">
                    Join
          </Button>
        </Form>
            )}
    />
  </div>
);

export default JoinSession;
