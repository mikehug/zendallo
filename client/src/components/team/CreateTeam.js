import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import { Formik, Form, Field } from 'formik';
import RenderTextField from '../utils/RenderTextField';

export default class CreateTeam extends React.Component {
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
    if (this.props.data.find(team => team.name === values.name)) {
      errors.name = 'Name already exists';
    }
    return errors;
  }

  handleSubmit = (values, props) => {
    props.setSubmitting(true);
    this.props.handleCreate(values.name);
    this.handleRequestClose();
  }

  render() {
    return (
      <div style={{ paddingTop: '10px' }} >
        <Button onClick={this.handleClickOpen} color="default">
          Create Team
        </Button>
        <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
          <DialogTitle>Create Team</DialogTitle>
          <Formik
            initialValues={{ name: '' }}
            validate={this.handleValidate}
            onSubmit={this.handleSubmit}
            render={props => (
              <Form>
                <DialogContent>
                  <DialogContentText>
                    Name your new team
                  </DialogContentText>
                  <Field
                    autoFocus
                    margin="dense"
                    name="name"
                    placeholder="Name"
                    variant="text"
                    component={RenderTextField}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleRequestClose} >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={props.isSubmitting && props.isValid} color="default">
                    Create
                  </Button>
                </DialogActions>
              </Form>
            )}
          />
        </Dialog>
      </div>
    );
  }
}
