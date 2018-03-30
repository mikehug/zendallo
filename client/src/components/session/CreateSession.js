import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import { withStyles } from 'material-ui/styles';
import { Formik, Form, Field } from 'formik';
import Grid from 'material-ui/Grid';
import { FormGroup } from 'material-ui/Form';
import RenderTextField from '../utils/RenderTextField';

const styles = theme => ({
  dialog: {
    [theme.breakpoints.up('lg')]: {
      marginLeft: 120,
      marginTop: -30,
    },
  },
  dialogContent: {
    width: 300,
    marginBottom: 10,
  },
  dialogTitle: {
    paddingBottom: 10,
    paddingTop: 18,
  },
});

class CreateSession extends React.Component {
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
        <Dialog open={this.state.open} onClose={this.handleRequestClose} className={this.props.classes.dialog}>
          <DialogTitle>Create Session</DialogTitle>
          <Formik
            initialValues={{ name: '' }}
            validate={this.handleValidate}
            onSubmit={this.handleSubmit}
            render={props => (
              <Form>
                <DialogContent className={this.props.classes.dialogContent}>
                  {/* <DialogContentText>New session details</DialogContentText> */}
                  <FormGroup>
                    <Field
                      autoFocus
                      margin="dense"
                      name="name"
                      placeholder="Title"
                      variant="text"
                      component={RenderTextField}
                    />
                    {/* <Field
                      margin="dense"
                      name="purpose"
                      placeholder="Purpose"
                      variant="text"
                      component={RenderTextField}
                    /> */}
                    <Field
                      margin="dense"
                      multiline
                      rows="8"
                      rowsMax="15"
                      name="agenda"
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

export default withStyles(styles)(CreateSession);
