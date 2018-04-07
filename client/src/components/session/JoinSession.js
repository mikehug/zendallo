import React from 'react';
import { Formik, Form, Field } from 'formik';
import { withStyles } from 'material-ui/styles';
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
};

const handleValidate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Name required';
  }
  return errors;
};

const JoinSession = ({
  id, handleSubmit, classes, name,
}) => (
  <Paper className={classes.root} >
    <Typography variant="title">{name} </Typography>

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
            placeholder="Display name"
            variant="text"
            component={RenderTextField}
          />
          <Button type="submit" disabled={props.isSubmitting && props.isValid} color="primary">
                    Join
          </Button>
        </Form>
            )}
    />
  </Paper>
);

export default withStyles(styles)(JoinSession);
