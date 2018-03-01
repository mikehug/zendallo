import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import { Formik, Form, Field } from 'formik';
import Grid from 'material-ui/Grid';
import { FormGroup } from 'material-ui/Form';
import RenderTextField from '../utils/RenderTextField';

export default class CreateSession extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  handleValidate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Name required';
    }
    if (this.props.data.find(session => session.name === values.name)) {
      errors.name = 'Name already exists';
    }
    return errors;
  };

  handleSubmit = (values, props) => {
    props.setSubmitting(true);
    this.props.handleCreate(values);
    this.handleRequestClose();
  };

  render() {
    return (
      <Grid style={{ paddingTop: '10px' }}>
        <Button onClick={this.handleClickOpen} color="default">
          Create Session
        </Button>
        <Dialog open={this.state.open} onClose={this.handleRequestClose}>
          <DialogTitle>Create Session</DialogTitle>
          <Formik
            initialValues={{ name: '' }}
            validate={this.handleValidate}
            onSubmit={this.handleSubmit}
            render={props => (
              <Form>
                <DialogContent>
                  {/* <DialogContentText>New session details</DialogContentText> */}
                  <FormGroup>
                    <Field
                      autoFocus
                      margin="dense"
                      name="name"
                      placeholder="Name"
                      variant="text"
                      component={RenderTextField}
                    />
                    <Field
                      margin="dense"
                      name="purpose"
                      placeholder="Purpose"
                      variant="text"
                      component={RenderTextField}
                    />
                    <Field
                      margin="dense"
                      name="Agenda"
                      placeholder="Agenda"
                      variant="multiline"
                      component={RenderTextField}
                    />
                  </FormGroup>
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleRequestClose}>Cancel</Button>
                  <Button
                    type="submit"
                    disabled={props.isSubmitting && props.isValid}
                    color="default"
                  >
                    Create
                  </Button>
                </DialogActions>
              </Form>
            )}
          />
        </Dialog>
      </Grid>
    );
  }
}
