import React from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import { Formik, Form, Field } from 'formik';
import { FormGroup } from 'material-ui/Form';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';
import RenderTextField from '../utils/RenderTextField';
import ProfileResult from '../resources/components/ProfileResult';
import AppService from '../../AppService';
import { getUser } from '../authentication/Auth';

const users = AppService.service('users');
let user = {};

const styles = {
  root: {
    minWidth: 350,
    marginTop: 16,
    marginRight: 12,
    marginLeft: 4,
  },
  title: {
    paddingTop: 16,
  },
  form: {
    maxWidth: 300,
  },
  quizButton: {
    padding: 24,
    width: 320,
  },
};

class Profile extends React.Component {
  state = {
    user: {},
    saveEnable: false,
  };

  componentWillMount() {
    // console.log(user);
    user = AppService.get('user');
    this.setState({ user });
  }

  handleValidate = (values) => {
    const errors = {};
    this.setState({ saveEnable: true });
    // if (!values.name) {
    //   errors.name = 'Name required';
    // }
    // if (this.props.data.find(session => session.name === values.name)) {
    //   errors.name = 'Name already exists';
    // }
    return errors;
  };

  handleSubmit = (values, props) => {
    props.setSubmitting(true);
    users.patch(user._id, values);
  };
  render() {
    const { classes } = this.props;
    return (
      <Grid className={classes.root}>
        <Paper>
          <Typography variant="title" className={classes.title} >
          My Details
          </Typography>
          <Formik
            initialValues={user ? {
              name: user.name,
              company: user.company,
              role: user.role,
              interests: user.interests,
              } : {}}
            validate={this.handleValidate}
            onSubmit={this.handleSubmit}
            render={props => (
              <Form className={classes.form} >
                <FormGroup>
                  <Field
                    autoFocus
                    margin="dense"
                    name="name"
                    label="Name"
                    variant="text"
                    component={RenderTextField}
                  />
                  <Field
                    margin="dense"
                    name="company"
                    label="Company"
                    variant="text"
                    component={RenderTextField}
                  />
                  <Field
                    margin="dense"
                    name="role"
                    label="Role"
                    variant="text"
                    component={RenderTextField}
                  />
                  <Field
                    margin="dense"
                    multiline
                    rows="5"
                    rowsMax="15"
                    name="interests"
                    label="Interests"
                    variant="multiline"
                    component={RenderTextField}
                  />
                </FormGroup>
                <Button
                  type="submit"
                  disabled={props.isSubmitting || !this.state.saveEnable}
                  color="default"
                >
                    Save
                </Button>
              </Form>
              )}
          />
          {user.profileResult ? (
            <ProfileResult result={user.profileResult.result} />
          ) : (
            <div className={classes.quizButton} >
              <Typography variant="subheading" gutterBottom color="textSecondary">
              Take our profile quiz!
              </Typography>
              <Button component={Link} color="secondary" to="/resources/getting-started">
                  GO
              </Button>

            </div>
          )}
        </Paper>
      </Grid>
    );
  }
}

export default withStyles(styles)(Profile);
