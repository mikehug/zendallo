import React from 'react';
import { Formik, Form, Field } from 'formik';
import { withStyles } from 'material-ui/styles';
import { FormControlLabel } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import RenderTextField from '../utils/RenderTextField';

const styles = {
  root: {
    minWidth: 320,
    maxWidth: 450,
    padding: 16,
    margin: 10,
  },
  checkbox: {
    paddingTop: 16,
  },
};

const RenderCheckBox = ({ field, ...props }) => {
  if (field.value) {
    field.value = field.value.toString();
  }
  return (
    <FormControlLabel
      control={
        <Checkbox
          color="default"
          {...field}
          {...props}
        />
      }
      label="Share profile detail"
    />
  );
};

const handleValidate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Name required';
  }
  return errors;
};

const JoinSession = ({
  id, handleSubmit, classes, name, user,
}) => (
  <Paper className={classes.root} >
    <Typography variant="title" gutterBottom >{name} </Typography>

    <Formik
      initialValues={{ name: '', isProfileVisible: true }}
      validate={handleValidate}
      onSubmit={handleSubmit}
      id={id}
      render={props => (
        <Form>
          <Field
            autoFocus
            margin="dense"
            name="name"
            placeholder="Display name"
            variant="text"
            component={RenderTextField}
          />
          <div className={classes.checkbox} >

            <Field
              name="isProfileVisible"
              defaultChecked
              component={RenderCheckBox}
            />

          </div>

          <Button type="submit" disabled={props.isSubmitting && props.isValid} color="primary">
                    Join
          </Button>
        </Form>
            )}
    />
  </Paper>
);

export default withStyles(styles)(JoinSession);
