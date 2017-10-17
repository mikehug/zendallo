import React from 'react';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { Form, Field } from 'formik';

const styles = () => ({
  root: {
    margin: 10,
    width: 200,
  },
  formStyle: {
    padding: 10,
  },
});

const renderTextField = ({ field, form: { touched, errors }, ...props }) =>
  (<TextField
    label={(touched[field.name] && errors[field.name]) ? errors[field.name] : ''}
    error={!!((touched[field.name] && errors[field.name]))}
    {...field}
    {...props}
  />);

const SignInForm = (props) => {
  const { isSubmitting, isValid, classes } = props;
  return (
    <Form className={classes.root}>
      <Typography type="title" color="secondary" >Sign In</Typography>
      <div className={classes.formStyle}>
        <div>
          <Field name="email" type="email" component={renderTextField} placeholder="Email" />
        </div>
        <div>
          <Field name="password" type="password" component={renderTextField} />
        </div>
        <Grid container direction="row-reverse" >
          <Grid item>
            <Button type="submit" disabled={isSubmitting || !isValid} >Submit</Button>
          </Grid>
        </Grid>
      </div>
    </Form>
  );
};

export default withStyles(styles)(SignInForm);
