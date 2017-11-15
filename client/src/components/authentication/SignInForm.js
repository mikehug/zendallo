import React from 'react';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { Form, Field } from 'formik';
import Loader from 'react-loader';
import RenderTextField from '../utils/RenderTextField';

const styles = () => ({
  root: {
    margin: 10,
    width: 200,
  },
  formStyle: {
    padding: 10,
  },
});

const SignInForm = (props) => {
  const { isSubmitting, isValid, classes } = props;
  return (
    <Loader loaded={!isSubmitting} >
      <Form className={classes.root}>
        <Typography type="title" color="secondary" >Sign In</Typography>
        <div className={classes.formStyle}>
          <div>
            <Field autoFocus name="email" type="email" component={RenderTextField} placeholder="Email" />
          </div>
          <div>
            <Field name="password" type="password" component={RenderTextField} placeholder="Password" />
          </div>
          <Grid container direction="row-reverse" >
            <Grid item>
              <Button type="submit" disabled={isSubmitting || !isValid} >Submit</Button>
            </Grid>
          </Grid>
        </div>
      </Form>
    </Loader>
  );
};

export default withStyles(styles)(SignInForm);
